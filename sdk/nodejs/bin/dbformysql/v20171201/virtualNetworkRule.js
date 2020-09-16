"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * A virtual network rule.
 */
class VirtualNetworkRule extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.virtualNetworkRuleName === undefined) {
                throw new Error("Missing required property 'virtualNetworkRuleName'");
            }
            if (!args || args.virtualNetworkSubnetId === undefined) {
                throw new Error("Missing required property 'virtualNetworkSubnetId'");
            }
            inputs["ignoreMissingVnetServiceEndpoint"] = args ? args.ignoreMissingVnetServiceEndpoint : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["virtualNetworkRuleName"] = args ? args.virtualNetworkRuleName : undefined;
            inputs["virtualNetworkSubnetId"] = args ? args.virtualNetworkSubnetId : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VirtualNetworkRule.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing VirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new VirtualNetworkRule(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of VirtualNetworkRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkRule.__pulumiType;
    }
}
exports.VirtualNetworkRule = VirtualNetworkRule;
/** @internal */
VirtualNetworkRule.__pulumiType = 'azurerm:dbformysql/v20171201:VirtualNetworkRule';
//# sourceMappingURL=virtualNetworkRule.js.map