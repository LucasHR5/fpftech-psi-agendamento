import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './profissionais.html',
  styleUrls: ['./profissionais.css']
})
export class ProfissionaisComponent {

  constructor(public router: Router) {}

  // Método já existente
  isAgendamento(): boolean {
    return this.router.url.includes('agendar');
  }

  // ✅ Novo método para redirecionar
  irParaAgendamento(id: number | string): void {
    this.router.navigate(['/agendar', id]);
  }

}