"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getServiceFabricSchedule(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:devtestlab/v20180915:getServiceFabricSchedule", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "serviceFabricName": args.serviceFabricName,
        "userName": args.userName,
    }, opts);
}
exports.getServiceFabricSchedule = getServiceFabricSchedule;
//# sourceMappingURL=getServiceFabricSchedule.js.map