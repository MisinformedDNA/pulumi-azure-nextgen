"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Snapshot of a Volume
 */
class Snapshot extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.poolName === undefined) {
                throw new Error("Missing required property 'poolName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.snapshotName === undefined) {
                throw new Error("Missing required property 'snapshotName'");
            }
            if (!args || args.volumeName === undefined) {
                throw new Error("Missing required property 'volumeName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["fileSystemId"] = args ? args.fileSystemId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["poolName"] = args ? args.poolName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["snapshotName"] = args ? args.snapshotName : undefined;
            inputs["volumeName"] = args ? args.volumeName : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["snapshotId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:netapp/v20190501:Snapshot" }, { type: "azurerm:netapp/v20190601:Snapshot" }, { type: "azurerm:netapp/v20190801:Snapshot" }, { type: "azurerm:netapp/v20191001:Snapshot" }, { type: "azurerm:netapp/v20191101:Snapshot" }, { type: "azurerm:netapp/v20200201:Snapshot" }, { type: "azurerm:netapp/v20200601:Snapshot" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Snapshot.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new Snapshot(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Snapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snapshot.__pulumiType;
    }
}
exports.Snapshot = Snapshot;
/** @internal */
Snapshot.__pulumiType = 'azurerm:netapp/v20190701:Snapshot';
//# sourceMappingURL=snapshot.js.map