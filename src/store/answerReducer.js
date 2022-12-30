let lastId = 0;

export default function answerReducer (state = [], action) {
  if (action.type === "answerAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        type: action.payload.type,
        descriptionOne: action.payload.descriptionOne,
        descriptionTwo: action.payload.descriptionTwo,
        descriptionThree: action.payload.descriptionThree
      }
    ]
  }
  return state;
}
