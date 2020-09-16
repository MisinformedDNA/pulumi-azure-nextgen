import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The cluster resource
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * The list of add-on features to enable in the cluster.
     */
    readonly addOnFeatures: pulumi.Output<string[] | undefined>;
    /**
     * The Service Fabric runtime versions available for this cluster.
     */
    readonly availableClusterVersions: pulumi.Output<outputs.servicefabric.v20190301.ClusterVersionDetailsResponse[]>;
    /**
     * The AAD authentication settings of the cluster.
     */
    readonly azureActiveDirectory: pulumi.Output<outputs.servicefabric.v20190301.AzureActiveDirectoryResponse | undefined>;
    /**
     * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
     */
    readonly certificate: pulumi.Output<outputs.servicefabric.v20190301.CertificateDescriptionResponse | undefined>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly certificateCommonNames: pulumi.Output<outputs.servicefabric.v20190301.ServerCertificateCommonNamesResponse | undefined>;
    /**
     * The list of client certificates referenced by common name that are allowed to manage the cluster.
     */
    readonly clientCertificateCommonNames: pulumi.Output<outputs.servicefabric.v20190301.ClientCertificateCommonNameResponse[] | undefined>;
    /**
     * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
     */
    readonly clientCertificateThumbprints: pulumi.Output<outputs.servicefabric.v20190301.ClientCertificateThumbprintResponse[] | undefined>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion: pulumi.Output<string | undefined>;
    /**
     * The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
     */
    readonly clusterEndpoint: pulumi.Output<string>;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    readonly clusterId: pulumi.Output<string>;
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
    readonly clusterState: pulumi.Output<string>;
    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    readonly diagnosticsStorageAccountConfig: pulumi.Output<outputs.servicefabric.v20190301.DiagnosticsStorageAccountConfigResponse | undefined>;
    /**
     * Azure resource etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Indicates if the event store service is enabled.
     */
    readonly eventStoreServiceEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings: pulumi.Output<outputs.servicefabric.v20190301.SettingsSectionDescriptionResponse[] | undefined>;
    /**
     * Azure resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The http management endpoint of the cluster.
     */
    readonly managementEndpoint: pulumi.Output<string>;
    /**
     * Azure resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of node types in the cluster.
     */
    readonly nodeTypes: pulumi.Output<outputs.servicefabric.v20190301.NodeTypeDescriptionResponse[]>;
    /**
     * The provisioning state of the cluster resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
     *
     *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
     *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
     *   - Silver - Run the System services with a target replica set count of 5.
     *   - Gold - Run the System services with a target replica set count of 7.
     *   - Platinum - Run the System services with a target replica set count of 9.
     */
    readonly reliabilityLevel: pulumi.Output<string | undefined>;
    /**
     * The server certificate used by reverse proxy.
     */
    readonly reverseProxyCertificate: pulumi.Output<outputs.servicefabric.v20190301.CertificateDescriptionResponse | undefined>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly reverseProxyCertificateCommonNames: pulumi.Output<outputs.servicefabric.v20190301.ServerCertificateCommonNamesResponse | undefined>;
    /**
     * Azure resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription: pulumi.Output<outputs.servicefabric.v20190301.ClusterUpgradePolicyResponse | undefined>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    readonly upgradeMode: pulumi.Output<string | undefined>;
    /**
     * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage: pulumi.Output<string | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The list of add-on features to enable in the cluster.
     */
    readonly addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The AAD authentication settings of the cluster.
     */
    readonly azureActiveDirectory?: pulumi.Input<inputs.servicefabric.v20190301.AzureActiveDirectory>;
    /**
     * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
     */
    readonly certificate?: pulumi.Input<inputs.servicefabric.v20190301.CertificateDescription>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly certificateCommonNames?: pulumi.Input<inputs.servicefabric.v20190301.ServerCertificateCommonNames>;
    /**
     * The list of client certificates referenced by common name that are allowed to manage the cluster.
     */
    readonly clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20190301.ClientCertificateCommonName>[]>;
    /**
     * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
     */
    readonly clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20190301.ClientCertificateThumbprint>[]>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    readonly diagnosticsStorageAccountConfig?: pulumi.Input<inputs.servicefabric.v20190301.DiagnosticsStorageAccountConfig>;
    /**
     * Indicates if the event store service is enabled.
     */
    readonly eventStoreServiceEnabled?: pulumi.Input<boolean>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20190301.SettingsSectionDescription>[]>;
    /**
     * Azure resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The http management endpoint of the cluster.
     */
    readonly managementEndpoint: pulumi.Input<string>;
    /**
     * The list of node types in the cluster.
     */
    readonly nodeTypes: pulumi.Input<pulumi.Input<inputs.servicefabric.v20190301.NodeTypeDescription>[]>;
    /**
     * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
     *
     *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
     *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
     *   - Silver - Run the System services with a target replica set count of 5.
     *   - Gold - Run the System services with a target replica set count of 7.
     *   - Platinum - Run the System services with a target replica set count of 9.
     */
    readonly reliabilityLevel?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The server certificate used by reverse proxy.
     */
    readonly reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.v20190301.CertificateDescription>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly reverseProxyCertificateCommonNames?: pulumi.Input<inputs.servicefabric.v20190301.ServerCertificateCommonNames>;
    /**
     * Azure resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription?: pulumi.Input<inputs.servicefabric.v20190301.ClusterUpgradePolicy>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    readonly upgradeMode?: pulumi.Input<string>;
    /**
     * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage?: pulumi.Input<string>;
}