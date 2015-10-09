# Service Test

Ember application experiment to try acceptance-testing a call to a service object.

This came from the following situation:
- a service that calls a native API that you don't want called in a test
- unit testing doesn't cover the flow, as the service call is the result of a chain of actions
- you want a test checks that actions are correctly mapped between a component and the controller/route

## Steps to install

Assuming you've got [brew](http://brew.sh/)

```bash
$> brew install node
$> npm install n
$> n 0.12
$> npm install -g ember-cli
$> npm install && bower install
```
