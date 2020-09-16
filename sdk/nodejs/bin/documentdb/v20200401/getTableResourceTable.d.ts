import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getTableResourceTable(args: GetTableResourceTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResourceTableResult>;
export interface GetTableResourceTableArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Cosmos DB table name.
     */
    readonly tableName: string;
}
/**
 * An Azure Cosmos DB Table.
 */
export interface GetTableResourceTableResult {
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: outputs.documentdb.v20200401.TableGetPropertiesResponseOptions;
    readonly resource?: outputs.documentdb.v20200401.TableGetPropertiesResponseResource;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}