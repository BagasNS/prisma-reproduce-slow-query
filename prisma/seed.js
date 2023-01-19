require('dotenv').config();
const Spinnies = require('spinnies');
const { faker } = require('@faker-js/faker/locale/id_ID');

const { prisma } = require('../helper/prisma');
const spinnies = new Spinnies({
    spinner: {
        interval: 1
    }
});


(async () => {
    const tag = '[MAIN]';
    spinnies.add(tag, { text: `${tag} => DELETING EXISTING DATA` });

    try {
        await prisma.dukungan.deleteMany();
        await Promise.all([
            prisma.surveyor.deleteMany(),
            prisma.pemilih.deleteMany(),
            prisma.calon.deleteMany(),
        ]);
        await prisma.accounts.deleteMany()
        spinnies.succeed(tag, { text: `${tag} => EXISTING DATA DELETED` });

        await Promise.all([
            insertSurveyor(),
            insertCalon(),
            insertPemilih(),
        ]);

        await insertDukungan();

    } catch (e) {
        spinnies.stopAll();
        console.error(e);
        return process.exit(1)
    }
})();


async function insertDukungan() {
    const tag = '[DUKUNGAN]'

    spinnies.add(tag, { text: `${tag} => GET ALL ID PEMILIH` });
    let pemilihs = await prisma.pemilih.findMany({
        select: {
            id_pemilih: true
        }
    });

    spinnies.update(tag, { text: `${tag} => GET ALL ID CALON` });
    let calon = await prisma.calon.findMany({
        select: {
            id_calon: true
        }
    });

    spinnies.update(tag, { text: `${tag} => GET ALL ID SURVEYOR` });
    let surveyors = await prisma.surveyor.findMany({
        select: {
            id_surveyor: true
        }
    });

    spinnies.update(tag, { text: `${tag} => GENERATE DATA` });
    let generated = [];
    for (let pemilih of pemilihs) {
        // INSERT DUKUNGAN 4 TIMES FOLLOWING LEVEL DUKUNGAN
        let enum_level_dukungan = ['A', 'B', 'C', 'D']
        for (let level_dukungan of enum_level_dukungan) {
            let random_calon = calon[Math.floor(Math.random() * calon.length)];
            let random_surveyor = surveyors[Math.floor(Math.random() * surveyors.length)];

            let _obj = {
                id_calon: random_calon.id_calon,
                ids_surveyor: random_surveyor.id_surveyor,
                id_pemilih: pemilih.id_pemilih,
                level_dukungan
            }

            generated.push(_obj)
        }
    }

    const DB_POOL = parseInt(process.env.DB_CONNECTION_LIMIT) || 1;
    spinnies.update(tag, { text: `${tag} => SPLITING JOB TO ${DB_POOL} WORKER` });

    // SPLIT JOB
    const jobs = [];
    let splitting_task = 0

    while (splitting_task < generated.length) {
        for (let i = 0; i < DB_POOL; i++) {
            if (!generated[splitting_task]) {
                continue;
            }

            if (!jobs[i]) {
                jobs[i] = [generated[splitting_task]]
            } else {
                jobs[i].push(generated[splitting_task]);
            }
            splitting_task++
        }
    }

    spinnies.update(`${tag}`, { text: `${tag} => Waiting Process ${DB_POOL} Worker` });
    let worker = [];
    jobs.forEach((task, index) => {
        worker.push(async () => {
            let progress = 0;
            spinnies.add(tag + `[WORKER-${index}]`, { text: `${tag}[WORKER-${index + 1}] => Processing Data...` });
            for (let item of task) {
                await prisma.dukungan.create({
                    data: {
                        pemilih: {
                            connect: {
                                id_pemilih: item.id_pemilih
                            }
                        },
                        calon: {
                            connect: {
                                id_calon: item.id_calon
                            }
                        },
                        surveyor: {
                            connect: {
                                id_surveyor: item.ids_surveyor
                            }
                        },
                        level_dukungan: item.level_dukungan
                    }
                });

                progress++;
                spinnies.update(tag + `[WORKER-${index}]`, { text: `${tag}[WORKER-${index + 1}] => Data Processed ${progress}/${task.length}` });
            }
            spinnies.succeed(tag + `[WORKER-${index}]`);
        })
    });

    await Promise.all(worker.map(x => x?.()))
    spinnies.succeed(`${tag}`, { text: `${tag} => Completed` });
}

async function insertCalon() {
    const tag = '[CALON]';
    spinnies.add(tag, { text: `${tag} => GENERATING DATA` });
    let calons = generateFakeUser(20);

    spinnies.update(tag, { text: `${tag} => INSERTING DATA` });
    let progress = 0;
    for (let calon of calons) {
        await prisma.calon.create({
            data: {
                account: {
                    create: {
                        full_name: calon.full_name
                    }
                }
            }
        })
        progress++;
        spinnies.update(tag, { text: `${tag} => INSERTING DATA ${progress}/${calons.length}` });
    }
    spinnies.succeed(tag);
}

async function insertPemilih() {
    const tag = '[PEMILIH]';
    spinnies.add(tag, { text: `${tag} => GENERATING DATA` });
    let pemilihs = generateFakeUser(100000);

    const DB_POOL = parseInt(process.env.DB_CONNECTION_LIMIT) || 1;
    spinnies.update(tag, { text: `${tag} => SPLITING JOB TO ${DB_POOL} WORKER` });

    // SPLIT JOB
    const jobs = [];
    let splitting_task = 0

    while (splitting_task < pemilihs.length) {
        for (let i = 0; i < DB_POOL; i++) {
            if (!pemilihs[splitting_task]) {
                continue;
            }

            if (!jobs[i]) {
                jobs[i] = [pemilihs[splitting_task]]
            } else {
                jobs[i].push(pemilihs[splitting_task]);
            }
            splitting_task++
        }
    }

    spinnies.update(`${tag}`, { text: `${tag} => Waiting Process ${DB_POOL} Worker` });
    let worker = [];
    jobs.forEach((task, index) => {
        worker.push(async () => {
            let progress = 0;
            spinnies.add(tag + `[WORKER-${index}]`, { text: `${tag}[WORKER-${index + 1}] => Processing Data...` });
            for (let item of task) {
                await prisma.pemilih.create({
                    data: {
                        account: {
                            create: {
                                full_name: item.full_name
                            }
                        }
                    }
                });

                progress++;
                spinnies.update(tag + `[WORKER-${index}]`, { text: `${tag}[WORKER-${index + 1}] => Data Processed ${progress}/${task.length}` });
            }
            spinnies.succeed(tag + `[WORKER-${index}]`);
        })
    });

    await Promise.all(worker.map(x => x?.()))
    spinnies.succeed(`${tag}`, { text: `${tag} => Completed` });
}

async function insertSurveyor() {
    const tag = '[SURVEYOR]';
    spinnies.add(tag, { text: `${tag} => GENERATING DATA` });
    let surveyors = generateFakeUser(100);

    spinnies.update(tag, { text: `${tag} => INSERTING DATA` });
    let progress = 0;
    for (let surveyor of surveyors) {
        await prisma.surveyor.create({
            data: {
                account: {
                    create: {
                        full_name: surveyor.full_name
                    }
                }
            }
        });
        progress++;
        spinnies.update(tag, { text: `${tag} => INSERTING DATA ${progress}/${surveyors.length}` });
    }
    spinnies.succeed(tag);
}

function generateFakeUser(length = 100) {
    let generated = [];
    for (let i = 0; i < length; i++) {
        let full_name = faker.name.fullName();
        let _obj = {
            full_name
        }

        generated.push(_obj)
    }

    return generated;
}