// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * The response to an extension resource GET request.
 */
export class Extension extends pulumi.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Extension {
        return new Extension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:visualstudio/v20171101preview:Extension';

    /**
     * Returns true if the given object is an instance of Extension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Extension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Extension.__pulumiType;
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
     * The extension plan that was purchased.
     */
    public readonly plan!: pulumi.Output<outputs.visualstudio.v20171101preview.ExtensionResourcePlanResponse | undefined>;
    /**
     * Resource properties.
     */
    public /*out*/ readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.accountResourceName === undefined) {
                throw new Error("Missing required property 'accountResourceName'");
            }
            if (!args || args.extensionResourceName === undefined) {
                throw new Error("Missing required property 'extensionResourceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountResourceName"] = args ? args.accountResourceName : undefined;
            inputs["extensionResourceName"] = args ? args.extensionResourceName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["plan"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:visualstudio/v20140401preview:Extension" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Extension.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * The name of the Visual Studio Team Services account resource.
     */
    readonly accountResourceName: pulumi.Input<string>;
    /**
     * The name of the extension.
     */
    readonly extensionResourceName: pulumi.Input<string>;
    /**
     * The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.)
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Extended information about the plan being purchased for this extension resource.
     */
    readonly plan?: pulumi.Input<inputs.visualstudio.v20171101preview.ExtensionResourcePlan>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A dictionary of user-defined tags to be stored with the extension resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}