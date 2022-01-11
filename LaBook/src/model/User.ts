export interface AuthenticatorData {
    id: string
}

export interface userCredencials{
    email: string,
    password: string
}

export interface user extends AuthenticatorData, userCredencials{
    name: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface SignUpInput {
    name: string,
    email: string,
    password: string
}

export interface LoginInput {
    email: string,
    password: string
}

export function toUserModel(obj: any): User {
    return obj && {
        id: obj.id,
        email: obj.email,
        name: obj.name,
        password: obj.passsword
    }
}