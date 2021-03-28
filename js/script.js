"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', '');
// let b = prompt('На сколько оцените его?', '');
// let c = prompt('Один из последних просмотренных фильмов?', '');
// let d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.moveis[c] = d;

// console.log(personalMovieDB);

// Задание выполнено!

// Условия

let num = 50;

if (num < 49) {
    console.log('49 не равно 50');
} else if (num > 51) {
    console.log('51 не равно 50');
} else {
    console.log('50 равно 50');
}

switch (num) {
    case 49:
        console.log('Jenya');
        break;
    case 55:
        console.log('Evgeniy');
        break;
    case 56: 
        console.log('1998');
        break;
    default: 
        console.log('Ничего не верно');
        break;
}



