import * as pulumi from "@pulumi/pulumi";
export declare function getDisasterRecoveryConfig(args: GetDisasterRecoveryConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryConfigResult>;
export interface GetDisasterRecoveryConfigArgs {
    /**
     * The Disaster Recovery configuration name
     */
    readonly alias: string;
    /**
     * The Namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 */
export interface GetDisasterRecoveryConfigResult {
    /**
     * Alternate name specified when alias and namespace names are same.
     */
    readonly alternateName?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly partnerNamespace?: string;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: number;
    /**
     * Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
     */
    readonly provisioningState: string;
    /**
     * role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
     */
    readonly role: string;
    /**
     * Resource type.
     */
    readonly type: string;
}