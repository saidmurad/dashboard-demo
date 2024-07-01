// chart-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChartData {
  date: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  private apiUrl = 'http://localhost:8080/api/chart-data';

  constructor(private http: HttpClient) { }

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>(this.apiUrl);
  }
}
