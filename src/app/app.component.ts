import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// Shift + alt + f
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  body = {
    tipo: '',
    emp: '',
    suc: '',
    usu: '',
    pas: '',
    cns: ''
  };
  resultados;
  url = 'http://getpost.si-nube.appspot.com/getpost';
  constructor(private http: HttpClient) {
    this.connectPost();
  }
  connectPost() {
    this.http.post<any>(this.url, this.body).subscribe(data => { this.resultados = data; }, err => { console.log(err.message); }, () => { console.log('completed'); });

  }
}
