import { PatientInfoProps } from "../types/patient";

interface PatientInfoComponentProps {
  selectedPatient: PatientInfoProps | null;
}

const PatientInfo: React.FC<PatientInfoComponentProps> = ({ selectedPatient }) => {
  if (!selectedPatient) {
    return <div>Selecione um paciente para ver as informações</div>;
  }

  return (
    
    <div>
      <h2>Informações do Paciente</h2>
      <p>Nome: {selectedPatient.name}</p>
      <p>Idade: {selectedPatient.age}</p>
      <p>Gênero: {selectedPatient.gender}</p>
    </div>
  );
};

export default PatientInfo;
