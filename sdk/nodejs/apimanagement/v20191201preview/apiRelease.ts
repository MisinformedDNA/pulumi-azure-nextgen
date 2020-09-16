// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * ApiRelease details.
 */
export class ApiRelease extends pulumi.CustomResource {
    /**
     * Get an existing ApiRelease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiRelease {
        return new ApiRelease(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:apimanagement/v20191201preview:ApiRelease';

    /**
     * Returns true if the given object is an instance of ApiRelease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiRelease {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiRelease.__pulumiType;
    }

    /**
     * Identifier of the API the release belongs to.
     */
    public readonly apiId!: pulumi.Output<string | undefined>;
    /**
     * The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdDateTime!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Release Notes
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the API release was updated.
     */
    public /*out*/ readonly updatedDateTime!: pulumi.Output<string>;

    /**
     * Create a ApiRelease resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiReleaseArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.apiId === undefined) {
                throw new Error("Missing required property 'apiId'");
            }
            if (!args || args.releaseId === undefined) {
                throw new Error("Missing required property 'releaseId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serviceName === undefined) {
                throw new Error("Missing required property 'serviceName'");
            }
            inputs["apiId"] = args ? args.apiId : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["releaseId"] = args ? args.releaseId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceName"] = args ? args.serviceName : undefined;
            inputs["createdDateTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedDateTime"] = undefined /*out*/;
        } else {
            inputs["apiId"] = undefined /*out*/;
            inputs["createdDateTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["notes"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedDateTime"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:apimanagement/latest:ApiRelease" }, { type: "azure-nextgen:apimanagement/v20170301:ApiRelease" }, { type: "azure-nextgen:apimanagement/v20180101:ApiRelease" }, { type: "azure-nextgen:apimanagement/v20180601preview:ApiRelease" }, { type: "azure-nextgen:apimanagement/v20190101:ApiRelease" }, { type: "azure-nextgen:apimanagement/v20191201:ApiRelease" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ApiRelease.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiRelease resource.
 */
export interface ApiReleaseArgs {
    /**
     * Identifier of the API the release belongs to.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Release Notes
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * Release identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly releaseId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
}