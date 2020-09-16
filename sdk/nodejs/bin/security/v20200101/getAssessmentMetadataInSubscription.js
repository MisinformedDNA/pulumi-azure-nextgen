"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
function getAssessmentMetadataInSubscription(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azurerm:security/v20200101:getAssessmentMetadataInSubscription", {
        "assessmentMetadataName": args.assessmentMetadataName,
    }, opts);
}
exports.getAssessmentMetadataInSubscription = getAssessmentMetadataInSubscription;
//# sourceMappingURL=getAssessmentMetadataInSubscription.js.map