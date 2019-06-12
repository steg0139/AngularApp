export default class Joke {
  id: number;
  jokeTitle: string;
  joke: string;
  funnyFactor: number;
  constructor(id: number, jokeTitle: string, joke: string, funnyFactor: number) {
    this.id = id;
    this.jokeTitle = jokeTitle;
    this.joke = joke;
    this.funnyFactor = funnyFactor;
  }
}
