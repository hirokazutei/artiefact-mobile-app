export type ActionTypes =
  | "CHECK_USERNAME_AVAILABILITY"
  | "DELAYED_USERNAME_VALIDATION"
  | "DELAYED_PASSWORD_VALIDATION"
  | "DELAYED_EMAIL_VALIDATION";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  CHECK_USERNAME_AVAILABILITY: "CHECK_USERNAME_AVAILABILITY",
  DELAYED_USERNAME_VALIDATION: "DELAYED_USERNAME_VALIDATION",
  DELAYED_PASSWORD_VALIDATION: "DELAYED_PASSWORD_VALIDATION",
  DELAYED_EMAIL_VALIDATION: "DELAYED_EMAIL_VALIDATION",
};
