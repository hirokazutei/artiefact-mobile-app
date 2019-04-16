import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import { State } from "../../../redux/rootReducer";

type StateProps = {
  agreeToTerms: boolean;
  birthdate: Date;
  changedBirthdate: boolean;
  isButtonDisabled: boolean;
  email: string;
  username: string;
  showDatePickerModal: boolean;
  password: string;
};

type DispatchProps = {
  onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressCancelModal: () => void;
  onPressConfirmModal: (date: Date) => void;
  onPressSetBirthday: () => void;
  onPressSignUp: () => void;
  onPressTerms: () => void;
};

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

export type Props = StateProps & DispatchProps & NavigationProps;

class SignUpPage extends React.Component<Props> {
  render() {
    return <SignUpPageTemplate {...this.props} />;
  }
}

export default connect(
  (state: State): StateProps => {
    const {
      agreeToTerms,
      birthdate,
      changedBirthdate,
      email,
      password,
      showDatePickerModal,
      username
    } = state.authentication;
    const isButtonDisabled =
      !agreeToTerms ||
      !changedBirthdate ||
      !birthdate ||
      !email ||
      !password ||
      !username;
    return {
      agreeToTerms,
      birthdate,
      changedBirthdate,
      email,
      isButtonDisabled,
      password,
      showDatePickerModal,
      username
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_PASSWORD,
          payload: { value: event }
        });
      },
      onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_USERNAME,
          payload: { value: event }
        });
      },
      onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_EMAIL,
          payload: { value: event }
        });
      },
      onPressCancelModal: () => {
        dispatch({
          type: actions.HIDE_DATE_PICKER_MODAL
        });
      },
      onPressConfirmModal: (date: Date) => {
        dispatch({
          type: actions.ON_PICK_DATE,
          payload: { value: date }
        });
      },
      onPressSetBirthday: () =>
        dispatch({ type: actions.SHOW_DATE_PICKER_MODAL }),
      onPressSignUp: () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
        })
        dispatch({ type: actions.ON_PRESS_SIGNUP })
      },
      onPressTerms: () => dispatch({ type: actions.ON_PRESS_TERMS })
    };
  }
)(SignUpPage);
