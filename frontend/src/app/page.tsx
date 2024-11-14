'use client'

import { useEffect, useState } from "react";
import PatientMetrics from "./components/PatientMetrics";
import { getAllPatients, PatientProps } from "./services/getAllPatients";
import PatientInfo from "./components/PatientInfo";

export default function Home() {
  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientProps | null>(null);

  const handleSelectPatient = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const patientId = Number(event.target.value);
    const patient = patients.find((p) => p.id === patientId) || null;
    setSelectedPatient(patient);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getAllPatients();
        setPatients(patientsData);  // Use o JSON diretamente como o estado `patients`
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
          <PatientInfo selectedPatient={selectedPatient} />
          <PatientMetrics selectedPatient={selectedPatient} />
        </>
      )}
    </div>
  );
}
