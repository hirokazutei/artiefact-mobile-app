import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

type AlignType = NonNullable<TextStyle["textAlign"]>;

export type StyleProps = {
  color?: symbols.text.TextColorKeys;
  size?: symbols.text.TextSizeKeys;
  italic?: Boolean;
  weight?: symbols.text.TextWeightKeys;
  align?: AlignType;
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "default" as symbols.text.TextColorKeys,
  size: "medium" as symbols.text.TextSizeKeys,
  italic: false as Boolean,
  weight: "default" as symbols.text.TextWeightKeys,
  align: "auto" as AlignType
};

/**
 * Resolve Text Colors
 *
 * @param color - color key
 */
const resolveTextColors = (
  color: symbols.text.TextColorKeys = defaultStyle.color
): string => {
  return symbols.text.textColors[color];
};

/**
 * Resolve Text Sizes
 *
 * @param size - size key
 */
const resolveTextSizes = (
  size: symbols.text.TextSizeKeys = defaultStyle.size
): number => {
  return symbols.text.textSizes[size];
};

/**
 * Resolve Text Weights
 *
 * @param weight - weight key
 */
const resolveTextWeights = (
  weight: symbols.text.TextWeightKeys = defaultStyle.weight
): TextStyle["fontWeight"] => {
  return symbols.text.textWeights[weight];
};

type Styles = {
  text: TextStyle;
};

/**
 * Stylize Text
 *
 * @param styleProps - style properties
 * @param [styleProps.color] - color of text
 * @param [styleProps.size] - size of text
 * @param [styleProps.italic] - is text italic
 * @param [styleProps.weight] - weight of text
 * @param [styleProps.align] - alignment of text
 */
export const stylizeText = (styleProps: StyleProps): Styles => {
  const { color, size, italic, align, weight } = styleProps;
  const italicize = italic ? "italic" : "normal";
  return StyleSheet.create<Styles>({
    text: {
      color: resolveTextColors(color),
      fontSize: resolveTextSizes(size),
      fontStyle: italicize,
      fontWeight: resolveTextWeights(weight),
      textAlign: align
    }
  });
};
