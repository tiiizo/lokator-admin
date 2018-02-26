

import {combineReducers, Action} from "redux";

import {jcropReducer} from "../../../src/app/shared/forms/jcrop/reducers/jcrop-reducer";
export default combineReducers({
  apiPanel: jcropReducer,
  defaultPanel: jcropReducer,
  showSelectionPanel: jcropReducer,
  previewPanel: jcropReducer,
  animationsPanel: jcropReducer,
  stylingPanel: jcropReducer,
})
