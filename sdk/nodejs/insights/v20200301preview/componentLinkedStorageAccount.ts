// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * An Application Insights component linked storage accounts
 */
export class ComponentLinkedStorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing ComponentLinkedStorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComponentLinkedStorageAccount {
        return new ComponentLinkedStorageAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:insights/v20200301preview:ComponentLinkedStorageAccount';

    /**
     * Returns true if the given object is an instance of ComponentLinkedStorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComponentLinkedStorageAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComponentLinkedStorageAccount.__pulumiType;
    }

    /**
     * Linked storage account resource ID
     */
    public readonly linkedStorageAccount!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ComponentLinkedStorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentLinkedStorageAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.resourceName === undefined) {
                throw new Error("Missing required property 'resourceName'");
            }
            if (!args || args.storageType === undefined) {
                throw new Error("Missing required property 'storageType'");
            }
            inputs["linkedStorageAccount"] = args ? args.linkedStorageAccount : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["storageType"] = args ? args.storageType : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["linkedStorageAccount"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ComponentLinkedStorageAccount.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ComponentLinkedStorageAccount resource.
 */
export interface ComponentLinkedStorageAccountArgs {
    /**
     * Linked storage account resource ID
     */
    readonly linkedStorageAccount?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The type of the Application Insights component data source for the linked storage account.
     */
    readonly storageType: pulumi.Input<string>;
}