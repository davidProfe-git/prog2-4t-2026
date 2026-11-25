const categoria = document.getElementById('categoria')
const gastos = document.getElementById('gastos')

fetch('http://localhost:4000/api/categorias')
  .then(respuesta => respuesta.json())
    .then(datos => {
    

        for(i=0;i < datos.length; i++){
            categoria.innerHTML += `<option>${datos[i].nombre}</option>`
        }       
    
    })



    fetch('http://localhost:4000/api/gastos')
  .then(respuesta => respuesta.json())
    .then(datos => {
    

        for(i=0;i < datos.length; i++){
            gastos.innerHTML += `  
              <div  class="registro">
               <span>${datos[i].monto}</span>
                <span>${datos[i].nombre}</span>
                <div>
                <button>
                <span class="material-symbols-outlined">delete</span>
                </button>
                <button>
                    <span class="material-symbols-outlined">edit</span>
                </button>

                </div>
             
            </div>`
        }       
    
    })