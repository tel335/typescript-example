export interface Ramo {
    sigla:string,
    creditos:number
}

export interface Estudiante {
    nombre:string,
    rol:string,
    edad:number,
    hoobie?:string, // ? significa opcional, es decir, no es necesario ingresar el valor del atributo
    ramos:Ramo[]    // Arreglo de ramos
}
