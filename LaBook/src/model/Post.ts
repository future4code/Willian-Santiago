export enum POST_TYPES{
    NORMAL = "NORMAL",
    ESSENCE = "ESSENCE"
}

export interface post {
    userId: string,
    id: string,
    photo: string,
    description: string,
    dateCreate: Date,
    type: POST_TYPES
}

export interface createPostInput {
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}