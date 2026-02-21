import { Pool } from "pg";


export const pool = new Pool({
    connectionString: process.env.DATABASE_URL1
})


export const connectDB = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Conectado a PostgreSQL correctamente");
  } catch (error) {
    console.error("❌ Error conectando a PostgreSQL:", error.message);
    process.exit(1);
  }
};

