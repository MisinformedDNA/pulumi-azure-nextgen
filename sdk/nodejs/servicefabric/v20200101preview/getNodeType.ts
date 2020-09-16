// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getNodeType(args: GetNodeTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetNodeTypeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicefabric/v20200101preview:getNodeType", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNodeTypeArgs {
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: string;
    /**
     * The name of the node type.
     */
    readonly nodeTypeName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
 */
export interface GetNodeTypeResult {
    /**
     * The range of ports from which cluster assigned port to Service Fabric applications.
     */
    readonly applicationPorts?: outputs.servicefabric.v20200101preview.EndpointRangeDescriptionResponse;
    /**
     * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
     */
    readonly capacities?: {[key: string]: string};
    /**
     * Disk size for each vm in the node type in GBs.
     */
    readonly dataDiskSizeGB: number;
    /**
     * The range of ephemeral ports that nodes in this node type should be configured with.
     */
    readonly ephemeralPorts?: outputs.servicefabric.v20200101preview.EndpointRangeDescriptionResponse;
    /**
     * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
     */
    readonly isPrimary: boolean;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
     */
    readonly placementProperties?: {[key: string]: string};
    /**
     * The provisioning state of the managed cluster resource.
     */
    readonly provisioningState: string;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * Set of extensions that should be installed onto the virtual machines.
     */
    readonly vmExtensions?: outputs.servicefabric.v20200101preview.VMSSExtensionResponse[];
    /**
     * The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
     */
    readonly vmImageOffer?: string;
    /**
     * The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
     */
    readonly vmImagePublisher?: string;
    /**
     * The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
     */
    readonly vmImageSku?: string;
    /**
     * The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
     */
    readonly vmImageVersion?: string;
    /**
     * The number of nodes in the node type.
     */
    readonly vmInstanceCount: number;
    /**
     * The secrets to install in the virtual machines.
     */
    readonly vmSecrets?: outputs.servicefabric.v20200101preview.VaultSecretGroupResponse[];
    /**
     * The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.
     */
    readonly vmSize?: string;
}