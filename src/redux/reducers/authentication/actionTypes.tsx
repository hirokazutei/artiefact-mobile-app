export type ActionTypes =
  | "AUTH_CHANGE_PASSWORD"
  | "AUTH_CHANGE_USERNAME"
  | "AUTH_CHANGE_EMAIL"
  | "AUTH_ON_PICK_BIRTHDATE"
  | "AUTH_ON_PRESS_TERMS"
  | "AUTH_SHOW_DATE_PICKER_MODAL"
  | "AUTH_HIDE_DATE_PICKER_MODAL"
  | "AUTH_RESET_SIGN_UP_FORM"
  | "AUTH_RESET_SIGN_IN_FORM"
  | "AUTH_USERNAME_IS_VALIDATING"
  | "AUTH_USERNAME_AVAILABLE"
  | "AUTH_EMAIL_VALIDATION"
  | "AUTH_USERNAME_VALIDATION"
  | "AUTH_PASSWORD_VALIDATION";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  AUTH_CHANGE_PASSWORD: "AUTH_CHANGE_PASSWORD",
  AUTH_CHANGE_USERNAME: "AUTH_CHANGE_USERNAME",
  AUTH_CHANGE_EMAIL: "AUTH_CHANGE_EMAIL",
  AUTH_ON_PICK_BIRTHDATE: "AUTH_ON_PICK_BIRTHDATE",
  AUTH_SHOW_DATE_PICKER_MODAL: "AUTH_SHOW_DATE_PICKER_MODAL",
  AUTH_HIDE_DATE_PICKER_MODAL: "AUTH_HIDE_DATE_PICKER_MODAL",
  AUTH_ON_PRESS_TERMS: "AUTH_ON_PRESS_TERMS",
  AUTH_RESET_SIGN_IN_FORM: "AUTH_RESET_SIGN_IN_FORM",
  AUTH_RESET_SIGN_UP_FORM: "AUTH_RESET_SIGN_UP_FORM",
  AUTH_USERNAME_IS_VALIDATING: "AUTH_USERNAME_IS_VALIDATING",
  AUTH_USERNAME_AVAILABLE: "AUTH_USERNAME_AVAILABLE",
  AUTH_EMAIL_VALIDATION: "AUTH_EMAIL_VALIDATION",
  AUTH_USERNAME_VALIDATION: "AUTH_USERNAME_VALIDATION",
  AUTH_PASSWORD_VALIDATION: "AUTH_PASSWORD_VALIDATION"
};
