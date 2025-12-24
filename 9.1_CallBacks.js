// Ejemplo de callback

const saludar = (nombre) => console.log(`Hola ${nombre}`)
const despedir = (nombre) => console.log(`Adios ${nombre}`)

const procesaUsuario = (nombre, callback) => {
    console.log('Procesando usuario...')
    callback(nombre)
}

// Saludar y despedir son callbacks, procesaUsuario recibe un callback y lo ejecuta despues de procesar al usuario.

procesaUsuario('Ana', saludar)
procesaUsuario('Mike', despedir)

// Funcion setTimeOut

const miFuncion = () => {console.log('han pasado 2 segundos!')}

console.log('Inicio')
setTimeout(miFuncion, 2000)
console.log('Fin')



