import { pool } from "../config/db.js";

export const getDrivers = async (req,res)=>{

    try{
        const result = pool.query(SELECT * FROM )//hacer la queary
        res.json(result.rows)
    }
    catch(error) {
    console.error(error)
    res.status(500).json({ message: "Error obteniendo pasajeros" })
  }

}

export const createDriver = async (req,res) =>{
    try{
    const {name} = req.body
    const result = await pool.query(INSERT)

    res.status(201).json(result.rows[0])
    } 

    catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creando driver" })
    }
    
    
}

