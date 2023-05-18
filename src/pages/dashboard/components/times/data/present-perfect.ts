import { TenseInterface } from "../../../../../types";

export const PRESENT_PERFECT: TenseInterface = {
  name: "Present Perfect",
  strategies: [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [2, 0, 1],
    [2, 1, 1],
  ],
  pronounts: [
    [{ I: "Я" }, { You: "Ты" }],
    [{ He: "Он" }],
    [{ They: "Они" }, { We: "Мы" }],
  ],
  auxiliaries: [
    [{ have: "" }],
    [{ "have not": "не" }],
    [{ has: "" }],
    [{ "has not": "не" }],
  ],
  verbs: [
    [{ "worked once": "поработал однажды" }],
    [{ "worked once": "поработали однажды" }],
  ],
  html: `<div class="paragraph-content ll-text">
  <p><strong>Present Perfect</strong> используется для передачи важности результата действия для настоящего без точного указания времени. Действие совершилось когда-то в прошлом и результат этого действия (или его отсутствие) виден в настоящем.</p>

<ul>
<li><em><span>I’ve done this job well.</span> – Я сделал эту работу хорошо.</em></li>
<li><em><span>She has found this kitten outside.</span> – Она нашла этого котенка на улице.</em></li>
<li><em><span>We haven’t bought new chairs yet. Our kitchen is empty.</span> – Мы ещё не купили новые стулья. Наша кухня пуста.</em></li>
</ul>
</div>
  </br>`,
};
