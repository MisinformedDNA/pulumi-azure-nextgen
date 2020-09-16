import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A container group.
 */
export declare class ContainerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ContainerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerGroup;
    /**
     * Returns true if the given object is an instance of ContainerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerGroup;
    /**
     * The containers within the container group.
     */
    readonly containers: pulumi.Output<outputs.containerinstance.v20191201.ContainerResponse[]>;
    /**
     * The diagnostic information for a container group.
     */
    readonly diagnostics: pulumi.Output<outputs.containerinstance.v20191201.ContainerGroupDiagnosticsResponse | undefined>;
    /**
     * The DNS config information for a container group.
     */
    readonly dnsConfig: pulumi.Output<outputs.containerinstance.v20191201.DnsConfigurationResponse | undefined>;
    /**
     * The encryption properties for a container group.
     */
    readonly encryptionProperties: pulumi.Output<outputs.containerinstance.v20191201.EncryptionPropertiesResponse | undefined>;
    /**
     * The identity of the container group, if configured.
     */
    readonly identity: pulumi.Output<outputs.containerinstance.v20191201.ContainerGroupIdentityResponse | undefined>;
    /**
     * The image registry credentials by which the container group is created from.
     */
    readonly imageRegistryCredentials: pulumi.Output<outputs.containerinstance.v20191201.ImageRegistryCredentialResponse[] | undefined>;
    /**
     * The init containers for a container group.
     */
    readonly initContainers: pulumi.Output<outputs.containerinstance.v20191201.InitContainerDefinitionResponse[] | undefined>;
    /**
     * The instance view of the container group. Only valid in response.
     */
    readonly instanceView: pulumi.Output<outputs.containerinstance.v20191201.ContainerGroupResponseInstanceView>;
    /**
     * The IP address type of the container group.
     */
    readonly ipAddress: pulumi.Output<outputs.containerinstance.v20191201.IpAddressResponse | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The network profile information for a container group.
     */
    readonly networkProfile: pulumi.Output<outputs.containerinstance.v20191201.ContainerGroupNetworkProfileResponse | undefined>;
    /**
     * The operating system type required by the containers in the container group.
     */
    readonly osType: pulumi.Output<string>;
    /**
     * The provisioning state of the container group. This only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Restart policy for all containers within the container group.
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy: pulumi.Output<string | undefined>;
    /**
     * The SKU for a container group.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    readonly volumes: pulumi.Output<outputs.containerinstance.v20191201.VolumeResponse[] | undefined>;
    /**
     * Create a ContainerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ContainerGroup resource.
 */
export interface ContainerGroupArgs {
    /**
     * The name of the container group.
     */
    readonly containerGroupName: pulumi.Input<string>;
    /**
     * The containers within the container group.
     */
    readonly containers: pulumi.Input<pulumi.Input<inputs.containerinstance.v20191201.Container>[]>;
    /**
     * The diagnostic information for a container group.
     */
    readonly diagnostics?: pulumi.Input<inputs.containerinstance.v20191201.ContainerGroupDiagnostics>;
    /**
     * The DNS config information for a container group.
     */
    readonly dnsConfig?: pulumi.Input<inputs.containerinstance.v20191201.DnsConfiguration>;
    /**
     * The encryption properties for a container group.
     */
    readonly encryptionProperties?: pulumi.Input<inputs.containerinstance.v20191201.EncryptionProperties>;
    /**
     * The identity of the container group, if configured.
     */
    readonly identity?: pulumi.Input<inputs.containerinstance.v20191201.ContainerGroupIdentity>;
    /**
     * The image registry credentials by which the container group is created from.
     */
    readonly imageRegistryCredentials?: pulumi.Input<pulumi.Input<inputs.containerinstance.v20191201.ImageRegistryCredential>[]>;
    /**
     * The init containers for a container group.
     */
    readonly initContainers?: pulumi.Input<pulumi.Input<inputs.containerinstance.v20191201.InitContainerDefinition>[]>;
    /**
     * The IP address type of the container group.
     */
    readonly ipAddress?: pulumi.Input<inputs.containerinstance.v20191201.IpAddress>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The network profile information for a container group.
     */
    readonly networkProfile?: pulumi.Input<inputs.containerinstance.v20191201.ContainerGroupNetworkProfile>;
    /**
     * The operating system type required by the containers in the container group.
     */
    readonly osType: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Restart policy for all containers within the container group.
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy?: pulumi.Input<string>;
    /**
     * The SKU for a container group.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    readonly volumes?: pulumi.Input<pulumi.Input<inputs.containerinstance.v20191201.Volume>[]>;
}