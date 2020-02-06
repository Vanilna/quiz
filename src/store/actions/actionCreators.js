import * as actionTypes from "./actionTypes";

export const setAnswer = (answer, id) => {
  return {
    type: actionTypes.SET_ANSWER,
    payload: {
      answer: answer,
      id: id
    }
  };
};

export const setQuestions = questions => {
  return {
    type: actionTypes.SET_QUESTIONS,
    questions: questions
  };
};

export const fetchQuestionsFailed = () => {
  return {
    type: actionTypes.FETCH_QUESTIONS_FAILED
  };
};

export const fetchQuestions = () => {
  return dispatch => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    )
      .then(response => response.json())
      .then(questionsJSON => {
        dispatch(setQuestions(questionsJSON.results));
      })
      .catch(error => dispatch(fetchQuestionsFailed()));
  };
};
