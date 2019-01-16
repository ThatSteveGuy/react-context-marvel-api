

class Analytics {
  constructor() {
    this.provider = require('amplitude-js');
  }

  logEvent(label, properties) {
    this.provider.getInstance().logEvent(label, properties);
  }

  init(options) {
    this.provider.getInstance().init(options);
  }

  setGroupId(label, value) {
    this.provider.getInstance().setGroup(label, value);
  }

  setUserProps(props) {
    var identify = new this.provider.Identify();

    Object.keys(props).forEach((key) => {
      identify.set(key, props[key]);
    });
    
    return this.provider.getInstance().identify(identify);
  }

}

export default Analytics;