'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SunricherDimmerDevice extends ZwaveDevice {

	async onMeshInit() {
		this.registerCapability('onoff', 'SWITCH_MULTILEVEL'); // BASIC
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');

		this.registerReportListener('BASIC', 'BASIC_REPORT', report => {
			if (report.hasOwnProperty('Current Value')) {
				this.setCapabilityValue('onoff', report['Current Value'] > 1);
				this.setCapabilityValue('dim', report['Current Value'] / 99);
			}
		});
		
	}
}

module.exports = SunricherDimmerDevice;
