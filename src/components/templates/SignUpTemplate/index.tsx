import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Inset from "../../atoms/Inset";
import Button from "../../atoms/Button";
import Stack from "../../atoms/Stack";
import Text from "../../atoms/Text";
import ShiftingTitle from "../../atoms/ShiftingTitle";
import RadioSelection from "../../molecules/RadioSelection";
import { Props } from "../../pages/SignUpPage/component";
import ValidationField from "../../molecules/ValidationField";
import IOSDatePicker from "../../organism/DatePicker/ios";
import { formatDate } from "../../../helper/wording";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const SignUpTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    agreeToTerms,
    birthday,
    changedBirthday,
    email,
    emailErrors,
    emailValidationStatus,
    isButtonDisabled,
    isUsernameValidating,
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    onPressCancelModal,
    onPressConfirmModal,
    onPressSetBirthday,
    onPressSignUp,
    onPressTerms,
    password,
    passwordErrors,
    passwordValidationStatus,
    showDatePickerModal,
    username,
    usernameErrors,
    usernameValidationStatus
  } = props;
  const birthdayField =
    changedBirthday && birthday ? formatDate(birthday) : "Enter Birthday";
  const secondaryButtonColor = isButtonDisabled ? "disabled" : "secondary";
  return (
    <View style={styles.base}>
      <IOSDatePicker
        isVisible={showDatePickerModal}
        cancelButton={{ onPress: onPressCancelModal, label: "Cancel" }}
        confirmButton={{ onPress: onPressConfirmModal, label: "Confirm" }}
        mode="date"
      />
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <Text size="massive" color="secondary" weight="bold" align="center">
          {"Adventure Awaits,"}
        </Text>
        <ShiftingTitle color="secondary" />
        <Stack value="huge" />
        <ValidationField
          placeholder="Username"
          color="secondary"
          onChangeText={onChangeUsername}
          value={username}
          errors={usernameErrors}
          validationResult={usernameValidationStatus}
          isValidating={isUsernameValidating}
        />
        <Stack value="huge" />
        <ValidationField
          placeholder="Password"
          color="secondary"
          onChangeText={onChangePassword}
          secureTextEntry={true}
          value={password}
          validationResult={passwordValidationStatus}
          errors={passwordErrors}
        />
        <Stack value="huge" />
        <ValidationField
          placeholder="Email"
          color="secondary"
          onChangeText={onChangeEmail}
          value={email}
          validationResult={emailValidationStatus}
          errors={emailErrors}
        />
        <Stack value="huge" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "flex-end" }}>
            <Text size="large" color="faded">
              {"Birthday:"}
            </Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Text
              size="huge"
              color="secondary"
              weight="bold"
              onPress={onPressSetBirthday}
            >
              {birthdayField}
            </Text>
          </View>
        </View>
        <Stack value="huge" />
        <RadioSelection
          checked={agreeToTerms}
          color="secondary"
          onPress={onPressTerms}
        >
          {"Agree to Terms & Con"}
        </RadioSelection>
        <Stack value="huge" />
        <Button
          size="massive"
          color={secondaryButtonColor}
          label="Sign Up"
          isDisabled={isButtonDisabled}
          onPress={onPressSignUp}
        />
      </Inset>
    </View>
  );
};

export default SignUpTemplate;
