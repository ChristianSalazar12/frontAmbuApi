export interface Attention {
  id?: number;
  date: string; // ISO date string, e.g. "2025-04-17T10:00:00Z"
  status: 'PENDIENTE' | 'COMPLETADO' | 'CANCELADO'; // Podrías usar un enum o string
  time_arrived: string; // ISO date string
  time_finish: string; // ISO date string
  code_start: string;
  code_end: string;
  place_accident: string;
  nro_informe: string;
  id_turno: number;
  id_paciente: number;
  id_descripcion: number;
}
