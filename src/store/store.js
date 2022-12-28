import { createStore} from "redux";
import langReducer from "./reducer";

const langStore = createStore(langReducer);

export default langStore;