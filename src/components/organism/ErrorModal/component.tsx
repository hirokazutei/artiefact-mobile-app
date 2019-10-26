import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Modal from "../../molecules/Modal";
import Text from "../../atoms/Text";
import Space from "../../atoms/Space";
import Icon from "../../atoms/Icon";
import { IconTypes } from "../../atoms/Icon";

type Props = {
  onPress: () => void;
  isVisible: boolean;
  message: string;
  icon?: IconTypes;
};

type Styles = {
  iconView: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconView: {
    alignSelf: "center"
  }
});

export default class ErrorModal extends React.Component<Props> {
  render() {
    const { message, icon, isVisible, onPress } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        primaryButton={{
          onPress: onPress,
          title: "OK"
        }}
      >
        <Space.Inset top="huge" horizontal="huge">
          <Text size="huge">{message}</Text>
          {icon && (
            <View style={styles.iconView}>
              <Space.Stack size="large" />
              <Icon name={icon} size={"macro"} color={"primary"} />
            </View>
          )}
        </Space.Inset>
      </Modal>
    );
  }
}
