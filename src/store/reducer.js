import * as actionTypes from "./actions/actionTypes";

const initialState = {
  questions: [],
  answers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.id]: action.payload.answer
        }
      };
    default:
      return state;
  }
};

export default reducer;
