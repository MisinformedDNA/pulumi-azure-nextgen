import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
export interface GetAccountArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
 */
export interface GetAccountResult {
    /**
     * The unique identifier associated with this Data Lake Analytics account.
     */
    readonly accountId: string;
    /**
     * The list of compute policies associated with this account.
     */
    readonly computePolicies: outputs.datalakeanalytics.v20161101.ComputePolicyResponse[];
    /**
     * The account creation time.
     */
    readonly creationTime: string;
    /**
     * The commitment tier in use for the current month.
     */
    readonly currentTier: string;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    readonly dataLakeStoreAccounts: outputs.datalakeanalytics.v20161101.DataLakeStoreAccountInformationResponse[];
    /**
     * The default Data Lake Store account associated with this account.
     */
    readonly defaultDataLakeStoreAccount: string;
    /**
     * The full CName endpoint for this account.
     */
    readonly endpoint: string;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps: string;
    /**
     * The list of firewall rules associated with this account.
     */
    readonly firewallRules: outputs.datalakeanalytics.v20161101.FirewallRuleResponse[];
    /**
     * The current state of the IP address firewall for this account.
     */
    readonly firewallState: string;
    /**
     * The account last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    readonly maxDegreeOfParallelism: number;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    readonly maxDegreeOfParallelismPerJob: number;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    readonly maxJobCount: number;
    /**
     * The minimum supported priority per job for this account.
     */
    readonly minPriorityPerJob: number;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The commitment tier for the next month.
     */
    readonly newTier: string;
    /**
     * The provisioning status of the Data Lake Analytics account.
     */
    readonly provisioningState: string;
    /**
     * The number of days that job metadata is retained.
     */
    readonly queryStoreRetention: number;
    /**
     * The state of the Data Lake Analytics account.
     */
    readonly state: string;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    readonly storageAccounts: outputs.datalakeanalytics.v20161101.StorageAccountInformationResponse[];
    /**
     * The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
     */
    readonly systemMaxDegreeOfParallelism: number;
    /**
     * The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
     */
    readonly systemMaxJobCount: number;
    /**
     * The resource tags.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
}