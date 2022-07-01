// OOP practice
// make class of dictionary include method (add, get, remove, update, show all, get count)

type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {}
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  remove(term: string) {
    console.log(term, 1);
    if (this.words[term] != undefined) {
      console.log(term, 2);
      delete this.words[term];
    }
  }
  update(word: Word) {
    if (this.words[word.term] != undefined) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    console.log(this.words);
  }
  count() {
    console.log(`${Object.keys(this.words).length} words exist`);
  }
}
