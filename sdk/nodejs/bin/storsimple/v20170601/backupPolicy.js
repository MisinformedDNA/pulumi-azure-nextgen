"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * The backup policy.
 */
class BackupPolicy extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.backupPolicyName === undefined) {
                throw new Error("Missing required property 'backupPolicyName'");
            }
            if (!args || args.deviceName === undefined) {
                throw new Error("Missing required property 'deviceName'");
            }
            if (!args || args.managerName === undefined) {
                throw new Error("Missing required property 'managerName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.volumeIds === undefined) {
                throw new Error("Missing required property 'volumeIds'");
            }
            inputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["volumeIds"] = args ? args.volumeIds : undefined;
            inputs["backupPolicyCreationType"] = undefined /*out*/;
            inputs["lastBackupTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["nextBackupTime"] = undefined /*out*/;
            inputs["scheduledBackupStatus"] = undefined /*out*/;
            inputs["schedulesCount"] = undefined /*out*/;
            inputs["ssmHostName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(BackupPolicy.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new BackupPolicy(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of BackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupPolicy.__pulumiType;
    }
}
exports.BackupPolicy = BackupPolicy;
/** @internal */
BackupPolicy.__pulumiType = 'azurerm:storsimple/v20170601:BackupPolicy';
//# sourceMappingURL=backupPolicy.js.map