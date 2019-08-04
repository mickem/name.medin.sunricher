'use strict';

const Homey = require('homey');

class SunricherDimmerDevice extends Homey.Driver {
    onInit() {
        super.onInit();
/*
        this.momentaryTrigger = new Homey.FlowCardTriggerDevice('FGD-211_momentary').register()
            .registerRunListener((args, state) => {
                return args.device.switchTriggersRunListener(args, state);
            });
        this.toggleTrigger = new Homey.FlowCardTriggerDevice('FGD-211_toggle').register()
            .registerRunListener((args, state) => {
                return args.device.switchTriggersRunListener(args, state);
            });
        this.rollerTrigger = new Homey.FlowCardTriggerDevice('FGD-211_roller').register()
            .registerRunListener((args, state) => {
                return args.device.switchTriggersRunListener(args, state);
            });
            */
    }
}

module.exports = SunricherDimmerDevice;
