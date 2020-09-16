import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Azure Cosmos DB trigger.
 */
export declare class SqlResourceSqlTrigger extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlTrigger;
    /**
     * Returns true if the given object is an instance of SqlResourceSqlTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlResourceSqlTrigger;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    readonly name: pulumi.Output<string>;
    readonly resource: pulumi.Output<outputs.documentdb.v20191212.SqlTriggerGetPropertiesResponseResource | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of Azure resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SqlResourceSqlTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlTriggerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SqlResourceSqlTrigger resource.
 */
export interface SqlResourceSqlTriggerArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Cosmos DB container name.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    readonly options: pulumi.Input<inputs.documentdb.v20191212.CreateUpdateOptions>;
    /**
     * The standard JSON format of a trigger
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20191212.SqlTriggerResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Cosmos DB trigger name.
     */
    readonly triggerName: pulumi.Input<string>;
}