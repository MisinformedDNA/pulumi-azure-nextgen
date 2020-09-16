import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult>;
export interface GetServerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Represents a server.
 */
export interface GetServerResult {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * Earliest restore point creation time (ISO8601 format)
     */
    readonly earliestRestoreDate?: string;
    /**
     * The fully qualified domain name of a server.
     */
    readonly fullyQualifiedDomainName?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The master server id of a replica server.
     */
    readonly masterServerId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections on a server
     */
    readonly privateEndpointConnections: outputs.dbformariadb.v20180601.ServerPrivateEndpointConnectionResponse[];
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly publicNetworkAccess?: string;
    /**
     * The maximum number of replicas that a master server can have.
     */
    readonly replicaCapacity?: number;
    /**
     * The replication role of the server.
     */
    readonly replicationRole?: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: outputs.dbformariadb.v20180601.SkuResponse;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    readonly sslEnforcement?: string;
    /**
     * Storage profile of a server.
     */
    readonly storageProfile?: outputs.dbformariadb.v20180601.StorageProfileResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * A state of a server that is visible to user.
     */
    readonly userVisibleState?: string;
    /**
     * Server version.
     */
    readonly version?: string;
}