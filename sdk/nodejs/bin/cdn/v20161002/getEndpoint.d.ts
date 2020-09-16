import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getEndpoint(args: GetEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointResult>;
export interface GetEndpointArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: string;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 */
export interface GetEndpointResult {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    readonly contentTypesToCompress?: string[];
    /**
     * List of rules defining user geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    readonly geoFilters?: outputs.cdn.v20161002.GeoFilterResponse[];
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    readonly hostName: string;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    readonly isCompressionEnabled?: boolean;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed?: boolean;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed?: boolean;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
     */
    readonly optimizationType?: string;
    /**
     * The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
     */
    readonly originHostHeader?: string;
    /**
     * The path used when CDN sends request to origin.
     */
    readonly originPath?: string;
    /**
     * The source of the content being delivered via CDN.
     */
    readonly origins: outputs.cdn.v20161002.DeepCreatedOriginResponse[];
    /**
     * Provisioning status of the endpoint.
     */
    readonly provisioningState: string;
    /**
     * Defines the query string caching behavior
     */
    readonly queryStringCachingBehavior?: string;
    /**
     * Resource status of the endpoint.
     */
    readonly resourceState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}