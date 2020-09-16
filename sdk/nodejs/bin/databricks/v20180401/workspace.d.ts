import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about workspace.
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * The workspace provider authorizations.
     */
    readonly authorizations: pulumi.Output<outputs.databricks.v20180401.WorkspaceProviderAuthorizationResponse[] | undefined>;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that created the workspace.
     */
    readonly createdBy: pulumi.Output<outputs.databricks.v20180401.CreatedByResponse | undefined>;
    /**
     * Specifies the date and time when the workspace is created.
     */
    readonly createdDateTime: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The workspace's custom parameters.
     */
    readonly parameters: pulumi.Output<outputs.databricks.v20180401.WorkspaceCustomParametersResponse | undefined>;
    /**
     * The workspace provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku: pulumi.Output<outputs.databricks.v20180401.SkuResponse | undefined>;
    /**
     * The details of Managed Identity of Storage Account
     */
    readonly storageAccountIdentity: pulumi.Output<outputs.databricks.v20180401.ManagedIdentityConfigurationResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The blob URI where the UI definition file is located.
     */
    readonly uiDefinitionUri: pulumi.Output<string | undefined>;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
     */
    readonly updatedBy: pulumi.Output<outputs.databricks.v20180401.CreatedByResponse | undefined>;
    /**
     * The unique identifier of the databricks workspace in databricks control plane.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
     */
    readonly workspaceUrl: pulumi.Output<string>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The workspace provider authorizations.
     */
    readonly authorizations?: pulumi.Input<pulumi.Input<inputs.databricks.v20180401.WorkspaceProviderAuthorization>[]>;
    /**
     * Specifies the date and time when the workspace is created.
     */
    readonly createdDateTime?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId: pulumi.Input<string>;
    /**
     * The workspace's custom parameters.
     */
    readonly parameters?: pulumi.Input<inputs.databricks.v20180401.WorkspaceCustomParameters>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.databricks.v20180401.Sku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The blob URI where the UI definition file is located.
     */
    readonly uiDefinitionUri?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}