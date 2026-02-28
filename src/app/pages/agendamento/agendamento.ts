import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento.html',
  styleUrls: ['./agendamento.css']
})
export class AgendamentoComponent implements OnInit {

  psicologoId!: number;

  clientes: any[] = [];
  disponibilidades: any[] = [];

  clienteId!: number;
  disponibilidadeSelecionada!: number;
  tipoConsulta: string = 'presencial';
  confirmado: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private agendamentoService: AgendamentoService
  ) {}

  ngOnInit(): void {
    this.psicologoId = Number(this.route.snapshot.paramMap.get('id'));

    this.carregarClientes();
    this.carregarDisponibilidades();
  }

  carregarClientes() {
    this.agendamentoService.buscarClientes()
      .subscribe({
        next: (res) => {
          this.clientes = res;
        },
        error: (err) => {
          console.error('Erro ao buscar clientes', err);
        }
      });
  }

  carregarDisponibilidades() {
    this.agendamentoService.buscarDisponibilidades(this.psicologoId)
      .subscribe({
        next: (res) => {
          this.disponibilidades = res;
        },
        error: (err) => {
          console.error('Erro ao buscar disponibilidades', err);
        }
      });
  }

  confirmarAgendamento() {

    if (!this.clienteId || !this.disponibilidadeSelecionada) {
      alert('Selecione cliente e horário');
      return;
    }

    const novoAgendamento = {
      psicologo_id: this.psicologoId,
      cliente_id: Number(this.clienteId),
      disponibilidade_id: Number(this.disponibilidadeSelecionada),
      tipo_consulta: this.tipoConsulta,
      confirmado: this.confirmado
    };

    console.log('Enviando:', novoAgendamento);

    this.agendamentoService.criarAgendamento(novoAgendamento)
      .subscribe({
        next: () => {
          alert('Agendamento realizado com sucesso!');
        },
        error: (err) => {
          console.error('Erro backend:', err.error);
        }
      });
  }
}