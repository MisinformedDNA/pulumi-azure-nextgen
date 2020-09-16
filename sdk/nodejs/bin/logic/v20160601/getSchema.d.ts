import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSchema(args: GetSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaResult>;
export interface GetSchemaArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The integration account schema name.
     */
    readonly schemaName: string;
}
/**
 * The integration account schema.
 */
export interface GetSchemaResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The content.
     */
    readonly content?: string;
    /**
     * The content link.
     */
    readonly contentLink: outputs.logic.v20160601.ContentLinkResponse;
    /**
     * The content type.
     */
    readonly contentType?: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The document name.
     */
    readonly documentName?: string;
    /**
     * The file name.
     */
    readonly fileName?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The schema type.
     */
    readonly schemaType: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The target namespace of the schema.
     */
    readonly targetNamespace?: string;
    /**
     * Gets the resource type.
     */
    readonly type: string;
}