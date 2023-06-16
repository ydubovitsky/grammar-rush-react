import { TenseInterface } from "../../types";
import template from "./future-continuous.html";

export const FUTURE_CONTINUOUS: TenseInterface = {
  name: "Future Continuous",
  strategies: [
    [0, 0, 0],
    [1, 1, 0],
    [2, 2, 0],
    [3, 3, 0],
    [4, 4, 0],
  ],
  pronounts: [
    [{ I: "Я" }],
    [
      { He: "Он" },
      { She: "Она" },
      { It: "Оно" },
      { Tom: "Том" },
      { Kate: "Кейт" },
      { James: "Джеймс" },
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
    [
      { They: "Они" },
      { Athletes: "Спортсмены" },
      { Students: "Студенты" },
      { Teachers: "Учителя" },
      { Boxers: "Боксеры" },
      { Players: "Игроки" },
      { Workers: "Рабочие" },
      { Programmers: "Программисты" },
      { Clowns: "Клоуны" },
      { "Police officers": "Полицейские" },
      { Scientists: "Ученые" },
      { Housewives: "Домохозяйки" },
      { Sellers: "Продавцы" },
      { Writers: "Писатели" },
      { Musicians: "Музыканты" },
      { Friends: "Друзья" },
      { Programmers: "Программисты" },
      { Gymnasts: "Гимнасты" },
      { Leaders: "Руководители" },
      { "Cooks ": "Повара" },
      { "Mechanics ": "Механики" },
      { "Tutors ": "Репетиторы" },
      { "Coaches ": "Тренеры" },
    ],
    [{ We: "Мы" }],
    [{ You: "Ты" }],
  ],
  auxiliaries: [
    [{ "will be": "буду" }, { "will not": "не буду" }],
    [{ "will be": "будет" }, { "will not": "не будет" }],
    [{ "will be": "будут" }, { "will not": "не будут" }],
    [{ "will be": "будем" }, { "will not": "не будем" }],
    [{ "will be": "будешь" }, { "will not": "не будешь" }],
  ],
  verbs: [
    [
      { "dancing at 5 o'clock": "танцевать в 5 часов" },
      { "breaking at 9 o'clock": "разрушать в 9 часов" },
      { "sending an email at 2 o'clock": "посылать письмо в 2 часа" },
      { "dreaming about a food at 15 o'clock": "мечтать о еде в 15 часов" },
      {
        "traveling tomorrow this time": "путешествовать завтра в это же время",
      },
      {
        "flying to New York tomorrow this time":
          "лететь в Нью-Йорк завтра в это же время",
      },
      {
        "packing presents tomorrow morning": "упаковывать подарки завтра утром",
      },
      { "expecting you": "вас ждать" },
      { "reading this time tomorrow ": "читать в это время завтра" },
      { "sitting this time tomorrow ": "сидеть в это время завтра" },
      { "sleeping this time tomorrow ": "спать в это время завтра" },
      {
        "taking a bath the same time next week":
          "принимать душ в то же самое время на следующей неделе",
      },
      {
        "packing presents the same time next week":
          "упаковывать подарки в то же самое время на следующей неделе",
      },
      {
        "waiting for you here at 9 a.m. tomorrow":
          "ждать тебя здесь завтра в девять утра",
      },
      {
        "playing football all day next Sunday":
          "играть в футбол весь день в следующее воскресенье",
      },
      {
        "playing piano all day next Monday":
          "играть на пианино весь день в следующий понедельник",
      },
      {
        "playing volleyball all day next Sunday":
          "играть в волейбол весь день в следующее воскресенье",
      },
      { "cooking dinner when she leaves": "готовить обед, когда она уйдет" },
      { "cooking breakfast when your cousin leaves": "готовить завтрак, когда двоюродный брат уйдет" },
      {
        "washing the car when the postman comes":
          "мыть машину, когда придет почтальон",
      },
      {
        "washing the glass when the worker comes":
          "мыть стакан, когда придет рабочий",
      },
      {
        "watching the game when the rain starts":
          "смотреть игру, когда начнется дождь",
      },
      {
        "making cocktails and Ann will be meeting guests":
          "делать коктейли, а Анна будет встречать гостей",
      },
      {
        "cleaning the house and Matthey will be cooking sandwiches":
          "убирать дом, а Мэттью будет готовить сэндвичи",
      },
      {
        "making dinner and Jam will be meeting guests":
          "делать ужин, а Джем будет встречать гостей",
      },
      {
        "listening to music, Jake will be reading a book":
          "слушать музыку, а Джейк будет читать книгу",
      },
      {
        "sitting, watching movie and eating a pie":
          "сидеть, смотреть фильм и есть пирог",
      },
      {
        "dancing, listening music and eating a pizza":
          "танцевать, слушать музыку и есть пиццу",
      },
      {
        "meeting Jake’s parents this evening":
          "встречаться с родителями Джейка сегодня вечером",
      },
      {
        "meeting Jake’s parents from two till three":
          "встречаться с родителями Джейка с двух до трех",
      },
      {
        "waiting for you here from Monday till Friday":
          "ждать тебя здесь с понедельника по пятницу",
      },
    ],
  ],
  html: `${template}`,
};
