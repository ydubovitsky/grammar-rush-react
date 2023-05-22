import { TenseInterface } from "../../../../../types";
import template from './past-simple.html';

export const PAST_SIMPLE: TenseInterface = {
  name: "Past Simple",
  strategies: [
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 1],
    [3, 0, 1],
    [4, 0, 4],
    [0, 1, 2],
    [1, 1, 2],
    [2, 1, 3],
    [3, 1, 3],
    [4, 1, 2],
  ],
  pronounts: [
    [{ I: "Я" }],
    [
      { He: "Он" },
      { Tom: "Том" },
      { Kate: "Кейт" },
      { James: "Джеймс" },
      { "Edna Mode": "Эдна Мод" },
      { "Randle McMurphy": "Рэндл Макмерфи" },
      { "Optimus Prime": "Оптимус Прайм" },
      { "Norman Bates": "Норман Бейтс" },
      { Legolas: "Леголас" },
      { "Wednesday Addams": "Уэнсдэй Аддамс" },
      { "Ethan Hunt": "Итан Хант" },
      { "Samwise Gamgee": "Сэмуайз Гэмджи" },
      { "Donnie Darko": "Донни Дарко" },
      { "Rocky Balboa": "Рокки Бальбоа" },
      { Groot: "Грут" },
      { "Peter Venkman": "Питер Венкман" },
      { "Johnny Depp": "Джонни Депп" },
      { "Leonardo DiCaprio": "Леонардо Ди Каприо" },
      { "Will Smith": "Уилл Смит" },
      { "Jim carrey": "Джим Керри" },
      { "Brad Pitt": "Брэд Питт" },
      { "Keanu Reeves": "Киану Ривз" },
      { "Tom Hardy": "Том Харди" },
      { "Tom Hanks": "Том Хэнкс" },
      { "Matthew David McConaughey": "Мэттью Дэвид МакКонахи" },
      { "Anthony Hopkins": "Энтони Хопкинс" },
      { "Tom Cruise": "Том Круз" },
      { "Walter Bruce Willis": "Уо́лтер Брюс Уи́ллис" },
    ],
    [
      { They: "Они" },
      { Athletes: "Спортсмены" },
      { Students: "Студенты" },
      { Teachers: "Учителя" },
    ],
    [{ We: "Мы" }],
    [{ You: "Ты" }],
  ],
  auxiliaries: [[{ "": "" }], [{ "did not": "не" }]],
  verbs: [
    [{ "worked yesterday": "работал вчера" }],
    [{ "worked yesterday": "работали вчера" }],
    [{ "work yesterday": "работал вчера" }],
    [{ "work yesterday": "работали вчера" }],
  ],
  html: `${template}`
};
