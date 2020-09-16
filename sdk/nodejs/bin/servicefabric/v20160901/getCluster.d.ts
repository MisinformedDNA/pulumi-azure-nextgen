import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
export interface GetClusterArgs {
    /**
     * The name of the cluster resource
     */
    readonly clusterName: string;
    /**
     * The name of the resource group to which the resource belongs or get created
     */
    readonly resourceGroupName: string;
}
/**
 * The cluster resource
 */
export interface GetClusterResult {
    /**
     * The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to
     */
    readonly availableClusterVersions: outputs.servicefabric.v20160901.ClusterVersionDetailsResponse[];
    /**
     * The settings to enable AAD authentication on the cluster
     */
    readonly azureActiveDirectory?: outputs.servicefabric.v20160901.AzureActiveDirectoryResponse;
    /**
     * This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
     */
    readonly certificate?: outputs.servicefabric.v20160901.CertificateDescriptionResponse;
    /**
     *  List of client certificates to whitelist based on common names
     */
    readonly clientCertificateCommonNames?: outputs.servicefabric.v20160901.ClientCertificateCommonNameResponse[];
    /**
     * The client thumbprint details ,it is used for client access for cluster operation
     */
    readonly clientCertificateThumbprints?: outputs.servicefabric.v20160901.ClientCertificateThumbprintResponse[];
    /**
     * The ServiceFabric code version running in your cluster
     */
    readonly clusterCodeVersion?: string;
    /**
     * The endpoint for the cluster connecting to servicefabric resource provider
     */
    readonly clusterEndpoint: string;
    /**
     * The unique identifier for the cluster resource
     */
    readonly clusterId: string;
    /**
     * The state for the cluster
     */
    readonly clusterState: string;
    /**
     * The storage diagnostics account configuration details
     */
    readonly diagnosticsStorageAccountConfig?: outputs.servicefabric.v20160901.DiagnosticsStorageAccountConfigResponse;
    /**
     * List of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: outputs.servicefabric.v20160901.SettingsSectionDescriptionResponse[];
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * The http management endpoint of the cluster
     */
    readonly managementEndpoint: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The list of node types that make up the cluster
     */
    readonly nodeTypes: outputs.servicefabric.v20160901.NodeTypeDescriptionResponse[];
    /**
     * The provisioning state of the cluster resource
     */
    readonly provisioningState: string;
    /**
     * Cluster reliability level indicates replica set size of system service
     */
    readonly reliabilityLevel?: string;
    /**
     * The server certificate used by reverse proxy
     */
    readonly reverseProxyCertificate?: outputs.servicefabric.v20160901.CertificateDescriptionResponse;
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
    /**
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription?: outputs.servicefabric.v20160901.ClusterUpgradePolicyResponse;
    /**
     * Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
     */
    readonly upgradeMode?: string;
    /**
     * The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage?: string;
}