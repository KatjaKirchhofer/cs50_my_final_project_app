import { createStore} from "redux";
import answerReducer from "./answerReducer";

const answerStore = createStore(answerReducer);

export default answerStore;