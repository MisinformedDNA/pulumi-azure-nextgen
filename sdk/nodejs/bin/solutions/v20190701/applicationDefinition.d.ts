import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about managed application definition.
 */
export declare class ApplicationDefinition extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationDefinition;
    /**
     * Returns true if the given object is an instance of ApplicationDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationDefinition;
    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    readonly artifacts: pulumi.Output<outputs.solutions.v20190701.ApplicationDefinitionArtifactResponse[] | undefined>;
    /**
     * The managed application provider authorizations.
     */
    readonly authorizations: pulumi.Output<outputs.solutions.v20190701.ApplicationAuthorizationResponse[] | undefined>;
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    readonly createUiDefinition: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The managed application deployment policy.
     */
    readonly deploymentPolicy: pulumi.Output<outputs.solutions.v20190701.ApplicationDeploymentPolicyResponse | undefined>;
    /**
     * The managed application definition description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The managed application definition display name.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * A value indicating whether the package is enabled or not.
     */
    readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The managed application lock level.
     */
    readonly lockLevel: pulumi.Output<string>;
    /**
     * The managed application locking policy.
     */
    readonly lockingPolicy: pulumi.Output<outputs.solutions.v20190701.ApplicationPackageLockingPolicyDefinitionResponse | undefined>;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    readonly mainTemplate: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy: pulumi.Output<string | undefined>;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    readonly managementPolicy: pulumi.Output<outputs.solutions.v20190701.ApplicationManagementPolicyResponse | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The managed application notification policy.
     */
    readonly notificationPolicy: pulumi.Output<outputs.solutions.v20190701.ApplicationNotificationPolicyResponse | undefined>;
    /**
     * The managed application definition package file Uri. Use this element
     */
    readonly packageFileUri: pulumi.Output<string | undefined>;
    /**
     * The managed application provider policies.
     */
    readonly policies: pulumi.Output<outputs.solutions.v20190701.ApplicationPolicyResponse[] | undefined>;
    /**
     * The SKU of the resource.
     */
    readonly sku: pulumi.Output<outputs.solutions.v20190701.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApplicationDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApplicationDefinition resource.
 */
export interface ApplicationDefinitionArgs {
    /**
     * The name of the managed application definition.
     */
    readonly applicationDefinitionName: pulumi.Input<string>;
    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    readonly artifacts?: pulumi.Input<pulumi.Input<inputs.solutions.v20190701.ApplicationDefinitionArtifact>[]>;
    /**
     * The managed application provider authorizations.
     */
    readonly authorizations?: pulumi.Input<pulumi.Input<inputs.solutions.v20190701.ApplicationAuthorization>[]>;
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    readonly createUiDefinition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The managed application deployment policy.
     */
    readonly deploymentPolicy?: pulumi.Input<inputs.solutions.v20190701.ApplicationDeploymentPolicy>;
    /**
     * The managed application definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The managed application definition display name.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * A value indicating whether the package is enabled or not.
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The managed application lock level.
     */
    readonly lockLevel: pulumi.Input<string>;
    /**
     * The managed application locking policy.
     */
    readonly lockingPolicy?: pulumi.Input<inputs.solutions.v20190701.ApplicationPackageLockingPolicyDefinition>;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    readonly mainTemplate?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: pulumi.Input<string>;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    readonly managementPolicy?: pulumi.Input<inputs.solutions.v20190701.ApplicationManagementPolicy>;
    /**
     * The managed application notification policy.
     */
    readonly notificationPolicy?: pulumi.Input<inputs.solutions.v20190701.ApplicationNotificationPolicy>;
    /**
     * The managed application definition package file Uri. Use this element
     */
    readonly packageFileUri?: pulumi.Input<string>;
    /**
     * The managed application provider policies.
     */
    readonly policies?: pulumi.Input<pulumi.Input<inputs.solutions.v20190701.ApplicationPolicy>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.solutions.v20190701.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}