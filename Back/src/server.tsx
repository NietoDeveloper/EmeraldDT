import 'dotenv/config';
import app from './app.js'; // Ajuste: Agregada extensión .js
import { connectDB } from './config/database.js'; // Ajuste: Agregada extensión .js

const PORT = process.env.PORT || 4000;

/**
 * Emerald DT - Bootstrapping de Ingeniería
 * Iniciamos la conexión al clúster antes de abrir el puerto
 */
const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`
      ==================================================
      💎 EMERALD DT - SECURITY CLUSTER ACTIVE
      🚀 Server: http://localhost:${PORT}
      🛡️  Nieto Laboratory Protocol v1.0
      ==================================================
      `);
    });
  } catch (error) {
    console.error('❌ Fallo crítico en el arranque:', error);
    process.exit(1);
  }
};

startServer();