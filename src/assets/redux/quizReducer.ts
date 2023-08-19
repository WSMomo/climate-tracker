import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUIZ_LENGTH } from "../global/quiz/data";

const progressionPercentage = 100 / QUIZ_LENGTH;

export type QuizReducerTypes = {
  language: string;
  languagesSelected: boolean;
  isStarted: boolean;
  isFinished: boolean;
  index: number;
  progression: number;
  answersClicked: boolean;
  score: number;
  highestScore: number;
  attempt: number;
  currentUserAnswer: number | null;
  currentCorrectAnswer: number | null;
  wrongAnswers: number[];
};

const initialState: QuizReducerTypes = {
  language: "en",
  languagesSelected: false,
  isStarted: false,
  isFinished: false,
  index: 0,
  score: 0,
  highestScore: 0,
  attempt: 0,
  progression: progressionPercentage,
  answersClicked: false,
  currentUserAnswer: null,
  currentCorrectAnswer: null,
  wrongAnswers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.languagesSelected = true;
    },
    setIsStarted: (state, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload;
    },
    setIsFinished: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload;
    },
    setIndex: (state) => {
      state.index = state.index + 1;
    },
    setProgression: (state) => {
      state.progression = state.progression + progressionPercentage;
    },
    setAnswersClicked: (state, action: PayloadAction<boolean>) => {
      state.answersClicked = action.payload;
    },
    addCorrectAnswerToScore: (state) => {
      state.score = state.score + 1;
    },
    showResults: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload;
      state.currentCorrectAnswer === state.currentUserAnswer
        ? (state.score += 1)
        : state.wrongAnswers.push(state.index);
    },
    restart: (state) => {
      return {
        ...initialState,
        attempt: state.attempt,
        highestScore: state.score,
        languagesSelected: state.languagesSelected,
        language: state.language,
      };
    },
    nextQuestion: (state) => {
      state.currentCorrectAnswer === state.currentUserAnswer
        ? (state.score += 1)
        : state.wrongAnswers.push(state.index);
      state.index = state.index + 1;
      state.progression = state.progression + progressionPercentage;
      state.answersClicked = !state.answersClicked;
      state.currentUserAnswer = null;
    },
    startQuiz: (state) => {
      state.isStarted = true;
      state.attempt = state.attempt + 1;
    },
    setCurrentUserAnswer: (state, action: PayloadAction<number>) => {
      state.currentUserAnswer = action.payload;
    },
    setCurrentCorrectAnswer: (state, action: PayloadAction<number>) => {
      state.currentCorrectAnswer = action.payload;
    },
  },
});

export const {
  setLanguage,
  setIsStarted,
  setIsFinished,
  setIndex,
  setProgression,
  setAnswersClicked,
  addCorrectAnswerToScore,
  restart,
  nextQuestion,
  startQuiz,
  setCurrentUserAnswer,
  setCurrentCorrectAnswer,
  showResults,
} = quizSlice.actions;

export default quizSlice.reducer;
