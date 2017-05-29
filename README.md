# ember-cli-pendo-utils

Add pendo to your application.

## Installation

`ember install ember-cli-pendo-utils`

## Usage

Configure your Pendo API key in environment.js
```javascript
// environment.js
ENV.pendo = {
  apiKey: 'abc-123'
};
```

The Pendo JavaScript API is now available globally at window.pendo

For example,
```javascript
const options = {
  visitor: {
    id: 'userId',
    email: 'userEmail'
  },
  account: {
    id: 'accountId'
  }
};
window.pendo.updateOptions(options);
```
