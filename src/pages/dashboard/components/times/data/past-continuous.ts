import { TenseInterface } from "../../../../../types";

export const PAST_CONTINUOUS: TenseInterface = {
  name: "Past Continuous",
  strategies:  [
    [0, 0, 0],
    [1, 0, 1],
    [2, 1, 2],
    [3, 1, 2],
    [4, 1, 4],
  ],
  pronounts: [
    [
      { "I": "Я" },
    ],
    [
      { "He": "Он" },
      { "Tom": "Том" },
      { "James": "Джеймс" },
      { "Samwise Gamgee": "Сэмуайз Гэмджи" },
      { "Donnie Darko": "Донни Дарко" },
      { "Rocky Balboa": "Рокки Бальбоа" },
      { "Groot": "Грут" },
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
      { "They": "Они" },
      { "Athletes": "Спортсмены" },
      { "Students": "Студенты" },
      { "Teachers": "Учителя" },
    ],
    [{ "We": "Мы" }],
    [{ "You": "Ты" }],
  ],
  auxiliaries: [
    [{ "was": "" }, { "was not": "не" }],
    [{ "were": "" }, { "were not": "не" }],
  ],
  verbs: [
    [
      { "reading last Monday ": "читал в прошлый понедельник" },
      { "reading the whole evening": "читал весь вечер" },
      { "cooking the whole evening": "готовил весь вечер" },
      { "dancing the whole evening": "танцевал весь вечер" },
      { "dancing all night long": "танцевал всю ночь" },
      { "dancing the whole morning": "танцевал все утро" },
      { "reading all day long": "читал весь день" },
      { "taking a shower": "принимал душ" },
      { "still dancing at midnight": "танцевал все еще в полночь" },
      { "cleaning the house when the phone rang": "убирал дом в то время как зазвонил телефон" },
      { "cooking dinner when Jam suddenly cut his finger": "готовил обед, когда Джем внезапно порезал палец" },
      { "eating my soup when Matthey came home": "ел суп, когда Метью пришел домой" },
      { "doing her makeup while she was talking over the telephone": "делал макияж во время разговора по телефону" },
      { "drinking a cup of coffee while they were sitting at that restaurant": "пил кофе, когда сидели в том ресторане" },
      { "hoping to meet her at the bookstore but she didn’t come": "надеялся встретить её в книжном магазине, но она не пришла" },
      { "thinking of cooking a pie but we wanted some pizza.": "думал приготовить пирог, но мы хотели пиццы." },
    ],
    [
      { "working all night long": "работал всю ночь" },
      { "reading all night long": "читал всю ночь" },
    ],
    [
      { "working all night long": "работали всю ночь" },
      { "reading all night long": "читали всю ночь" },
    ],
    [
      { "working all night long": "работал всю ночь" },
      { "reading all night long": "читал всю ночь" },
    ],
  ],
  html: `
  <div class="paragraph-content ll-text">
      <p><strong>Past Continuous</strong>&nbsp;(<strong>Past Progressive</strong>) образуется с помощью вспомогательного глагола <strong>was</strong> или <strong>were</strong> и простого причастия настоящего времени (первая форма глагола с окончанием -<strong>ing</strong>). <strong>Was</strong> и <strong>were</strong> – это формы прошедшего времени вспомогательного глагола <a href="to-be">to be</a>.</p>

<p>Выбор нужной формы зависит от лица подлежащего (главного члена предложения).<br>
<strong>Was </strong>– используют, когда говорят о чем-то в единственном числе (<strong>I</strong>, <strong>he</strong>, <strong>she</strong>, <strong>it</strong>).<br>
<strong>Were </strong>– когда говорят о множестве людей и вещей (<strong>we</strong>, <strong>they</strong>) или используют местоимение <strong>you </strong>(ты, вы, вежливое Вы).</p>
</br>
<ul style="list-style: none">
	<li><em><span>I <span style="color:#EB4E36;">was </span>sing<span style="color:#EB4E36;">ing</span> a song.</span> – Я пел песню.</em></li>
	<li><em><span>She <span style="color:#EB4E36;">was </span>drink<span style="color:#EB4E36;">ing</span> tea.</span> – Она пила чай.</em></li>
	<li><em><span>They <span style="color:#EB4E36;">were </span>watch<span style="color:#EB4E36;">ing</span> the movie.</span> – Они смотрели кино.</em></li>
</ul>
</br>
<p>Правила добавления окончания -ing</p>
</br>
      <ul style="list-style: none">
				<li><em><span>to enter → enter<span style="color:#EB4E36;">ing</span></span></em></li>
				<li><em><span>to l<span style="color:#EB4E36;">ie</span> → l<span style="color:#EB4E36;">y</span>ing</span></em></li>
				<li><em><span>to tak<span style="color:#EB4E36;">e</span> → tak<span style="color:#EB4E36;">i</span>ng</span></em></li>
				<li><em><span>to agr<span style="color:#EB4E36;">ee</span> → agr<span style="color:#EB4E36;">ee</span>ing</span></em></li>
			</ul>
      <ul style="list-style: none">
				<li><em><span>to sa<span style="color:#EB4E36;">y</span> → sa<span style="color:#EB4E36;">y</span>ing</span></em></li>
				<li><em><span>to rela<span style="color:#EB4E36;">x</span> → rela<span style="color:#EB4E36;">x</span>ing</span></em></li>
				<li><em><span>to ru<span style="color:#EB4E36;">n</span> → ru<span style="color:#EB4E36;">nn</span>ing</span></em></li>
				<li><em><span>to trave<span style="color:#EB4E36;">l</span> → trave<span style="color:#EB4E36;">ll</span>ing / trave<span style="color:#EB4E36;">l</span>ing</span></em></li>
			</ul>
  </div>`,
};
