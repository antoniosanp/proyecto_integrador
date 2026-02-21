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

export const createPassenger = async (req, res) => {
  try {
    const {name} = req.body

    const result = await pool.query(
      "INSERT INTO passengerlocal (name) VALUES ($1) RETURNING *",
      [name]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creando passenger" })
  }
}