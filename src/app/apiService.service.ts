import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options:string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


  getData(search:string):Observable<string[]> {
    return  of(this.options.filter((value) =>value.toLowerCase().includes(search.toLowerCase())));
  }
}
