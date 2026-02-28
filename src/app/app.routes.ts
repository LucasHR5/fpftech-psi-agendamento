import { Routes } from '@angular/router';
import { ProfissionaisComponent } from "./pages/profissionais/profissionais";
import { AgendamentoComponent } from "./pages/agendamento/agendamento";
import { ProfissionaisListComponent } from "./pages/profissionais-list/profissionais-list";

export const routes: Routes = [
  {
    path: '',
    component: ProfissionaisComponent,
    children: [
      {
        path: '',
        component: ProfissionaisListComponent
      },
      {
        path: 'agendar/:id',
        component: AgendamentoComponent
      }
    ]
  }
];