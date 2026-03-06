import 'dotenv/config';
import app from './app';
import { connectDB } from './config/database';

const PORT = process.env.PORT || 4000;

// Conectar DB antes de subir el server
connectDB();

app.listen(PORT, () => {
  console.log(`💎 Server corriendo en: http://localhost:${PORT}`);
});