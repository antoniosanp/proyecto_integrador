import { pool } from "../config/db.js";

export const getPassengers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM passengerlocal")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error obteniendo pasajeros" })
  }
}