var BraviaRemoteControl = require('sony-bravia-tv-remote-v2');
var Service, Characteristic;

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;

    homebridge.registerAccessory("homebridge-sonybraviatv", "SonyBraviaTV-input", SonyBraviaTVAccessory);
}

function SonyBraviaTVAccessory(log, config) {
    this.log = log;

    this.name = config["name"];
    this.psk = config["presharedkey"];
    this.ipaddress = config["ipaddress"];
    this.action = config['action'];


    this.service = new Service.Switch(this.name);
    this.remote = new BraviaRemoteControl(this.ipaddress, 80, this.psk);

    this.service
        .getCharacteristic(Characteristic.On)
        .on('get', this.getOn.bind(this))
        .on('set', this.setOn.bind(this));

}

SonyBraviaTVAccessory.prototype.getOn = function(callback) {
    callback(null);
}

SonyBraviaTVAccessory.prototype.setOn = function(value, callback) {
    console.log('Turning TV on');
    this.remote.sendAction('PowerOn').then((rr) => {
      setTimeout(() => {
        console.log('Pressing ' + this.action);
        this.remote.sendAction(this.action).then((response) => {
          callback(null)
        });
      }, 3000);
    });
}

SonyBraviaTVAccessory.prototype.getServices = function() {
    return [this.service];
}
