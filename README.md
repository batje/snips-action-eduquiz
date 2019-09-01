# snips-action-eduquiz

#### Quiz you with educational questions about Math and the Alphabet

## Setup

You must install nodes version 10 before using this action:

```
# Using Ubuntu (or raspberry)
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

```

## Run

- Dev mode:

```sh
# Dev mode watches for file changes and restarts the action.
npm run dev
```

- Prod mode:

```sh
# 1) Lint, transpile and test.
npm start
# 2) Run the action.
npm run launch
```

## Debug

In the `src/index.js` file:

```js
// Replace 'error' with '*' to log everything
logger.enable("error");
```

## Test & Lint

_Requires [mosquitto](https://mosquitto.org/download/) to be installed._

```sh
npm start
```

**In test mode, i18n output and http calls are mocked.**
