import { TenseInterface } from "../../../../../types";

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
  html: `<p>
    Past Simple (Past Indefinite) образуется с помощью преобразования смыслового глагола в форму прошедшего времени. Если действие выражается правильным глаголом, то к его первой форме добавляется окончание -ed. Если используется неправильный глагол, тогда применяется вторая форма неправильного глагола из таблицы неправильных глаголов. Если нужного глагола там нет – значит он правильный и к нему можно добавлять окончание -ed. Форма прошедшего времени глагола одинакова для всех лиц единственного и множественного числа (кроме глагола to be).
  </p>
  </br>
  <ul style="list-style: none">
    <li><em><span>She <span style="color:#EB4E36;">worked </span>abroad.</span> – Она работала за границей.</em></li>
    <li><em><span>My <span style="color:#EB4E36;">uncle </span>lived here.</span> – Мой дядя жил здесь.</em></li>
    <li><em><span>Harry <span style="color:#EB4E36;">wrote </span>a lot of books.</span> – Гарри написал много книг.</em></li>
    <li><em><span>She&nbsp;<span style="color: rgb(235, 78, 54);">was&nbsp;</span>angry yesterday.</span>&nbsp;– Вчера она была злая.</em></li>
    <li><em><span>We&nbsp;<span style="color: rgb(235, 78, 54);">were&nbsp;</span>young and reckless.</span>&nbsp;– Мы были молоды и беспечны.</em></li>
  </ul>
  </br>
  <div class="paragraph-content ll-text">
      <p>Общий вопрос в<strong> Past Simple</strong> образуется путем добавления вспомогательного глагола <strong>did </strong>в начале предложения перед подлежащим. После подлежащего<strong>&nbsp;</strong>смысловой глагол используется только в форме простого инфинитива без окончаний и частицы <strong>to</strong>.</p>
      </br>
<ul>
	<li><em><span><span style="color:#EB4E36;">Did </span>she work abroad?</span> – Она работала за границей?</em></li>
	<li><em><span><span style="color:#EB4E36;">Did </span>Harry write a lot of letters?</span> – Гарри писал много писем?</em></li>
	<li><em><span><span style="color:#EB4E36;">Did </span>my uncle live here?</span> – Мой дядя жил здесь?</em></li>
</ul>

<p>Специальный вопросв <strong>Past Simple</strong> образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для <strong>Past Simple</strong>.</p>
</br>
<ul>
	<li><em><span><span style="color:#EB4E36;">Where did</span> she work?</span> – Где она работала?</em></li>
	<li><em><span><span style="color:#EB4E36;">What did </span>Harry write?</span> – Что писал Гарри?</em></li>
	<li><em><span><span style="color:#EB4E36;">When did </span>he live here?</span> – Когда он здесь жил?</em></li>
</ul>
  </div>
  </br>
  <div class="paragraph-content ll-text">
      <p><strong>Past Simple </strong>используют для описания действий, когда известен неточный момент времени в прошлом, в который действие произошло. Даже если говорящий пропустил указание момента времени, то оно подразумевается.</p>

<ul>
	<li><em><span>She worked abroad <span style="color:#EB4E36;">2 years ago</span>.</span> – Она работала за границей два года назад.</em></li>
	<li><em><span>Harry wrote a lot of letters <span style="color:#EB4E36;">in 2011</span>.</span> – Гарри написал много писем в 2011 году.</em></li>
	<li><em><span>I met my old friend <span style="color:#EB4E36;">yesterday</span>.</span> – Вчера я встретил своего старого друга.</em></li>
</ul>
  </div>
  </br>
  <article class="paragraph" about="" typeof="">
  <h3 class="paragraph-title" id="to-be-v-past-simple">
      To be в Past Simple  </h3>
<div class="paragraph-content ll-text">
      <p>Глагол <strong>to be</strong> (быть, существовать) – особенный и во времени <strong>Past Simple</strong> имеет две формы <strong>was </strong>и <strong>were</strong>. Выбор нужной формы зависит от <a href="principal-parts-of-the-sentence#the-subject">подлежащего</a>.</p>

<p><strong>Was </strong>– используют, когда подлежащее выражено существительным или местоимением&nbsp;в единственном числе (<strong>I</strong>, <strong>he</strong>, <strong>she</strong>, <strong>it</strong>).<br>
<strong>Were </strong>– когда говорят о множестве людей&nbsp;или вещей (<strong>we</strong>, <strong>they</strong>) или с местоимением <strong>you </strong>(ты, вы, вежливое Вы).</p>

<p>Подробно про <a href="to-be">глагол to be</a> и образование отрицания и вопросов с этим глаголом написано в отдельной статье.</p>

<ul>
	<li><em><span>I <span style="color:#EB4E36;">was </span>tired.</span> – Я был уставшим.</em></li>
	<li><em><span>She <span style="color:#EB4E36;">wasn't&nbsp;</span>abroad.</span> – Она не была заграницей.</em></li>
	<li><em><span><span style="color:#EB4E36;">Was </span>Harry a good writer?</span> – Гарри был хорошим писателем?</em></li>
</ul>

<ul>
	<li><em><span>You <span style="color:#EB4E36;">were&nbsp;</span>tired.</span> – Вы были уставшим.</em></li>
	<li><em><span>Those books <span style="color:#EB4E36;">weren't&nbsp;</span>that&nbsp;old.</span> – Те книги не были настолько&nbsp;старыми.</em></li>
	<li><em><span>Where <span style="color:#EB4E36;">were </span>your parents last summer?</span> – Где были твои родители прошлым летом?</em></li>
</ul>
  </div>
</article>
  `
  ,
};
