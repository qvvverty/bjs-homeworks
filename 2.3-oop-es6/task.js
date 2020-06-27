'use strict';

// Задание 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      newState = 0;
    } else if (newState > 100) {
      newState = 100;
    }
    this._state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}

// Задание 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let bookFound = this.books.find(item => item[type] === value);
    if (bookFound) {
      return bookFound;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex(item => item.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    } else {
      return null;
    }
  }
}

// Задание 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade >= 1 && grade <= 5 && subject) {
      if (subject in this.grades) {
        this.grades[subject].unshift(grade);
      } else {
        this.grades[subject] = [];
        this.grades[subject].unshift(grade);
      }
      return this.grades[subject].length;
    } else {
      return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.` + `\n${subject in this.grades ? this.grades[subject].length : 0}`
    }
  }

  getAverageBySubject(subject) {
    if (subject in this.grades) {
      let marksSum = 0;
      for (let mark of this.grades[subject]) {
        marksSum += mark;
      }
      return marksSum / this.grades[subject].length;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let marksSum;
    let marksAvgSum = 0;
    let marksCounter = 0;
    for (let marks in this.grades) {
      marksSum = 0;
      for (let mark of this.grades[marks]) {
        marksSum += mark;
        marksCounter++;
      }
      marksAvgSum += marksSum;
    }
    
    if (marksCounter !== 0) {
      return marksAvgSum / marksCounter;
    } else {
      return 0;
    }
  }
}
