import { CreateUserInput, User } from "../models/user.model.js";
import { UserRepository } from "../repositories/user.repository.js";

export class UserService {
    static async getAll(): Promise<User[]> {
        return await UserRepository.getAll();
    }

    static async getById(id: number): Promise<User> {
        const user = await UserRepository.getById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    static async create(payload: unknown): Promise<User> {
        const user = parseUserInput(payload);
        const id = await UserRepository.create(user);

        return {
            id,
            ...user
        };
    }

    static async update(id: number, payload: unknown): Promise<User> {
        const user = parseUserInput(payload);
        const updated = await UserRepository.update(id, user);

        if (!updated) {
            throw new Error("User not found");
        }

        return {
            id,
            ...user
        };
    }

    static async delete(id: number): Promise<boolean> {
        const deleted = await UserRepository.delete(id);

        if (!deleted) {
            throw new Error("User not found");
        }

        return true;
    }
}

function parseUserInput(payload: unknown): CreateUserInput {
    if (!payload || typeof payload !== "object") {
        throw new Error("Request body must be an object");
    }

    const { name, age, email } = payload as Record<string, unknown>;
    const parsedAge = typeof age === "number" ? age : Number(age);
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (typeof name !== "string" || !name.trim()) {
        throw new Error("Name is required");
    }

    if (!Number.isInteger(parsedAge) || parsedAge < 0) {
        throw new Error("Age must be a non-negative integer");
    }

    if (!normalizedEmail) {
        throw new Error("Email is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        throw new Error("Email is invalid");
    }

    return {
        name: name.trim(),
        age: parsedAge,
        email: normalizedEmail
    };
}
