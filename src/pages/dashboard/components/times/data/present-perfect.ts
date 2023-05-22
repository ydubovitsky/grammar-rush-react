import { TenseInterface } from "../../../../../types";
import template from './present-perfect.html';

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
  html: `${template}`
};
