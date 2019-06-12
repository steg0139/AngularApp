import { Component, OnInit } from '@angular/core';
import Joke from '../Joke';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-joke-get',
  templateUrl: './joke-get.component.html'
})
export class JokeGetComponent implements OnInit {

  jokes: Joke[];
  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokes = this.jokesService.getJokes();
  }

}
