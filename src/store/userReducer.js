let lastId = 0;

export default function userReducer (state = [], action) {
  if (action.type === "userAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        userName: action.payload.userName,
        password: action.payload.password
      }
    ]
  }
  return state;
}
