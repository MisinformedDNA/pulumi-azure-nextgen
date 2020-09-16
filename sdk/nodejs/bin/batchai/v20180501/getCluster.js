"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getCluster(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:batchai/v20180501:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}
exports.getCluster = getCluster;
//# sourceMappingURL=getCluster.js.map