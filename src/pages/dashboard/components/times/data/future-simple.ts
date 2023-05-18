import { TenseInterface } from "../../../../../types";

export const FUTURE_SIMPLE: TenseInterface = {
  name: "Future Simple",
  strategies: [
    [0, 0, 0],
    [1, 0, 1],
    [2, 0, 2],
    [3, 0, 3],
    [4, 0, 4],
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
  ],
  pronounts: [
    [{ I: "Я" }],
    [{ He: "Он" }],
    [{ They: "Они" }],
    [{ We: "Мы" }],
    [{ You: "Ты" }],
  ],
  auxiliaries: [[{ will: "" }], [{ "will not": "не" }]],
  verbs: [
    [{ "open the window tomorrow ": "открою окно завтра" }],
    [{ "open the window tomorrow ": "откроет окно завтра" }],
    [{ "open the window tomorrow ": "откроют окно завтра" }],
    [{ "open the window tomorrow ": "откроем окно завтра" }],
    [{ "open the window tomorrow ": "откроешь окно завтра" }],
  ],
  html: `<p>
  Future Simple используется для описания единичных, повторяющихся или последовательных действий в будущем.
  </p>
  </br>`
};
