import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfissionaisService } from '../../services/profissionais-service';
import { Psicologo } from '../../interface/profissionais';

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profissionais.html',
  styleUrls: ['./profissionais.css']
})
export class ProfissionaisComponent implements OnInit {

  profissionais: Psicologo[] = [];

  constructor(
    private router: Router,
    private profissionaisService: ProfissionaisService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.profissionaisService.listar().subscribe({
      next: (res: Psicologo[]) => {
        this.profissionais = res;
        console.log('Profissionais recebidos:', this.profissionais);
        this.cd.detectChanges(); // força Angular a atualizar o template
      },
      error: (err) => console.error('Erro ao buscar profissionais', err)
    });
  }

  irParaAgendamento(id: number) {
    this.router.navigate(['/agendar', id]);
  }
}