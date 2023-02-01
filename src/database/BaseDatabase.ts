import { knex } from "knex"

// export const db = knex({
//     client: "sqlite3",
//     connection: {
//         filename: "./src/database/poo.db",
//     },
//     useNullAsDefault: true,
//     pool: { 
//         min: 0,
//         max: 1,
//         afterCreate: (conn: any, cb: any) => {
//             conn.run("PRAGMA foreign_keys = ON", cb)
//         }
//     }
// })

export abstract class BaseDatabase{
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
    }

    //abstract deixa não instanciavel

    // const baseDatabase = new BaseDatabase() //vai dar erro por causa do protect
    //static vfaz o dado não ser acessado via instancia
//    BaseDatabase.connection()