
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model accounts
 * 
 */
export type accounts = {
  id_account: string
  full_name: string
}

/**
 * Model calon
 * 
 */
export type calon = {
  id_calon: string
  id_account: string
}

/**
 * Model pemilih
 * 
 */
export type pemilih = {
  id_pemilih: string
  id_account: string
}

/**
 * Model surveyor
 * 
 */
export type surveyor = {
  id_surveyor: string
  id_account: string
}

/**
 * Model dukungan
 * 
 */
export type dukungan = {
  id_dukungan: string
  id_pemilih: string
  id_surveyor: string
  level_dukungan: LevelDukungan
  id_calon: string
  created_at: Date
  updated_at: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const LevelDukungan: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
};

export type LevelDukungan = (typeof LevelDukungan)[keyof typeof LevelDukungan]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<GlobalReject>;

  /**
   * `prisma.calon`: Exposes CRUD operations for the **calon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calons
    * const calons = await prisma.calon.findMany()
    * ```
    */
  get calon(): Prisma.calonDelegate<GlobalReject>;

  /**
   * `prisma.pemilih`: Exposes CRUD operations for the **pemilih** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pemilihs
    * const pemilihs = await prisma.pemilih.findMany()
    * ```
    */
  get pemilih(): Prisma.pemilihDelegate<GlobalReject>;

  /**
   * `prisma.surveyor`: Exposes CRUD operations for the **surveyor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveyors
    * const surveyors = await prisma.surveyor.findMany()
    * ```
    */
  get surveyor(): Prisma.surveyorDelegate<GlobalReject>;

  /**
   * `prisma.dukungan`: Exposes CRUD operations for the **dukungan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dukungans
    * const dukungans = await prisma.dukungan.findMany()
    * ```
    */
  get dukungan(): Prisma.dukunganDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    accounts: 'accounts',
    calon: 'calon',
    pemilih: 'pemilih',
    surveyor: 'surveyor',
    dukungan: 'dukungan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CalonCountOutputType
   */


  export type CalonCountOutputType = {
    dukungan: number
  }

  export type CalonCountOutputTypeSelect = {
    dukungan?: boolean | CalonCountOutputTypeCountDukunganArgs
  }

  export type CalonCountOutputTypeGetPayload<S extends boolean | null | undefined | CalonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CalonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CalonCountOutputTypeArgs)
    ? CalonCountOutputType 
    : S extends { select: any } & (CalonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CalonCountOutputType ? CalonCountOutputType[P] : never
  } 
      : CalonCountOutputType




  // Custom InputTypes

  /**
   * CalonCountOutputType without action
   */
  export type CalonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CalonCountOutputType
     */
    select?: CalonCountOutputTypeSelect | null
  }


  /**
   * CalonCountOutputType without action
   */
  export type CalonCountOutputTypeCountDukunganArgs = {
    where?: dukunganWhereInput
  }



  /**
   * Count Type PemilihCountOutputType
   */


  export type PemilihCountOutputType = {
    dukungan: number
  }

  export type PemilihCountOutputTypeSelect = {
    dukungan?: boolean | PemilihCountOutputTypeCountDukunganArgs
  }

  export type PemilihCountOutputTypeGetPayload<S extends boolean | null | undefined | PemilihCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PemilihCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PemilihCountOutputTypeArgs)
    ? PemilihCountOutputType 
    : S extends { select: any } & (PemilihCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PemilihCountOutputType ? PemilihCountOutputType[P] : never
  } 
      : PemilihCountOutputType




  // Custom InputTypes

  /**
   * PemilihCountOutputType without action
   */
  export type PemilihCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PemilihCountOutputType
     */
    select?: PemilihCountOutputTypeSelect | null
  }


  /**
   * PemilihCountOutputType without action
   */
  export type PemilihCountOutputTypeCountDukunganArgs = {
    where?: dukunganWhereInput
  }



  /**
   * Count Type SurveyorCountOutputType
   */


  export type SurveyorCountOutputType = {
    dukungan: number
  }

  export type SurveyorCountOutputTypeSelect = {
    dukungan?: boolean | SurveyorCountOutputTypeCountDukunganArgs
  }

  export type SurveyorCountOutputTypeGetPayload<S extends boolean | null | undefined | SurveyorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SurveyorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SurveyorCountOutputTypeArgs)
    ? SurveyorCountOutputType 
    : S extends { select: any } & (SurveyorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SurveyorCountOutputType ? SurveyorCountOutputType[P] : never
  } 
      : SurveyorCountOutputType




  // Custom InputTypes

  /**
   * SurveyorCountOutputType without action
   */
  export type SurveyorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SurveyorCountOutputType
     */
    select?: SurveyorCountOutputTypeSelect | null
  }


  /**
   * SurveyorCountOutputType without action
   */
  export type SurveyorCountOutputTypeCountDukunganArgs = {
    where?: dukunganWhereInput
  }



  /**
   * Models
   */

  /**
   * Model accounts
   */


  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id_account: string | null
    full_name: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id_account: string | null
    full_name: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id_account: number
    full_name: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id_account?: true
    full_name?: true
  }

  export type AccountsMaxAggregateInputType = {
    id_account?: true
    full_name?: true
  }

  export type AccountsCountAggregateInputType = {
    id_account?: true
    full_name?: true
    _all?: true
  }

  export type AccountsAggregateArgs = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs = {
    where?: accountsWhereInput
    orderBy?: Enumerable<accountsOrderByWithAggregationInput>
    by: AccountsScalarFieldEnum[]
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }


  export type AccountsGroupByOutputType = {
    id_account: string
    full_name: string
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect = {
    id_account?: boolean
    full_name?: boolean
    calon?: boolean | calonArgs
    surveyor?: boolean | surveyorArgs
    pemilih?: boolean | pemilihArgs
  }


  export type accountsInclude = {
    calon?: boolean | calonArgs
    surveyor?: boolean | surveyorArgs
    pemilih?: boolean | pemilihArgs
  }

  export type accountsGetPayload<S extends boolean | null | undefined | accountsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? accounts :
    S extends undefined ? never :
    S extends { include: any } & (accountsArgs | accountsFindManyArgs)
    ? accounts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'calon' ? calonGetPayload<S['include'][P]> | null :
        P extends 'surveyor' ? surveyorGetPayload<S['include'][P]> | null :
        P extends 'pemilih' ? pemilihGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (accountsArgs | accountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'calon' ? calonGetPayload<S['select'][P]> | null :
        P extends 'surveyor' ? surveyorGetPayload<S['select'][P]> | null :
        P extends 'pemilih' ? pemilihGetPayload<S['select'][P]> | null :  P extends keyof accounts ? accounts[P] : never
  } 
      : accounts


  type accountsCountArgs = 
    Omit<accountsFindManyArgs, 'select' | 'include'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, accountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'accounts'> extends True ? Prisma__accountsClient<accountsGetPayload<T>> : Prisma__accountsClient<accountsGetPayload<T> | null, null>

    /**
     * Find one Accounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, accountsFindUniqueOrThrowArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, accountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'accounts'> extends True ? Prisma__accountsClient<accountsGetPayload<T>> : Prisma__accountsClient<accountsGetPayload<T> | null, null>

    /**
     * Find the first Accounts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, accountsFindFirstOrThrowArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id_account`
     * const accountsWithId_accountOnly = await prisma.accounts.findMany({ select: { id_account: true } })
     * 
    **/
    findMany<T extends accountsFindManyArgs>(
      args?: SelectSubset<T, accountsFindManyArgs>
    ): PrismaPromise<Array<accountsGetPayload<T>>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends accountsCreateArgs>(
      args: SelectSubset<T, accountsCreateArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const accounts = await prisma.accounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends accountsCreateManyArgs>(
      args?: SelectSubset<T, accountsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends accountsDeleteArgs>(
      args: SelectSubset<T, accountsDeleteArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountsUpdateArgs>(
      args: SelectSubset<T, accountsUpdateArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountsDeleteManyArgs>(
      args?: SelectSubset<T, accountsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountsUpdateManyArgs>(
      args: SelectSubset<T, accountsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends accountsUpsertArgs>(
      args: SelectSubset<T, accountsUpsertArgs>
    ): Prisma__accountsClient<accountsGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__accountsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    calon<T extends calonArgs= {}>(args?: Subset<T, calonArgs>): Prisma__calonClient<calonGetPayload<T> | Null>;

    surveyor<T extends surveyorArgs= {}>(args?: Subset<T, surveyorArgs>): Prisma__surveyorClient<surveyorGetPayload<T> | Null>;

    pemilih<T extends pemilihArgs= {}>(args?: Subset<T, pemilihArgs>): Prisma__pemilihClient<pemilihGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * accounts base type for findUnique actions
   */
  export type accountsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUnique
   */
  export interface accountsFindUniqueArgs extends accountsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }


  /**
   * accounts base type for findFirst actions
   */
  export type accountsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }

  /**
   * accounts findFirst
   */
  export interface accountsFindFirstArgs extends accountsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts findMany
   */
  export type accountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: Enumerable<accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts create
   */
  export type accountsCreateArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }


  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs = {
    /**
     * The data used to create many accounts.
     */
    data: Enumerable<accountsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * accounts update
   */
  export type accountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }


  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
  }


  /**
   * accounts upsert
   */
  export type accountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }


  /**
   * accounts delete
   */
  export type accountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }


  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
  }


  /**
   * accounts without action
   */
  export type accountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: accountsInclude | null
  }



  /**
   * Model calon
   */


  export type AggregateCalon = {
    _count: CalonCountAggregateOutputType | null
    _min: CalonMinAggregateOutputType | null
    _max: CalonMaxAggregateOutputType | null
  }

  export type CalonMinAggregateOutputType = {
    id_calon: string | null
    id_account: string | null
  }

  export type CalonMaxAggregateOutputType = {
    id_calon: string | null
    id_account: string | null
  }

  export type CalonCountAggregateOutputType = {
    id_calon: number
    id_account: number
    _all: number
  }


  export type CalonMinAggregateInputType = {
    id_calon?: true
    id_account?: true
  }

  export type CalonMaxAggregateInputType = {
    id_calon?: true
    id_account?: true
  }

  export type CalonCountAggregateInputType = {
    id_calon?: true
    id_account?: true
    _all?: true
  }

  export type CalonAggregateArgs = {
    /**
     * Filter which calon to aggregate.
     */
    where?: calonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calons to fetch.
     */
    orderBy?: Enumerable<calonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calons
    **/
    _count?: true | CalonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalonMaxAggregateInputType
  }

  export type GetCalonAggregateType<T extends CalonAggregateArgs> = {
        [P in keyof T & keyof AggregateCalon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalon[P]>
      : GetScalarType<T[P], AggregateCalon[P]>
  }




  export type CalonGroupByArgs = {
    where?: calonWhereInput
    orderBy?: Enumerable<calonOrderByWithAggregationInput>
    by: CalonScalarFieldEnum[]
    having?: calonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalonCountAggregateInputType | true
    _min?: CalonMinAggregateInputType
    _max?: CalonMaxAggregateInputType
  }


  export type CalonGroupByOutputType = {
    id_calon: string
    id_account: string
    _count: CalonCountAggregateOutputType | null
    _min: CalonMinAggregateOutputType | null
    _max: CalonMaxAggregateOutputType | null
  }

  type GetCalonGroupByPayload<T extends CalonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CalonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalonGroupByOutputType[P]>
            : GetScalarType<T[P], CalonGroupByOutputType[P]>
        }
      >
    >


  export type calonSelect = {
    id_calon?: boolean
    id_account?: boolean
    account?: boolean | accountsArgs
    dukungan?: boolean | calon$dukunganArgs
    _count?: boolean | CalonCountOutputTypeArgs
  }


  export type calonInclude = {
    account?: boolean | accountsArgs
    dukungan?: boolean | calon$dukunganArgs
    _count?: boolean | CalonCountOutputTypeArgs
  }

  export type calonGetPayload<S extends boolean | null | undefined | calonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? calon :
    S extends undefined ? never :
    S extends { include: any } & (calonArgs | calonFindManyArgs)
    ? calon  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'account' ? accountsGetPayload<S['include'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['include'][P]>>  :
        P extends '_count' ? CalonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (calonArgs | calonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'account' ? accountsGetPayload<S['select'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['select'][P]>>  :
        P extends '_count' ? CalonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof calon ? calon[P] : never
  } 
      : calon


  type calonCountArgs = 
    Omit<calonFindManyArgs, 'select' | 'include'> & {
      select?: CalonCountAggregateInputType | true
    }

  export interface calonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Calon that matches the filter.
     * @param {calonFindUniqueArgs} args - Arguments to find a Calon
     * @example
     * // Get one Calon
     * const calon = await prisma.calon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends calonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, calonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'calon'> extends True ? Prisma__calonClient<calonGetPayload<T>> : Prisma__calonClient<calonGetPayload<T> | null, null>

    /**
     * Find one Calon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {calonFindUniqueOrThrowArgs} args - Arguments to find a Calon
     * @example
     * // Get one Calon
     * const calon = await prisma.calon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends calonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, calonFindUniqueOrThrowArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Find the first Calon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calonFindFirstArgs} args - Arguments to find a Calon
     * @example
     * // Get one Calon
     * const calon = await prisma.calon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends calonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, calonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'calon'> extends True ? Prisma__calonClient<calonGetPayload<T>> : Prisma__calonClient<calonGetPayload<T> | null, null>

    /**
     * Find the first Calon that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calonFindFirstOrThrowArgs} args - Arguments to find a Calon
     * @example
     * // Get one Calon
     * const calon = await prisma.calon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends calonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, calonFindFirstOrThrowArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Find zero or more Calons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calons
     * const calons = await prisma.calon.findMany()
     * 
     * // Get first 10 Calons
     * const calons = await prisma.calon.findMany({ take: 10 })
     * 
     * // Only select the `id_calon`
     * const calonWithId_calonOnly = await prisma.calon.findMany({ select: { id_calon: true } })
     * 
    **/
    findMany<T extends calonFindManyArgs>(
      args?: SelectSubset<T, calonFindManyArgs>
    ): PrismaPromise<Array<calonGetPayload<T>>>

    /**
     * Create a Calon.
     * @param {calonCreateArgs} args - Arguments to create a Calon.
     * @example
     * // Create one Calon
     * const Calon = await prisma.calon.create({
     *   data: {
     *     // ... data to create a Calon
     *   }
     * })
     * 
    **/
    create<T extends calonCreateArgs>(
      args: SelectSubset<T, calonCreateArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Create many Calons.
     *     @param {calonCreateManyArgs} args - Arguments to create many Calons.
     *     @example
     *     // Create many Calons
     *     const calon = await prisma.calon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends calonCreateManyArgs>(
      args?: SelectSubset<T, calonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Calon.
     * @param {calonDeleteArgs} args - Arguments to delete one Calon.
     * @example
     * // Delete one Calon
     * const Calon = await prisma.calon.delete({
     *   where: {
     *     // ... filter to delete one Calon
     *   }
     * })
     * 
    **/
    delete<T extends calonDeleteArgs>(
      args: SelectSubset<T, calonDeleteArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Update one Calon.
     * @param {calonUpdateArgs} args - Arguments to update one Calon.
     * @example
     * // Update one Calon
     * const calon = await prisma.calon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends calonUpdateArgs>(
      args: SelectSubset<T, calonUpdateArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Delete zero or more Calons.
     * @param {calonDeleteManyArgs} args - Arguments to filter Calons to delete.
     * @example
     * // Delete a few Calons
     * const { count } = await prisma.calon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends calonDeleteManyArgs>(
      args?: SelectSubset<T, calonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calons
     * const calon = await prisma.calon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends calonUpdateManyArgs>(
      args: SelectSubset<T, calonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Calon.
     * @param {calonUpsertArgs} args - Arguments to update or create a Calon.
     * @example
     * // Update or create a Calon
     * const calon = await prisma.calon.upsert({
     *   create: {
     *     // ... data to create a Calon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calon we want to update
     *   }
     * })
    **/
    upsert<T extends calonUpsertArgs>(
      args: SelectSubset<T, calonUpsertArgs>
    ): Prisma__calonClient<calonGetPayload<T>>

    /**
     * Count the number of Calons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calonCountArgs} args - Arguments to filter Calons to count.
     * @example
     * // Count the number of Calons
     * const count = await prisma.calon.count({
     *   where: {
     *     // ... the filter for the Calons we want to count
     *   }
     * })
    **/
    count<T extends calonCountArgs>(
      args?: Subset<T, calonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalonAggregateArgs>(args: Subset<T, CalonAggregateArgs>): PrismaPromise<GetCalonAggregateType<T>>

    /**
     * Group by Calon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalonGroupByArgs['orderBy'] }
        : { orderBy?: CalonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for calon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__calonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    account<T extends accountsArgs= {}>(args?: Subset<T, accountsArgs>): Prisma__accountsClient<accountsGetPayload<T> | Null>;

    dukungan<T extends calon$dukunganArgs= {}>(args?: Subset<T, calon$dukunganArgs>): PrismaPromise<Array<dukunganGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * calon base type for findUnique actions
   */
  export type calonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter, which calon to fetch.
     */
    where: calonWhereUniqueInput
  }

  /**
   * calon findUnique
   */
  export interface calonFindUniqueArgs extends calonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * calon findUniqueOrThrow
   */
  export type calonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter, which calon to fetch.
     */
    where: calonWhereUniqueInput
  }


  /**
   * calon base type for findFirst actions
   */
  export type calonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter, which calon to fetch.
     */
    where?: calonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calons to fetch.
     */
    orderBy?: Enumerable<calonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calons.
     */
    cursor?: calonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calons.
     */
    distinct?: Enumerable<CalonScalarFieldEnum>
  }

  /**
   * calon findFirst
   */
  export interface calonFindFirstArgs extends calonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * calon findFirstOrThrow
   */
  export type calonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter, which calon to fetch.
     */
    where?: calonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calons to fetch.
     */
    orderBy?: Enumerable<calonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calons.
     */
    cursor?: calonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calons.
     */
    distinct?: Enumerable<CalonScalarFieldEnum>
  }


  /**
   * calon findMany
   */
  export type calonFindManyArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter, which calons to fetch.
     */
    where?: calonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calons to fetch.
     */
    orderBy?: Enumerable<calonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calons.
     */
    cursor?: calonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calons.
     */
    skip?: number
    distinct?: Enumerable<CalonScalarFieldEnum>
  }


  /**
   * calon create
   */
  export type calonCreateArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * The data needed to create a calon.
     */
    data: XOR<calonCreateInput, calonUncheckedCreateInput>
  }


  /**
   * calon createMany
   */
  export type calonCreateManyArgs = {
    /**
     * The data used to create many calons.
     */
    data: Enumerable<calonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * calon update
   */
  export type calonUpdateArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * The data needed to update a calon.
     */
    data: XOR<calonUpdateInput, calonUncheckedUpdateInput>
    /**
     * Choose, which calon to update.
     */
    where: calonWhereUniqueInput
  }


  /**
   * calon updateMany
   */
  export type calonUpdateManyArgs = {
    /**
     * The data used to update calons.
     */
    data: XOR<calonUpdateManyMutationInput, calonUncheckedUpdateManyInput>
    /**
     * Filter which calons to update
     */
    where?: calonWhereInput
  }


  /**
   * calon upsert
   */
  export type calonUpsertArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * The filter to search for the calon to update in case it exists.
     */
    where: calonWhereUniqueInput
    /**
     * In case the calon found by the `where` argument doesn't exist, create a new calon with this data.
     */
    create: XOR<calonCreateInput, calonUncheckedCreateInput>
    /**
     * In case the calon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calonUpdateInput, calonUncheckedUpdateInput>
  }


  /**
   * calon delete
   */
  export type calonDeleteArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
    /**
     * Filter which calon to delete.
     */
    where: calonWhereUniqueInput
  }


  /**
   * calon deleteMany
   */
  export type calonDeleteManyArgs = {
    /**
     * Filter which calons to delete
     */
    where?: calonWhereInput
  }


  /**
   * calon.dukungan
   */
  export type calon$dukunganArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    where?: dukunganWhereInput
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    cursor?: dukunganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }


  /**
   * calon without action
   */
  export type calonArgs = {
    /**
     * Select specific fields to fetch from the calon
     */
    select?: calonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calonInclude | null
  }



  /**
   * Model pemilih
   */


  export type AggregatePemilih = {
    _count: PemilihCountAggregateOutputType | null
    _min: PemilihMinAggregateOutputType | null
    _max: PemilihMaxAggregateOutputType | null
  }

  export type PemilihMinAggregateOutputType = {
    id_pemilih: string | null
    id_account: string | null
  }

  export type PemilihMaxAggregateOutputType = {
    id_pemilih: string | null
    id_account: string | null
  }

  export type PemilihCountAggregateOutputType = {
    id_pemilih: number
    id_account: number
    _all: number
  }


  export type PemilihMinAggregateInputType = {
    id_pemilih?: true
    id_account?: true
  }

  export type PemilihMaxAggregateInputType = {
    id_pemilih?: true
    id_account?: true
  }

  export type PemilihCountAggregateInputType = {
    id_pemilih?: true
    id_account?: true
    _all?: true
  }

  export type PemilihAggregateArgs = {
    /**
     * Filter which pemilih to aggregate.
     */
    where?: pemilihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pemilihs to fetch.
     */
    orderBy?: Enumerable<pemilihOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pemilihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pemilihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pemilihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pemilihs
    **/
    _count?: true | PemilihCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PemilihMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PemilihMaxAggregateInputType
  }

  export type GetPemilihAggregateType<T extends PemilihAggregateArgs> = {
        [P in keyof T & keyof AggregatePemilih]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePemilih[P]>
      : GetScalarType<T[P], AggregatePemilih[P]>
  }




  export type PemilihGroupByArgs = {
    where?: pemilihWhereInput
    orderBy?: Enumerable<pemilihOrderByWithAggregationInput>
    by: PemilihScalarFieldEnum[]
    having?: pemilihScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PemilihCountAggregateInputType | true
    _min?: PemilihMinAggregateInputType
    _max?: PemilihMaxAggregateInputType
  }


  export type PemilihGroupByOutputType = {
    id_pemilih: string
    id_account: string
    _count: PemilihCountAggregateOutputType | null
    _min: PemilihMinAggregateOutputType | null
    _max: PemilihMaxAggregateOutputType | null
  }

  type GetPemilihGroupByPayload<T extends PemilihGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PemilihGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PemilihGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PemilihGroupByOutputType[P]>
            : GetScalarType<T[P], PemilihGroupByOutputType[P]>
        }
      >
    >


  export type pemilihSelect = {
    id_pemilih?: boolean
    id_account?: boolean
    account?: boolean | accountsArgs
    dukungan?: boolean | pemilih$dukunganArgs
    _count?: boolean | PemilihCountOutputTypeArgs
  }


  export type pemilihInclude = {
    account?: boolean | accountsArgs
    dukungan?: boolean | pemilih$dukunganArgs
    _count?: boolean | PemilihCountOutputTypeArgs
  }

  export type pemilihGetPayload<S extends boolean | null | undefined | pemilihArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pemilih :
    S extends undefined ? never :
    S extends { include: any } & (pemilihArgs | pemilihFindManyArgs)
    ? pemilih  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'account' ? accountsGetPayload<S['include'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['include'][P]>>  :
        P extends '_count' ? PemilihCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (pemilihArgs | pemilihFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'account' ? accountsGetPayload<S['select'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['select'][P]>>  :
        P extends '_count' ? PemilihCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof pemilih ? pemilih[P] : never
  } 
      : pemilih


  type pemilihCountArgs = 
    Omit<pemilihFindManyArgs, 'select' | 'include'> & {
      select?: PemilihCountAggregateInputType | true
    }

  export interface pemilihDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pemilih that matches the filter.
     * @param {pemilihFindUniqueArgs} args - Arguments to find a Pemilih
     * @example
     * // Get one Pemilih
     * const pemilih = await prisma.pemilih.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pemilihFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pemilihFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pemilih'> extends True ? Prisma__pemilihClient<pemilihGetPayload<T>> : Prisma__pemilihClient<pemilihGetPayload<T> | null, null>

    /**
     * Find one Pemilih that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pemilihFindUniqueOrThrowArgs} args - Arguments to find a Pemilih
     * @example
     * // Get one Pemilih
     * const pemilih = await prisma.pemilih.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pemilihFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pemilihFindUniqueOrThrowArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Find the first Pemilih that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pemilihFindFirstArgs} args - Arguments to find a Pemilih
     * @example
     * // Get one Pemilih
     * const pemilih = await prisma.pemilih.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pemilihFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pemilihFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pemilih'> extends True ? Prisma__pemilihClient<pemilihGetPayload<T>> : Prisma__pemilihClient<pemilihGetPayload<T> | null, null>

    /**
     * Find the first Pemilih that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pemilihFindFirstOrThrowArgs} args - Arguments to find a Pemilih
     * @example
     * // Get one Pemilih
     * const pemilih = await prisma.pemilih.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pemilihFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pemilihFindFirstOrThrowArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Find zero or more Pemilihs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pemilihFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pemilihs
     * const pemilihs = await prisma.pemilih.findMany()
     * 
     * // Get first 10 Pemilihs
     * const pemilihs = await prisma.pemilih.findMany({ take: 10 })
     * 
     * // Only select the `id_pemilih`
     * const pemilihWithId_pemilihOnly = await prisma.pemilih.findMany({ select: { id_pemilih: true } })
     * 
    **/
    findMany<T extends pemilihFindManyArgs>(
      args?: SelectSubset<T, pemilihFindManyArgs>
    ): PrismaPromise<Array<pemilihGetPayload<T>>>

    /**
     * Create a Pemilih.
     * @param {pemilihCreateArgs} args - Arguments to create a Pemilih.
     * @example
     * // Create one Pemilih
     * const Pemilih = await prisma.pemilih.create({
     *   data: {
     *     // ... data to create a Pemilih
     *   }
     * })
     * 
    **/
    create<T extends pemilihCreateArgs>(
      args: SelectSubset<T, pemilihCreateArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Create many Pemilihs.
     *     @param {pemilihCreateManyArgs} args - Arguments to create many Pemilihs.
     *     @example
     *     // Create many Pemilihs
     *     const pemilih = await prisma.pemilih.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pemilihCreateManyArgs>(
      args?: SelectSubset<T, pemilihCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pemilih.
     * @param {pemilihDeleteArgs} args - Arguments to delete one Pemilih.
     * @example
     * // Delete one Pemilih
     * const Pemilih = await prisma.pemilih.delete({
     *   where: {
     *     // ... filter to delete one Pemilih
     *   }
     * })
     * 
    **/
    delete<T extends pemilihDeleteArgs>(
      args: SelectSubset<T, pemilihDeleteArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Update one Pemilih.
     * @param {pemilihUpdateArgs} args - Arguments to update one Pemilih.
     * @example
     * // Update one Pemilih
     * const pemilih = await prisma.pemilih.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pemilihUpdateArgs>(
      args: SelectSubset<T, pemilihUpdateArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Delete zero or more Pemilihs.
     * @param {pemilihDeleteManyArgs} args - Arguments to filter Pemilihs to delete.
     * @example
     * // Delete a few Pemilihs
     * const { count } = await prisma.pemilih.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pemilihDeleteManyArgs>(
      args?: SelectSubset<T, pemilihDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pemilihs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pemilihUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pemilihs
     * const pemilih = await prisma.pemilih.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pemilihUpdateManyArgs>(
      args: SelectSubset<T, pemilihUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pemilih.
     * @param {pemilihUpsertArgs} args - Arguments to update or create a Pemilih.
     * @example
     * // Update or create a Pemilih
     * const pemilih = await prisma.pemilih.upsert({
     *   create: {
     *     // ... data to create a Pemilih
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pemilih we want to update
     *   }
     * })
    **/
    upsert<T extends pemilihUpsertArgs>(
      args: SelectSubset<T, pemilihUpsertArgs>
    ): Prisma__pemilihClient<pemilihGetPayload<T>>

    /**
     * Count the number of Pemilihs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pemilihCountArgs} args - Arguments to filter Pemilihs to count.
     * @example
     * // Count the number of Pemilihs
     * const count = await prisma.pemilih.count({
     *   where: {
     *     // ... the filter for the Pemilihs we want to count
     *   }
     * })
    **/
    count<T extends pemilihCountArgs>(
      args?: Subset<T, pemilihCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PemilihCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pemilih.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemilihAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PemilihAggregateArgs>(args: Subset<T, PemilihAggregateArgs>): PrismaPromise<GetPemilihAggregateType<T>>

    /**
     * Group by Pemilih.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemilihGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PemilihGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PemilihGroupByArgs['orderBy'] }
        : { orderBy?: PemilihGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PemilihGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPemilihGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pemilih.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pemilihClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    account<T extends accountsArgs= {}>(args?: Subset<T, accountsArgs>): Prisma__accountsClient<accountsGetPayload<T> | Null>;

    dukungan<T extends pemilih$dukunganArgs= {}>(args?: Subset<T, pemilih$dukunganArgs>): PrismaPromise<Array<dukunganGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pemilih base type for findUnique actions
   */
  export type pemilihFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter, which pemilih to fetch.
     */
    where: pemilihWhereUniqueInput
  }

  /**
   * pemilih findUnique
   */
  export interface pemilihFindUniqueArgs extends pemilihFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pemilih findUniqueOrThrow
   */
  export type pemilihFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter, which pemilih to fetch.
     */
    where: pemilihWhereUniqueInput
  }


  /**
   * pemilih base type for findFirst actions
   */
  export type pemilihFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter, which pemilih to fetch.
     */
    where?: pemilihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pemilihs to fetch.
     */
    orderBy?: Enumerable<pemilihOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pemilihs.
     */
    cursor?: pemilihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pemilihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pemilihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pemilihs.
     */
    distinct?: Enumerable<PemilihScalarFieldEnum>
  }

  /**
   * pemilih findFirst
   */
  export interface pemilihFindFirstArgs extends pemilihFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pemilih findFirstOrThrow
   */
  export type pemilihFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter, which pemilih to fetch.
     */
    where?: pemilihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pemilihs to fetch.
     */
    orderBy?: Enumerable<pemilihOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pemilihs.
     */
    cursor?: pemilihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pemilihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pemilihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pemilihs.
     */
    distinct?: Enumerable<PemilihScalarFieldEnum>
  }


  /**
   * pemilih findMany
   */
  export type pemilihFindManyArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter, which pemilihs to fetch.
     */
    where?: pemilihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pemilihs to fetch.
     */
    orderBy?: Enumerable<pemilihOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pemilihs.
     */
    cursor?: pemilihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pemilihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pemilihs.
     */
    skip?: number
    distinct?: Enumerable<PemilihScalarFieldEnum>
  }


  /**
   * pemilih create
   */
  export type pemilihCreateArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * The data needed to create a pemilih.
     */
    data: XOR<pemilihCreateInput, pemilihUncheckedCreateInput>
  }


  /**
   * pemilih createMany
   */
  export type pemilihCreateManyArgs = {
    /**
     * The data used to create many pemilihs.
     */
    data: Enumerable<pemilihCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * pemilih update
   */
  export type pemilihUpdateArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * The data needed to update a pemilih.
     */
    data: XOR<pemilihUpdateInput, pemilihUncheckedUpdateInput>
    /**
     * Choose, which pemilih to update.
     */
    where: pemilihWhereUniqueInput
  }


  /**
   * pemilih updateMany
   */
  export type pemilihUpdateManyArgs = {
    /**
     * The data used to update pemilihs.
     */
    data: XOR<pemilihUpdateManyMutationInput, pemilihUncheckedUpdateManyInput>
    /**
     * Filter which pemilihs to update
     */
    where?: pemilihWhereInput
  }


  /**
   * pemilih upsert
   */
  export type pemilihUpsertArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * The filter to search for the pemilih to update in case it exists.
     */
    where: pemilihWhereUniqueInput
    /**
     * In case the pemilih found by the `where` argument doesn't exist, create a new pemilih with this data.
     */
    create: XOR<pemilihCreateInput, pemilihUncheckedCreateInput>
    /**
     * In case the pemilih was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pemilihUpdateInput, pemilihUncheckedUpdateInput>
  }


  /**
   * pemilih delete
   */
  export type pemilihDeleteArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
    /**
     * Filter which pemilih to delete.
     */
    where: pemilihWhereUniqueInput
  }


  /**
   * pemilih deleteMany
   */
  export type pemilihDeleteManyArgs = {
    /**
     * Filter which pemilihs to delete
     */
    where?: pemilihWhereInput
  }


  /**
   * pemilih.dukungan
   */
  export type pemilih$dukunganArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    where?: dukunganWhereInput
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    cursor?: dukunganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }


  /**
   * pemilih without action
   */
  export type pemilihArgs = {
    /**
     * Select specific fields to fetch from the pemilih
     */
    select?: pemilihSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pemilihInclude | null
  }



  /**
   * Model surveyor
   */


  export type AggregateSurveyor = {
    _count: SurveyorCountAggregateOutputType | null
    _min: SurveyorMinAggregateOutputType | null
    _max: SurveyorMaxAggregateOutputType | null
  }

  export type SurveyorMinAggregateOutputType = {
    id_surveyor: string | null
    id_account: string | null
  }

  export type SurveyorMaxAggregateOutputType = {
    id_surveyor: string | null
    id_account: string | null
  }

  export type SurveyorCountAggregateOutputType = {
    id_surveyor: number
    id_account: number
    _all: number
  }


  export type SurveyorMinAggregateInputType = {
    id_surveyor?: true
    id_account?: true
  }

  export type SurveyorMaxAggregateInputType = {
    id_surveyor?: true
    id_account?: true
  }

  export type SurveyorCountAggregateInputType = {
    id_surveyor?: true
    id_account?: true
    _all?: true
  }

  export type SurveyorAggregateArgs = {
    /**
     * Filter which surveyor to aggregate.
     */
    where?: surveyorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveyors to fetch.
     */
    orderBy?: Enumerable<surveyorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: surveyorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveyors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveyors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned surveyors
    **/
    _count?: true | SurveyorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyorMaxAggregateInputType
  }

  export type GetSurveyorAggregateType<T extends SurveyorAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyor[P]>
      : GetScalarType<T[P], AggregateSurveyor[P]>
  }




  export type SurveyorGroupByArgs = {
    where?: surveyorWhereInput
    orderBy?: Enumerable<surveyorOrderByWithAggregationInput>
    by: SurveyorScalarFieldEnum[]
    having?: surveyorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyorCountAggregateInputType | true
    _min?: SurveyorMinAggregateInputType
    _max?: SurveyorMaxAggregateInputType
  }


  export type SurveyorGroupByOutputType = {
    id_surveyor: string
    id_account: string
    _count: SurveyorCountAggregateOutputType | null
    _min: SurveyorMinAggregateOutputType | null
    _max: SurveyorMaxAggregateOutputType | null
  }

  type GetSurveyorGroupByPayload<T extends SurveyorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SurveyorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyorGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyorGroupByOutputType[P]>
        }
      >
    >


  export type surveyorSelect = {
    id_surveyor?: boolean
    id_account?: boolean
    account?: boolean | accountsArgs
    dukungan?: boolean | surveyor$dukunganArgs
    _count?: boolean | SurveyorCountOutputTypeArgs
  }


  export type surveyorInclude = {
    account?: boolean | accountsArgs
    dukungan?: boolean | surveyor$dukunganArgs
    _count?: boolean | SurveyorCountOutputTypeArgs
  }

  export type surveyorGetPayload<S extends boolean | null | undefined | surveyorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? surveyor :
    S extends undefined ? never :
    S extends { include: any } & (surveyorArgs | surveyorFindManyArgs)
    ? surveyor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'account' ? accountsGetPayload<S['include'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['include'][P]>>  :
        P extends '_count' ? SurveyorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (surveyorArgs | surveyorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'account' ? accountsGetPayload<S['select'][P]> :
        P extends 'dukungan' ? Array < dukunganGetPayload<S['select'][P]>>  :
        P extends '_count' ? SurveyorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof surveyor ? surveyor[P] : never
  } 
      : surveyor


  type surveyorCountArgs = 
    Omit<surveyorFindManyArgs, 'select' | 'include'> & {
      select?: SurveyorCountAggregateInputType | true
    }

  export interface surveyorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Surveyor that matches the filter.
     * @param {surveyorFindUniqueArgs} args - Arguments to find a Surveyor
     * @example
     * // Get one Surveyor
     * const surveyor = await prisma.surveyor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends surveyorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, surveyorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'surveyor'> extends True ? Prisma__surveyorClient<surveyorGetPayload<T>> : Prisma__surveyorClient<surveyorGetPayload<T> | null, null>

    /**
     * Find one Surveyor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {surveyorFindUniqueOrThrowArgs} args - Arguments to find a Surveyor
     * @example
     * // Get one Surveyor
     * const surveyor = await prisma.surveyor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends surveyorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, surveyorFindUniqueOrThrowArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Find the first Surveyor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyorFindFirstArgs} args - Arguments to find a Surveyor
     * @example
     * // Get one Surveyor
     * const surveyor = await prisma.surveyor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends surveyorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, surveyorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'surveyor'> extends True ? Prisma__surveyorClient<surveyorGetPayload<T>> : Prisma__surveyorClient<surveyorGetPayload<T> | null, null>

    /**
     * Find the first Surveyor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyorFindFirstOrThrowArgs} args - Arguments to find a Surveyor
     * @example
     * // Get one Surveyor
     * const surveyor = await prisma.surveyor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends surveyorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, surveyorFindFirstOrThrowArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Find zero or more Surveyors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveyors
     * const surveyors = await prisma.surveyor.findMany()
     * 
     * // Get first 10 Surveyors
     * const surveyors = await prisma.surveyor.findMany({ take: 10 })
     * 
     * // Only select the `id_surveyor`
     * const surveyorWithId_surveyorOnly = await prisma.surveyor.findMany({ select: { id_surveyor: true } })
     * 
    **/
    findMany<T extends surveyorFindManyArgs>(
      args?: SelectSubset<T, surveyorFindManyArgs>
    ): PrismaPromise<Array<surveyorGetPayload<T>>>

    /**
     * Create a Surveyor.
     * @param {surveyorCreateArgs} args - Arguments to create a Surveyor.
     * @example
     * // Create one Surveyor
     * const Surveyor = await prisma.surveyor.create({
     *   data: {
     *     // ... data to create a Surveyor
     *   }
     * })
     * 
    **/
    create<T extends surveyorCreateArgs>(
      args: SelectSubset<T, surveyorCreateArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Create many Surveyors.
     *     @param {surveyorCreateManyArgs} args - Arguments to create many Surveyors.
     *     @example
     *     // Create many Surveyors
     *     const surveyor = await prisma.surveyor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends surveyorCreateManyArgs>(
      args?: SelectSubset<T, surveyorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Surveyor.
     * @param {surveyorDeleteArgs} args - Arguments to delete one Surveyor.
     * @example
     * // Delete one Surveyor
     * const Surveyor = await prisma.surveyor.delete({
     *   where: {
     *     // ... filter to delete one Surveyor
     *   }
     * })
     * 
    **/
    delete<T extends surveyorDeleteArgs>(
      args: SelectSubset<T, surveyorDeleteArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Update one Surveyor.
     * @param {surveyorUpdateArgs} args - Arguments to update one Surveyor.
     * @example
     * // Update one Surveyor
     * const surveyor = await prisma.surveyor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends surveyorUpdateArgs>(
      args: SelectSubset<T, surveyorUpdateArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Delete zero or more Surveyors.
     * @param {surveyorDeleteManyArgs} args - Arguments to filter Surveyors to delete.
     * @example
     * // Delete a few Surveyors
     * const { count } = await prisma.surveyor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends surveyorDeleteManyArgs>(
      args?: SelectSubset<T, surveyorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveyors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveyors
     * const surveyor = await prisma.surveyor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends surveyorUpdateManyArgs>(
      args: SelectSubset<T, surveyorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Surveyor.
     * @param {surveyorUpsertArgs} args - Arguments to update or create a Surveyor.
     * @example
     * // Update or create a Surveyor
     * const surveyor = await prisma.surveyor.upsert({
     *   create: {
     *     // ... data to create a Surveyor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surveyor we want to update
     *   }
     * })
    **/
    upsert<T extends surveyorUpsertArgs>(
      args: SelectSubset<T, surveyorUpsertArgs>
    ): Prisma__surveyorClient<surveyorGetPayload<T>>

    /**
     * Count the number of Surveyors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyorCountArgs} args - Arguments to filter Surveyors to count.
     * @example
     * // Count the number of Surveyors
     * const count = await prisma.surveyor.count({
     *   where: {
     *     // ... the filter for the Surveyors we want to count
     *   }
     * })
    **/
    count<T extends surveyorCountArgs>(
      args?: Subset<T, surveyorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surveyor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyorAggregateArgs>(args: Subset<T, SurveyorAggregateArgs>): PrismaPromise<GetSurveyorAggregateType<T>>

    /**
     * Group by Surveyor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyorGroupByArgs['orderBy'] }
        : { orderBy?: SurveyorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for surveyor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__surveyorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    account<T extends accountsArgs= {}>(args?: Subset<T, accountsArgs>): Prisma__accountsClient<accountsGetPayload<T> | Null>;

    dukungan<T extends surveyor$dukunganArgs= {}>(args?: Subset<T, surveyor$dukunganArgs>): PrismaPromise<Array<dukunganGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * surveyor base type for findUnique actions
   */
  export type surveyorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter, which surveyor to fetch.
     */
    where: surveyorWhereUniqueInput
  }

  /**
   * surveyor findUnique
   */
  export interface surveyorFindUniqueArgs extends surveyorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * surveyor findUniqueOrThrow
   */
  export type surveyorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter, which surveyor to fetch.
     */
    where: surveyorWhereUniqueInput
  }


  /**
   * surveyor base type for findFirst actions
   */
  export type surveyorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter, which surveyor to fetch.
     */
    where?: surveyorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveyors to fetch.
     */
    orderBy?: Enumerable<surveyorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveyors.
     */
    cursor?: surveyorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveyors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveyors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveyors.
     */
    distinct?: Enumerable<SurveyorScalarFieldEnum>
  }

  /**
   * surveyor findFirst
   */
  export interface surveyorFindFirstArgs extends surveyorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * surveyor findFirstOrThrow
   */
  export type surveyorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter, which surveyor to fetch.
     */
    where?: surveyorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveyors to fetch.
     */
    orderBy?: Enumerable<surveyorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveyors.
     */
    cursor?: surveyorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveyors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveyors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveyors.
     */
    distinct?: Enumerable<SurveyorScalarFieldEnum>
  }


  /**
   * surveyor findMany
   */
  export type surveyorFindManyArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter, which surveyors to fetch.
     */
    where?: surveyorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveyors to fetch.
     */
    orderBy?: Enumerable<surveyorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing surveyors.
     */
    cursor?: surveyorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveyors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveyors.
     */
    skip?: number
    distinct?: Enumerable<SurveyorScalarFieldEnum>
  }


  /**
   * surveyor create
   */
  export type surveyorCreateArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * The data needed to create a surveyor.
     */
    data: XOR<surveyorCreateInput, surveyorUncheckedCreateInput>
  }


  /**
   * surveyor createMany
   */
  export type surveyorCreateManyArgs = {
    /**
     * The data used to create many surveyors.
     */
    data: Enumerable<surveyorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * surveyor update
   */
  export type surveyorUpdateArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * The data needed to update a surveyor.
     */
    data: XOR<surveyorUpdateInput, surveyorUncheckedUpdateInput>
    /**
     * Choose, which surveyor to update.
     */
    where: surveyorWhereUniqueInput
  }


  /**
   * surveyor updateMany
   */
  export type surveyorUpdateManyArgs = {
    /**
     * The data used to update surveyors.
     */
    data: XOR<surveyorUpdateManyMutationInput, surveyorUncheckedUpdateManyInput>
    /**
     * Filter which surveyors to update
     */
    where?: surveyorWhereInput
  }


  /**
   * surveyor upsert
   */
  export type surveyorUpsertArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * The filter to search for the surveyor to update in case it exists.
     */
    where: surveyorWhereUniqueInput
    /**
     * In case the surveyor found by the `where` argument doesn't exist, create a new surveyor with this data.
     */
    create: XOR<surveyorCreateInput, surveyorUncheckedCreateInput>
    /**
     * In case the surveyor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<surveyorUpdateInput, surveyorUncheckedUpdateInput>
  }


  /**
   * surveyor delete
   */
  export type surveyorDeleteArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
    /**
     * Filter which surveyor to delete.
     */
    where: surveyorWhereUniqueInput
  }


  /**
   * surveyor deleteMany
   */
  export type surveyorDeleteManyArgs = {
    /**
     * Filter which surveyors to delete
     */
    where?: surveyorWhereInput
  }


  /**
   * surveyor.dukungan
   */
  export type surveyor$dukunganArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    where?: dukunganWhereInput
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    cursor?: dukunganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }


  /**
   * surveyor without action
   */
  export type surveyorArgs = {
    /**
     * Select specific fields to fetch from the surveyor
     */
    select?: surveyorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyorInclude | null
  }



  /**
   * Model dukungan
   */


  export type AggregateDukungan = {
    _count: DukunganCountAggregateOutputType | null
    _min: DukunganMinAggregateOutputType | null
    _max: DukunganMaxAggregateOutputType | null
  }

  export type DukunganMinAggregateOutputType = {
    id_dukungan: string | null
    id_pemilih: string | null
    id_surveyor: string | null
    level_dukungan: LevelDukungan | null
    id_calon: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DukunganMaxAggregateOutputType = {
    id_dukungan: string | null
    id_pemilih: string | null
    id_surveyor: string | null
    level_dukungan: LevelDukungan | null
    id_calon: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DukunganCountAggregateOutputType = {
    id_dukungan: number
    id_pemilih: number
    id_surveyor: number
    level_dukungan: number
    id_calon: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DukunganMinAggregateInputType = {
    id_dukungan?: true
    id_pemilih?: true
    id_surveyor?: true
    level_dukungan?: true
    id_calon?: true
    created_at?: true
    updated_at?: true
  }

  export type DukunganMaxAggregateInputType = {
    id_dukungan?: true
    id_pemilih?: true
    id_surveyor?: true
    level_dukungan?: true
    id_calon?: true
    created_at?: true
    updated_at?: true
  }

  export type DukunganCountAggregateInputType = {
    id_dukungan?: true
    id_pemilih?: true
    id_surveyor?: true
    level_dukungan?: true
    id_calon?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DukunganAggregateArgs = {
    /**
     * Filter which dukungan to aggregate.
     */
    where?: dukunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dukungans to fetch.
     */
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dukunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dukungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dukungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dukungans
    **/
    _count?: true | DukunganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DukunganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DukunganMaxAggregateInputType
  }

  export type GetDukunganAggregateType<T extends DukunganAggregateArgs> = {
        [P in keyof T & keyof AggregateDukungan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDukungan[P]>
      : GetScalarType<T[P], AggregateDukungan[P]>
  }




  export type DukunganGroupByArgs = {
    where?: dukunganWhereInput
    orderBy?: Enumerable<dukunganOrderByWithAggregationInput>
    by: DukunganScalarFieldEnum[]
    having?: dukunganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DukunganCountAggregateInputType | true
    _min?: DukunganMinAggregateInputType
    _max?: DukunganMaxAggregateInputType
  }


  export type DukunganGroupByOutputType = {
    id_dukungan: string
    id_pemilih: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at: Date
    updated_at: Date
    _count: DukunganCountAggregateOutputType | null
    _min: DukunganMinAggregateOutputType | null
    _max: DukunganMaxAggregateOutputType | null
  }

  type GetDukunganGroupByPayload<T extends DukunganGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DukunganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DukunganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DukunganGroupByOutputType[P]>
            : GetScalarType<T[P], DukunganGroupByOutputType[P]>
        }
      >
    >


  export type dukunganSelect = {
    id_dukungan?: boolean
    id_pemilih?: boolean
    pemilih?: boolean | pemilihArgs
    id_surveyor?: boolean
    surveyor?: boolean | surveyorArgs
    level_dukungan?: boolean
    id_calon?: boolean
    calon?: boolean | calonArgs
    created_at?: boolean
    updated_at?: boolean
  }


  export type dukunganInclude = {
    pemilih?: boolean | pemilihArgs
    surveyor?: boolean | surveyorArgs
    calon?: boolean | calonArgs
  }

  export type dukunganGetPayload<S extends boolean | null | undefined | dukunganArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dukungan :
    S extends undefined ? never :
    S extends { include: any } & (dukunganArgs | dukunganFindManyArgs)
    ? dukungan  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'pemilih' ? pemilihGetPayload<S['include'][P]> :
        P extends 'surveyor' ? surveyorGetPayload<S['include'][P]> :
        P extends 'calon' ? calonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (dukunganArgs | dukunganFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'pemilih' ? pemilihGetPayload<S['select'][P]> :
        P extends 'surveyor' ? surveyorGetPayload<S['select'][P]> :
        P extends 'calon' ? calonGetPayload<S['select'][P]> :  P extends keyof dukungan ? dukungan[P] : never
  } 
      : dukungan


  type dukunganCountArgs = 
    Omit<dukunganFindManyArgs, 'select' | 'include'> & {
      select?: DukunganCountAggregateInputType | true
    }

  export interface dukunganDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Dukungan that matches the filter.
     * @param {dukunganFindUniqueArgs} args - Arguments to find a Dukungan
     * @example
     * // Get one Dukungan
     * const dukungan = await prisma.dukungan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dukunganFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dukunganFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dukungan'> extends True ? Prisma__dukunganClient<dukunganGetPayload<T>> : Prisma__dukunganClient<dukunganGetPayload<T> | null, null>

    /**
     * Find one Dukungan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dukunganFindUniqueOrThrowArgs} args - Arguments to find a Dukungan
     * @example
     * // Get one Dukungan
     * const dukungan = await prisma.dukungan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dukunganFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dukunganFindUniqueOrThrowArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Find the first Dukungan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dukunganFindFirstArgs} args - Arguments to find a Dukungan
     * @example
     * // Get one Dukungan
     * const dukungan = await prisma.dukungan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dukunganFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dukunganFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dukungan'> extends True ? Prisma__dukunganClient<dukunganGetPayload<T>> : Prisma__dukunganClient<dukunganGetPayload<T> | null, null>

    /**
     * Find the first Dukungan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dukunganFindFirstOrThrowArgs} args - Arguments to find a Dukungan
     * @example
     * // Get one Dukungan
     * const dukungan = await prisma.dukungan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dukunganFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dukunganFindFirstOrThrowArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Find zero or more Dukungans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dukunganFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dukungans
     * const dukungans = await prisma.dukungan.findMany()
     * 
     * // Get first 10 Dukungans
     * const dukungans = await prisma.dukungan.findMany({ take: 10 })
     * 
     * // Only select the `id_dukungan`
     * const dukunganWithId_dukunganOnly = await prisma.dukungan.findMany({ select: { id_dukungan: true } })
     * 
    **/
    findMany<T extends dukunganFindManyArgs>(
      args?: SelectSubset<T, dukunganFindManyArgs>
    ): PrismaPromise<Array<dukunganGetPayload<T>>>

    /**
     * Create a Dukungan.
     * @param {dukunganCreateArgs} args - Arguments to create a Dukungan.
     * @example
     * // Create one Dukungan
     * const Dukungan = await prisma.dukungan.create({
     *   data: {
     *     // ... data to create a Dukungan
     *   }
     * })
     * 
    **/
    create<T extends dukunganCreateArgs>(
      args: SelectSubset<T, dukunganCreateArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Create many Dukungans.
     *     @param {dukunganCreateManyArgs} args - Arguments to create many Dukungans.
     *     @example
     *     // Create many Dukungans
     *     const dukungan = await prisma.dukungan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dukunganCreateManyArgs>(
      args?: SelectSubset<T, dukunganCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dukungan.
     * @param {dukunganDeleteArgs} args - Arguments to delete one Dukungan.
     * @example
     * // Delete one Dukungan
     * const Dukungan = await prisma.dukungan.delete({
     *   where: {
     *     // ... filter to delete one Dukungan
     *   }
     * })
     * 
    **/
    delete<T extends dukunganDeleteArgs>(
      args: SelectSubset<T, dukunganDeleteArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Update one Dukungan.
     * @param {dukunganUpdateArgs} args - Arguments to update one Dukungan.
     * @example
     * // Update one Dukungan
     * const dukungan = await prisma.dukungan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dukunganUpdateArgs>(
      args: SelectSubset<T, dukunganUpdateArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Delete zero or more Dukungans.
     * @param {dukunganDeleteManyArgs} args - Arguments to filter Dukungans to delete.
     * @example
     * // Delete a few Dukungans
     * const { count } = await prisma.dukungan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dukunganDeleteManyArgs>(
      args?: SelectSubset<T, dukunganDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dukungans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dukunganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dukungans
     * const dukungan = await prisma.dukungan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dukunganUpdateManyArgs>(
      args: SelectSubset<T, dukunganUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dukungan.
     * @param {dukunganUpsertArgs} args - Arguments to update or create a Dukungan.
     * @example
     * // Update or create a Dukungan
     * const dukungan = await prisma.dukungan.upsert({
     *   create: {
     *     // ... data to create a Dukungan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dukungan we want to update
     *   }
     * })
    **/
    upsert<T extends dukunganUpsertArgs>(
      args: SelectSubset<T, dukunganUpsertArgs>
    ): Prisma__dukunganClient<dukunganGetPayload<T>>

    /**
     * Count the number of Dukungans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dukunganCountArgs} args - Arguments to filter Dukungans to count.
     * @example
     * // Count the number of Dukungans
     * const count = await prisma.dukungan.count({
     *   where: {
     *     // ... the filter for the Dukungans we want to count
     *   }
     * })
    **/
    count<T extends dukunganCountArgs>(
      args?: Subset<T, dukunganCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DukunganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dukungan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DukunganAggregateArgs>(args: Subset<T, DukunganAggregateArgs>): PrismaPromise<GetDukunganAggregateType<T>>

    /**
     * Group by Dukungan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DukunganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DukunganGroupByArgs['orderBy'] }
        : { orderBy?: DukunganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DukunganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDukunganGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dukungan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dukunganClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pemilih<T extends pemilihArgs= {}>(args?: Subset<T, pemilihArgs>): Prisma__pemilihClient<pemilihGetPayload<T> | Null>;

    surveyor<T extends surveyorArgs= {}>(args?: Subset<T, surveyorArgs>): Prisma__surveyorClient<surveyorGetPayload<T> | Null>;

    calon<T extends calonArgs= {}>(args?: Subset<T, calonArgs>): Prisma__calonClient<calonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dukungan base type for findUnique actions
   */
  export type dukunganFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter, which dukungan to fetch.
     */
    where: dukunganWhereUniqueInput
  }

  /**
   * dukungan findUnique
   */
  export interface dukunganFindUniqueArgs extends dukunganFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dukungan findUniqueOrThrow
   */
  export type dukunganFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter, which dukungan to fetch.
     */
    where: dukunganWhereUniqueInput
  }


  /**
   * dukungan base type for findFirst actions
   */
  export type dukunganFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter, which dukungan to fetch.
     */
    where?: dukunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dukungans to fetch.
     */
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dukungans.
     */
    cursor?: dukunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dukungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dukungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dukungans.
     */
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }

  /**
   * dukungan findFirst
   */
  export interface dukunganFindFirstArgs extends dukunganFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dukungan findFirstOrThrow
   */
  export type dukunganFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter, which dukungan to fetch.
     */
    where?: dukunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dukungans to fetch.
     */
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dukungans.
     */
    cursor?: dukunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dukungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dukungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dukungans.
     */
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }


  /**
   * dukungan findMany
   */
  export type dukunganFindManyArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter, which dukungans to fetch.
     */
    where?: dukunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dukungans to fetch.
     */
    orderBy?: Enumerable<dukunganOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dukungans.
     */
    cursor?: dukunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dukungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dukungans.
     */
    skip?: number
    distinct?: Enumerable<DukunganScalarFieldEnum>
  }


  /**
   * dukungan create
   */
  export type dukunganCreateArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * The data needed to create a dukungan.
     */
    data: XOR<dukunganCreateInput, dukunganUncheckedCreateInput>
  }


  /**
   * dukungan createMany
   */
  export type dukunganCreateManyArgs = {
    /**
     * The data used to create many dukungans.
     */
    data: Enumerable<dukunganCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dukungan update
   */
  export type dukunganUpdateArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * The data needed to update a dukungan.
     */
    data: XOR<dukunganUpdateInput, dukunganUncheckedUpdateInput>
    /**
     * Choose, which dukungan to update.
     */
    where: dukunganWhereUniqueInput
  }


  /**
   * dukungan updateMany
   */
  export type dukunganUpdateManyArgs = {
    /**
     * The data used to update dukungans.
     */
    data: XOR<dukunganUpdateManyMutationInput, dukunganUncheckedUpdateManyInput>
    /**
     * Filter which dukungans to update
     */
    where?: dukunganWhereInput
  }


  /**
   * dukungan upsert
   */
  export type dukunganUpsertArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * The filter to search for the dukungan to update in case it exists.
     */
    where: dukunganWhereUniqueInput
    /**
     * In case the dukungan found by the `where` argument doesn't exist, create a new dukungan with this data.
     */
    create: XOR<dukunganCreateInput, dukunganUncheckedCreateInput>
    /**
     * In case the dukungan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dukunganUpdateInput, dukunganUncheckedUpdateInput>
  }


  /**
   * dukungan delete
   */
  export type dukunganDeleteArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
    /**
     * Filter which dukungan to delete.
     */
    where: dukunganWhereUniqueInput
  }


  /**
   * dukungan deleteMany
   */
  export type dukunganDeleteManyArgs = {
    /**
     * Filter which dukungans to delete
     */
    where?: dukunganWhereInput
  }


  /**
   * dukungan without action
   */
  export type dukunganArgs = {
    /**
     * Select specific fields to fetch from the dukungan
     */
    select?: dukunganSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dukunganInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountsScalarFieldEnum: {
    id_account: 'id_account',
    full_name: 'full_name'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const CalonScalarFieldEnum: {
    id_calon: 'id_calon',
    id_account: 'id_account'
  };

  export type CalonScalarFieldEnum = (typeof CalonScalarFieldEnum)[keyof typeof CalonScalarFieldEnum]


  export const DukunganScalarFieldEnum: {
    id_dukungan: 'id_dukungan',
    id_pemilih: 'id_pemilih',
    id_surveyor: 'id_surveyor',
    level_dukungan: 'level_dukungan',
    id_calon: 'id_calon',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DukunganScalarFieldEnum = (typeof DukunganScalarFieldEnum)[keyof typeof DukunganScalarFieldEnum]


  export const PemilihScalarFieldEnum: {
    id_pemilih: 'id_pemilih',
    id_account: 'id_account'
  };

  export type PemilihScalarFieldEnum = (typeof PemilihScalarFieldEnum)[keyof typeof PemilihScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SurveyorScalarFieldEnum: {
    id_surveyor: 'id_surveyor',
    id_account: 'id_account'
  };

  export type SurveyorScalarFieldEnum = (typeof SurveyorScalarFieldEnum)[keyof typeof SurveyorScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: Enumerable<accountsWhereInput>
    OR?: Enumerable<accountsWhereInput>
    NOT?: Enumerable<accountsWhereInput>
    id_account?: StringFilter | string
    full_name?: StringFilter | string
    calon?: XOR<CalonRelationFilter, calonWhereInput> | null
    surveyor?: XOR<SurveyorRelationFilter, surveyorWhereInput> | null
    pemilih?: XOR<PemilihRelationFilter, pemilihWhereInput> | null
  }

  export type accountsOrderByWithRelationInput = {
    id_account?: SortOrder
    full_name?: SortOrder
    calon?: calonOrderByWithRelationInput
    surveyor?: surveyorOrderByWithRelationInput
    pemilih?: pemilihOrderByWithRelationInput
  }

  export type accountsWhereUniqueInput = {
    id_account?: string
  }

  export type accountsOrderByWithAggregationInput = {
    id_account?: SortOrder
    full_name?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<accountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<accountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<accountsScalarWhereWithAggregatesInput>
    id_account?: StringWithAggregatesFilter | string
    full_name?: StringWithAggregatesFilter | string
  }

  export type calonWhereInput = {
    AND?: Enumerable<calonWhereInput>
    OR?: Enumerable<calonWhereInput>
    NOT?: Enumerable<calonWhereInput>
    id_calon?: StringFilter | string
    id_account?: StringFilter | string
    account?: XOR<AccountsRelationFilter, accountsWhereInput>
    dukungan?: DukunganListRelationFilter
  }

  export type calonOrderByWithRelationInput = {
    id_calon?: SortOrder
    id_account?: SortOrder
    account?: accountsOrderByWithRelationInput
    dukungan?: dukunganOrderByRelationAggregateInput
  }

  export type calonWhereUniqueInput = {
    id_calon?: string
    id_account?: string
  }

  export type calonOrderByWithAggregationInput = {
    id_calon?: SortOrder
    id_account?: SortOrder
    _count?: calonCountOrderByAggregateInput
    _max?: calonMaxOrderByAggregateInput
    _min?: calonMinOrderByAggregateInput
  }

  export type calonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<calonScalarWhereWithAggregatesInput>
    OR?: Enumerable<calonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<calonScalarWhereWithAggregatesInput>
    id_calon?: StringWithAggregatesFilter | string
    id_account?: StringWithAggregatesFilter | string
  }

  export type pemilihWhereInput = {
    AND?: Enumerable<pemilihWhereInput>
    OR?: Enumerable<pemilihWhereInput>
    NOT?: Enumerable<pemilihWhereInput>
    id_pemilih?: StringFilter | string
    id_account?: StringFilter | string
    account?: XOR<AccountsRelationFilter, accountsWhereInput>
    dukungan?: DukunganListRelationFilter
  }

  export type pemilihOrderByWithRelationInput = {
    id_pemilih?: SortOrder
    id_account?: SortOrder
    account?: accountsOrderByWithRelationInput
    dukungan?: dukunganOrderByRelationAggregateInput
  }

  export type pemilihWhereUniqueInput = {
    id_pemilih?: string
    id_account?: string
  }

  export type pemilihOrderByWithAggregationInput = {
    id_pemilih?: SortOrder
    id_account?: SortOrder
    _count?: pemilihCountOrderByAggregateInput
    _max?: pemilihMaxOrderByAggregateInput
    _min?: pemilihMinOrderByAggregateInput
  }

  export type pemilihScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pemilihScalarWhereWithAggregatesInput>
    OR?: Enumerable<pemilihScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pemilihScalarWhereWithAggregatesInput>
    id_pemilih?: StringWithAggregatesFilter | string
    id_account?: StringWithAggregatesFilter | string
  }

  export type surveyorWhereInput = {
    AND?: Enumerable<surveyorWhereInput>
    OR?: Enumerable<surveyorWhereInput>
    NOT?: Enumerable<surveyorWhereInput>
    id_surveyor?: StringFilter | string
    id_account?: StringFilter | string
    account?: XOR<AccountsRelationFilter, accountsWhereInput>
    dukungan?: DukunganListRelationFilter
  }

  export type surveyorOrderByWithRelationInput = {
    id_surveyor?: SortOrder
    id_account?: SortOrder
    account?: accountsOrderByWithRelationInput
    dukungan?: dukunganOrderByRelationAggregateInput
  }

  export type surveyorWhereUniqueInput = {
    id_surveyor?: string
    id_account?: string
  }

  export type surveyorOrderByWithAggregationInput = {
    id_surveyor?: SortOrder
    id_account?: SortOrder
    _count?: surveyorCountOrderByAggregateInput
    _max?: surveyorMaxOrderByAggregateInput
    _min?: surveyorMinOrderByAggregateInput
  }

  export type surveyorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<surveyorScalarWhereWithAggregatesInput>
    OR?: Enumerable<surveyorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<surveyorScalarWhereWithAggregatesInput>
    id_surveyor?: StringWithAggregatesFilter | string
    id_account?: StringWithAggregatesFilter | string
  }

  export type dukunganWhereInput = {
    AND?: Enumerable<dukunganWhereInput>
    OR?: Enumerable<dukunganWhereInput>
    NOT?: Enumerable<dukunganWhereInput>
    id_dukungan?: StringFilter | string
    id_pemilih?: StringFilter | string
    pemilih?: XOR<PemilihRelationFilter, pemilihWhereInput>
    id_surveyor?: StringFilter | string
    surveyor?: XOR<SurveyorRelationFilter, surveyorWhereInput>
    level_dukungan?: EnumLevelDukunganFilter | LevelDukungan
    id_calon?: StringFilter | string
    calon?: XOR<CalonRelationFilter, calonWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type dukunganOrderByWithRelationInput = {
    id_dukungan?: SortOrder
    id_pemilih?: SortOrder
    pemilih?: pemilihOrderByWithRelationInput
    id_surveyor?: SortOrder
    surveyor?: surveyorOrderByWithRelationInput
    level_dukungan?: SortOrder
    id_calon?: SortOrder
    calon?: calonOrderByWithRelationInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dukunganWhereUniqueInput = {
    id_dukungan?: string
    id_pemilih_level_dukungan_id_calon?: dukunganId_pemilihLevel_dukunganId_calonCompoundUniqueInput
  }

  export type dukunganOrderByWithAggregationInput = {
    id_dukungan?: SortOrder
    id_pemilih?: SortOrder
    id_surveyor?: SortOrder
    level_dukungan?: SortOrder
    id_calon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: dukunganCountOrderByAggregateInput
    _max?: dukunganMaxOrderByAggregateInput
    _min?: dukunganMinOrderByAggregateInput
  }

  export type dukunganScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dukunganScalarWhereWithAggregatesInput>
    OR?: Enumerable<dukunganScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dukunganScalarWhereWithAggregatesInput>
    id_dukungan?: StringWithAggregatesFilter | string
    id_pemilih?: StringWithAggregatesFilter | string
    id_surveyor?: StringWithAggregatesFilter | string
    level_dukungan?: EnumLevelDukunganWithAggregatesFilter | LevelDukungan
    id_calon?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type accountsCreateInput = {
    id_account?: string
    full_name: string
    calon?: calonCreateNestedOneWithoutAccountInput
    surveyor?: surveyorCreateNestedOneWithoutAccountInput
    pemilih?: pemilihCreateNestedOneWithoutAccountInput
  }

  export type accountsUncheckedCreateInput = {
    id_account?: string
    full_name: string
    calon?: calonUncheckedCreateNestedOneWithoutAccountInput
    surveyor?: surveyorUncheckedCreateNestedOneWithoutAccountInput
    pemilih?: pemilihUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountsUpdateInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUpdateOneWithoutAccountNestedInput
    surveyor?: surveyorUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUpdateOneWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUncheckedUpdateOneWithoutAccountNestedInput
    surveyor?: surveyorUncheckedUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type accountsCreateManyInput = {
    id_account?: string
    full_name: string
  }

  export type accountsUpdateManyMutationInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
  }

  export type calonCreateInput = {
    id_calon?: string
    account: accountsCreateNestedOneWithoutCalonInput
    dukungan?: dukunganCreateNestedManyWithoutCalonInput
  }

  export type calonUncheckedCreateInput = {
    id_calon?: string
    id_account: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutCalonInput
  }

  export type calonUpdateInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutCalonNestedInput
    dukungan?: dukunganUpdateManyWithoutCalonNestedInput
  }

  export type calonUncheckedUpdateInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutCalonNestedInput
  }

  export type calonCreateManyInput = {
    id_calon?: string
    id_account: string
  }

  export type calonUpdateManyMutationInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
  }

  export type calonUncheckedUpdateManyInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type pemilihCreateInput = {
    id_pemilih?: string
    account: accountsCreateNestedOneWithoutPemilihInput
    dukungan?: dukunganCreateNestedManyWithoutPemilihInput
  }

  export type pemilihUncheckedCreateInput = {
    id_pemilih?: string
    id_account: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutPemilihInput
  }

  export type pemilihUpdateInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutPemilihNestedInput
    dukungan?: dukunganUpdateManyWithoutPemilihNestedInput
  }

  export type pemilihUncheckedUpdateInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutPemilihNestedInput
  }

  export type pemilihCreateManyInput = {
    id_pemilih?: string
    id_account: string
  }

  export type pemilihUpdateManyMutationInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
  }

  export type pemilihUncheckedUpdateManyInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type surveyorCreateInput = {
    id_surveyor?: string
    account: accountsCreateNestedOneWithoutSurveyorInput
    dukungan?: dukunganCreateNestedManyWithoutSurveyorInput
  }

  export type surveyorUncheckedCreateInput = {
    id_surveyor?: string
    id_account: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutSurveyorInput
  }

  export type surveyorUpdateInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutSurveyorNestedInput
    dukungan?: dukunganUpdateManyWithoutSurveyorNestedInput
  }

  export type surveyorUncheckedUpdateInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutSurveyorNestedInput
  }

  export type surveyorCreateManyInput = {
    id_surveyor?: string
    id_account: string
  }

  export type surveyorUpdateManyMutationInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
  }

  export type surveyorUncheckedUpdateManyInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type dukunganCreateInput = {
    id_dukungan?: string
    pemilih: pemilihCreateNestedOneWithoutDukunganInput
    surveyor: surveyorCreateNestedOneWithoutDukunganInput
    level_dukungan: LevelDukungan
    calon: calonCreateNestedOneWithoutDukunganInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUncheckedCreateInput = {
    id_dukungan?: string
    id_pemilih: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUpdateInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    pemilih?: pemilihUpdateOneRequiredWithoutDukunganNestedInput
    surveyor?: surveyorUpdateOneRequiredWithoutDukunganNestedInput
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    calon?: calonUpdateOneRequiredWithoutDukunganNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_surveyor?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    id_calon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganCreateManyInput = {
    id_dukungan?: string
    id_pemilih: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUpdateManyMutationInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateManyInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_surveyor?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    id_calon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CalonRelationFilter = {
    is?: calonWhereInput | null
    isNot?: calonWhereInput | null
  }

  export type SurveyorRelationFilter = {
    is?: surveyorWhereInput | null
    isNot?: surveyorWhereInput | null
  }

  export type PemilihRelationFilter = {
    is?: pemilihWhereInput | null
    isNot?: pemilihWhereInput | null
  }

  export type accountsCountOrderByAggregateInput = {
    id_account?: SortOrder
    full_name?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id_account?: SortOrder
    full_name?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id_account?: SortOrder
    full_name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type AccountsRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type DukunganListRelationFilter = {
    every?: dukunganWhereInput
    some?: dukunganWhereInput
    none?: dukunganWhereInput
  }

  export type dukunganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type calonCountOrderByAggregateInput = {
    id_calon?: SortOrder
    id_account?: SortOrder
  }

  export type calonMaxOrderByAggregateInput = {
    id_calon?: SortOrder
    id_account?: SortOrder
  }

  export type calonMinOrderByAggregateInput = {
    id_calon?: SortOrder
    id_account?: SortOrder
  }

  export type pemilihCountOrderByAggregateInput = {
    id_pemilih?: SortOrder
    id_account?: SortOrder
  }

  export type pemilihMaxOrderByAggregateInput = {
    id_pemilih?: SortOrder
    id_account?: SortOrder
  }

  export type pemilihMinOrderByAggregateInput = {
    id_pemilih?: SortOrder
    id_account?: SortOrder
  }

  export type surveyorCountOrderByAggregateInput = {
    id_surveyor?: SortOrder
    id_account?: SortOrder
  }

  export type surveyorMaxOrderByAggregateInput = {
    id_surveyor?: SortOrder
    id_account?: SortOrder
  }

  export type surveyorMinOrderByAggregateInput = {
    id_surveyor?: SortOrder
    id_account?: SortOrder
  }

  export type EnumLevelDukunganFilter = {
    equals?: LevelDukungan
    in?: Enumerable<LevelDukungan>
    notIn?: Enumerable<LevelDukungan>
    not?: NestedEnumLevelDukunganFilter | LevelDukungan
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type dukunganId_pemilihLevel_dukunganId_calonCompoundUniqueInput = {
    id_pemilih: string
    level_dukungan: LevelDukungan
    id_calon: string
  }

  export type dukunganCountOrderByAggregateInput = {
    id_dukungan?: SortOrder
    id_pemilih?: SortOrder
    id_surveyor?: SortOrder
    level_dukungan?: SortOrder
    id_calon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dukunganMaxOrderByAggregateInput = {
    id_dukungan?: SortOrder
    id_pemilih?: SortOrder
    id_surveyor?: SortOrder
    level_dukungan?: SortOrder
    id_calon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dukunganMinOrderByAggregateInput = {
    id_dukungan?: SortOrder
    id_pemilih?: SortOrder
    id_surveyor?: SortOrder
    level_dukungan?: SortOrder
    id_calon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumLevelDukunganWithAggregatesFilter = {
    equals?: LevelDukungan
    in?: Enumerable<LevelDukungan>
    notIn?: Enumerable<LevelDukungan>
    not?: NestedEnumLevelDukunganWithAggregatesFilter | LevelDukungan
    _count?: NestedIntFilter
    _min?: NestedEnumLevelDukunganFilter
    _max?: NestedEnumLevelDukunganFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type calonCreateNestedOneWithoutAccountInput = {
    create?: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
    connectOrCreate?: calonCreateOrConnectWithoutAccountInput
    connect?: calonWhereUniqueInput
  }

  export type surveyorCreateNestedOneWithoutAccountInput = {
    create?: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutAccountInput
    connect?: surveyorWhereUniqueInput
  }

  export type pemilihCreateNestedOneWithoutAccountInput = {
    create?: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutAccountInput
    connect?: pemilihWhereUniqueInput
  }

  export type calonUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
    connectOrCreate?: calonCreateOrConnectWithoutAccountInput
    connect?: calonWhereUniqueInput
  }

  export type surveyorUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutAccountInput
    connect?: surveyorWhereUniqueInput
  }

  export type pemilihUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutAccountInput
    connect?: pemilihWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type calonUpdateOneWithoutAccountNestedInput = {
    create?: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
    connectOrCreate?: calonCreateOrConnectWithoutAccountInput
    upsert?: calonUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: calonWhereUniqueInput
    update?: XOR<calonUpdateWithoutAccountInput, calonUncheckedUpdateWithoutAccountInput>
  }

  export type surveyorUpdateOneWithoutAccountNestedInput = {
    create?: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutAccountInput
    upsert?: surveyorUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: surveyorWhereUniqueInput
    update?: XOR<surveyorUpdateWithoutAccountInput, surveyorUncheckedUpdateWithoutAccountInput>
  }

  export type pemilihUpdateOneWithoutAccountNestedInput = {
    create?: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutAccountInput
    upsert?: pemilihUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: pemilihWhereUniqueInput
    update?: XOR<pemilihUpdateWithoutAccountInput, pemilihUncheckedUpdateWithoutAccountInput>
  }

  export type calonUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
    connectOrCreate?: calonCreateOrConnectWithoutAccountInput
    upsert?: calonUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: calonWhereUniqueInput
    update?: XOR<calonUpdateWithoutAccountInput, calonUncheckedUpdateWithoutAccountInput>
  }

  export type surveyorUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutAccountInput
    upsert?: surveyorUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: surveyorWhereUniqueInput
    update?: XOR<surveyorUpdateWithoutAccountInput, surveyorUncheckedUpdateWithoutAccountInput>
  }

  export type pemilihUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutAccountInput
    upsert?: pemilihUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: pemilihWhereUniqueInput
    update?: XOR<pemilihUpdateWithoutAccountInput, pemilihUncheckedUpdateWithoutAccountInput>
  }

  export type accountsCreateNestedOneWithoutCalonInput = {
    create?: XOR<accountsCreateWithoutCalonInput, accountsUncheckedCreateWithoutCalonInput>
    connectOrCreate?: accountsCreateOrConnectWithoutCalonInput
    connect?: accountsWhereUniqueInput
  }

  export type dukunganCreateNestedManyWithoutCalonInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutCalonInput>, Enumerable<dukunganUncheckedCreateWithoutCalonInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutCalonInput>
    createMany?: dukunganCreateManyCalonInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type dukunganUncheckedCreateNestedManyWithoutCalonInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutCalonInput>, Enumerable<dukunganUncheckedCreateWithoutCalonInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutCalonInput>
    createMany?: dukunganCreateManyCalonInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type accountsUpdateOneRequiredWithoutCalonNestedInput = {
    create?: XOR<accountsCreateWithoutCalonInput, accountsUncheckedCreateWithoutCalonInput>
    connectOrCreate?: accountsCreateOrConnectWithoutCalonInput
    upsert?: accountsUpsertWithoutCalonInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutCalonInput, accountsUncheckedUpdateWithoutCalonInput>
  }

  export type dukunganUpdateManyWithoutCalonNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutCalonInput>, Enumerable<dukunganUncheckedCreateWithoutCalonInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutCalonInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutCalonInput>
    createMany?: dukunganCreateManyCalonInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutCalonInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutCalonInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type dukunganUncheckedUpdateManyWithoutCalonNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutCalonInput>, Enumerable<dukunganUncheckedCreateWithoutCalonInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutCalonInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutCalonInput>
    createMany?: dukunganCreateManyCalonInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutCalonInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutCalonInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type accountsCreateNestedOneWithoutPemilihInput = {
    create?: XOR<accountsCreateWithoutPemilihInput, accountsUncheckedCreateWithoutPemilihInput>
    connectOrCreate?: accountsCreateOrConnectWithoutPemilihInput
    connect?: accountsWhereUniqueInput
  }

  export type dukunganCreateNestedManyWithoutPemilihInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutPemilihInput>, Enumerable<dukunganUncheckedCreateWithoutPemilihInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutPemilihInput>
    createMany?: dukunganCreateManyPemilihInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type dukunganUncheckedCreateNestedManyWithoutPemilihInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutPemilihInput>, Enumerable<dukunganUncheckedCreateWithoutPemilihInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutPemilihInput>
    createMany?: dukunganCreateManyPemilihInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type accountsUpdateOneRequiredWithoutPemilihNestedInput = {
    create?: XOR<accountsCreateWithoutPemilihInput, accountsUncheckedCreateWithoutPemilihInput>
    connectOrCreate?: accountsCreateOrConnectWithoutPemilihInput
    upsert?: accountsUpsertWithoutPemilihInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutPemilihInput, accountsUncheckedUpdateWithoutPemilihInput>
  }

  export type dukunganUpdateManyWithoutPemilihNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutPemilihInput>, Enumerable<dukunganUncheckedCreateWithoutPemilihInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutPemilihInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutPemilihInput>
    createMany?: dukunganCreateManyPemilihInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutPemilihInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutPemilihInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type dukunganUncheckedUpdateManyWithoutPemilihNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutPemilihInput>, Enumerable<dukunganUncheckedCreateWithoutPemilihInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutPemilihInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutPemilihInput>
    createMany?: dukunganCreateManyPemilihInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutPemilihInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutPemilihInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type accountsCreateNestedOneWithoutSurveyorInput = {
    create?: XOR<accountsCreateWithoutSurveyorInput, accountsUncheckedCreateWithoutSurveyorInput>
    connectOrCreate?: accountsCreateOrConnectWithoutSurveyorInput
    connect?: accountsWhereUniqueInput
  }

  export type dukunganCreateNestedManyWithoutSurveyorInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutSurveyorInput>, Enumerable<dukunganUncheckedCreateWithoutSurveyorInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutSurveyorInput>
    createMany?: dukunganCreateManySurveyorInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type dukunganUncheckedCreateNestedManyWithoutSurveyorInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutSurveyorInput>, Enumerable<dukunganUncheckedCreateWithoutSurveyorInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutSurveyorInput>
    createMany?: dukunganCreateManySurveyorInputEnvelope
    connect?: Enumerable<dukunganWhereUniqueInput>
  }

  export type accountsUpdateOneRequiredWithoutSurveyorNestedInput = {
    create?: XOR<accountsCreateWithoutSurveyorInput, accountsUncheckedCreateWithoutSurveyorInput>
    connectOrCreate?: accountsCreateOrConnectWithoutSurveyorInput
    upsert?: accountsUpsertWithoutSurveyorInput
    connect?: accountsWhereUniqueInput
    update?: XOR<accountsUpdateWithoutSurveyorInput, accountsUncheckedUpdateWithoutSurveyorInput>
  }

  export type dukunganUpdateManyWithoutSurveyorNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutSurveyorInput>, Enumerable<dukunganUncheckedCreateWithoutSurveyorInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutSurveyorInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutSurveyorInput>
    createMany?: dukunganCreateManySurveyorInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutSurveyorInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutSurveyorInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type dukunganUncheckedUpdateManyWithoutSurveyorNestedInput = {
    create?: XOR<Enumerable<dukunganCreateWithoutSurveyorInput>, Enumerable<dukunganUncheckedCreateWithoutSurveyorInput>>
    connectOrCreate?: Enumerable<dukunganCreateOrConnectWithoutSurveyorInput>
    upsert?: Enumerable<dukunganUpsertWithWhereUniqueWithoutSurveyorInput>
    createMany?: dukunganCreateManySurveyorInputEnvelope
    set?: Enumerable<dukunganWhereUniqueInput>
    disconnect?: Enumerable<dukunganWhereUniqueInput>
    delete?: Enumerable<dukunganWhereUniqueInput>
    connect?: Enumerable<dukunganWhereUniqueInput>
    update?: Enumerable<dukunganUpdateWithWhereUniqueWithoutSurveyorInput>
    updateMany?: Enumerable<dukunganUpdateManyWithWhereWithoutSurveyorInput>
    deleteMany?: Enumerable<dukunganScalarWhereInput>
  }

  export type pemilihCreateNestedOneWithoutDukunganInput = {
    create?: XOR<pemilihCreateWithoutDukunganInput, pemilihUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutDukunganInput
    connect?: pemilihWhereUniqueInput
  }

  export type surveyorCreateNestedOneWithoutDukunganInput = {
    create?: XOR<surveyorCreateWithoutDukunganInput, surveyorUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutDukunganInput
    connect?: surveyorWhereUniqueInput
  }

  export type calonCreateNestedOneWithoutDukunganInput = {
    create?: XOR<calonCreateWithoutDukunganInput, calonUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: calonCreateOrConnectWithoutDukunganInput
    connect?: calonWhereUniqueInput
  }

  export type pemilihUpdateOneRequiredWithoutDukunganNestedInput = {
    create?: XOR<pemilihCreateWithoutDukunganInput, pemilihUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: pemilihCreateOrConnectWithoutDukunganInput
    upsert?: pemilihUpsertWithoutDukunganInput
    connect?: pemilihWhereUniqueInput
    update?: XOR<pemilihUpdateWithoutDukunganInput, pemilihUncheckedUpdateWithoutDukunganInput>
  }

  export type surveyorUpdateOneRequiredWithoutDukunganNestedInput = {
    create?: XOR<surveyorCreateWithoutDukunganInput, surveyorUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: surveyorCreateOrConnectWithoutDukunganInput
    upsert?: surveyorUpsertWithoutDukunganInput
    connect?: surveyorWhereUniqueInput
    update?: XOR<surveyorUpdateWithoutDukunganInput, surveyorUncheckedUpdateWithoutDukunganInput>
  }

  export type EnumLevelDukunganFieldUpdateOperationsInput = {
    set?: LevelDukungan
  }

  export type calonUpdateOneRequiredWithoutDukunganNestedInput = {
    create?: XOR<calonCreateWithoutDukunganInput, calonUncheckedCreateWithoutDukunganInput>
    connectOrCreate?: calonCreateOrConnectWithoutDukunganInput
    upsert?: calonUpsertWithoutDukunganInput
    connect?: calonWhereUniqueInput
    update?: XOR<calonUpdateWithoutDukunganInput, calonUncheckedUpdateWithoutDukunganInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumLevelDukunganFilter = {
    equals?: LevelDukungan
    in?: Enumerable<LevelDukungan>
    notIn?: Enumerable<LevelDukungan>
    not?: NestedEnumLevelDukunganFilter | LevelDukungan
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumLevelDukunganWithAggregatesFilter = {
    equals?: LevelDukungan
    in?: Enumerable<LevelDukungan>
    notIn?: Enumerable<LevelDukungan>
    not?: NestedEnumLevelDukunganWithAggregatesFilter | LevelDukungan
    _count?: NestedIntFilter
    _min?: NestedEnumLevelDukunganFilter
    _max?: NestedEnumLevelDukunganFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type calonCreateWithoutAccountInput = {
    id_calon?: string
    dukungan?: dukunganCreateNestedManyWithoutCalonInput
  }

  export type calonUncheckedCreateWithoutAccountInput = {
    id_calon?: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutCalonInput
  }

  export type calonCreateOrConnectWithoutAccountInput = {
    where: calonWhereUniqueInput
    create: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
  }

  export type surveyorCreateWithoutAccountInput = {
    id_surveyor?: string
    dukungan?: dukunganCreateNestedManyWithoutSurveyorInput
  }

  export type surveyorUncheckedCreateWithoutAccountInput = {
    id_surveyor?: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutSurveyorInput
  }

  export type surveyorCreateOrConnectWithoutAccountInput = {
    where: surveyorWhereUniqueInput
    create: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
  }

  export type pemilihCreateWithoutAccountInput = {
    id_pemilih?: string
    dukungan?: dukunganCreateNestedManyWithoutPemilihInput
  }

  export type pemilihUncheckedCreateWithoutAccountInput = {
    id_pemilih?: string
    dukungan?: dukunganUncheckedCreateNestedManyWithoutPemilihInput
  }

  export type pemilihCreateOrConnectWithoutAccountInput = {
    where: pemilihWhereUniqueInput
    create: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
  }

  export type calonUpsertWithoutAccountInput = {
    update: XOR<calonUpdateWithoutAccountInput, calonUncheckedUpdateWithoutAccountInput>
    create: XOR<calonCreateWithoutAccountInput, calonUncheckedCreateWithoutAccountInput>
  }

  export type calonUpdateWithoutAccountInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUpdateManyWithoutCalonNestedInput
  }

  export type calonUncheckedUpdateWithoutAccountInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutCalonNestedInput
  }

  export type surveyorUpsertWithoutAccountInput = {
    update: XOR<surveyorUpdateWithoutAccountInput, surveyorUncheckedUpdateWithoutAccountInput>
    create: XOR<surveyorCreateWithoutAccountInput, surveyorUncheckedCreateWithoutAccountInput>
  }

  export type surveyorUpdateWithoutAccountInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUpdateManyWithoutSurveyorNestedInput
  }

  export type surveyorUncheckedUpdateWithoutAccountInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutSurveyorNestedInput
  }

  export type pemilihUpsertWithoutAccountInput = {
    update: XOR<pemilihUpdateWithoutAccountInput, pemilihUncheckedUpdateWithoutAccountInput>
    create: XOR<pemilihCreateWithoutAccountInput, pemilihUncheckedCreateWithoutAccountInput>
  }

  export type pemilihUpdateWithoutAccountInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUpdateManyWithoutPemilihNestedInput
  }

  export type pemilihUncheckedUpdateWithoutAccountInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    dukungan?: dukunganUncheckedUpdateManyWithoutPemilihNestedInput
  }

  export type accountsCreateWithoutCalonInput = {
    id_account?: string
    full_name: string
    surveyor?: surveyorCreateNestedOneWithoutAccountInput
    pemilih?: pemilihCreateNestedOneWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutCalonInput = {
    id_account?: string
    full_name: string
    surveyor?: surveyorUncheckedCreateNestedOneWithoutAccountInput
    pemilih?: pemilihUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutCalonInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutCalonInput, accountsUncheckedCreateWithoutCalonInput>
  }

  export type dukunganCreateWithoutCalonInput = {
    id_dukungan?: string
    pemilih: pemilihCreateNestedOneWithoutDukunganInput
    surveyor: surveyorCreateNestedOneWithoutDukunganInput
    level_dukungan: LevelDukungan
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUncheckedCreateWithoutCalonInput = {
    id_dukungan?: string
    id_pemilih: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganCreateOrConnectWithoutCalonInput = {
    where: dukunganWhereUniqueInput
    create: XOR<dukunganCreateWithoutCalonInput, dukunganUncheckedCreateWithoutCalonInput>
  }

  export type dukunganCreateManyCalonInputEnvelope = {
    data: Enumerable<dukunganCreateManyCalonInput>
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithoutCalonInput = {
    update: XOR<accountsUpdateWithoutCalonInput, accountsUncheckedUpdateWithoutCalonInput>
    create: XOR<accountsCreateWithoutCalonInput, accountsUncheckedCreateWithoutCalonInput>
  }

  export type accountsUpdateWithoutCalonInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    surveyor?: surveyorUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUpdateOneWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutCalonInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    surveyor?: surveyorUncheckedUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type dukunganUpsertWithWhereUniqueWithoutCalonInput = {
    where: dukunganWhereUniqueInput
    update: XOR<dukunganUpdateWithoutCalonInput, dukunganUncheckedUpdateWithoutCalonInput>
    create: XOR<dukunganCreateWithoutCalonInput, dukunganUncheckedCreateWithoutCalonInput>
  }

  export type dukunganUpdateWithWhereUniqueWithoutCalonInput = {
    where: dukunganWhereUniqueInput
    data: XOR<dukunganUpdateWithoutCalonInput, dukunganUncheckedUpdateWithoutCalonInput>
  }

  export type dukunganUpdateManyWithWhereWithoutCalonInput = {
    where: dukunganScalarWhereInput
    data: XOR<dukunganUpdateManyMutationInput, dukunganUncheckedUpdateManyWithoutDukunganInput>
  }

  export type dukunganScalarWhereInput = {
    AND?: Enumerable<dukunganScalarWhereInput>
    OR?: Enumerable<dukunganScalarWhereInput>
    NOT?: Enumerable<dukunganScalarWhereInput>
    id_dukungan?: StringFilter | string
    id_pemilih?: StringFilter | string
    id_surveyor?: StringFilter | string
    level_dukungan?: EnumLevelDukunganFilter | LevelDukungan
    id_calon?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type accountsCreateWithoutPemilihInput = {
    id_account?: string
    full_name: string
    calon?: calonCreateNestedOneWithoutAccountInput
    surveyor?: surveyorCreateNestedOneWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutPemilihInput = {
    id_account?: string
    full_name: string
    calon?: calonUncheckedCreateNestedOneWithoutAccountInput
    surveyor?: surveyorUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutPemilihInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutPemilihInput, accountsUncheckedCreateWithoutPemilihInput>
  }

  export type dukunganCreateWithoutPemilihInput = {
    id_dukungan?: string
    surveyor: surveyorCreateNestedOneWithoutDukunganInput
    level_dukungan: LevelDukungan
    calon: calonCreateNestedOneWithoutDukunganInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUncheckedCreateWithoutPemilihInput = {
    id_dukungan?: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganCreateOrConnectWithoutPemilihInput = {
    where: dukunganWhereUniqueInput
    create: XOR<dukunganCreateWithoutPemilihInput, dukunganUncheckedCreateWithoutPemilihInput>
  }

  export type dukunganCreateManyPemilihInputEnvelope = {
    data: Enumerable<dukunganCreateManyPemilihInput>
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithoutPemilihInput = {
    update: XOR<accountsUpdateWithoutPemilihInput, accountsUncheckedUpdateWithoutPemilihInput>
    create: XOR<accountsCreateWithoutPemilihInput, accountsUncheckedCreateWithoutPemilihInput>
  }

  export type accountsUpdateWithoutPemilihInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUpdateOneWithoutAccountNestedInput
    surveyor?: surveyorUpdateOneWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutPemilihInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUncheckedUpdateOneWithoutAccountNestedInput
    surveyor?: surveyorUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type dukunganUpsertWithWhereUniqueWithoutPemilihInput = {
    where: dukunganWhereUniqueInput
    update: XOR<dukunganUpdateWithoutPemilihInput, dukunganUncheckedUpdateWithoutPemilihInput>
    create: XOR<dukunganCreateWithoutPemilihInput, dukunganUncheckedCreateWithoutPemilihInput>
  }

  export type dukunganUpdateWithWhereUniqueWithoutPemilihInput = {
    where: dukunganWhereUniqueInput
    data: XOR<dukunganUpdateWithoutPemilihInput, dukunganUncheckedUpdateWithoutPemilihInput>
  }

  export type dukunganUpdateManyWithWhereWithoutPemilihInput = {
    where: dukunganScalarWhereInput
    data: XOR<dukunganUpdateManyMutationInput, dukunganUncheckedUpdateManyWithoutDukunganInput>
  }

  export type accountsCreateWithoutSurveyorInput = {
    id_account?: string
    full_name: string
    calon?: calonCreateNestedOneWithoutAccountInput
    pemilih?: pemilihCreateNestedOneWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutSurveyorInput = {
    id_account?: string
    full_name: string
    calon?: calonUncheckedCreateNestedOneWithoutAccountInput
    pemilih?: pemilihUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutSurveyorInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutSurveyorInput, accountsUncheckedCreateWithoutSurveyorInput>
  }

  export type dukunganCreateWithoutSurveyorInput = {
    id_dukungan?: string
    pemilih: pemilihCreateNestedOneWithoutDukunganInput
    level_dukungan: LevelDukungan
    calon: calonCreateNestedOneWithoutDukunganInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUncheckedCreateWithoutSurveyorInput = {
    id_dukungan?: string
    id_pemilih: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganCreateOrConnectWithoutSurveyorInput = {
    where: dukunganWhereUniqueInput
    create: XOR<dukunganCreateWithoutSurveyorInput, dukunganUncheckedCreateWithoutSurveyorInput>
  }

  export type dukunganCreateManySurveyorInputEnvelope = {
    data: Enumerable<dukunganCreateManySurveyorInput>
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithoutSurveyorInput = {
    update: XOR<accountsUpdateWithoutSurveyorInput, accountsUncheckedUpdateWithoutSurveyorInput>
    create: XOR<accountsCreateWithoutSurveyorInput, accountsUncheckedCreateWithoutSurveyorInput>
  }

  export type accountsUpdateWithoutSurveyorInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUpdateOneWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutSurveyorInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    calon?: calonUncheckedUpdateOneWithoutAccountNestedInput
    pemilih?: pemilihUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type dukunganUpsertWithWhereUniqueWithoutSurveyorInput = {
    where: dukunganWhereUniqueInput
    update: XOR<dukunganUpdateWithoutSurveyorInput, dukunganUncheckedUpdateWithoutSurveyorInput>
    create: XOR<dukunganCreateWithoutSurveyorInput, dukunganUncheckedCreateWithoutSurveyorInput>
  }

  export type dukunganUpdateWithWhereUniqueWithoutSurveyorInput = {
    where: dukunganWhereUniqueInput
    data: XOR<dukunganUpdateWithoutSurveyorInput, dukunganUncheckedUpdateWithoutSurveyorInput>
  }

  export type dukunganUpdateManyWithWhereWithoutSurveyorInput = {
    where: dukunganScalarWhereInput
    data: XOR<dukunganUpdateManyMutationInput, dukunganUncheckedUpdateManyWithoutDukunganInput>
  }

  export type pemilihCreateWithoutDukunganInput = {
    id_pemilih?: string
    account: accountsCreateNestedOneWithoutPemilihInput
  }

  export type pemilihUncheckedCreateWithoutDukunganInput = {
    id_pemilih?: string
    id_account: string
  }

  export type pemilihCreateOrConnectWithoutDukunganInput = {
    where: pemilihWhereUniqueInput
    create: XOR<pemilihCreateWithoutDukunganInput, pemilihUncheckedCreateWithoutDukunganInput>
  }

  export type surveyorCreateWithoutDukunganInput = {
    id_surveyor?: string
    account: accountsCreateNestedOneWithoutSurveyorInput
  }

  export type surveyorUncheckedCreateWithoutDukunganInput = {
    id_surveyor?: string
    id_account: string
  }

  export type surveyorCreateOrConnectWithoutDukunganInput = {
    where: surveyorWhereUniqueInput
    create: XOR<surveyorCreateWithoutDukunganInput, surveyorUncheckedCreateWithoutDukunganInput>
  }

  export type calonCreateWithoutDukunganInput = {
    id_calon?: string
    account: accountsCreateNestedOneWithoutCalonInput
  }

  export type calonUncheckedCreateWithoutDukunganInput = {
    id_calon?: string
    id_account: string
  }

  export type calonCreateOrConnectWithoutDukunganInput = {
    where: calonWhereUniqueInput
    create: XOR<calonCreateWithoutDukunganInput, calonUncheckedCreateWithoutDukunganInput>
  }

  export type pemilihUpsertWithoutDukunganInput = {
    update: XOR<pemilihUpdateWithoutDukunganInput, pemilihUncheckedUpdateWithoutDukunganInput>
    create: XOR<pemilihCreateWithoutDukunganInput, pemilihUncheckedCreateWithoutDukunganInput>
  }

  export type pemilihUpdateWithoutDukunganInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutPemilihNestedInput
  }

  export type pemilihUncheckedUpdateWithoutDukunganInput = {
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type surveyorUpsertWithoutDukunganInput = {
    update: XOR<surveyorUpdateWithoutDukunganInput, surveyorUncheckedUpdateWithoutDukunganInput>
    create: XOR<surveyorCreateWithoutDukunganInput, surveyorUncheckedCreateWithoutDukunganInput>
  }

  export type surveyorUpdateWithoutDukunganInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutSurveyorNestedInput
  }

  export type surveyorUncheckedUpdateWithoutDukunganInput = {
    id_surveyor?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type calonUpsertWithoutDukunganInput = {
    update: XOR<calonUpdateWithoutDukunganInput, calonUncheckedUpdateWithoutDukunganInput>
    create: XOR<calonCreateWithoutDukunganInput, calonUncheckedCreateWithoutDukunganInput>
  }

  export type calonUpdateWithoutDukunganInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    account?: accountsUpdateOneRequiredWithoutCalonNestedInput
  }

  export type calonUncheckedUpdateWithoutDukunganInput = {
    id_calon?: StringFieldUpdateOperationsInput | string
    id_account?: StringFieldUpdateOperationsInput | string
  }

  export type dukunganCreateManyCalonInput = {
    id_dukungan?: string
    id_pemilih: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUpdateWithoutCalonInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    pemilih?: pemilihUpdateOneRequiredWithoutDukunganNestedInput
    surveyor?: surveyorUpdateOneRequiredWithoutDukunganNestedInput
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateWithoutCalonInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_surveyor?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateManyWithoutDukunganInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_pemilih?: StringFieldUpdateOperationsInput | string
    id_surveyor?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganCreateManyPemilihInput = {
    id_dukungan?: string
    id_surveyor: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUpdateWithoutPemilihInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    surveyor?: surveyorUpdateOneRequiredWithoutDukunganNestedInput
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    calon?: calonUpdateOneRequiredWithoutDukunganNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateWithoutPemilihInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_surveyor?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    id_calon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganCreateManySurveyorInput = {
    id_dukungan?: string
    id_pemilih: string
    level_dukungan: LevelDukungan
    id_calon: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type dukunganUpdateWithoutSurveyorInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    pemilih?: pemilihUpdateOneRequiredWithoutDukunganNestedInput
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    calon?: calonUpdateOneRequiredWithoutDukunganNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dukunganUncheckedUpdateWithoutSurveyorInput = {
    id_dukungan?: StringFieldUpdateOperationsInput | string
    id_pemilih?: StringFieldUpdateOperationsInput | string
    level_dukungan?: EnumLevelDukunganFieldUpdateOperationsInput | LevelDukungan
    id_calon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}