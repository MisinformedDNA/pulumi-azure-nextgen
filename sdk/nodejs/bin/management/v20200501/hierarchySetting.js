"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Settings defined at the Management Group scope.
 */
class HierarchySetting extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.groupId === undefined) {
                throw new Error("Missing required property 'groupId'");
            }
            inputs["defaultManagementGroup"] = args ? args.defaultManagementGroup : undefined;
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["requireAuthorizationForGroupCreation"] = args ? args.requireAuthorizationForGroupCreation : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["tenantId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:management/v20200201:HierarchySetting" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(HierarchySetting.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing HierarchySetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new HierarchySetting(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of HierarchySetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HierarchySetting.__pulumiType;
    }
}
exports.HierarchySetting = HierarchySetting;
/** @internal */
HierarchySetting.__pulumiType = 'azurerm:management/v20200501:HierarchySetting';
//# sourceMappingURL=hierarchySetting.js.map