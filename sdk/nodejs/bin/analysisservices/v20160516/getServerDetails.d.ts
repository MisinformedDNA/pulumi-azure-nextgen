import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServerDetails(args: GetServerDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetServerDetailsResult>;
export interface GetServerDetailsArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    readonly serverName: string;
}
/**
 * Represents an instance of an Analysis Services resource.
 */
export interface GetServerDetailsResult {
    /**
     * A collection of AS server administrators
     */
    readonly asAdministrators?: outputs.analysisservices.v20160516.ServerAdministratorsResponse;
    /**
     * The container URI of backup blob.
     */
    readonly backupBlobContainerUri?: string;
    /**
     * Location of the Analysis Services resource.
     */
    readonly location: string;
    /**
     * The name of the Analysis Services resource.
     */
    readonly name: string;
    /**
     * The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The full name of the Analysis Services resource.
     */
    readonly serverFullName: string;
    /**
     * The SKU of the Analysis Services resource.
     */
    readonly sku: outputs.analysisservices.v20160516.ResourceSkuResponse;
    /**
     * The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: string;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the Analysis Services resource.
     */
    readonly type: string;
}