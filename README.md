# ember-cli-pendo-utils

Add pendo to your application.

## Installation

`ember install ember-cli-pendo-utils`

## Usage

Configure your Pendo API key in environment.js
```javascript
// environment.js
ENV.pendo = {
  location: 'head', // optional
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
window.pendo.initialize(options);
```

## Events
| Events                    	| Description                                           	|
|---------------------------	|-------------------------------------------------------	|
| pendo.events.ready        	| Fired when the Pendo agent is loaded and initialized. 	|
| pendo.events.guidesLoaded 	| Fired when guides have loaded successfully.           	|
| pendo.events.guidesFailed 	| Fired when guides fail to load.                       	|

### Events Example
```javascript
const options = {
  visitor: {
    id: 'userId',
    email: 'userEmail'
  },
  account: {
    id: 'accountId'
  },
  events: {
    ready: function() {/*...*/},
    guidesLoaded: function() {/*...*/},
    guidesFailed: function() {/*...*/}
  }
};
window.pendo.initialize(options);
```