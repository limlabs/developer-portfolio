module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended"],
  ignorePatterns: ["**/payload-types.ts"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
