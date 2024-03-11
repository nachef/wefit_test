module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "^styles\\.ts$": "<rootDir>/__mocks__/stylesMock.ts",
  },
};
