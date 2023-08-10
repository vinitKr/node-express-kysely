import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ApiController from './api';
// import cors from 'cors';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.apiConfig();
    }

    private config() {
        // set environment variables
        dotenv.config();

        // Cross-origin config
        // this.app.use(cors({
        //     origin: 'http://localhost:4200',
        //     optionsSuccessStatus: 200
        // }))

        // Parsers for POST data
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private apiConfig() {
        ApiController.configureRoutes(this.app);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                    resolve(port);
                })
                .on('error', (err) => reject(err));
        });
    };
}

export default new Server();
