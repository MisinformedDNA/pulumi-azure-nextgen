import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplicationDefinition(args: GetApplicationDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationDefinitionResult>;
export interface GetApplicationDefinitionArgs {
    /**
     * The name of the managed application definition.
     */
    readonly applicationDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Information about managed application definition.
 */
export interface GetApplicationDefinitionResult {
    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    readonly artifacts?: outputs.solutions.v20190701.ApplicationDefinitionArtifactResponse[];
    /**
     * The managed application provider authorizations.
     */
    readonly authorizations?: outputs.solutions.v20190701.ApplicationAuthorizationResponse[];
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    readonly createUiDefinition?: {
        [key: string]: any;
    };
    /**
     * The managed application deployment policy.
     */
    readonly deploymentPolicy?: outputs.solutions.v20190701.ApplicationDeploymentPolicyResponse;
    /**
     * The managed application definition description.
     */
    readonly description?: string;
    /**
     * The managed application definition display name.
     */
    readonly displayName?: string;
    /**
     * A value indicating whether the package is enabled or not.
     */
    readonly isEnabled?: boolean;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The managed application lock level.
     */
    readonly lockLevel: string;
    /**
     * The managed application locking policy.
     */
    readonly lockingPolicy?: outputs.solutions.v20190701.ApplicationPackageLockingPolicyDefinitionResponse;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    readonly mainTemplate?: {
        [key: string]: any;
    };
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    readonly managementPolicy?: outputs.solutions.v20190701.ApplicationManagementPolicyResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The managed application notification policy.
     */
    readonly notificationPolicy?: outputs.solutions.v20190701.ApplicationNotificationPolicyResponse;
    /**
     * The managed application definition package file Uri. Use this element
     */
    readonly packageFileUri?: string;
    /**
     * The managed application provider policies.
     */
    readonly policies?: outputs.solutions.v20190701.ApplicationPolicyResponse[];
    /**
     * The SKU of the resource.
     */
    readonly sku?: outputs.solutions.v20190701.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}