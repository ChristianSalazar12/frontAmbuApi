export interface Paramedic {
  id?: number;
  name: string; // First name / Nombre
  last_name: string; // Last name / Apellido
  document: string; // ID number / Número de documento
  tipo_medic: string; // Type of medic / Tipo de médico
  no_ci_medic: string; // Medical certificate number / Número de CI
  id_capacitation: string; // Training ID / ID de capacitación
  password: string; // Login password / Contraseña
  role: 'USER' | 'ADMIN'; // User role / Rol del usuario
}
