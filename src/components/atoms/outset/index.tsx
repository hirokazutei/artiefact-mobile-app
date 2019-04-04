/* @flow */
import * as React from "react";
import { View } from "react-native";
import { stylizeOutset, StyleProps } from "./styles";

type Props = {
  children: React.ReactElement;
} & StyleProps;

/**
 * Outset
 *
 * @param props - properties
 * @param props.children - children
 * @param [props.marginBottom] - bottom margin
 * @param [props.marginRight] - right margin
 */
const Outset = (props: Props): React.ReactElement => {
  const { children, ...styleProps } = props;
  const styles = stylizeOutset(styleProps);
  return <View style={styles.outset}>{children}</View>;
};

export default Outset;