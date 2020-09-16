"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getRegistrationAssignment(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:managedservices/v20190901:getRegistrationAssignment", {
        "expandRegistrationDefinition": args.expandRegistrationDefinition,
        "registrationAssignmentId": args.registrationAssignmentId,
        "scope": args.scope,
    }, opts);
}
exports.getRegistrationAssignment = getRegistrationAssignment;
//# sourceMappingURL=getRegistrationAssignment.js.map