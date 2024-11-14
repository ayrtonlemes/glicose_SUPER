import { MedicalValuesProps, PatientInfoProps } from "../types/patient"

export interface PatientProps {
    id:number,
    name: string,
    age: number,
    gender: string,
    metrics: MedicalValuesProps,
}


export const getAllPatients  = async (): Promise<PatientProps[]> => {
    try {
        const response = await fetch("http://localhost:5000/patients")
        if(!response) {
            throw new Error("Erro ao fetch de todos os pacientes.")}
        const data:PatientProps[] = await response.json()
        return data;
    } catch (error) {
        console.log("Erro ao tentar obter todos os pacientes:", error)
        return [];
    }

}