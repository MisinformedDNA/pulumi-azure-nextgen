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

__all__ = ['SyncGroup']


class SyncGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 conflict_resolution_policy: Optional[pulumi.Input[str]] = None,
                 database_name: Optional[pulumi.Input[str]] = None,
                 hub_database_password: Optional[pulumi.Input[str]] = None,
                 hub_database_user_name: Optional[pulumi.Input[str]] = None,
                 interval: Optional[pulumi.Input[int]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 schema: Optional[pulumi.Input[pulumi.InputType['SyncGroupSchemaArgs']]] = None,
                 server_name: Optional[pulumi.Input[str]] = None,
                 sync_database_id: Optional[pulumi.Input[str]] = None,
                 sync_group_name: Optional[pulumi.Input[str]] = None,
                 use_private_link_connection: Optional[pulumi.Input[bool]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An Azure SQL Database sync group.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] conflict_resolution_policy: Conflict resolution policy of the sync group.
        :param pulumi.Input[str] database_name: The name of the database on which the sync group is hosted.
        :param pulumi.Input[str] hub_database_password: Password for the sync group hub database credential.
        :param pulumi.Input[str] hub_database_user_name: User name for the sync group hub database credential.
        :param pulumi.Input[int] interval: Sync interval of the sync group.
        :param pulumi.Input[str] resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        :param pulumi.Input[pulumi.InputType['SyncGroupSchemaArgs']] schema: Sync schema of the sync group.
        :param pulumi.Input[str] server_name: The name of the server.
        :param pulumi.Input[str] sync_database_id: ARM resource id of the sync database in the sync group.
        :param pulumi.Input[str] sync_group_name: The name of the sync group.
        :param pulumi.Input[bool] use_private_link_connection: If use private link connection is enabled.
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

            __props__['conflict_resolution_policy'] = conflict_resolution_policy
            if database_name is None:
                raise TypeError("Missing required property 'database_name'")
            __props__['database_name'] = database_name
            __props__['hub_database_password'] = hub_database_password
            __props__['hub_database_user_name'] = hub_database_user_name
            __props__['interval'] = interval
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['schema'] = schema
            if server_name is None:
                raise TypeError("Missing required property 'server_name'")
            __props__['server_name'] = server_name
            __props__['sync_database_id'] = sync_database_id
            if sync_group_name is None:
                raise TypeError("Missing required property 'sync_group_name'")
            __props__['sync_group_name'] = sync_group_name
            __props__['use_private_link_connection'] = use_private_link_connection
            __props__['last_sync_time'] = None
            __props__['name'] = None
            __props__['private_endpoint_name'] = None
            __props__['sync_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:sql/v20150501preview:SyncGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(SyncGroup, __self__).__init__(
            'azure-nextgen:sql/v20190601preview:SyncGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'SyncGroup':
        """
        Get an existing SyncGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return SyncGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="conflictResolutionPolicy")
    def conflict_resolution_policy(self) -> pulumi.Output[Optional[str]]:
        """
        Conflict resolution policy of the sync group.
        """
        return pulumi.get(self, "conflict_resolution_policy")

    @property
    @pulumi.getter(name="hubDatabasePassword")
    def hub_database_password(self) -> pulumi.Output[Optional[str]]:
        """
        Password for the sync group hub database credential.
        """
        return pulumi.get(self, "hub_database_password")

    @property
    @pulumi.getter(name="hubDatabaseUserName")
    def hub_database_user_name(self) -> pulumi.Output[Optional[str]]:
        """
        User name for the sync group hub database credential.
        """
        return pulumi.get(self, "hub_database_user_name")

    @property
    @pulumi.getter
    def interval(self) -> pulumi.Output[Optional[int]]:
        """
        Sync interval of the sync group.
        """
        return pulumi.get(self, "interval")

    @property
    @pulumi.getter(name="lastSyncTime")
    def last_sync_time(self) -> pulumi.Output[str]:
        """
        Last sync time of the sync group.
        """
        return pulumi.get(self, "last_sync_time")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="privateEndpointName")
    def private_endpoint_name(self) -> pulumi.Output[str]:
        """
        Private endpoint name of the sync group if use private link connection is enabled.
        """
        return pulumi.get(self, "private_endpoint_name")

    @property
    @pulumi.getter
    def schema(self) -> pulumi.Output[Optional['outputs.SyncGroupSchemaResponse']]:
        """
        Sync schema of the sync group.
        """
        return pulumi.get(self, "schema")

    @property
    @pulumi.getter(name="syncDatabaseId")
    def sync_database_id(self) -> pulumi.Output[Optional[str]]:
        """
        ARM resource id of the sync database in the sync group.
        """
        return pulumi.get(self, "sync_database_id")

    @property
    @pulumi.getter(name="syncState")
    def sync_state(self) -> pulumi.Output[str]:
        """
        Sync state of the sync group.
        """
        return pulumi.get(self, "sync_state")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="usePrivateLinkConnection")
    def use_private_link_connection(self) -> pulumi.Output[Optional[bool]]:
        """
        If use private link connection is enabled.
        """
        return pulumi.get(self, "use_private_link_connection")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

