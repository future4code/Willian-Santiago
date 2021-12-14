export enum USER_ROLES{
   GUEST = "GUEST",
   ADMIN = "ADMIN"
}

export interface authenticationData {
   id:string,
   role: USER_ROLES
}

// export interface user extends authenticationData {
//    id: string
//    email: string
//    name: string
//    nickname: string
// }

export interface user extends authenticationData {
   name: string,
   email: string,
   password: string
}