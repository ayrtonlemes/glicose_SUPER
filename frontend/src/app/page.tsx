'use client'

import { useEffect, useState } from "react";
import PatientMetrics from "./components/PatientMetrics";
import { getAllPatients, PatientsProps } from "./services/getAllPatients";
import { PatientInfoProps } from "./types/patient";
import PatientInfo from "./components/PatientInfo";

export default function Home() {
  const [patients, setPatients] = useState<PatientInfoProps[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientsProps | null>(null);
  const [patientsMetrics, setPatientsMetrics] = useState<PatientsProps[] | null>(null);

  const handleSelectPatient = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const patientId = Number(event.target.value);
    const patient = patientsMetrics?.find((p) => p.patient.id === patientId) || null;
    setSelectedPatient(patient);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getAllPatients();
        setPatientsMetrics(patientsData);
 
        setPatients(patientsData.map((p) => p.patient));
      } catch (error) {
        console.log("Erro ao carregar os dados dos pacientes.");
      }
    };
    fetchPatients();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Patient Dashboard</h1>
      <select id="patient_selector" onChange={handleSelectPatient}>
        <option value="">Selecione um paciente</option>
        {patients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      {selectedPatient && (
        <>
          <PatientInfo selectedPatient={selectedPatient.patient} />
          <PatientMetrics selectedPatient={selectedPatient} />
        </>
      )}
    </div>
  );
}
