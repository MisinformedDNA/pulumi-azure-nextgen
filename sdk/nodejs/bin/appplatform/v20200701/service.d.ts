import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Service resource
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
     * The GEO location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the Service resource
     */
    readonly properties: pulumi.Output<outputs.appplatform.v20200701.ClusterResourcePropertiesResponse>;
    /**
     * Sku of the Service resource
     */
    readonly sku: pulumi.Output<outputs.appplatform.v20200701.SkuResponse | undefined>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
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
     * The GEO location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Properties of the Service resource
     */
    readonly properties?: pulumi.Input<inputs.appplatform.v20200701.ClusterResourceProperties>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Sku of the Service resource
     */
    readonly sku?: pulumi.Input<inputs.appplatform.v20200701.Sku>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}