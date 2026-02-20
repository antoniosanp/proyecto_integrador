import pool from "./db.js"

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()')
    console.log('Conexión exitosa ✅')
    console.log(res.rows)
  } catch (error) {
    console.error('Error de conexión ❌', error)
  } finally {
    await pool.end()
  }
}

testConnection()