import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Lista de países';

  private url: string = "https://restcountries.eu/rest/v2/all";
  public countries = "";

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    this.carregarRegistros();
  }

  carregarRegistros() {
    this.http.get(this.url).subscribe(
      data => {
        const response = (data as any);
        console.log(response);
        this.countries = response;
      }, error => {
        console.log(error);
      }
    )
  }
}
