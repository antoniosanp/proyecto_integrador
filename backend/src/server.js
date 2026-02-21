import "dotenv/config";

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB(); // Primero conectamos la base

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
};

startServer();