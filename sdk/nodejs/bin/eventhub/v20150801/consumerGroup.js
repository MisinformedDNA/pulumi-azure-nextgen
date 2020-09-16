"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Single item in List or Get Consumer group operation
 */
class ConsumerGroup extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.consumerGroupName === undefined) {
                throw new Error("Missing required property 'consumerGroupName'");
            }
            if (!args || args.eventHubName === undefined) {
                throw new Error("Missing required property 'eventHubName'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["consumerGroupName"] = args ? args.consumerGroupName : undefined;
            inputs["eventHubName"] = args ? args.eventHubName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["userMetadata"] = args ? args.userMetadata : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["eventHubPath"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:eventhub/v20140901:ConsumerGroup" }, { type: "azurerm:eventhub/v20170401:ConsumerGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ConsumerGroup.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing ConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new ConsumerGroup(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConsumerGroup.__pulumiType;
    }
}
exports.ConsumerGroup = ConsumerGroup;
/** @internal */
ConsumerGroup.__pulumiType = 'azurerm:eventhub/v20150801:ConsumerGroup';
//# sourceMappingURL=consumerGroup.js.map