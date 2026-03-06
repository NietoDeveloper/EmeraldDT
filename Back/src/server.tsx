import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

import { userDB, emeraldDB } from './config/dbConn.js'; 
import corsOptions from './config/corsOptions.js';
import { unknownEndpoint } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Security & Logging
app.use(helmet({ contentSecurityPolicy: false })); 
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')); 
app.use(cors(corsOptions));

// Base Middlewares
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Control Endpoints
app.get('/health', (_req: Request, res: Response) => res.status(200).send('OK'));
app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ 
        status: 'Operational', 
        service: 'Emerald DT Security Cluster',
        engineer: 'Nieto Code | Software DT',
        env: process.env.NODE_ENV || 'development'
    });
});

// Error Handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Double Cluster Initialization
const startServer = async () => {
    try {
        console.log('💎 Synchronizing Emerald DT Datacenters...');
        
        const connectCluster = (db: any, name: string) => new Promise<void>((resolve, reject) => {
            if (db.readyState === 1) return resolve();
            db.once('open', () => {
                console.log(`📡 Connection Established: ${name}`);
                resolve();
            });
            db.on('error', (err: any) => {
                console.error(`❌ ${name} Error:`, err);
                reject(err);
            });
        });

        await Promise.all([
            connectCluster(userDB, 'UserDB (Auth & Employees)'),
            connectCluster(emeraldDB, 'EmeraldDB (Products & Catalog)')
        ]);
        
        app.listen(PORT, () => {
            console.log('----------------------------------------------------');
            console.log(`🚀 EMERALD DT OPERATIONAL ON PORT: ${PORT}`);
            console.log(`📈 STATUS: World Class | BOGOTÁ, COLOMBIA`);
            console.log('----------------------------------------------------');
        });
    } catch (err: any) 
};

startServer();