import StorybookUI from "./storybook";
import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";

AppRegistry.registerComponent(appName, () => StorybookUI);
