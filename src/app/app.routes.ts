import { Routes } from '@angular/router';
import { ProfissionaisComponent } from "./pages/profissionais/profissionais";
import { AgendamentoComponent } from "./pages/agendamento/agendamento";

export const routes: Routes = [
  { path: '', component: ProfissionaisComponent },
  { path: 'agendar/:id', component: AgendamentoComponent },
];