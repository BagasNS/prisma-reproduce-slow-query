require('dotenv').config();
const { prisma } = require('./helper/prisma');

(async () => {
    const sleepTime = process.env.SIMULATE_SLEEP_EACH_INTERATION || 3000 // in ms
    const pageLength = process.env.SIMULATE_PAGE || 10
    console.log(`SIMULATE GET ${pageLength} PAGE, WITH SLEEP ${sleepTime}ms EVERY ITERATION\n`)

    for (let i = 0; i < 10; i++) {
        console.log(`=== ITERATION ${i + 1} START ===`)
        console.time('PROCESS TIME')
        let limit = 10;
        let page = i + 1;
        console.time('GET PAGINATED DATA')
        await getDukungan({ limit, page })
        console.timeEnd('GET PAGINATED DATA')

        console.time('GET COUNT ALL DATA')
        await getTotalDukungan({ nama: "" });
        console.timeEnd('GET COUNT ALL DATA')
        console.timeEnd('PROCESS TIME')
        console.log(`=== ITERATION ${i + 1} END ===\n`)
        await sleep(sleepTime);
    }

    console.log(`SIMULATION COMPLETE`)
})()

async function getTotalDukungan({ nama = "", id_calon }) {

    let total_data = await prisma.dukungan.count({
        where: {
            pemilih: {
                account: {
                    full_name: {
                        contains: nama,
                        mode: 'insensitive'
                    }
                }
            },
            id_calon
        }
    })

    return total_data;
}

async function getDukungan({ nama = "", limit = 10, page = 1, id_calon }) {

    let dukungan = await prisma.dukungan.findMany({
        where: {
            pemilih: {
                account: {
                    full_name: {
                        contains: nama,
                        mode: 'insensitive'
                    }
                }
            },
            id_calon: id_calon,
        },
        select: {
            pemilih: {
                select: {
                    id_pemilih: true,
                    account: {
                        select: {
                            full_name: true
                        }
                    }
                }
            },
            surveyor: {
                select: {
                    id_surveyor: true,
                    account: {
                        select: {
                            full_name: true
                        }
                    }
                }
            },
            created_at: true
        },
        skip: limit * (page - 1),
        take: limit
    });

    return dukungan;
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}