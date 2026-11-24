const database = require("../db/conexion_db")

class GastosModel{

     static async obtenerGastos(){
          const [resultado] = await database.query("SELECT monto,nombre FROM transacciones ts INNER join categoria ct on ct.ct_id = ts.ct_id LIMIT 100")
          //[datos][metadatos]
          console.log(resultado)
          return resultado
     }

}

module.exports = GastosModel