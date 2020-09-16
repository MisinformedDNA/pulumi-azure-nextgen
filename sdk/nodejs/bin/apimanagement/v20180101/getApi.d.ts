import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApi(args: GetApiArgs, opts?: pulumi.InvokeOptions): Promise<GetApiResult>;
export interface GetApiArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * API details.
 */
export interface GetApiResult {
    /**
     * Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    readonly apiRevision?: string;
    /**
     * Description of the Api Revision.
     */
    readonly apiRevisionDescription?: string;
    /**
     * Type of API.
     */
    readonly apiType?: string;
    /**
     * Indicates the Version identifier of the API if the API is versioned
     */
    readonly apiVersion?: string;
    /**
     * Description of the Api Version.
     */
    readonly apiVersionDescription?: string;
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating
     */
    readonly apiVersionSet?: outputs.apimanagement.v20180101.ApiVersionSetContractDetailsResponse;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    readonly apiVersionSetId?: string;
    /**
     * Collection of authentication settings included into this API.
     */
    readonly authenticationSettings?: outputs.apimanagement.v20180101.AuthenticationSettingsContractResponse;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * API name.
     */
    readonly displayName?: string;
    /**
     * Indicates if API revision is current api revision.
     */
    readonly isCurrent: boolean;
    /**
     * Indicates if API revision is accessible via the gateway.
     */
    readonly isOnline: boolean;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    readonly path: string;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    readonly protocols?: string[];
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl?: string;
    /**
     * Protocols over which API is made available.
     */
    readonly subscriptionKeyParameterNames?: outputs.apimanagement.v20180101.SubscriptionKeyParameterNamesContractResponse;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}