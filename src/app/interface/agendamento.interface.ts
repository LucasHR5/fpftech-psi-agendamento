export interface Agendamento {
  id?: number;
  psicologo_id: number;
  cliente_id: number;
  disponibilidade_id: number;
  tipo_consulta: string;
  confirmado: boolean;
}