import {dictionaryDe} from "../constants/Dictionary";




export default function langReducer (state = {dictionary: dictionaryDe}, action) {
  if (action.type === "setLang") {
    return {dictionary: action.payload.dictionary}
  }
  return state;
}