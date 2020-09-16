import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult>;
export interface GetManagedClusterArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    readonly resourceName: string;
}
/**
 * Managed cluster.
 */
export interface GetManagedClusterResult {
    /**
     * Profile of Azure Active Directory configuration.
     */
    readonly aadProfile?: outputs.containerservice.v20180331.ManagedClusterAADProfileResponse;
    /**
     * Profile of managed cluster add-on.
     */
    readonly addonProfiles?: {
        [key: string]: outputs.containerservice.v20180331.ManagedClusterAddonProfileResponse;
    };
    /**
     * Properties of the agent pool. Currently only one agent pool can exist.
     */
    readonly agentPoolProfiles?: outputs.containerservice.v20180331.ManagedClusterAgentPoolProfileResponse[];
    /**
     * DNS prefix specified when creating the managed cluster.
     */
    readonly dnsPrefix?: string;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    readonly enableRBAC?: boolean;
    /**
     * FQDN for the master pool.
     */
    readonly fqdn: string;
    /**
     * Version of Kubernetes specified when creating the managed cluster.
     */
    readonly kubernetesVersion?: string;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    readonly linuxProfile?: outputs.containerservice.v20180331.ContainerServiceLinuxProfileResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Profile of network configuration.
     */
    readonly networkProfile?: outputs.containerservice.v20180331.ContainerServiceNetworkProfileResponse;
    /**
     * Name of the resource group containing agent pool nodes.
     */
    readonly nodeResourceGroup: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    readonly servicePrincipalProfile?: outputs.containerservice.v20180331.ManagedClusterServicePrincipalProfileResponse;
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