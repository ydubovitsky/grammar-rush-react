import { TenseInterface } from "../../../../../types";
import template from './future-perfect.html';

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
  html: `${template}`,
};
