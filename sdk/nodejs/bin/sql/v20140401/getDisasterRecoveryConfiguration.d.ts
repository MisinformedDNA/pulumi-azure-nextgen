import * as pulumi from "@pulumi/pulumi";
export declare function getDisasterRecoveryConfiguration(args: GetDisasterRecoveryConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryConfigurationResult>;
export interface GetDisasterRecoveryConfigurationArgs {
    /**
     * The name of the disaster recovery configuration.
     */
    readonly disasterRecoveryConfigurationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Represents a disaster recovery configuration.
 */
export interface GetDisasterRecoveryConfigurationResult {
    /**
     * Whether or not failover can be done automatically.
     */
    readonly autoFailover: string;
    /**
     * How aggressive the automatic failover should be.
     */
    readonly failoverPolicy: string;
    /**
     * Location of the server that contains this disaster recovery configuration.
     */
    readonly location: string;
    /**
     * Logical name of the server.
     */
    readonly logicalServerName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Logical name of the partner server.
     */
    readonly partnerLogicalServerName: string;
    /**
     * Id of the partner server.
     */
    readonly partnerServerId: string;
    /**
     * The role of the current server in the disaster recovery configuration.
     */
    readonly role: string;
    /**
     * The status of the disaster recovery configuration.
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}