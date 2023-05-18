import { TenseInterface } from "../../../../../types";

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
    [
      { I: "Я" },
      { "I have finished my business, I": "Я закончил свои дела, Я" },
    ],
    [
      { He: "Он" },
      { She: "Она" },
      { It: "Оно" },
      { Tom: "Том" },
      { Kate: "Кейт" },
      { James: "Джеймс" },
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
      { "reading this time tomorrow ": "читать в это время завтра" },
      {
        "taking a bath the same time next week":
          "принимать душ в то же самое время на следующей неделе",
      },
      {
        "waiting for you here at 9 a.m. tomorrow":
          "ждать тебя здесь завтра в девять утра",
      },
      {
        "playing football all day next Sunday":
          "играть в футбол весь день в следующее воскресенье",
      },
      { "cooking dinner when she leaves": "готовить обед, когда она уйдет" },
      {
        "washing the car when the postman comes":
          " мыть машину, когда придет почтальон",
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
  html: `
  <p><strong>Future Continuous</strong> используется для описания действий, которые будут происходить в конкретный, точно известный момент времени или некоторый промежуток времени в будущем.</p>
</br>
<ul style="list-style: none">
<li><em><span>I will be waiting for you here <span style="color:#EB4E36;">at 9 a.m</span>. tomorrow.</span=> – Я буду ждать тебя здесь завтра в девять утра.</em></li>
<li><em><span>Tom will be playing football <span style="color:#EB4E36;">all day</span> next Sunday.</span> – Том будет играть в футбол всё следующее воскресенье.</em></li>
<li><em><span><span style="color:#EB4E36;">This time</span> next week I will be flying to Berlin.</span> – В это же время на следующей неделе я буду лететь в Берлин.</em></li>
</ul>
</br>
<p>Точный момент времени в <strong>Future Continuous </strong>может уточняться другим, более кратковременным действием, которое выражено в <a href="present-simple">Present Simple</a>.</p>
</br>
<ul style="list-style: none">
<li><em><span>I will be cooking dinner <span style="color:#EB4E36;">when she leaves</span>.</span> – Я буду готовить обед, когда она уйдет.</em></li>
<li><em><span>He will be washing the car <span style="color:#EB4E36;">when the postman comes</span>.</span> – Он будет мыть машину, когда придет почтальон.</em></li>
<li><em><span>They will be watching the game <span style="color:#EB4E36;">when the rain starts</span>.</span> – Они будут смотреть игру, когда начнется дождь.</em></li>
</ul>`
};
