"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getDatabaseAccountCassandraKeyspace(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:documentdb/v20160319:getDatabaseAccountCassandraKeyspace", {
        "accountName": args.accountName,
        "keyspaceName": args.keyspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}
exports.getDatabaseAccountCassandraKeyspace = getDatabaseAccountCassandraKeyspace;
//# sourceMappingURL=getDatabaseAccountCassandraKeyspace.js.map