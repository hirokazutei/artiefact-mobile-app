// components/Hello.tsx
import React from "react"
import store from './redux/configureStore'
import { Button, StyleSheet, Text, View } from "react-native"

export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

interface State {
    enthusiasmLevel: number
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
    onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
    getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
                </Text>

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="-"
                            onPress={this.onDecrement}
                            accessibilityLabel="decrement"
                            color="red"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="+"
                            onPress={this.onIncrement}
                            accessibilityLabel="increment"
                            color="blue"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center",
        padding: 30,
        backgroundColor: "white",
        flex: 1,
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
})
