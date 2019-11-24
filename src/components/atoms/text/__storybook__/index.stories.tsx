// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { TextProps } from "react-native-kinpaku-ui";
import Provider from "../../../../../storybook/Provider";
import {
  selectTextAlign,
  selectTextColor
} from "../../../../../storybook/knobs";
import { additionalColors } from "../../../../symbols";
import { FontSizes } from "../const";
import { Title, Heading, SubHeading, Body, Caption, Quote } from "../";

const DEFAULT_PROPS: TextProps<typeof additionalColors, FontSizes, true> = {
  children: "SAMPLE TEXT"
};

const selectSize: { [key in FontSizes]: FontSizes } = {
  small: "small",
  medium: "medium",
  large: "large"
};

const getRequiredProps = (
  overrides = {}
): TextProps<typeof additionalColors, FontSizes, true> => {
  const { children } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    children: text("Text", children)
  };
};

const getOptionalProps = (): Partial<TextProps<
  typeof additionalColors,
  FontSizes,
  true
>> => {
  return {
    align: select("Align Options", selectTextAlign, undefined),
    bold: boolean("Bold", false),
    color: select("Color Option", selectTextColor, undefined),
    italic: boolean("Italic", false),
    size: select("Size Options", selectSize, undefined),
    lineThrough: boolean("Line Though", false),
    underline: boolean("Underline", false)
  };
};

storiesOf("Atoms/Text")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <>
      <Title {...getRequiredProps()} {...getOptionalProps()} />
      <Heading {...getRequiredProps()} {...getOptionalProps()} />
      <SubHeading {...getRequiredProps()} {...getOptionalProps()} />
      <Body {...getRequiredProps()} {...getOptionalProps()} />
      <Caption {...getRequiredProps()} {...getOptionalProps()} />
      <Quote {...getRequiredProps()} {...getOptionalProps()} />
    </>
  ));