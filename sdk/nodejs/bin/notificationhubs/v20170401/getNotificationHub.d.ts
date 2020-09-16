import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNotificationHub(args: GetNotificationHubArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubResult>;
export interface GetNotificationHubArgs {
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The notification hub name.
     */
    readonly notificationHubName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a NotificationHub Resource.
 */
export interface GetNotificationHubResult {
    /**
     * The AdmCredential of the created NotificationHub
     */
    readonly admCredential?: outputs.notificationhubs.v20170401.AdmCredentialResponse;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    readonly apnsCredential?: outputs.notificationhubs.v20170401.ApnsCredentialResponse;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    readonly authorizationRules?: outputs.notificationhubs.v20170401.SharedAccessAuthorizationRulePropertiesResponse[];
    /**
     * The BaiduCredential of the created NotificationHub
     */
    readonly baiduCredential?: outputs.notificationhubs.v20170401.BaiduCredentialResponse;
    /**
     * The GcmCredential of the created NotificationHub
     */
    readonly gcmCredential?: outputs.notificationhubs.v20170401.GcmCredentialResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    readonly mpnsCredential?: outputs.notificationhubs.v20170401.MpnsCredentialResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The RegistrationTtl of the created NotificationHub
     */
    readonly registrationTtl?: string;
    /**
     * The sku of the created namespace
     */
    readonly sku?: outputs.notificationhubs.v20170401.SkuResponse;
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
    /**
     * The WnsCredential of the created NotificationHub
     */
    readonly wnsCredential?: outputs.notificationhubs.v20170401.WnsCredentialResponse;
}