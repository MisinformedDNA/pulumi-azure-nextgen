// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * Job Definition.
 */
export class JobDefinition extends pulumi.CustomResource {
    /**
     * Get an existing JobDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobDefinition {
        return new JobDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:hybriddata/v20160601:JobDefinition';

    /**
     * Returns true if the given object is an instance of JobDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobDefinition.__pulumiType;
    }

    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    public readonly customerSecrets!: pulumi.Output<outputs.hybriddata.v20160601.CustomerSecretResponse[] | undefined>;
    /**
     * A generic json used differently by each data service type.
     */
    public readonly dataServiceInput!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Data Sink Id associated to the job definition.
     */
    public readonly dataSinkId!: pulumi.Output<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    public readonly dataSourceId!: pulumi.Output<string>;
    /**
     * Last modified time of the job definition.
     */
    public readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * Name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    public readonly runLocation!: pulumi.Output<string | undefined>;
    /**
     * Schedule for running the job definition
     */
    public readonly schedules!: pulumi.Output<outputs.hybriddata.v20160601.ScheduleResponse[] | undefined>;
    /**
     * State of the job definition.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    public readonly userConfirmation!: pulumi.Output<string | undefined>;

    /**
     * Create a JobDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.dataManagerName === undefined) {
                throw new Error("Missing required property 'dataManagerName'");
            }
            if (!args || args.dataServiceName === undefined) {
                throw new Error("Missing required property 'dataServiceName'");
            }
            if (!args || args.dataSinkId === undefined) {
                throw new Error("Missing required property 'dataSinkId'");
            }
            if (!args || args.dataSourceId === undefined) {
                throw new Error("Missing required property 'dataSourceId'");
            }
            if (!args || args.jobDefinitionName === undefined) {
                throw new Error("Missing required property 'jobDefinitionName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.state === undefined) {
                throw new Error("Missing required property 'state'");
            }
            inputs["customerSecrets"] = args ? args.customerSecrets : undefined;
            inputs["dataManagerName"] = args ? args.dataManagerName : undefined;
            inputs["dataServiceInput"] = args ? args.dataServiceInput : undefined;
            inputs["dataServiceName"] = args ? args.dataServiceName : undefined;
            inputs["dataSinkId"] = args ? args.dataSinkId : undefined;
            inputs["dataSourceId"] = args ? args.dataSourceId : undefined;
            inputs["jobDefinitionName"] = args ? args.jobDefinitionName : undefined;
            inputs["lastModifiedTime"] = args ? args.lastModifiedTime : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["runLocation"] = args ? args.runLocation : undefined;
            inputs["schedules"] = args ? args.schedules : undefined;
            inputs["state"] = args ? args.state : undefined;
            inputs["userConfirmation"] = args ? args.userConfirmation : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["customerSecrets"] = undefined /*out*/;
            inputs["dataServiceInput"] = undefined /*out*/;
            inputs["dataSinkId"] = undefined /*out*/;
            inputs["dataSourceId"] = undefined /*out*/;
            inputs["lastModifiedTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["runLocation"] = undefined /*out*/;
            inputs["schedules"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userConfirmation"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:hybriddata/latest:JobDefinition" }, { type: "azure-nextgen:hybriddata/v20190601:JobDefinition" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(JobDefinition.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobDefinition resource.
 */
export interface JobDefinitionArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20160601.CustomerSecret>[]>;
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly dataManagerName: pulumi.Input<string>;
    /**
     * A generic json used differently by each data service type.
     */
    readonly dataServiceInput?: pulumi.Input<{[key: string]: any}>;
    /**
     * The data service type of the job definition.
     */
    readonly dataServiceName: pulumi.Input<string>;
    /**
     * Data Sink Id associated to the job definition.
     */
    readonly dataSinkId: pulumi.Input<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    readonly dataSourceId: pulumi.Input<string>;
    /**
     * The job definition name to be created or updated.
     */
    readonly jobDefinitionName: pulumi.Input<string>;
    /**
     * Last modified time of the job definition.
     */
    readonly lastModifiedTime?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    readonly runLocation?: pulumi.Input<string>;
    /**
     * Schedule for running the job definition
     */
    readonly schedules?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20160601.Schedule>[]>;
    /**
     * State of the job definition.
     */
    readonly state: pulumi.Input<string>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    readonly userConfirmation?: pulumi.Input<string>;
}