import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissionais',
  standalone: true,
  templateUrl: './profissionais.html',
  styleUrls: ['./profissionais.css']
})
export class ProfissionaisComponent {
  constructor(private router: Router) {}

  irParaAgendamento() {
    this.router.navigate(['/agendamento']);
  }
}