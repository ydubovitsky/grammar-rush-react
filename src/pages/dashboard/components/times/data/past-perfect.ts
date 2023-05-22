import { TenseInterface } from "../../../../../types";
import template from './past-perfect.html';

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
  html: `${template}`,
};
