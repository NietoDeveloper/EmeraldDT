import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

// --- CONFIGURACIÓN DE RUTAS Y DB (Extensiones .js obligatorias en ESM) ---
import { userDB, emeraldDB } from './config/dbConn.js'; 
import corsOptions from './config/corsOptions.js';
import { unknownEndpoint } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

// Setup para __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();
const PORT = process.env.PORT || 4000;

// --- 1. SEGURIDAD DE ALTA INGENIERÍA ---
app.use(helmet({ contentSecurityPolicy: false })); 
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')); 
app.use(cors(corsOptions));

// --- 2. MIDDLEWARES BASE ---
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// --- 3. ENDPOINTS DE CONTROL ---
app.get('/health', (_req: Request, res: Response) => res.status(200).send('OK'));
app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ 
        status: 'Operational', 
        service: 'Emerald DT Security Cluster',
        engineer: 'Nieto Code | Software DT',
        env: process.env.NODE_ENV || 'development'
    });
});

// --- 4. MANEJO DE ERRORES Y NOT FOUND ---
app.use(unknownEndpoint);
app.use(errorHandler);

// --- 5. ARRANQUE DEL SISTEMA (DOUBLE CLUSTER) ---
const startServer = async () => {
    try {
        console.log('💎 Sincronizando Datacenters Emerald DT...');
        
        // Helper para conectar clusters de forma asíncrona
        const connectCluster = (db: any, name: string) => new Promise<void>((resolve, reject) => {
            if (db.readyState === 1) return resolve();
            db.once('open', () => {
                console.log(`📡 Conexión establecida: ${name}`);
                resolve();
            });
            db.on('error', (err: any) => {
                console.error(`❌ Error en ${name}:`, err);
                reject(err);
            });
        });

        // Doble Cluster: Auth y Esmeraldas
        await Promise.all([
            connectCluster(userDB, 'UserDB (Auth & Employees)'),
            connectCluster(emeraldDB, 'EmeraldDB (Products & Catalog)')
        ]);
        
        app.listen(PORT, () => {
            console.log('----------------------------------------------------');
            console.log(`🚀 EMERALD DT OPERATIVO EN PUERTO: ${PORT}`);
            console.log(`📈 ESTADO: Clase Mundial | BOGOTÁ, COLOMBIA`);
            console.log('----------------------------------------------------');
        });
    } catch (err: any) {
        console.error('💥 FALLO CRÍTICO EN CLUSTER:', err.message);
        process.exit(1);
    }
};

startServer();