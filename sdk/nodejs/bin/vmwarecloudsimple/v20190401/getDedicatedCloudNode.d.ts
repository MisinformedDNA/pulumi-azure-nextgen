import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDedicatedCloudNode(args: GetDedicatedCloudNodeArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedCloudNodeResult>;
export interface GetDedicatedCloudNodeArgs {
    /**
     * dedicated cloud node name
     */
    readonly dedicatedCloudNodeName: string;
    /**
     * The name of the resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Dedicated cloud node model
 */
export interface GetDedicatedCloudNodeResult {
    /**
     * Availability Zone id, e.g. "az1"
     */
    readonly availabilityZoneId: string;
    /**
     * Availability Zone name, e.g. "Availability Zone 1"
     */
    readonly availabilityZoneName: string;
    /**
     * VMWare Cloud Rack Name
     */
    readonly cloudRackName: string;
    /**
     * date time the resource was created
     */
    readonly created: {
        [key: string]: any;
    };
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * SKU's name
     */
    readonly name: string;
    /**
     * count of nodes to create
     */
    readonly nodesCount: number;
    /**
     * Placement Group id, e.g. "n1"
     */
    readonly placementGroupId: string;
    /**
     * Placement Name, e.g. "Placement Group 1"
     */
    readonly placementGroupName: string;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: string;
    /**
     * Resource Pool Name
     */
    readonly privateCloudName: string;
    /**
     * The provisioning status of the resource
     */
    readonly provisioningState: string;
    /**
     * purchase id
     */
    readonly purchaseId: string;
    /**
     * Dedicated Cloud Nodes SKU
     */
    readonly sku?: outputs.vmwarecloudsimple.v20190401.SkuResponse;
    /**
     * Node status, indicates is private cloud set up on this node or not
     */
    readonly status: string;
    /**
     * Dedicated Cloud Nodes tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
    /**
     * VMWare Cluster Name
     */
    readonly vmwareClusterName: string;
}