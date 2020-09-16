// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * Base class for backup items.
 */
export class ProtectedItem extends pulumi.CustomResource {
    /**
     * Get an existing ProtectedItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectedItem {
        return new ProtectedItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:recoveryservices/v20190615:ProtectedItem';

    /**
     * Returns true if the given object is an instance of ProtectedItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtectedItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectedItem.__pulumiType;
    }

    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ProtectedItemResource properties
     */
    public readonly properties!: pulumi.Output<outputs.recoveryservices.v20190615.AzureFileshareProtectedItemResponse | outputs.recoveryservices.v20190615.AzureIaaSVMProtectedItemResponse | outputs.recoveryservices.v20190615.AzureSqlProtectedItemResponse | outputs.recoveryservices.v20190615.AzureVmWorkloadProtectedItemResponse | outputs.recoveryservices.v20190615.DPMProtectedItemResponse | outputs.recoveryservices.v20190615.GenericProtectedItemResponse | outputs.recoveryservices.v20190615.MabFileFolderProtectedItemResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProtectedItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectedItemArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.containerName === undefined) {
                throw new Error("Missing required property 'containerName'");
            }
            if (!args || args.fabricName === undefined) {
                throw new Error("Missing required property 'fabricName'");
            }
            if (!args || args.protectedItemName === undefined) {
                throw new Error("Missing required property 'protectedItemName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.vaultName === undefined) {
                throw new Error("Missing required property 'vaultName'");
            }
            inputs["containerName"] = args ? args.containerName : undefined;
            inputs["eTag"] = args ? args.eTag : undefined;
            inputs["fabricName"] = args ? args.fabricName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["protectedItemName"] = args ? args.protectedItemName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["eTag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:recoveryservices/latest:ProtectedItem" }, { type: "azure-nextgen:recoveryservices/v20160601:ProtectedItem" }, { type: "azure-nextgen:recoveryservices/v20190513:ProtectedItem" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ProtectedItem.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProtectedItem resource.
 */
export interface ProtectedItemArgs {
    /**
     * Container name associated with the backup item.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Optional ETag.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the backup item.
     */
    readonly fabricName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * ProtectedItemResource properties
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.v20190615.AzureFileshareProtectedItem | inputs.recoveryservices.v20190615.AzureIaaSVMProtectedItem | inputs.recoveryservices.v20190615.AzureSqlProtectedItem | inputs.recoveryservices.v20190615.AzureVmWorkloadProtectedItem | inputs.recoveryservices.v20190615.DPMProtectedItem | inputs.recoveryservices.v20190615.GenericProtectedItem | inputs.recoveryservices.v20190615.MabFileFolderProtectedItem>;
    /**
     * Item name to be backed up.
     */
    readonly protectedItemName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    readonly vaultName: pulumi.Input<string>;
}