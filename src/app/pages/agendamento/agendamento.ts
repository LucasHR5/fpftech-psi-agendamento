import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento.html'
})
export class AgendamentoComponent {
  confirmado = false;

  confirmar() {
    this.confirmado = true;
  }
}