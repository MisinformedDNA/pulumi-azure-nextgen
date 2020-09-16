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

__all__ = ['ManagementGroup']


class ManagementGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 details: Optional[pulumi.Input[pulumi.InputType['CreateManagementGroupDetailsArgs']]] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 group_id: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        The management group details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[pulumi.InputType['CreateManagementGroupDetailsArgs']] details: The details of a management group used during creation.
        :param pulumi.Input[str] display_name: The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
        :param pulumi.Input[str] group_id: Management Group ID.
        :param pulumi.Input[str] name: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
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

            __props__['details'] = details
            __props__['display_name'] = display_name
            if group_id is None:
                raise TypeError("Missing required property 'group_id'")
            __props__['group_id'] = group_id
            __props__['name'] = name
            __props__['children'] = None
            __props__['path'] = None
            __props__['tenant_id'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:management/v20171101preview:ManagementGroup"), pulumi.Alias(type_="azure-nextgen:management/v20180101preview:ManagementGroup"), pulumi.Alias(type_="azure-nextgen:management/v20180301preview:ManagementGroup"), pulumi.Alias(type_="azure-nextgen:management/v20191101:ManagementGroup"), pulumi.Alias(type_="azure-nextgen:management/v20200201:ManagementGroup"), pulumi.Alias(type_="azure-nextgen:management/v20200501:ManagementGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ManagementGroup, __self__).__init__(
            'azure-nextgen:management/latest:ManagementGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ManagementGroup':
        """
        Get an existing ManagementGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ManagementGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def children(self) -> pulumi.Output[Optional[Sequence['outputs.ManagementGroupChildInfoResponse']]]:
        """
        The list of children.
        """
        return pulumi.get(self, "children")

    @property
    @pulumi.getter
    def details(self) -> pulumi.Output[Optional['outputs.ManagementGroupDetailsResponse']]:
        """
        The details of a management group.
        """
        return pulumi.get(self, "details")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[Optional[str]]:
        """
        The friendly name of the management group.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the management group. For example, 00000000-0000-0000-0000-000000000000
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def path(self) -> pulumi.Output[Optional[Sequence['outputs.ManagementGroupPathElementResponse']]]:
        """
        The path from the root to the current group.
        """
        return pulumi.get(self, "path")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> pulumi.Output[Optional[str]]:
        """
        The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource.  For example, Microsoft.Management/managementGroups
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
