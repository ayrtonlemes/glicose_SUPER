import { FoodLogProps, HeartValueProps, PatientInfoProps, SensorsProps } from "../types/patient";



export const getPatientById = async (id: number) => {
    try {
        const response = await fetch("http://localhost:5000/patients?x");
        if (!response.ok) {
          throw new Error("Erro ao fetch de todos os pacientes.");
        }
    
        const data = await response.json();
    
        return {
            patient: data.patient.find((p:PatientInfoProps) => p.id === id),
            patient_data : data.patient_data.filter((pd: HeartValueProps) => pd.idPatient === id),
            food_log: data.food_log.filter((fl: FoodLogProps) => fl.idPatient === id),
            sensors: data.sensors.filter((s: SensorsProps) => s.idPatient === id)
        }        
      } catch (error) {
        console.log("Erro ao tentar obter dados do paciente:", error);
        return [];
      }
}