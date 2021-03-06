// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicefabric/v20200101preview:getManagedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedClusterArgs {
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * The manged cluster resource
 */
export interface GetManagedClusterResult {
    /**
     * vm admin user password.
     */
    readonly adminPassword?: string;
    /**
     * vm admin user name.
     */
    readonly adminUserName: string;
    /**
     * Azure active directory.
     */
    readonly azureActiveDirectory?: outputs.servicefabric.v20200101preview.AzureActiveDirectoryResponse;
    /**
     * The port used for client connections to the cluster.
     */
    readonly clientConnectionPort?: number;
    /**
     * client certificates for the cluster.
     */
    readonly clients?: outputs.servicefabric.v20200101preview.ClientCertificateResponse[];
    /**
     * The cluster certificate thumbprint used node to node communication.
     */
    readonly clusterCertificateThumbprint: string;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion?: string;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    readonly clusterId: string;
    /**
     * The current state of the cluster.
     *
     *   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
     *   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
     *   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
     *   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
     *   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
     *   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
     *   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
     *   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
     *   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
     *   - Ready - Indicates that the cluster is in a stable state.
     */
    readonly clusterState: string;
    /**
     * Describes the policy used when upgrading the cluster.
     */
    readonly clusterUpgradeDescription?: outputs.servicefabric.v20200101preview.ClusterUpgradePolicyResponse;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    readonly clusterUpgradeMode?: string;
    /**
     * The cluster dns name.
     */
    readonly dnsName: string;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: outputs.servicefabric.v20200101preview.SettingsSectionDescriptionResponse[];
    /**
     * the cluster Fully qualified domain name.
     */
    readonly fqdn: string;
    /**
     * The port used for http connections to the cluster.
     */
    readonly httpGatewayConnectionPort?: number;
    /**
     * Describes load balancing rules.
     */
    readonly loadBalancingRules?: outputs.servicefabric.v20200101preview.LoadBalancingRuleResponse[];
    /**
     * Azure resource location.
     */
    readonly location: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the managed cluster resource.
     */
    readonly provisioningState: string;
    /**
     * The sku of the managed cluster
     */
    readonly sku?: outputs.servicefabric.v20200101preview.SkuResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
