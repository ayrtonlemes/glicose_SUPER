// src/components/PatientMetrics.tsx
import { PatientsProps } from "../services/getAllPatients";

interface PatientMetricsComponentProps {
  selectedPatient: PatientsProps | null;
}

const PatientMetrics: React.FC<PatientMetricsComponentProps> = ({ selectedPatient }) => {
  if (!selectedPatient) {
    return <div>Selecione um paciente para ver as métricas</div>;
  }

  return (
    <div>
      <h2>Métricas do Paciente</h2>
      <p>Frequência Cardíaca: {selectedPatient.metrics.heartRate}</p>
      <p>Pressão Arterial: {selectedPatient.metrics.bloodPressure}</p>
      <p>Saturação de Oxigênio: {selectedPatient.metrics.oxygenSaturation}</p>
    </div>
  );
};

export default PatientMetrics;
