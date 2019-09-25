const deepMerge = require('lodash.mergewith');
const config = require('./config');

function overrideArrays(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return srcValue;
  }
  return undefined;
}

class State {
  constructor(data) {
    this.data = data
  }

  setState(newState) {
    this.data = deepMerge(this.data, newState, overrideArrays);
  }

  getState() {
    return { ...this.data }; // a copy where mutations will take no effect
  }
}

/**
 * State instance
 */
const appState = new State({
  scene: {},
  refreshRate: config.refreshRate, // game speed
});

module.exports = {
  getState: appState.getState.bind(appState),
  setState: appState.setState.bind(appState)
}
