
import { config } from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticatorData } from "../model/User"

config()

export class Authenticator{

    generateToken = (
        payload: AuthenticatorData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "12h"
            }
        )
    }

    getTokenData = (token: string): AuthenticatorData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload
            
            return {
                id: tokenData.id
            } 
            } catch (error) {
                return null
        }
    }
}