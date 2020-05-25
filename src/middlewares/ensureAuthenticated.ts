import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../erros/AppError';
import authConfig from '../config/auth';

interface ITokenPayLoad {
    iat: number;
    exp: number;
    sub: string;
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Authentication token is missing.', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        console.log(decoded);

        const { sub } = decoded as ITokenPayLoad;

        req.user = {
            id: sub,
        };

        return next();
    } catch (error) {
        throw new AppError('Authentication token is missing.', 401);
    }
}

export default ensureAuthenticated;
