import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiResponse } from "../models/api-response.model";

@Injectable({
  providedIn: "root",
})
export class GenericApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public post<T, S>(
    postObj: T,
    api: string,
  ): Observable<ApiResponse<S>> {
    return this.http.post<ApiResponse<S>>(`${api}`, postObj).pipe(
      map(res => {
        return res;
      })
    );
  }

  public get<S>(
    api: string,
  ): Observable<ApiResponse<S>> {
    return this.http.get<ApiResponse<S> | any>(`${api}`).pipe(
      map(res => {
        return res;
      })
    );
  }

  public put<T, S>(
    postObj: T,
    api: string
  ): Observable<ApiResponse<S>> {
    return this.http.put<ApiResponse<S>>(`${api}`, postObj).pipe(
      map(res => {
        return res;
      })
    );
  }

  public delete<S>(
    api: string,
  ): Observable<ApiResponse<S>> {
    return this.http.delete<ApiResponse<S>>(`${api}`).pipe(
      map(res => {
        return res;
      })
    );
  }

}
