import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBatchAccount(args: GetBatchAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchAccountResult>;
export interface GetBatchAccountArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: string;
}
/**
 * Contains information about an Azure Batch account.
 */
export interface GetBatchAccountResult {
    /**
     * The account endpoint used to interact with the Batch service.
     */
    readonly accountEndpoint: string;
    readonly activeJobAndJobScheduleQuota: number;
    /**
     * Contains information about the auto-storage account associated with a Batch account.
     */
    readonly autoStorage: outputs.batch.v20190801.AutoStoragePropertiesResponse;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly dedicatedCoreQuota: number;
    /**
     * A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly dedicatedCoreQuotaPerVMFamily: outputs.batch.v20190801.VirtualMachineFamilyCoreQuotaResponse[];
    /**
     * Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
     */
    readonly dedicatedCoreQuotaPerVMFamilyEnforced: boolean;
    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    readonly keyVaultReference: outputs.batch.v20190801.KeyVaultReferenceResponse;
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    readonly lowPriorityCoreQuota: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The allocation mode for creating pools in the Batch account.
     */
    readonly poolAllocationMode: string;
    readonly poolQuota: number;
    /**
     * The provisioned state of the resource
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}