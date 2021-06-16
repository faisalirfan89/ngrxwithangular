import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { book } from "../model/book";

@Injectable({
    providedIn: 'root'
  })
  export class BooksService {
    constructor (private http: HttpClient) {}
  
    getAll() {
      return this.http.get<book[]>('http://localhost:5000/api/Books/');
    }
    post(book:book) {
        return this.http.post<book>('http://localhost:5000/api/Books/',book);
      }
    get(id:number) {
        return this.http.get<book>('http://localhost:5000/api/Books/'+id.toString()+'/');
    }
    delete(id:number) {
        return this.http.delete('http://localhost:5000/api/Books/'+id.toString()+'/');
    }
    put(book:book) {
        debugger;
        return this.http.put('http://localhost:5000/api/Books/'+book.id.toString()+'/',book);
    }
  }