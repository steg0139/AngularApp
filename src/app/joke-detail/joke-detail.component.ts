import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JokesService } from '../jokes.service';
import Joke from '../Joke';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html'
})
export class JokeDetailComponent implements OnInit {

  angForm: FormGroup;
  joke: Joke;

  constructor(private route: ActivatedRoute, private router: Router, private jokesService: JokesService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      JokeTitle: '',
      Joke: '',
      FunnyFactor: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.joke = this.jokesService.getJoke(params.id);
    });
  }

  updateJoke(JokeName, JokeDescription, JokePrice) {
    this.route.params.subscribe(params => {
      this.jokesService.updateJokes(JokeName, JokeDescription, JokePrice, params.id);
      this.router.navigate(['jokes']);
    });
  }
}
