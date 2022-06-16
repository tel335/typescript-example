import { Estudiante } from './student.interface'

function printStudentInfo (studentData:Estudiante):void {
    if (!studentData) return
    for (const ramo of studentData.ramos) {
        console.log(`Nombre: ${studentData.nombre}, Ramo cursado: ${ramo.sigla}`)
    }
}

export { printStudentInfo }