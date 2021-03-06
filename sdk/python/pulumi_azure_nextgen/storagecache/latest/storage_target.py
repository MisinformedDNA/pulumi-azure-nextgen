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

__all__ = ['StorageTarget']


class StorageTarget(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 cache_name: Optional[pulumi.Input[str]] = None,
                 clfs: Optional[pulumi.Input[pulumi.InputType['ClfsTargetArgs']]] = None,
                 junctions: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['NamespaceJunctionArgs']]]]] = None,
                 nfs3: Optional[pulumi.Input[pulumi.InputType['Nfs3TargetArgs']]] = None,
                 provisioning_state: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 storage_target_name: Optional[pulumi.Input[str]] = None,
                 target_type: Optional[pulumi.Input[str]] = None,
                 unknown: Optional[pulumi.Input[pulumi.InputType['UnknownTargetArgs']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Type of the Storage Target.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cache_name: Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        :param pulumi.Input[pulumi.InputType['ClfsTargetArgs']] clfs: Properties when targetType is clfs.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['NamespaceJunctionArgs']]]] junctions: List of Cache namespace junctions to target for namespace associations.
        :param pulumi.Input[pulumi.InputType['Nfs3TargetArgs']] nfs3: Properties when targetType is nfs3.
        :param pulumi.Input[str] provisioning_state: ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        :param pulumi.Input[str] resource_group_name: Target resource group.
        :param pulumi.Input[str] storage_target_name: Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        :param pulumi.Input[str] target_type: Type of the Storage Target.
        :param pulumi.Input[pulumi.InputType['UnknownTargetArgs']] unknown: Properties when targetType is unknown.
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

            if cache_name is None:
                raise TypeError("Missing required property 'cache_name'")
            __props__['cache_name'] = cache_name
            __props__['clfs'] = clfs
            __props__['junctions'] = junctions
            __props__['nfs3'] = nfs3
            __props__['provisioning_state'] = provisioning_state
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if storage_target_name is None:
                raise TypeError("Missing required property 'storage_target_name'")
            __props__['storage_target_name'] = storage_target_name
            if target_type is None:
                raise TypeError("Missing required property 'target_type'")
            __props__['target_type'] = target_type
            __props__['unknown'] = unknown
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:storagecache/v20190801preview:StorageTarget"), pulumi.Alias(type_="azure-nextgen:storagecache/v20191101:StorageTarget"), pulumi.Alias(type_="azure-nextgen:storagecache/v20200301:StorageTarget")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(StorageTarget, __self__).__init__(
            'azure-nextgen:storagecache/latest:StorageTarget',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'StorageTarget':
        """
        Get an existing StorageTarget resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return StorageTarget(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def clfs(self) -> pulumi.Output[Optional['outputs.ClfsTargetResponse']]:
        """
        Properties when targetType is clfs.
        """
        return pulumi.get(self, "clfs")

    @property
    @pulumi.getter
    def junctions(self) -> pulumi.Output[Optional[Sequence['outputs.NamespaceJunctionResponse']]]:
        """
        List of Cache namespace junctions to target for namespace associations.
        """
        return pulumi.get(self, "junctions")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Name of the Storage Target.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def nfs3(self) -> pulumi.Output[Optional['outputs.Nfs3TargetResponse']]:
        """
        Properties when targetType is nfs3.
        """
        return pulumi.get(self, "nfs3")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[Optional[str]]:
        """
        ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="targetType")
    def target_type(self) -> pulumi.Output[str]:
        """
        Type of the Storage Target.
        """
        return pulumi.get(self, "target_type")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def unknown(self) -> pulumi.Output[Optional['outputs.UnknownTargetResponse']]:
        """
        Properties when targetType is unknown.
        """
        return pulumi.get(self, "unknown")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

