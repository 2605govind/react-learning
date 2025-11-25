import jwt from 'jsonwebtoken'
import 'dotenv/config'

const Jwt_SECRET = process.env.Jwt_SECRET as string;

export const generateToken = (user: any) => {
    return jwt.sign({user}, Jwt_SECRET, {expiresIn: '15d'})
}