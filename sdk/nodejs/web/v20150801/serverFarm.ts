// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * App Service Plan Model
 */
export class ServerFarm extends pulumi.CustomResource {
    /**
     * Get an existing ServerFarm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerFarm {
        return new ServerFarm(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/v20150801:ServerFarm';

    /**
     * Returns true if the given object is an instance of ServerFarm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerFarm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerFarm.__pulumiType;
    }

    /**
     * App Service Plan administration site
     */
    public readonly adminSiteName!: pulumi.Output<string | undefined>;
    /**
     * Geographical location for the App Service Plan
     */
    public /*out*/ readonly geoRegion!: pulumi.Output<string>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the App Service Plan
     */
    public readonly hostingEnvironmentProfile!: pulumi.Output<outputs.web.v20150801.HostingEnvironmentProfileResponse | undefined>;
    /**
     * Kind of resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of instances that can be assigned to this App Service Plan
     */
    public readonly maximumNumberOfWorkers!: pulumi.Output<number | undefined>;
    /**
     * Resource Name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Number of web apps assigned to this App Service Plan
     */
    public /*out*/ readonly numberOfSites!: pulumi.Output<number>;
    /**
     * If True apps assigned to this App Service Plan can be scaled independently
     *             If False apps assigned to this App Service Plan will scale to all instances of the plan
     */
    public readonly perSiteScaling!: pulumi.Output<boolean | undefined>;
    /**
     * Enables creation of a Linux App Service Plan
     */
    public readonly reserved!: pulumi.Output<boolean | undefined>;
    /**
     * Resource group of the server farm
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Describes a sku for a scalable resource
     */
    public readonly sku!: pulumi.Output<outputs.web.v20150801.SkuDescriptionResponse | undefined>;
    /**
     * App Service Plan Status
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * App Service Plan Subscription
     */
    public /*out*/ readonly subscription!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * Target worker tier assigned to the App Service Plan
     */
    public readonly workerTierName!: pulumi.Output<string | undefined>;

    /**
     * Create a ServerFarm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerFarmArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["adminSiteName"] = args ? args.adminSiteName : undefined;
            inputs["allowPendingState"] = args ? args.allowPendingState : undefined;
            inputs["hostingEnvironmentProfile"] = args ? args.hostingEnvironmentProfile : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maximumNumberOfWorkers"] = args ? args.maximumNumberOfWorkers : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["perSiteScaling"] = args ? args.perSiteScaling : undefined;
            inputs["reserved"] = args ? args.reserved : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["workerTierName"] = args ? args.workerTierName : undefined;
            inputs["geoRegion"] = undefined /*out*/;
            inputs["numberOfSites"] = undefined /*out*/;
            inputs["resourceGroup"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["subscription"] = undefined /*out*/;
        } else {
            inputs["adminSiteName"] = undefined /*out*/;
            inputs["geoRegion"] = undefined /*out*/;
            inputs["hostingEnvironmentProfile"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["maximumNumberOfWorkers"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["numberOfSites"] = undefined /*out*/;
            inputs["perSiteScaling"] = undefined /*out*/;
            inputs["reserved"] = undefined /*out*/;
            inputs["resourceGroup"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["subscription"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["workerTierName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/latest:ServerFarm" }, { type: "azure-nextgen:web/v20160901:ServerFarm" }, { type: "azure-nextgen:web/v20180201:ServerFarm" }, { type: "azure-nextgen:web/v20190801:ServerFarm" }, { type: "azure-nextgen:web/v20200601:ServerFarm" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServerFarm.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerFarm resource.
 */
export interface ServerFarmArgs {
    /**
     * App Service Plan administration site
     */
    readonly adminSiteName?: pulumi.Input<string>;
    /**
     * OBSOLETE: If true, allow pending state for App Service Plan
     */
    readonly allowPendingState?: pulumi.Input<boolean>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the App Service Plan
     */
    readonly hostingEnvironmentProfile?: pulumi.Input<inputs.web.v20150801.HostingEnvironmentProfile>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Maximum number of instances that can be assigned to this App Service Plan
     */
    readonly maximumNumberOfWorkers?: pulumi.Input<number>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * If True apps assigned to this App Service Plan can be scaled independently
     *             If False apps assigned to this App Service Plan will scale to all instances of the plan
     */
    readonly perSiteScaling?: pulumi.Input<boolean>;
    /**
     * Enables creation of a Linux App Service Plan
     */
    readonly reserved?: pulumi.Input<boolean>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes a sku for a scalable resource
     */
    readonly sku?: pulumi.Input<inputs.web.v20150801.SkuDescription>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Target worker tier assigned to the App Service Plan
     */
    readonly workerTierName?: pulumi.Input<string>;
}