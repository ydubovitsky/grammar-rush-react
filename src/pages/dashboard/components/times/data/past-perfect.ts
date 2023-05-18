import { TenseInterface } from "../../../../../types";

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
    [{ He: "Он" }],
    [{ They: "Они" }, { We: "Мы" }],
  ],
  auxiliaries: [[{ had: "" }], [{ "had not": "не" }]],
  verbs: [
    [{ "already worked by six o'clock": "поработал к шести часам" }],
    [{ "already worked by six o'clock": "поработали к шести часам" }],
  ],
  html: `<article class="paragraph" about="" typeof="">
<div class="paragraph-content ll-text">
      <p><strong>Past Perfect</strong> используется для выражения действия, которое предшествовало другому действию в прошлом или определенному моменту в прошлом.</p>
</br>
<ul>
	<li><em><span>She told you she had met your mother.</span> – Она говорила тебе, что встретила твою мать. (Она встретила её до разговора, который произошел в прошлом.)</em></li>
	<li><em><span>They had finished their work by 6 p.m.</span> – Они закончили работу к 6 вечера.</em></li>
	<li><em><span>Tom had drunk a cup of coffee before going to work.</span> – Том допил чашку кофе перед тем, как пойти на работу.</em></li>
</ul>
  </div>
</article>
  </br>`,
};
