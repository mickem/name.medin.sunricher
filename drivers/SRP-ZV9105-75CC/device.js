'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SunricherDimmerDevice extends ZwaveDevice {

	async onMeshInit() {
		//this.enableDebug();
		//this.printNode();

		this.registerCapability('onoff', 'BASIC');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');

		this.registerReportListener('BASIC', 'BASIC_REPORT', report => {
			if (report.hasOwnProperty('Current Value')) {
				this.setCapabilityValue('onoff', report['Current Value'] > 0);
				this.setCapabilityValue('dim', report['Current Value'] / 99);
			}
		});
	}
}

module.exports = SunricherDimmerDevice;
