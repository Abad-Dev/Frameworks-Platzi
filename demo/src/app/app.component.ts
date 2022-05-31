import { Component } from '@angular/core';

type Movie = {
  name: String,
  available: number,
  img: String
}

type Movies = Array<Movie>

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Películas';
  movies: Movies = [
    {
      name: 'Avengers',
      available: 3,
      img: 'https://pm1.narvii.com/6898/90ca2f233315eaf4abc92dfee1d2ded86a013c0cr1-1000-1500v2_hq.jpg',
    },
    {
      name: 'Terminator',
      available: 5,
      img: 'https://phantom-marca.unidadeditorial.es/5bc7c319dd5eaef9f50904b674261e71/assets/multimedia/imagenes/2020/01/31/15804900436112.jpg'
    },
    {
      name: 'Spider-Man',
      available: 0,
      img: 'https://pm1.narvii.com/6122/25c286a99381ef79bb8df1dfaee31685390b502b_hq.jpg'
    }
  ]

  buyTicket(movieName: String){
    const movieIndex = this.movies.findIndex(
      movie => movie.name === movieName
    );
    this.movies[movieIndex].available -= 1;
  }
}
