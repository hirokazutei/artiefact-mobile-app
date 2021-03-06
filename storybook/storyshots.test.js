import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from "@storybook/addon-storyshots";

initStoryshots({
  configPath: "storybook",
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: "./",
  }),
  storyKindRegex: /^((?!.*?DontTest).)*$/,
  test: multiSnapshotWithOptions({}),
});
