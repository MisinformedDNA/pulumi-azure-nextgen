# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['LabResource']


class LabResource(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 artifacts_storage_account: Optional[pulumi.Input[str]] = None,
                 created_date: Optional[pulumi.Input[str]] = None,
                 default_storage_account: Optional[pulumi.Input[str]] = None,
                 default_virtual_network_id: Optional[pulumi.Input[str]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 lab_storage_type: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 provisioning_state: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 storage_accounts: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 type: Optional[pulumi.Input[str]] = None,
                 vault_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        A lab.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] artifacts_storage_account: The artifact storage account of the lab.
        :param pulumi.Input[str] created_date: The creation date of the lab.
        :param pulumi.Input[str] default_storage_account: The lab's default storage account.
        :param pulumi.Input[str] default_virtual_network_id: The default virtual network identifier of the lab.
        :param pulumi.Input[str] id: The identifier of the resource.
        :param pulumi.Input[str] lab_storage_type: The type of the lab storage.
        :param pulumi.Input[str] location: The location of the resource.
        :param pulumi.Input[str] name: The name of the resource.
        :param pulumi.Input[str] provisioning_state: The provisioning status of the resource.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] storage_accounts: The storage accounts of the lab.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: The tags of the resource.
        :param pulumi.Input[str] type: The type of the resource.
        :param pulumi.Input[str] vault_name: The name of the key vault of the lab.
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

            __props__['artifacts_storage_account'] = artifacts_storage_account
            __props__['created_date'] = created_date
            __props__['default_storage_account'] = default_storage_account
            __props__['default_virtual_network_id'] = default_virtual_network_id
            __props__['id'] = id
            __props__['lab_storage_type'] = lab_storage_type
            __props__['location'] = location
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['provisioning_state'] = provisioning_state
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['storage_accounts'] = storage_accounts
            __props__['tags'] = tags
            __props__['type'] = type
            __props__['vault_name'] = vault_name
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:devtestlab/latest:LabResource"), pulumi.Alias(type_="azure-nextgen:devtestlab/v20160515:LabResource"), pulumi.Alias(type_="azure-nextgen:devtestlab/v20180915:LabResource")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(LabResource, __self__).__init__(
            'azure-nextgen:devtestlab/v20150521preview:LabResource',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'LabResource':
        """
        Get an existing LabResource resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return LabResource(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="artifactsStorageAccount")
    def artifacts_storage_account(self) -> pulumi.Output[Optional[str]]:
        """
        The artifact storage account of the lab.
        """
        return pulumi.get(self, "artifacts_storage_account")

    @property
    @pulumi.getter(name="createdDate")
    def created_date(self) -> pulumi.Output[Optional[str]]:
        """
        The creation date of the lab.
        """
        return pulumi.get(self, "created_date")

    @property
    @pulumi.getter(name="defaultStorageAccount")
    def default_storage_account(self) -> pulumi.Output[Optional[str]]:
        """
        The lab's default storage account.
        """
        return pulumi.get(self, "default_storage_account")

    @property
    @pulumi.getter(name="defaultVirtualNetworkId")
    def default_virtual_network_id(self) -> pulumi.Output[Optional[str]]:
        """
        The default virtual network identifier of the lab.
        """
        return pulumi.get(self, "default_virtual_network_id")

    @property
    @pulumi.getter(name="labStorageType")
    def lab_storage_type(self) -> pulumi.Output[Optional[str]]:
        """
        The type of the lab storage.
        """
        return pulumi.get(self, "lab_storage_type")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The location of the resource.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[Optional[str]]:
        """
        The provisioning status of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="storageAccounts")
    def storage_accounts(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The storage accounts of the lab.
        """
        return pulumi.get(self, "storage_accounts")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        The tags of the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[Optional[str]]:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="vaultName")
    def vault_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the key vault of the lab.
        """
        return pulumi.get(self, "vault_name")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
