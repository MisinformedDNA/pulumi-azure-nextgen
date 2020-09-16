import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApiManagementService(args: GetApiManagementServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceResult>;
export interface GetApiManagementServiceArgs {
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
 * Description of an API Management service resource.
 */
export interface GetApiManagementServiceResult {
    /**
     * Additional datacenter locations of the API Management service.
     */
    readonly additionalLocations?: outputs.apimanagement.v20160707.AdditionalRegionResponse[];
    /**
     * Addresser email.
     */
    readonly addresserEmail?: string;
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdAtUtc: string;
    /**
     * Custom properties of the API Management service, like disabling TLS 1.0.
     */
    readonly customProperties?: {
        [key: string]: string;
    };
    /**
     * ETag of the resource.
     */
    readonly etag?: string;
    /**
     * Custom hostname configuration of the API Management service.
     */
    readonly hostnameConfigurations?: outputs.apimanagement.v20160707.HostnameConfigurationResponse[];
    /**
     * Datacenter location of the API Management service.
     */
    readonly location: string;
    /**
     * Management API endpoint URL of the API Management service.
     */
    readonly managementApiUrl: string;
    /**
     * Name of the API Management service.
     */
    readonly name: string;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    readonly portalUrl: string;
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    readonly provisioningState: string;
    /**
     * Publisher email.
     */
    readonly publisherEmail: string;
    /**
     * Publisher name.
     */
    readonly publisherName: string;
    /**
     * Proxy endpoint URL of the API Management service.
     */
    readonly runtimeUrl: string;
    /**
     * SCM endpoint URL of the API Management service.
     */
    readonly scmUrl: string;
    /**
     * SKU properties of the API Management service.
     */
    readonly sku: outputs.apimanagement.v20160707.ApiManagementServiceSkuPropertiesResponse;
    /**
     * Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
     */
    readonly staticIPs: string[];
    /**
     * API Management service tags. A maximum of 10 tags can be provided for a resource, and each tag must have a key no greater than 128 characters (and a value no greater than 256 characters).
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
     */
    readonly targetProvisioningState: string;
    /**
     * Resource type of the API Management service.
     */
    readonly type: string;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    readonly vpnType?: string;
    /**
     * Virtual network configuration of the API Management service.
     */
    readonly vpnconfiguration?: outputs.apimanagement.v20160707.VirtualNetworkConfigurationResponse;
}