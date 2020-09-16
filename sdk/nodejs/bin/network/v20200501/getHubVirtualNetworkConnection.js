"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getHubVirtualNetworkConnection(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:network/v20200501:getHubVirtualNetworkConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}
exports.getHubVirtualNetworkConnection = getHubVirtualNetworkConnection;
//# sourceMappingURL=getHubVirtualNetworkConnection.js.map