import * as pulumi from "@pulumi/pulumi";
export declare function getOrigin(args: GetOriginArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginResult>;
export interface GetOriginArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: string;
    /**
     * Name of the origin which is unique within the endpoint.
     */
    readonly originName: string;
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
 * CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 */
export interface GetOriginResult {
    /**
     * Origin is enabled for load balancing or not
     */
    readonly enabled?: boolean;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
     */
    readonly hostName: string;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    readonly httpPort?: number;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    readonly httpsPort?: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    readonly originHostHeader?: string;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    readonly priority?: number;
    /**
     * Provisioning status of the origin.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the origin.
     */
    readonly resourceState: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    readonly weight?: number;
}