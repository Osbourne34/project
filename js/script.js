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
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Задание выполнено!

// Условия

// let num = 50;

// if (num < 49) {
//     console.log('49 не равно 50');
// } else if (num > 51) {
//     console.log('51 не равно 50');
// } else {
//     console.log('50 равно 50');
// }

// switch (num) {
//     case 49:
//         console.log('Jenya');
//         break;
//     case 55:
//         console.log('Evgeniy');
//         break;
//     case 56: 
//         console.log('1998');
//         break;
//     default: 
//         console.log('Ничего не верно');
//         break;
// }

// // Циклы

// let number = 50;

// while (number <= 55) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log(number);
//     number++;
// }
// while (number <= 55);

// for (let i = 0; i <= 10; ++i) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 10; ++i) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt('Один из последних просмотренных фильмов?', '');
// let b = prompt('На сколько оцените его?', '');
// let c = prompt('Один из последних просмотренных фильмов?', '');
// let d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 1; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    while (a == null || a == '' || a.length > 50) {
        a = prompt('Ответьте заного', '');
        if (a != '' && a != null && a.length < 50) {
            console.log('da');
            break;
        }
    }

    let b = prompt('На сколько оцените его?', '');
    while (b == null || b == '' || b.length > 50) {
        b = prompt('Ответьте заного', '');
        if (b != '' && b != null && b.length < 50) {
            console.log('da');
            break;
        }
    }

    personalMovieDB.movies[a] = b;

}

console.log(personalMovieDB);



