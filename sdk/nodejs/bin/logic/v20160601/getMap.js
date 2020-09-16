"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getMap(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:logic/v20160601:getMap", {
        "integrationAccountName": args.integrationAccountName,
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}
exports.getMap = getMap;
//# sourceMappingURL=getMap.js.map