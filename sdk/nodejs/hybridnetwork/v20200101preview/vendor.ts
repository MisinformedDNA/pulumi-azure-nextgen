// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * Vendor resource.
 */
export class Vendor extends pulumi.CustomResource {
    /**
     * Get an existing Vendor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Vendor {
        return new Vendor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:hybridnetwork/v20200101preview:Vendor';

    /**
     * Returns true if the given object is an instance of Vendor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vendor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vendor.__pulumiType;
    }

    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the vendor resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A list of ids of the vendor skus offered by the vendor.
     */
    public /*out*/ readonly skus!: pulumi.Output<outputs.hybridnetwork.v20200101preview.SubResourceResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Vendor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VendorArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.vendorName === undefined) {
                throw new Error("Missing required property 'vendorName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vendorName"] = args ? args.vendorName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["skus"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["skus"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Vendor.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Vendor resource.
 */
export interface VendorArgs {
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the vendor.
     */
    readonly vendorName: pulumi.Input<string>;
}
