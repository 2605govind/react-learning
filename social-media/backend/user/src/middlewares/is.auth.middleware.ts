import type { NextFunction, Request, Response} from "express";
import type { IUser } from "../model/user.model.js";
import jwt, { type JwtPayload } from "jsonwebtoken"

export interface authenticatedRequest extends Request{
    user?: IUser | null;
}

export const isAuth = async(req: authenticatedRequest, res: Response, next:NextFunction): Promise<void> => {
    try {

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please Login - No auth header"
            })
            return;
        }

        const token = authHeader.split(" ")[1] as string;
        
        const decodedValue = jwt.verify(token, process.env.Jwt_SECRET as string) as JwtPayload;
        
        if(!decodedValue || !decodedValue?.user) {
            res.status(401).json({
                message: "Invalid token"
            })
            return;
        }

        req.user = decodedValue.user;
    } catch (error) {
        res.status(401).json({
            message: "Please Login - JWT error"
        })
    }
}