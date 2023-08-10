import { Response } from 'express';

export const successHandler = (
    res: Response,
    data?: unknown,
    message?: string
) => {
    console.info(res.req.method, res.req.baseUrl, 'Ok');
    res.status(200).json({
        data,
        message: message || 'Successful',
        error: null,
    });
};

export const errorHandler = (
    res: Response,
    error?: Error | unknown,
    message?: string
) => {
    console.error(res.req.method, res.req.baseUrl, res.req.body, error);
    res.status(500).json({
        error,
        message:
            message || (error as Error)?.message || 'Something went wrong.',
        data: null,
    });
};
