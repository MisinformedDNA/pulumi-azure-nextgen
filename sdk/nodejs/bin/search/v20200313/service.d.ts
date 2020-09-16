import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes an Azure Cognitive Search service and its current state.
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
     */
    readonly hostingMode: pulumi.Output<string | undefined>;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.search.v20200313.IdentityResponse | undefined>;
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Network specific rules that determine how the Azure Cognitive Search service may be reached.
     */
    readonly networkRuleSet: pulumi.Output<outputs.search.v20200313.NetworkRuleSetResponse | undefined>;
    /**
     * The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
     */
    readonly partitionCount: pulumi.Output<number | undefined>;
    /**
     * The list of private endpoint connections to the Azure Cognitive Search service.
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.search.v20200313.PrivateEndpointConnectionResponse[]>;
    /**
     * The state of the last provisioning operation performed on the Search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create Search service. This is because the free service uses capacity that is already set up.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    readonly publicNetworkAccess: pulumi.Output<string | undefined>;
    /**
     * The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
     */
    readonly replicaCount: pulumi.Output<number | undefined>;
    /**
     * The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service.
     */
    readonly sku: pulumi.Output<outputs.search.v20200313.SkuResponse | undefined>;
    /**
     * The status of the Search service. Possible values include: 'running': The Search service is running and no provisioning operations are underway. 'provisioning': The Search service is being provisioned or scaled up or down. 'deleting': The Search service is being deleted. 'degraded': The Search service is degraded. This can occur when the underlying search units are not healthy. The Search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The Search service is disabled. In this state, the service will reject all API requests. 'error': The Search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Cognitive Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The details of the Search service status.
     */
    readonly statusDetails: pulumi.Output<string>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
     */
    readonly hostingMode?: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.search.v20200313.Identity>;
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Network specific rules that determine how the Azure Cognitive Search service may be reached.
     */
    readonly networkRuleSet?: pulumi.Input<inputs.search.v20200313.NetworkRuleSet>;
    /**
     * The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
     */
    readonly partitionCount?: pulumi.Input<number>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    readonly publicNetworkAccess?: pulumi.Input<string>;
    /**
     * The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
     */
    readonly replicaCount?: pulumi.Input<number>;
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created.
     */
    readonly searchServiceName: pulumi.Input<string>;
    /**
     * The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service.
     */
    readonly sku?: pulumi.Input<inputs.search.v20200313.Sku>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}