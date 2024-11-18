export interface MedicalValuesProps {
    heartRate: string,
    bloodPressure: string,
    oxygenSaturation: string,
}

export interface PatientInfoProps {
    id: number,
    name: string,
    age: number,
    gender: string,
}

export interface HeartValueProps {
    id: number,
    idPacient: number,
    date: string[],
    time: string[],
    SDNN: number[],
    NN50: number[],
    PNN50: number[],
    RMSSD: number[],
    HRMax_Min: number[],
    HeartValuesF: HeartValueFreqProps,
}

interface HeartValueFreqProps {
    VLF_Power: number[],
    LF_Power: number[],
    HF_Power: number[],
    LF_HF_Peak:number[],
    LF_HF: number[]
}
