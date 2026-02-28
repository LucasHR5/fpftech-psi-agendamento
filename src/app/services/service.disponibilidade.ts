import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibilidade } from '../interface/disponibilidade';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {

  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/disponibilidades/';

  listarPorPsicologo(psicologoId: number): Observable<Disponibilidade[]> {
    return this.http.get<Disponibilidade[]>(
      `${this.apiUrl}?psicologo=${psicologoId}`
    );
  }
}