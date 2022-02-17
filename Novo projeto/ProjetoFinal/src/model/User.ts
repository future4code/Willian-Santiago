export enum POST_TYPES{
    NORMAL = "NORMAL"
}

export interface authenticatorData {
    id: string,
    role: "NORMAL"
}

export interface userCredentials {
    email: string,
    password: string
}

export interface user extends authenticatorData, userCredentials {
    name: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
}

export interface SignUpInput {
    name: string,
    email: string,
    password: string,
    role: POST_TYPES
}