import { Injectable } from '@angular/core';
import Joke from './Joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  jokes: Joke[] = [];
  counter = 0;

  constructor() {
    this.createJokes();
  }

  getJokes() {
    return this.jokes;
  }

  getJoke(id) {
    for (let i = 0; i < this.jokes.length; i++ ) {
      if (this.jokes[i].id === parseInt(id)) {
        return this.jokes[i];
      }
    }
  }

  updateJokes(jokeTitle, joke, funnyFactor, id) {
    for (let i = 0; i < this.jokes.length; i++ ) {
      if (this.jokes[i].id === parseInt(id)) {
        this.jokes[i].jokeTitle = jokeTitle;
        this.jokes[i].joke = joke;
        this.jokes[i].funnyFactor = funnyFactor;
      }
    }
  }

  createJokes() {
    this.jokes.push(new Joke(this.counter, 'Grocery Store', 'Whenever the cashier at the grocery store ' +
      'asks my dad if he would like the milk in a bag he replies, ‘No, just leave it in the carton!’', 9));
    this.counter++;
    this.jokes.push(new Joke(this.counter, 'Chicken', 'Why did the chicken get a penalty? For fowl play.', 6));
    this.counter++;
    this.jokes.push(new Joke(this.counter, 'Chicken Feathers', 'Which side of the chicken has more feathers? The outside.', 7));
    this.counter++;
    this.jokes.push(new Joke(this.counter, 'Flowers', 'What did the big flower say to the littler flower? Hi, bud!', 8));
    this.counter++;
    this.jokes.push(new Joke(this.counter, 'Cats & Dogs', 'It was raining cats and dogs the other day. I almost stepped in a poodle.', 8));
    this.counter++;
    this.jokes.push(new Joke(this.counter, 'Car Wash', 'A dad is washing the car with his son.' +
      ' After a moment, the son asks his father, "Do you think we could use a sponge instead?"', 10));
    this.counter++;
  }
}
