"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Base class for backup ProtectionIntent.
 */
class ProtectionIntent extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.fabricName === undefined) {
                throw new Error("Missing required property 'fabricName'");
            }
            if (!args || args.intentObjectName === undefined) {
                throw new Error("Missing required property 'intentObjectName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.vaultName === undefined) {
                throw new Error("Missing required property 'vaultName'");
            }
            inputs["eTag"] = args ? args.eTag : undefined;
            inputs["fabricName"] = args ? args.fabricName : undefined;
            inputs["intentObjectName"] = args ? args.intentObjectName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ProtectionIntent.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing ProtectionIntent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new ProtectionIntent(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ProtectionIntent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectionIntent.__pulumiType;
    }
}
exports.ProtectionIntent = ProtectionIntent;
/** @internal */
ProtectionIntent.__pulumiType = 'azurerm:recoveryservices/v20170701:ProtectionIntent';
//# sourceMappingURL=protectionIntent.js.map