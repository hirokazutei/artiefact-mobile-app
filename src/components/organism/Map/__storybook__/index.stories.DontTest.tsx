import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import Map from "../";

const tokyoRegion = {
  currentRegion: {
    latitude: 35.7,
    longitude: 139.75,
    latitudeDelta: 0.24,
    longitudeDelta: 0.16,
  },
};

storiesOf("Organism/Map", module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <Map currentRegion={tokyoRegion.currentRegion} />)
  .add("autoUpdate", () => <Map followSelf={true} />)
  .add("currentRegion", () => <Map />);
