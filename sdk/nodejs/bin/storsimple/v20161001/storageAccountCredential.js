"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * The storage account credential
 */
class StorageAccountCredential extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.cloudType === undefined) {
                throw new Error("Missing required property 'cloudType'");
            }
            if (!args || args.credentialName === undefined) {
                throw new Error("Missing required property 'credentialName'");
            }
            if (!args || args.enableSSL === undefined) {
                throw new Error("Missing required property 'enableSSL'");
            }
            if (!args || args.endPoint === undefined) {
                throw new Error("Missing required property 'endPoint'");
            }
            if (!args || args.login === undefined) {
                throw new Error("Missing required property 'login'");
            }
            if (!args || args.managerName === undefined) {
                throw new Error("Missing required property 'managerName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accessKey"] = args ? args.accessKey : undefined;
            inputs["cloudType"] = args ? args.cloudType : undefined;
            inputs["credentialName"] = args ? args.credentialName : undefined;
            inputs["enableSSL"] = args ? args.enableSSL : undefined;
            inputs["endPoint"] = args ? args.endPoint : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["login"] = args ? args.login : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(StorageAccountCredential.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new StorageAccountCredential(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of StorageAccountCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccountCredential.__pulumiType;
    }
}
exports.StorageAccountCredential = StorageAccountCredential;
/** @internal */
StorageAccountCredential.__pulumiType = 'azurerm:storsimple/v20161001:StorageAccountCredential';
//# sourceMappingURL=storageAccountCredential.js.map