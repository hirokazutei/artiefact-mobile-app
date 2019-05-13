import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

export type State = {
  isTracking: boolean;
  userID: number;
  sagaID?: number;
  chapterID?: number;
  longitudes: number[];
  latitudes: number[];
};

const defaultState: Readonly<State> = {
    isTracking: false,
    userID: 1, // Kaz
    longitudes: [],
    latitudes: []
};

export type Action = {
  type: ActionTypes;
  payload: { value: any };
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  switch (action.type) {
    case actions.CHANGE_EMAIL: {
      newState.email = action.payload.value;
      break;
    }
    case actions.CHANGE_USERNAME: {
      newState.username = action.payload.value;
      break;
    }
    case actions.CHANGE_PASSWORD: {
      newState.password = action.payload.value;
      break;
    }
    case actions.ON_PRESS_TERMS: {
      newState.agreeToTerms = !newState.agreeToTerms;
      newState.agreeToTermsDate = new Date();
      break;
    }
    case actions.SHOW_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = true;
      break;
    }
    case actions.HIDE_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = false;
      break;
    }
    case actions.ON_PICK_DATE: {
      newState.birthdate = action.payload.value;
      newState.showDatePickerModal = false;
      newState.changedBirthdate = true;
      break;
    }
    default:
      break;
  }
  return newState;
};