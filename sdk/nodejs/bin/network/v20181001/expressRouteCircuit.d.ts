import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ExpressRouteCircuit resource
 */
export declare class ExpressRouteCircuit extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuit;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuit;
    /**
     * Allow classic operations
     */
    readonly allowClassicOperations: pulumi.Output<boolean | undefined>;
    /**
     * Flag to enable Global Reach on the circuit.
     */
    readonly allowGlobalReach: pulumi.Output<boolean | undefined>;
    /**
     * The list of authorizations.
     */
    readonly authorizations: pulumi.Output<outputs.network.v20181001.ExpressRouteCircuitAuthorizationResponse[] | undefined>;
    /**
     * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly bandwidthInGbps: pulumi.Output<number | undefined>;
    /**
     * The CircuitProvisioningState state of the resource.
     */
    readonly circuitProvisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly expressRoutePort: pulumi.Output<outputs.network.v20181001.SubResourceResponse | undefined>;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of peerings.
     */
    readonly peerings: pulumi.Output<outputs.network.v20181001.ExpressRouteCircuitPeeringResponse[] | undefined>;
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The ServiceKey.
     */
    readonly serviceKey: pulumi.Output<string | undefined>;
    /**
     * The ServiceProviderNotes.
     */
    readonly serviceProviderNotes: pulumi.Output<string | undefined>;
    /**
     * The ServiceProviderProperties.
     */
    readonly serviceProviderProperties: pulumi.Output<outputs.network.v20181001.ExpressRouteCircuitServiceProviderPropertiesResponse | undefined>;
    /**
     * The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
     */
    readonly serviceProviderProvisioningState: pulumi.Output<string | undefined>;
    /**
     * The SKU.
     */
    readonly sku: pulumi.Output<outputs.network.v20181001.ExpressRouteCircuitSkuResponse | undefined>;
    /**
     * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     */
    readonly stag: pulumi.Output<number>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ExpressRouteCircuit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitArgs {
    /**
     * Allow classic operations
     */
    readonly allowClassicOperations?: pulumi.Input<boolean>;
    /**
     * Flag to enable Global Reach on the circuit.
     */
    readonly allowGlobalReach?: pulumi.Input<boolean>;
    /**
     * The list of authorizations.
     */
    readonly authorizations?: pulumi.Input<pulumi.Input<inputs.network.v20181001.ExpressRouteCircuitAuthorization>[]>;
    /**
     * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The name of the circuit.
     */
    readonly circuitName: pulumi.Input<string>;
    /**
     * The CircuitProvisioningState state of the resource.
     */
    readonly circuitProvisioningState?: pulumi.Input<string>;
    /**
     * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly expressRoutePort?: pulumi.Input<inputs.network.v20181001.SubResource>;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The list of peerings.
     */
    readonly peerings?: pulumi.Input<pulumi.Input<inputs.network.v20181001.ExpressRouteCircuitPeering>[]>;
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ServiceKey.
     */
    readonly serviceKey?: pulumi.Input<string>;
    /**
     * The ServiceProviderNotes.
     */
    readonly serviceProviderNotes?: pulumi.Input<string>;
    /**
     * The ServiceProviderProperties.
     */
    readonly serviceProviderProperties?: pulumi.Input<inputs.network.v20181001.ExpressRouteCircuitServiceProviderProperties>;
    /**
     * The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
     */
    readonly serviceProviderProvisioningState?: pulumi.Input<string>;
    /**
     * The SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.v20181001.ExpressRouteCircuitSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}