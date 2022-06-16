import { printStudentInfo } from './printData'
import { Estudiante } from './student.interface'

const student:Estudiante = {
    nombre: 'Nicolas',
    rol: '11111-1',
    edad: 25,
    hoobie: 'surf',
    ramos: [
        {
            sigla: 'TEL-335',
            creditos: 4
        },
        {
            sigla: 'ELO-329',
            creditos: 4
        }
    ]
}

printStudentInfo(student)
