import { TenseInterface } from "../../../../../types";

export const FUTURE_PERFECT: TenseInterface = {
  name: "Future Perfect",
  strategies: [
    [0, 0, 0],
    [1, 0, 1],
    [2, 0, 2],
    [3, 0, 3],
    [4, 0, 4],
    [0, 1, 0],
    [1, 1, 1],
    [2, 1, 2],
    [3, 1, 3],
    [4, 1, 4],
  ],
  pronounts: [
    [{ I: "Я" }],
    [{ He: "Он" }],
    [{ They: "Они" }],
    [{ We: "Мы" }],
    [{ You: "Ты" }],
  ],
  auxiliaries: [[{ "will have": "" }], [{ "will not have": "не" }]],
  verbs: [
    [{ "opened the window by 8 p.m. ": "открою окно к 8 часам" }],
    [{ "opened the window by 8 p.m. ": "откроет окно к 8 часам" }],
    [{ "opened the window by 8 p.m. ": "откроют окно к 8 часам" }],
    [{ "opened the window by 8 p.m. ": "откроем окно к 8 часам" }],
    [{ "opened the window by 8 p.m. ": "откроешь окно к 8 часам" }],
  ],
  html: `<article>
<div>
      <p><strong>Future Perfect</strong> образуется с помощью <a href="verbs#vspomogatelnye-glagoly">вспомогательного&nbsp;глагола</a>&nbsp;<strong>will</strong>&nbsp;(или реже&nbsp;<strong>shall</strong>)&nbsp;и голого совершенного инфинитива <a href="infinitive#infinitiv-v-aktivnom-zaloge">Perfect Infinitive</a>&nbsp;(<strong>have</strong> +&nbsp;смысловой&nbsp;глагол&nbsp;в третьей форме).</p>

<p>Если действие выражается правильным глаголом, то его третья форма образуется добавлением <a href="ed">окончания -ed</a>. Если используется неправильный глагол, тогда третью форму можно посмотреть в <a href="irregular-verbs">таблице неправильных глаголов</a>. Если нужного глагола там нет – значит он правильный и к нему можно добавлять окончание <strong>-ed</strong>.</p>

<p><strong>Will </strong>в современном английском используется со всеми числами и лицами.<br>
<strong>Shall </strong>используется только с первым лицом <strong>I</strong>, <strong>We&nbsp;</strong>(такое использование считается устаревшим).</p>

<p>В современном английском со всеми числами и лицами используется только <strong>will </strong>и это не является ошибкой. Но <strong>shall </strong>еще можно встретить в газетах, старых текстах или текстах при собеседовании на работу, или при поступлении в учебное учреждение, художественной литературе.</p>
</br>
<table class="responsive-tables" style="width:100%;">
	<tbody>
		<tr>
			<td>
			<ul>
				<li><em><span>will </span>= ‘ll (сокращение)</em></li>
			</ul>
			</td>
			<td style="width: 50%;">
			<ul>
				<li><em><span>shall</span> = ‘ll</em></li>
			</ul>
			</td>
		</tr>
		<tr>
			<td colspan="2">
			<ul>
				<li><em><span>I <span style="color:#EB4E36;">shall have done </span>this work by 5 o’clock tomorrow.</span> – Я сделаю эту работу завтра к пяти.</em></li>
				<li><em><span>She <span style="color:#EB4E36;">will have bought </span>these flowers before the beginning of the party.</span> – Она купит эти цветы до начала вечеринки.</em></li>
				<li><em><span>They <span style="color:#EB4E36;">will have found </span>the new actor by next week.</span> – Они найдут нового актера к следующей неделе.​</em></li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
</br>
<p>Правила добавления окончания -ed</p>
</br>
<table style="width:100%;">
	<colgroup>
		<col>
		<col>
		<col>
	</colgroup>
	<tbody>
		<tr>
			<td style="vertical-align: top; width: 33%;">
			<ul dir="ltr">
				<li><em><span>to work → work<span style="color:#EB4E36;">ed </span></span></em></li>
				<li><em><span>to translat<span style="color:#EB4E36;">e</span> → translat<span style="color:#EB4E36;">ed</span></span></em></li>
				<li><em><span>to agr<span style="color:#EB4E36;">ee</span> → agree<span style="color:#EB4E36;">d</span></span></em></li>
			</ul>
			</td>
			<td style="vertical-align: top; width: 33%;">
			<ul dir="ltr">
				<li><em><span>to stud<span style="color:#EB4E36;">y</span> → stud<span style="color:#EB4E36;">i</span>ed</span></em></li>
				<li><em><span>to pla<span style="color:#EB4E36;">y</span> → pla<span style="color:#EB4E36;">y</span>ed</span></em></li>
			</ul>
			</td>
			<td style="vertical-align: top;">
			<ul dir="ltr">
				<li><em><span>to sto<span style="color:#EB4E36;">p</span> → sto<span style="color:#EB4E36;">pp</span>ed</span></em></li>
				<li><em><span>to rela<span style="color:#EB4E36;">x</span> → rela<span style="color:#EB4E36;">x</span>ed</span></em></li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
  </div>
</article>
  </br>`
};
