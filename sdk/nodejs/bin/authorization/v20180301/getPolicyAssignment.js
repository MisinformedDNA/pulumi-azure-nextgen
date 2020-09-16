"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getPolicyAssignment(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:authorization/v20180301:getPolicyAssignment", {
        "policyAssignmentName": args.policyAssignmentName,
        "scope": args.scope,
    }, opts);
}
exports.getPolicyAssignment = getPolicyAssignment;
//# sourceMappingURL=getPolicyAssignment.js.map