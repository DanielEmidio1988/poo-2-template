import { BaseDatabase } from "./BaseDatabase";
import { TUserDB } from "../types";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public async findUsers(q:string | undefined){
        let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            usersDB = result
        }
        return usersDB
    }

    public async findUsersById(id:string){
        const [userDB]:TUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS).where({id}) 

        return userDB
    }

    public async insertUser(newUserDb: TUserDB){
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(newUserDb)
    }
}
