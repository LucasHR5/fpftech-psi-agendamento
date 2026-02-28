import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/clientes/';

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}