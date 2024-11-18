//list all patients. Only info.

import { getAllPatients } from "../services/getPatients"

interface PatientsProps {
    id: number,
    name: string,
    age: number,
    gender: string,
}

export default function Patients() {

    const listPatients = getAllPatients();

    return (
        <>
        Teste
        </>
    )
}