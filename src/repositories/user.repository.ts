import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../config/db.js";
import { CreateUserInput, User } from "../models/user.model.js";

type UserRow = User & RowDataPacket;

export class UserRepository {
    static async getAll(): Promise<User[]> {
        const [rows] = await db.query<UserRow[]>(
            "SELECT id, name, age, email, created_at FROM users ORDER BY id ASC"
        );

        return rows;
    }

    static async getById(id: number): Promise<User | null> {
        const [rows] = await db.query<UserRow[]>(
            "SELECT id, name, age, email, created_at FROM users WHERE id = ?",
            [id]
        );

        return rows[0] ?? null;
    }

    static async create(user: CreateUserInput): Promise<number> {
        const [result] = await db.execute<ResultSetHeader>(
            "INSERT INTO users (name, age, email) VALUES (?, ?, ?)",
            [user.name, user.age, user.email]
        );

        return result.insertId;
    }

    static async update(id: number, user: CreateUserInput): Promise<boolean> {
        const [result] = await db.execute<ResultSetHeader>(
            "UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?",
            [user.name, user.age, user.email, id]
        );

        return result.affectedRows > 0;
    }

    static async delete(id: number): Promise<boolean> {
        const [result] = await db.execute<ResultSetHeader>(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        return result.affectedRows > 0;
    }
}
