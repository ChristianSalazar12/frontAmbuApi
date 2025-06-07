export interface Auxiliar {
  id?: number; // si el backend lo devuelve
  name: string;
  last_name: string;
  document: string;
  no_ci_auxiliar: string;
  no_ci_soporte_vital: string;
  password: string;
  role: 'USER' | 'ADMIN';
}
