export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    created_at?: Date | string;
}

export interface CreateUserInput {
    name: string;
    age: number;
    email: string;
}
