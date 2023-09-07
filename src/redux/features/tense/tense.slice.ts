import { createSlice } from "@reduxjs/toolkit";
import { SentenceInterface } from "../../../types";
import getRandomNumberInRange from "../../../utils/randomNumberInRange";
import {
  FUTURE_CONTINUOUS,
  FUTURE_PERFECT,
  FUTURE_SIMPLE,
  PAST_CONTINUOUS,
  PAST_PERFECT,
  PAST_SIMPLE,
  PRESENT_CONTINUOUS,
  PRESENT_PERFECT,
  PRESENT_SIMPLE,
} from "../../../assets/data";
import { TenseInterface } from "../../../types";
import { FETCH_STATUS } from "../../types";
import { RootState } from "../../store";

const TENSES_LIST = [
  PRESENT_CONTINUOUS,
  PAST_CONTINUOUS,
  FUTURE_CONTINUOUS,
  PRESENT_SIMPLE,
  PAST_SIMPLE,
  FUTURE_SIMPLE,
  PRESENT_PERFECT,
  PAST_PERFECT,
  FUTURE_PERFECT,
];

interface TenseStateInterface {
  tenseEntities: TenseInterface[];
  status: FETCH_STATUS;
  error: string | null;
}

const initialState : TenseStateInterface = {
  tenseEntities: TENSES_LIST,
  status: FETCH_STATUS.IDLE,
  error: null,
};

const tenseSlice = createSlice({
  name: "tense",
  initialState,
  reducers: {},
});

export default tenseSlice.reducer;

//!---------------------------- Selectors are bellow ----------------------------

export const randomTenseNameSelector = (state: RootState) : string => state.tense.tenseEntities[getRandomNumberInRange(0,state.tense.tenseEntities.length)].name;

export const tenseByNameSelector = (
  state: RootState,
  name: string
): TenseInterface => {
  const tense = state.tense.tenseEntities.find((tense) => tense.name === name);
  if (tense === undefined) throw new Error();
  return tense;
};

export const tenseEntitiesSelector = (state: RootState): TenseInterface[] =>
  state.tense.tenseEntities;

//!---------------------------- Service methods are bellow ----------------------------

export const nextRandomSentence = (
  tense: TenseInterface
): SentenceInterface => {
  const { strategies, pronounts, auxiliaries, verbs } = tense;

  const strategy = strategies[getRandomNumberInRange(0, strategies.length - 1)];

  const pronountsList = pronounts[strategy[0]];
  const pronoun =
    pronountsList[getRandomNumberInRange(0, pronountsList.length - 1)];

  const auxiliariesList = auxiliaries[strategy[1]];
  const auxiliary =
    auxiliariesList[getRandomNumberInRange(0, auxiliariesList.length - 1)];

  const verbsList = verbs[strategy[2]];
  const verb = verbsList[getRandomNumberInRange(0, verbsList.length - 1)];

  //------- Inner functions
  const buildSentence = (...words: Array<string>): string => {
    return words.reduce((prev, cur) => prev + " " + cur, "");
  };
  const getOnlyKey = (object: object) => Object.keys(object)[0]; //! Util method
  const getOnlyValue = (object: object) => Object.values(object)[0]; //! Util method
  //--------

  return {
    en: buildSentence(
      getOnlyKey(pronoun),
      getOnlyKey(auxiliary),
      getOnlyKey(verb)
    ),
    ru: buildSentence(
      getOnlyValue(pronoun),
      getOnlyValue(auxiliary),
      getOnlyValue(verb)
    ),
  };
};

export const getPosibleAnswerUnitsArray = (
  sentence: SentenceInterface,
  tense: TenseInterface | undefined
): Array<string> => {
  let result = [""];

  if (tense != undefined) {
    result = sentence.ru
      .split(" ")
      .concat(
        Object.values(
          tense.pronounts[1][getRandomNumberInRange(0, tense.pronounts[1].length)]
        )
      )
      .concat(
        Object.values(
          tense.auxiliaries[0][getRandomNumberInRange(0, tense.auxiliaries[0].length)]
        )
      )
      .concat(
        Object.values(tense.verbs[0][getRandomNumberInRange(0, tense.verbs[0].length)])
      )
      .filter((el) => el !== "")
      .sort();
  }
  return result;
}
