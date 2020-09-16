"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Information about JIT request definition.
 */
class JitRequest extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.applicationResourceId === undefined) {
                throw new Error("Missing required property 'applicationResourceId'");
            }
            if (!args || args.jitAuthorizationPolicies === undefined) {
                throw new Error("Missing required property 'jitAuthorizationPolicies'");
            }
            if (!args || args.jitRequestName === undefined) {
                throw new Error("Missing required property 'jitRequestName'");
            }
            if (!args || args.jitSchedulingPolicy === undefined) {
                throw new Error("Missing required property 'jitSchedulingPolicy'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["applicationResourceId"] = args ? args.applicationResourceId : undefined;
            inputs["jitAuthorizationPolicies"] = args ? args.jitAuthorizationPolicies : undefined;
            inputs["jitRequestName"] = args ? args.jitRequestName : undefined;
            inputs["jitSchedulingPolicy"] = args ? args.jitSchedulingPolicy : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["createdBy"] = undefined /*out*/;
            inputs["jitRequestState"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publisherTenantId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedBy"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(JitRequest.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing JitRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new JitRequest(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of JitRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JitRequest.__pulumiType;
    }
}
exports.JitRequest = JitRequest;
/** @internal */
JitRequest.__pulumiType = 'azurerm:solutions/v20190701:JitRequest';
//# sourceMappingURL=jitRequest.js.map