import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { GenericApiService } from "../../services/api.service";
import { Example } from "./example.model";

@Injectable()
export class ExampleService {
  constructor(
    private api: GenericApiService
  ) { }

  getAll(): Observable<Example[]> {
    return this.api.get<Example[]>('get-all')
      .pipe(map(response => response.payload));
  }
}
