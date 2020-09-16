"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getRegisteredServer(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:storagesync/v20181001:getRegisteredServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverId": args.serverId,
        "storageSyncServiceName": args.storageSyncServiceName,
    }, opts);
}
exports.getRegisteredServer = getRegisteredServer;
//# sourceMappingURL=getRegisteredServer.js.map