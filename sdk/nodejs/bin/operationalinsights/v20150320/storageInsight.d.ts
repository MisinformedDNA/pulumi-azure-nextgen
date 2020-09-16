import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The top level storage insight resource container.
 */
export declare class StorageInsight extends pulumi.CustomResource {
    /**
     * Get an existing StorageInsight resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageInsight;
    /**
     * Returns true if the given object is an instance of StorageInsight.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageInsight;
    /**
     * The names of the blob containers that the workspace should read
     */
    readonly containers: pulumi.Output<string[] | undefined>;
    /**
     * The ETag of the storage insight.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The status of the storage insight
     */
    readonly status: pulumi.Output<outputs.operationalinsights.v20150320.StorageInsightStatusResponse>;
    /**
     * The storage account connection details
     */
    readonly storageAccount: pulumi.Output<outputs.operationalinsights.v20150320.StorageAccountResponse>;
    /**
     * The names of the Azure tables that the workspace should read
     */
    readonly tables: pulumi.Output<string[] | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StorageInsight resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageInsightArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageInsight resource.
 */
export interface StorageInsightArgs {
    /**
     * The names of the blob containers that the workspace should read
     */
    readonly containers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ETag of the storage insight.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * The Resource Group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account connection details
     */
    readonly storageAccount: pulumi.Input<inputs.operationalinsights.v20150320.StorageAccount>;
    /**
     * Name of the storageInsightsConfigs resource
     */
    readonly storageInsightName: pulumi.Input<string>;
    /**
     * The names of the Azure tables that the workspace should read
     */
    readonly tables?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Log Analytics Workspace name.
     */
    readonly workspaceName: pulumi.Input<string>;
}