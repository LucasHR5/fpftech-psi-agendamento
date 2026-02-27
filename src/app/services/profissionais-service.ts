import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologo } from '../interface/profissionais';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/psicologos/';

  listar(): Observable<Psicologo[]> {
    return this.http.get<Psicologo[]>(this.apiUrl);
  }
}