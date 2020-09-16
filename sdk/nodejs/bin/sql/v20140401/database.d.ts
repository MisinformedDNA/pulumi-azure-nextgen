import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Represents a database.
 */
export declare class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Database;
    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Database;
    /**
     * The collation of the database. If createMode is not Default, this value is ignored.
     */
    readonly collation: pulumi.Output<string | undefined>;
    /**
     * The containment state of the database.
     */
    readonly containmentState: pulumi.Output<number>;
    /**
     * Specifies the mode of database creation.
     *
     * Default: regular database creation.
     *
     * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
     *
     * OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
     *
     * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
     *
     * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
     *
     * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
     *
     * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
     *
     * Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
     */
    readonly createMode: pulumi.Output<string | undefined>;
    /**
     * The creation date of the database (ISO8601 format).
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
     */
    readonly currentServiceObjectiveId: pulumi.Output<string>;
    /**
     * The ID of the database.
     */
    readonly databaseId: pulumi.Output<string>;
    /**
     * The default secondary region for this database.
     */
    readonly defaultSecondaryLocation: pulumi.Output<string>;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     */
    readonly earliestRestoreDate: pulumi.Output<string>;
    /**
     * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    readonly edition: pulumi.Output<string | undefined>;
    /**
     * The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
     */
    readonly elasticPoolName: pulumi.Output<string | undefined>;
    /**
     * The resource identifier of the failover group containing this database.
     */
    readonly failoverGroupId: pulumi.Output<string>;
    /**
     * Kind of database.  This is metadata used for the Azure portal experience.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
     */
    readonly maxSizeBytes: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
     */
    readonly readScale: pulumi.Output<string | undefined>;
    /**
     * The recommended indices for this database.
     */
    readonly recommendedIndex: pulumi.Output<outputs.sql.v20140401.RecommendedIndexResponse[]>;
    /**
     * Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
     */
    readonly recoveryServicesRecoveryPointResourceId: pulumi.Output<string | undefined>;
    /**
     * The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
     *
     * The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
     */
    readonly requestedServiceObjectiveId: pulumi.Output<string | undefined>;
    /**
     * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    readonly requestedServiceObjectiveName: pulumi.Output<string | undefined>;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
     */
    readonly restorePointInTime: pulumi.Output<string | undefined>;
    /**
     * Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
     */
    readonly sampleName: pulumi.Output<string | undefined>;
    /**
     * The current service level objective of the database.
     */
    readonly serviceLevelObjective: pulumi.Output<string>;
    /**
     * The list of service tier advisors for this database. Expanded property
     */
    readonly serviceTierAdvisors: pulumi.Output<outputs.sql.v20140401.ServiceTierAdvisorResponse[]>;
    /**
     * Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
     */
    readonly sourceDatabaseDeletionDate: pulumi.Output<string | undefined>;
    /**
     * Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
     */
    readonly sourceDatabaseId: pulumi.Output<string | undefined>;
    /**
     * The status of the database.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The transparent data encryption info for this database.
     */
    readonly transparentDataEncryption: pulumi.Output<outputs.sql.v20140401.TransparentDataEncryptionResponse[]>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant: pulumi.Output<boolean | undefined>;
    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * The collation of the database. If createMode is not Default, this value is ignored.
     */
    readonly collation?: pulumi.Input<string>;
    /**
     * Specifies the mode of database creation.
     *
     * Default: regular database creation.
     *
     * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
     *
     * OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
     *
     * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
     *
     * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
     *
     * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
     *
     * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
     *
     * Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
     */
    readonly createMode?: pulumi.Input<string>;
    /**
     * The name of the database to be operated on (updated or created).
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
     */
    readonly elasticPoolName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
     */
    readonly maxSizeBytes?: pulumi.Input<string>;
    /**
     * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
     */
    readonly readScale?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
     */
    readonly recoveryServicesRecoveryPointResourceId?: pulumi.Input<string>;
    /**
     * The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
     *
     * The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
     */
    readonly requestedServiceObjectiveId?: pulumi.Input<string>;
    /**
     * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    readonly requestedServiceObjectiveName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
     */
    readonly restorePointInTime?: pulumi.Input<string>;
    /**
     * Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
     */
    readonly sampleName?: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
     */
    readonly sourceDatabaseDeletionDate?: pulumi.Input<string>;
    /**
     * Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
     */
    readonly sourceDatabaseId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: pulumi.Input<boolean>;
}