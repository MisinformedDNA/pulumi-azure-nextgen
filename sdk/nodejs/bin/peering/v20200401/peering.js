"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
 */
class Peering extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.kind === undefined) {
                throw new Error("Missing required property 'kind'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.peeringName === undefined) {
                throw new Error("Missing required property 'peeringName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["direct"] = args ? args.direct : undefined;
            inputs["exchange"] = args ? args.exchange : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["peeringLocation"] = args ? args.peeringLocation : undefined;
            inputs["peeringName"] = args ? args.peeringName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Peering.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing Peering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new Peering(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Peering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Peering.__pulumiType;
    }
}
exports.Peering = Peering;
/** @internal */
Peering.__pulumiType = 'azurerm:peering/v20200401:Peering';
//# sourceMappingURL=peering.js.map