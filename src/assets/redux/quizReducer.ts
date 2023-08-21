import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUIZ_LENGTH } from "../global/quiz/data";

const progressionPercentage = 100 / QUIZ_LENGTH;

function getInitialHighScore(): number {
  const savedHighScore = localStorage.getItem("highscore");
  return savedHighScore ? JSON.parse(savedHighScore) : 0;
}
function getInitialAttempts(): number {
  const savedAttempt = localStorage.getItem("attempt");
  return savedAttempt ? JSON.parse(savedAttempt) : 0;
}

export type QuizReducerTypes = {
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
  isStarted: false,
  isFinished: false,
  index: 0,
  score: 0,
  highestScore: getInitialHighScore(),
  attempt: getInitialAttempts(),
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
      state.attempt = state.attempt + 1;
      state.score > state.highestScore
        ? (state.highestScore = state.score)
        : state.score;
      localStorage.setItem("highscore", JSON.stringify(state.highestScore));
      localStorage.setItem("attempt", JSON.stringify(state.highestScore));
    },
    restart: (state) => {
      return {
        ...initialState,
        attempt: state.attempt,
        highestScore: state.score,
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
    },
    setCurrentUserAnswer: (state, action: PayloadAction<number>) => {
      state.currentUserAnswer = action.payload;
    },
    setCurrentCorrectAnswer: (state, action: PayloadAction<number>) => {
      state.currentCorrectAnswer = action.payload;
    },
    returnAtHome: (state) => {
      return {
        ...initialState,
        highestScore: state.highestScore,
        attempt: state.attempt,
      };
    },
  },
});

export const {
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
  returnAtHome,
} = quizSlice.actions;

export default quizSlice.reducer;
