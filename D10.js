/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = { name: "Karim", surname: "Guettech", age: 26 };

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
skills = ["javascript", "html", "css", "c++"];
me = { ...me, skills: skills };

/*Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
 */

me.skills.push("java");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("----------------Esercizio 1----------------");
dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
//console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("----------------Esercizio 2----------------");

whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
//console.log(whoIsBigger(2, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("----------------Esercizio 3----------------");

splitMe = (str) => {
  const words = str.split(" ");
  return words;
};
//console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("----------------Esercizio 4----------------");

deleteOne = (str, bool) => {
  if (bool === true) {
    str = str.slice(1);
    return str;
  } else {
    str = str.slice(0, -1);
    return str;
  }
};
//console.log(deleteOne("ciao", true));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("----------------Esercizio 5----------------");

function onlyLetters(str) {
  return str.replace(/ \d+/g, ""); // con d prendo i numeri e d+ i numeri adiacenti in questo modo mettendo lo spazio prima di \d+ riesco a eliminare gli spazi in più che si creano cancellando i numeri
}
//console.log(onlyLetters("ciao ho 91 cavalli"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("----------------Esercizio 6----------------");

function isThisAnEmail(str) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(str);
}
//console.log(isThisAnEmail("cIao@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("----------------Esercizio 7----------------");
function whatDayIsIt() {
  const date = new Date();
  const dayNumber = date.getDay();
  const dayNames = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return dayNames[dayNumber];
}
//console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("----------------Esercizio 8----------------");
function rollTheDices(num) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < num; i++) {
    const value = dice();
    sum += value;
    values.push(value);
  }
  return {
    sum: sum,
    values: values,
  };
}
//console.log(rollTheDices(10));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("----------------Esercizio 9----------------");

function howManyDays(date) {
  let timeDiff = Date.now() - Date.parse(date);
  let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  return `sono trascorsi ${daysDiff} giorni`;
}
//console.log(howManyDays("2021 / 12 / 16"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("----------------Esercizio 10----------------");

function isTodayMyBirthday(birthday) {
  let today = new Date();
  let bday = new Date(birthday);
  if (
    today.getMonth() === bday.getMonth() &&
    today.getDate() === bday.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(isTodayMyBirthday("1996/03/08"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("----------------Esercizio 11----------------");

function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return obj;
  } else {
    return `l'oggetto non contiene nessuna proprietà ${prop}`;
  }
}

// console.log(
//   deleteProp(
//     {
//       name: "karim",
//       age: 26,
//       occupation: "developer",
//     },
//     "age"
//   )
// );

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("----------------Esercizio 12----------------");

function newestMovie(movies) {
  movies.sort((a, b) => b.Year - a.Year);
  return movies[0];
}
//console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("----------------Esercizio 13----------------");

//si può usare semplicemente movies.length ma preferisco verificare che la proprietà type sia movie per contare l elemento in questo modo:

function countMovies(movies) {
  let a = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      a++;
    }
  }
  return `il numero di film è: ${a}`;
}
//console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("----------------Esercizio 14----------------");
function onlyTheYears(movies) {
  const years = movies.map((movie) => movie.Year);
  return years;
}
//console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("----------------Esercizio 15----------------");

function onlyInLastMillennium(movies) {
  const mill = movies.filter((movie) => Number(movie.Year) < 2000);
  return mill;
}
//console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("----------------Esercizio 16----------------");

function sumAllTheYears(movies) {
  const sumYear = movies.reduce(
    (acc, elemento) => acc + Number(elemento.Year),
    0
  );
  return `la somma di tutti gli anni è: ${sumYear}`;
}
//console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("----------------Esercizio 17----------------");

function searchByTitle(strg, movies) {
  return movies.filter((movies) =>
    movies.Title.toLowerCase().includes(strg.toLowerCase())
  );
}

//console.log(searchByTitle("A", movies));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("----------------Esercizio 18----------------");

function searchAndDivide(movies, searchString) {
  const match = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );
  const unmatch = movies.filter(
    (movie) => !movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );
  return { match, unmatch };
}
//console.log(searchAndDivide(movies, "the"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("----------------Esercizio 19----------------");
function removeIndex(movies, index) {
  return [...movies.slice(0, index), ...movies.slice(index + 1)];
}
//console.log(removeIndex(movies, 13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("----------------Esercizio 20----------------");

function getContainerElement() {
  return document.getElementById("container");
}
//const container0=getContainerElement() <-poi posso associare la funzione a una variabile per utilizzarla in seguito in questo modo

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("----------------Esercizio 21----------------");
function getTdElements() {
  return document.getElementsByTagName("td");
}
//const Alltd = getTdElements() <-poi posso associare la funzione a una variabile per utilizzarla in seguito in questo modo

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("----------------Esercizio 22----------------");
function printTableData() {
  const tdElements = document.getElementsByTagName("td");
  for (let i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].textContent);
  }
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("----------------Esercizio 23----------------");

function addRedBackgroundToLinks() {
  let links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("----------------Esercizio 24----------------");

function addItemToList(text) {
  let list = document.getElementById("myList");
  let newItem = document.createElement("li");
  newItem.textContent = text;
  list.appendChild(newItem);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("----------------Esercizio 25----------------");

function clearList() {
  let list = document.getElementById("myList");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("----------------Esercizio 26----------------");

function addClassToTr() {
  let rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("test");
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("----------------Esercizio 27----------------");

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }
}
//halfTree(7);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("----------------Esercizio 28----------------");

function tree(height) {
  let j = height;
  let k = 1;
  for (let i = 1; i <= height; i++) {
    console.log(" ".repeat(j) + "*".repeat(k));
    k += 2;
    j--;
  }
}
//tree(7);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo
*/

console.log("----------------Esercizio 29----------------");

function isItPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    // i <= Math.sqrt(num) è più efficente
    if (num % i === 0) return false;
  }

  return true;
}

// !! l'ho fatto in questo modo perchè piu semplice ma in realtà:
// !! può essere reso più efficente prendendo un i<= della radice di num dato che non può essere divisibile per più di sqrt di se stesso senza essere divisibile per numeri precedenti alla radice dato che matematicamente uno dei fattori del divisore deve essere minore della radice !!

//console.log(isItPrime(17));
