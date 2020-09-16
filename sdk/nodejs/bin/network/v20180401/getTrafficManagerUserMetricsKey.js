"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getTrafficManagerUserMetricsKey(args, opts) {
    args = args || {};
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:network/v20180401:getTrafficManagerUserMetricsKey", {}, opts);
}
exports.getTrafficManagerUserMetricsKey = getTrafficManagerUserMetricsKey;
//# sourceMappingURL=getTrafficManagerUserMetricsKey.js.map