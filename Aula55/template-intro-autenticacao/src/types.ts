export interface authenticationData {
   id:string
}

export interface user  {
   id: string
   email: string
   name: string
   nickname: string
}

export type User = {
   id: string,
   name: string,
   email: string,
   password: string
}