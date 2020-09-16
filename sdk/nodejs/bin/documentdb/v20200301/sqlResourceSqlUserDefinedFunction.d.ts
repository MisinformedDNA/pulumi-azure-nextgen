import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Azure Cosmos DB userDefinedFunction.
 */
export declare class SqlResourceSqlUserDefinedFunction extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlUserDefinedFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlUserDefinedFunction;
    /**
     * Returns true if the given object is an instance of SqlResourceSqlUserDefinedFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlResourceSqlUserDefinedFunction;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    readonly name: pulumi.Output<string>;
    readonly resource: pulumi.Output<outputs.documentdb.v20200301.SqlUserDefinedFunctionGetPropertiesResponseResource | undefined>;
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
     * Create a SqlResourceSqlUserDefinedFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlUserDefinedFunctionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SqlResourceSqlUserDefinedFunction resource.
 */
export interface SqlResourceSqlUserDefinedFunctionArgs {
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
    readonly options: pulumi.Input<inputs.documentdb.v20200301.CreateUpdateOptions>;
    /**
     * The standard JSON format of a userDefinedFunction
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20200301.SqlUserDefinedFunctionResource>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Cosmos DB userDefinedFunction name.
     */
    readonly userDefinedFunctionName: pulumi.Input<string>;
}