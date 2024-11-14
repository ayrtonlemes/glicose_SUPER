import { MedicalValuesProps, PatientInfoProps } from "../types/patient"

export interface PatientsProps {
    patient: PatientInfoProps,
    metrics: MedicalValuesProps,
}


export const getAllPatients  = async (): Promise<PatientsProps[]> => {
    try {
        const response = await fetch("http://localhost:5000/patients")
        if(!response) {
            throw new Error("Erro ao fetch de todos os pacientes.")}
        const data:PatientsProps[] = await response.json()
        return data;
    } catch (error) {
        console.log("Erro ao tentar obter todos os pacientes:", error)
        return [];
    }

}