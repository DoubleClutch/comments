module.exports = {
  "extends": "airbnb",
  "env":{
    "browser": true,
    "jest": true
  },
  "globals": {
    "window": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "no-tabs": 0,
    "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}]
  }
};
