import * as actionTypes from "./actions/actionTypes";

const initialState = {
  questions: [],
  answers: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case actionTypes.SET_ANSWER:
      const newAnswer = action.answer ? state.answers + 5 : state.answers;
      return {
        ...state,
        answers: newAnswer
      };
    default:
      return state;
  }
};

export default reducer;
