import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { Props as InputFieldProps } from "../../atoms/InputField";
import InputField from "../../atoms/InputField";
import { Body } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { borders, allColors } from "../../../symbols";
import { TextColorKeys } from "../../../symbols";
import Icon from "../../atoms/Icon";
import { IconTypes, IconSizes } from "../../atoms/Icon";
import { Diff } from "../../../type/tsUtility";
const RNIndicator = require("react-native-indicator");

type Props = {
  isValidating?: boolean;
  validationResult?: ValidationResultType;
  errors?: Array<string>;
  warnings?: Array<string>;
  infos?: Array<string>;
} & InputFieldProps;

type Styles = {
  iconWrapper: ViewStyle;
  inputFieldWrapper: ViewStyle;
  validationFieldWrapper: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconWrapper: {
    alignSelf: "center"
  },
  inputFieldWrapper: {
    flex: 1
  },
  validationFieldWrapper: {
    flexDirection: "row",
    borderBottomWidth: borders.thickness.thin
  }
});

export type ValidationResultType = "success" | "warning" | "error";

type ValidationFieldColorKeys = "primary" | "secondary" | "disabled" | "error";

const validationFieldColors: Readonly<
  { [key in ValidationFieldColorKeys]: string }
> = {
  primary: allColors.primary,
  secondary: allColors.secondary,
  disabled: allColors.disabled,
  error: allColors.danger
};

const validationIconNames: Readonly<
  { [key in ValidationResultType]: IconTypes | null }
> = {
  success: "successCircle",
  warning: "warningCircle",
  error: "errorCircle"
};

const validationFieldIcons = (
  status: ValidationResultType,
  size: IconSizes,
  color: ValidationFieldColorKeys
): React.ReactElement => {
  const iconName = validationIconNames[status];
  const iconColor = color as TextColorKeys;
  if (iconName != null) {
    return <Icon name={iconName} size={size} color={iconColor} />;
  }
  return <View />;
};

const listMessagesColor: Readonly<
  { [key in Diff<ValidationResultType, "success"> | "info"]?: TextColorKeys }
> = {
  info: "text",
  warning: "secondary",
  error: "danger"
};

const listMessages = (
  type: Diff<ValidationResultType, "success"> | "info",
  messages: Array<string>
) => {
  const color = listMessagesColor[type];
  return messages.map((messages, i) => {
    return (
      <Body key={i} size="small" color={color} align="left">
        {`・${messages}`}
      </Body>
    );
  });
};

/**
 * Validation Field Props
 * @param props - properties
 * @param [props.isValidating] - if the prop is validating
 * @param [props.validationResult] - the result of the validation
 * @param [props.errors] - the list of errors
 * @param [props.warnings] - the list of warnings
 * @param [props.infos] - the list of information
 */
const ValidationField: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    isValidating,
    validationResult,
    errors,
    warnings,
    infos,
    color = "primary",
    ...inputFieldProps
  } = props;
  const colorStyle = validationFieldColors[color];
  let validationIcon = validationResult
    ? validationFieldIcons(validationResult, "medium", color)
    : null;
  if (isValidating) {
    validationIcon = (
      <RNIndicator.DotsLoader size={10} betweenSpace={5} color={colorStyle} />
    );
  }
  return (
    <View>
      <View
        style={[styles.validationFieldWrapper, { borderColor: colorStyle }]}
      >
        <View style={styles.inputFieldWrapper}>
          <InputField {...inputFieldProps} disableLine={true} color={color} />
        </View>
        <View style={styles.iconWrapper}>{validationIcon}</View>
      </View>
      <Space.Stack size="tiny" />
      {errors && listMessages("error", errors)}
      {warnings && listMessages("warning", warnings)}
      {infos && listMessages("info", infos)}
    </View>
  );
};

export default ValidationField;
