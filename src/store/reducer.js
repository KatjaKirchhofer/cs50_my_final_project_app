import {dictionaryDe} from "../constants/Dictionary";



// let lastId = 0;

// export default function reducer (state = [], action) {
//   if (action.type === "userAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         userName: action.payload.userName,
//         password: action.payload.password
//       }
//     ]
//   }
//   return state;
// }

export default function langReducer (state = {dictionary: dictionaryDe}, action) {
  if (action.type === "setLang") {
    return {dictionary: action.payload.dictionary}
  }
  return state;
}