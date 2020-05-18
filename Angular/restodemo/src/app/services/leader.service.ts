import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";

import { Observable,of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { baseURL } from '../shared/baseurl';
import { ProcessHttpMsgService } from "./process-http-msg.service";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processMsgService: ProcessHttpMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processMsgService.handleError));
    
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true')
      .pipe(map(leadership => leadership[0]))
      .pipe(catchError(this.processMsgService.handleError));
  }

}
