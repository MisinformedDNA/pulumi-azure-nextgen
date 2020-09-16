import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRouteTable(args: GetRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTableResult>;
export interface GetRouteTableArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the route table.
     */
    readonly routeTableName: string;
}
/**
 * Route table resource.
 */
export interface GetRouteTableResult {
    /**
     * Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
     */
    readonly disableBgpRoutePropagation?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * Collection of routes contained within a route table.
     */
    readonly routes?: outputs.network.v20190401.RouteResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: outputs.network.v20190401.SubnetResponse[];
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