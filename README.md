# homebridge-sonybraviatv-input
A home bridge plugin for Sony Bravia TVs based on Android TV.
Currently it supports powering on and off TVs using a preshared key.

# Installation

1. Install homebridge using: npm install -g homebridge
2. Install this plugin using: npm install -g homebridge-sonybraviatv-input
3. Update your configuration file. See below for a sample.
4. Set "Remote start" to ON in your Android TV Settings->Network->Remote Start
5. Change "Authentication" to "Normal and Pre-Shared Key" in your Android Settings->Network->IP Control->Authentication
6. Enter a "Pre-Shared Key" in your Android TV Settings->Network->IP control->Pre-Shared Key

# Configuration

Enter the IP address of your television in the ipaddress field.
On your TV go to Settings->Network->Home network->IP Control.
  Change Authentication to "Normal and Pre-Shared Key".
  Enter something for the Pre-Shared Key.
  Put that same string in the presharedkey field.
If your TV requires Wake-on-Lan to power-on, enter your TV MAC address in the macaddress field.


Configuration sample:

 ```
"accessories": [
	{
		"accessory": "SonyBraviaTV-input",
		"name": "My TV Name",
		"ipaddress": "YOUR TV IP ADDRESS HERE",
		"presharedkey": "YOUR PRESHARED KEY HERE",
    "action": "Netflix"
  }
    ]
```

# List of available actions:

https://github.com/arnif/sony-bravia-remote/blob/master/src/ActionMap.js
