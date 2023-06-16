import { TenseInterface } from "../../types";
import template from "./past-perfect.html";

export const PAST_PERFECT: TenseInterface = {
  name: "Past Perfect",
  strategies: [
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [2, 0, 1],
    [2, 1, 1],
  ],
  pronounts: [
    [{ I: "Я" }, { You: "Ты" }],
    [
      { He: "Он" },
      { Tom: "Том" },
      { James: "Джеймс" },
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
    [{ They: "Они" }, { We: "Мы" }],
  ],
  auxiliaries: [[{ had: "" }], [{ "had not": "не" }]],
  verbs: [
    [
      { "already worked by six o'clock": "поработал к шести часам" },
      {
        "finished work when he came here":
          "закончил работу, когда он сюда пришел",
      },
      {
        "lived in Paris for 12 years before we moved to America":
          "прожил в Париже 12 лет до того как мы переехали в Америку",
      },
    ],
    [{ "already worked by six o'clock": "поработали к шести часам" }],
  ],
  html: `${template}`,
};
