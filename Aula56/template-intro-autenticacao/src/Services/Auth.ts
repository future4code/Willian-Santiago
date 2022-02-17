import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator {

    generateToken = (
        payload: authenticationData
    ) => {
        const token = sign(
            payload,
            process.env.JWT_SECRET
        )

        return token;
    }


    getTokenData = (token: string): authenticationData => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_SECRET
            ) as JwtPayload

            return {
                id:tokenData.id,
                role: tokenData.role
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

