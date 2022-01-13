
import { config } from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticatorData } from "../model/User"

config()

export class Authenticator{

    generateToken = (
        payload: authenticatorData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "12h"
            }
        )
    }

    getTokenData = (token: string): authenticatorData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload
            
            return {
                id: tokenData.id,
                role: tokenData.role
            } 
            } catch (error: any) {
                throw new Error(error.message)
        }
    }
}