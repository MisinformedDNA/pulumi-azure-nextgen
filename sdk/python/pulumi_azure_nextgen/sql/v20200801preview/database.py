# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['Database']


class Database(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 auto_pause_delay: Optional[pulumi.Input[int]] = None,
                 catalog_collation: Optional[pulumi.Input[str]] = None,
                 collation: Optional[pulumi.Input[str]] = None,
                 create_mode: Optional[pulumi.Input[str]] = None,
                 database_name: Optional[pulumi.Input[str]] = None,
                 elastic_pool_id: Optional[pulumi.Input[str]] = None,
                 high_availability_replica_count: Optional[pulumi.Input[int]] = None,
                 license_type: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 long_term_retention_backup_resource_id: Optional[pulumi.Input[str]] = None,
                 maintenance_configuration_id: Optional[pulumi.Input[str]] = None,
                 max_size_bytes: Optional[pulumi.Input[int]] = None,
                 min_capacity: Optional[pulumi.Input[float]] = None,
                 read_scale: Optional[pulumi.Input[str]] = None,
                 recoverable_database_id: Optional[pulumi.Input[str]] = None,
                 recovery_services_recovery_point_id: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 restorable_dropped_database_id: Optional[pulumi.Input[str]] = None,
                 restore_point_in_time: Optional[pulumi.Input[str]] = None,
                 sample_name: Optional[pulumi.Input[str]] = None,
                 secondary_type: Optional[pulumi.Input[str]] = None,
                 server_name: Optional[pulumi.Input[str]] = None,
                 sku: Optional[pulumi.Input[pulumi.InputType['SkuArgs']]] = None,
                 source_database_deletion_date: Optional[pulumi.Input[str]] = None,
                 source_database_id: Optional[pulumi.Input[str]] = None,
                 storage_account_type: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 zone_redundant: Optional[pulumi.Input[bool]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        A database resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[int] auto_pause_delay: Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
        :param pulumi.Input[str] catalog_collation: Collation of the metadata catalog.
        :param pulumi.Input[str] collation: The collation of the database.
        :param pulumi.Input[str] create_mode: Specifies the mode of database creation.
               
               Default: regular database creation.
               
               Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
               
               Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
               
               PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
               
               Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
               
               Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
               
               RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
               
               Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
        :param pulumi.Input[str] database_name: The name of the database.
        :param pulumi.Input[str] elastic_pool_id: The resource identifier of the elastic pool containing this database.
        :param pulumi.Input[int] high_availability_replica_count: The number of secondary replicas associated with the database that are used to provide high availability.
        :param pulumi.Input[str] license_type: The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[str] long_term_retention_backup_resource_id: The resource identifier of the long term retention backup associated with create operation of this database.
        :param pulumi.Input[str] maintenance_configuration_id: Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will be rolled out.
        :param pulumi.Input[int] max_size_bytes: The max size of the database expressed in bytes.
        :param pulumi.Input[float] min_capacity: Minimal capacity that database will always have allocated, if not paused
        :param pulumi.Input[str] read_scale: The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region.
        :param pulumi.Input[str] recoverable_database_id: The resource identifier of the recoverable database associated with create operation of this database.
        :param pulumi.Input[str] recovery_services_recovery_point_id: The resource identifier of the recovery point associated with create operation of this database.
        :param pulumi.Input[str] resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        :param pulumi.Input[str] restorable_dropped_database_id: The resource identifier of the restorable dropped database associated with create operation of this database.
        :param pulumi.Input[str] restore_point_in_time: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        :param pulumi.Input[str] sample_name: The name of the sample schema to apply when creating this database.
        :param pulumi.Input[str] secondary_type: The secondary type of the database if it is a secondary.  Valid values are Geo and Named.
        :param pulumi.Input[str] server_name: The name of the server.
        :param pulumi.Input[pulumi.InputType['SkuArgs']] sku: The database SKU.
               
               The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
               
               ```azurecli
               az sql db list-editions -l <location> -o table
               ````
               
               ```powershell
               Get-AzSqlServerServiceObjective -Location <location>
               ````
        :param pulumi.Input[str] source_database_deletion_date: Specifies the time that the database was deleted.
        :param pulumi.Input[str] source_database_id: The resource identifier of the source database associated with create operation of this database.
        :param pulumi.Input[str] storage_account_type: The storage account type used to store backups for this database. Currently the only supported option is GRS (GeoRedundantStorage).
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
        :param pulumi.Input[bool] zone_redundant: Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['auto_pause_delay'] = auto_pause_delay
            __props__['catalog_collation'] = catalog_collation
            __props__['collation'] = collation
            __props__['create_mode'] = create_mode
            if database_name is None:
                raise TypeError("Missing required property 'database_name'")
            __props__['database_name'] = database_name
            __props__['elastic_pool_id'] = elastic_pool_id
            __props__['high_availability_replica_count'] = high_availability_replica_count
            __props__['license_type'] = license_type
            if location is None:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            __props__['long_term_retention_backup_resource_id'] = long_term_retention_backup_resource_id
            __props__['maintenance_configuration_id'] = maintenance_configuration_id
            __props__['max_size_bytes'] = max_size_bytes
            __props__['min_capacity'] = min_capacity
            __props__['read_scale'] = read_scale
            __props__['recoverable_database_id'] = recoverable_database_id
            __props__['recovery_services_recovery_point_id'] = recovery_services_recovery_point_id
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['restorable_dropped_database_id'] = restorable_dropped_database_id
            __props__['restore_point_in_time'] = restore_point_in_time
            __props__['sample_name'] = sample_name
            __props__['secondary_type'] = secondary_type
            if server_name is None:
                raise TypeError("Missing required property 'server_name'")
            __props__['server_name'] = server_name
            __props__['sku'] = sku
            __props__['source_database_deletion_date'] = source_database_deletion_date
            __props__['source_database_id'] = source_database_id
            __props__['storage_account_type'] = storage_account_type
            __props__['tags'] = tags
            __props__['zone_redundant'] = zone_redundant
            __props__['creation_date'] = None
            __props__['current_service_objective_name'] = None
            __props__['current_sku'] = None
            __props__['database_id'] = None
            __props__['default_secondary_location'] = None
            __props__['earliest_restore_date'] = None
            __props__['failover_group_id'] = None
            __props__['kind'] = None
            __props__['managed_by'] = None
            __props__['max_log_size_bytes'] = None
            __props__['name'] = None
            __props__['paused_date'] = None
            __props__['requested_service_objective_name'] = None
            __props__['resumed_date'] = None
            __props__['status'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:sql/latest:Database"), pulumi.Alias(type_="azure-nextgen:sql/v20140401:Database"), pulumi.Alias(type_="azure-nextgen:sql/v20170301preview:Database"), pulumi.Alias(type_="azure-nextgen:sql/v20171001preview:Database"), pulumi.Alias(type_="azure-nextgen:sql/v20190601preview:Database")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Database, __self__).__init__(
            'azure-nextgen:sql/v20200801preview:Database',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Database':
        """
        Get an existing Database resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Database(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="autoPauseDelay")
    def auto_pause_delay(self) -> pulumi.Output[Optional[int]]:
        """
        Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
        """
        return pulumi.get(self, "auto_pause_delay")

    @property
    @pulumi.getter(name="catalogCollation")
    def catalog_collation(self) -> pulumi.Output[Optional[str]]:
        """
        Collation of the metadata catalog.
        """
        return pulumi.get(self, "catalog_collation")

    @property
    @pulumi.getter
    def collation(self) -> pulumi.Output[Optional[str]]:
        """
        The collation of the database.
        """
        return pulumi.get(self, "collation")

    @property
    @pulumi.getter(name="createMode")
    def create_mode(self) -> pulumi.Output[Optional[str]]:
        """
        Specifies the mode of database creation.
        
        Default: regular database creation.
        
        Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
        
        Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
        
        PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
        
        Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
        
        Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
        
        RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
        
        Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
        """
        return pulumi.get(self, "create_mode")

    @property
    @pulumi.getter(name="creationDate")
    def creation_date(self) -> pulumi.Output[str]:
        """
        The creation date of the database (ISO8601 format).
        """
        return pulumi.get(self, "creation_date")

    @property
    @pulumi.getter(name="currentServiceObjectiveName")
    def current_service_objective_name(self) -> pulumi.Output[str]:
        """
        The current service level objective name of the database.
        """
        return pulumi.get(self, "current_service_objective_name")

    @property
    @pulumi.getter(name="currentSku")
    def current_sku(self) -> pulumi.Output['outputs.SkuResponse']:
        """
        The name and tier of the SKU.
        """
        return pulumi.get(self, "current_sku")

    @property
    @pulumi.getter(name="databaseId")
    def database_id(self) -> pulumi.Output[str]:
        """
        The ID of the database.
        """
        return pulumi.get(self, "database_id")

    @property
    @pulumi.getter(name="defaultSecondaryLocation")
    def default_secondary_location(self) -> pulumi.Output[str]:
        """
        The default secondary region for this database.
        """
        return pulumi.get(self, "default_secondary_location")

    @property
    @pulumi.getter(name="earliestRestoreDate")
    def earliest_restore_date(self) -> pulumi.Output[str]:
        """
        This records the earliest start date and time that restore is available for this database (ISO8601 format).
        """
        return pulumi.get(self, "earliest_restore_date")

    @property
    @pulumi.getter(name="elasticPoolId")
    def elastic_pool_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the elastic pool containing this database.
        """
        return pulumi.get(self, "elastic_pool_id")

    @property
    @pulumi.getter(name="failoverGroupId")
    def failover_group_id(self) -> pulumi.Output[str]:
        """
        Failover Group resource identifier that this database belongs to.
        """
        return pulumi.get(self, "failover_group_id")

    @property
    @pulumi.getter(name="highAvailabilityReplicaCount")
    def high_availability_replica_count(self) -> pulumi.Output[Optional[int]]:
        """
        The number of secondary replicas associated with the database that are used to provide high availability.
        """
        return pulumi.get(self, "high_availability_replica_count")

    @property
    @pulumi.getter
    def kind(self) -> pulumi.Output[str]:
        """
        Kind of database. This is metadata used for the Azure portal experience.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter(name="licenseType")
    def license_type(self) -> pulumi.Output[Optional[str]]:
        """
        The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
        """
        return pulumi.get(self, "license_type")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="longTermRetentionBackupResourceId")
    def long_term_retention_backup_resource_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the long term retention backup associated with create operation of this database.
        """
        return pulumi.get(self, "long_term_retention_backup_resource_id")

    @property
    @pulumi.getter(name="maintenanceConfigurationId")
    def maintenance_configuration_id(self) -> pulumi.Output[Optional[str]]:
        """
        Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will be rolled out.
        """
        return pulumi.get(self, "maintenance_configuration_id")

    @property
    @pulumi.getter(name="managedBy")
    def managed_by(self) -> pulumi.Output[str]:
        """
        Resource that manages the database.
        """
        return pulumi.get(self, "managed_by")

    @property
    @pulumi.getter(name="maxLogSizeBytes")
    def max_log_size_bytes(self) -> pulumi.Output[int]:
        """
        The max log size for this database.
        """
        return pulumi.get(self, "max_log_size_bytes")

    @property
    @pulumi.getter(name="maxSizeBytes")
    def max_size_bytes(self) -> pulumi.Output[Optional[int]]:
        """
        The max size of the database expressed in bytes.
        """
        return pulumi.get(self, "max_size_bytes")

    @property
    @pulumi.getter(name="minCapacity")
    def min_capacity(self) -> pulumi.Output[Optional[float]]:
        """
        Minimal capacity that database will always have allocated, if not paused
        """
        return pulumi.get(self, "min_capacity")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="pausedDate")
    def paused_date(self) -> pulumi.Output[str]:
        """
        The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready.
        """
        return pulumi.get(self, "paused_date")

    @property
    @pulumi.getter(name="readScale")
    def read_scale(self) -> pulumi.Output[Optional[str]]:
        """
        The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region.
        """
        return pulumi.get(self, "read_scale")

    @property
    @pulumi.getter(name="recoverableDatabaseId")
    def recoverable_database_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the recoverable database associated with create operation of this database.
        """
        return pulumi.get(self, "recoverable_database_id")

    @property
    @pulumi.getter(name="recoveryServicesRecoveryPointId")
    def recovery_services_recovery_point_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the recovery point associated with create operation of this database.
        """
        return pulumi.get(self, "recovery_services_recovery_point_id")

    @property
    @pulumi.getter(name="requestedServiceObjectiveName")
    def requested_service_objective_name(self) -> pulumi.Output[str]:
        """
        The requested service level objective name of the database.
        """
        return pulumi.get(self, "requested_service_objective_name")

    @property
    @pulumi.getter(name="restorableDroppedDatabaseId")
    def restorable_dropped_database_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the restorable dropped database associated with create operation of this database.
        """
        return pulumi.get(self, "restorable_dropped_database_id")

    @property
    @pulumi.getter(name="restorePointInTime")
    def restore_point_in_time(self) -> pulumi.Output[Optional[str]]:
        """
        Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        """
        return pulumi.get(self, "restore_point_in_time")

    @property
    @pulumi.getter(name="resumedDate")
    def resumed_date(self) -> pulumi.Output[str]:
        """
        The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
        """
        return pulumi.get(self, "resumed_date")

    @property
    @pulumi.getter(name="sampleName")
    def sample_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the sample schema to apply when creating this database.
        """
        return pulumi.get(self, "sample_name")

    @property
    @pulumi.getter(name="secondaryType")
    def secondary_type(self) -> pulumi.Output[Optional[str]]:
        """
        The secondary type of the database if it is a secondary.  Valid values are Geo and Named.
        """
        return pulumi.get(self, "secondary_type")

    @property
    @pulumi.getter
    def sku(self) -> pulumi.Output[Optional['outputs.SkuResponse']]:
        """
        The database SKU.
        
        The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
        
        ```azurecli
        az sql db list-editions -l <location> -o table
        ````
        
        ```powershell
        Get-AzSqlServerServiceObjective -Location <location>
        ````
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="sourceDatabaseDeletionDate")
    def source_database_deletion_date(self) -> pulumi.Output[Optional[str]]:
        """
        Specifies the time that the database was deleted.
        """
        return pulumi.get(self, "source_database_deletion_date")

    @property
    @pulumi.getter(name="sourceDatabaseId")
    def source_database_id(self) -> pulumi.Output[Optional[str]]:
        """
        The resource identifier of the source database associated with create operation of this database.
        """
        return pulumi.get(self, "source_database_id")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[str]:
        """
        The status of the database.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="storageAccountType")
    def storage_account_type(self) -> pulumi.Output[Optional[str]]:
        """
        The storage account type used to store backups for this database. Currently the only supported option is GRS (GeoRedundantStorage).
        """
        return pulumi.get(self, "storage_account_type")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="zoneRedundant")
    def zone_redundant(self) -> pulumi.Output[Optional[bool]]:
        """
        Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
        """
        return pulumi.get(self, "zone_redundant")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

