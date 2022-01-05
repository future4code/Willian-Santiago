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