# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetConfigurationProfileResult',
    'AwaitableGetConfigurationProfileResult',
    'get_configuration_profile',
]

@pulumi.output_type
class GetConfigurationProfileResult:
    """
    A profile object that contains change analysis configuration, such as notification settings, for this subscription
    """
    def __init__(__self__, identity=None, name=None, properties=None, system_data=None, type=None):
        if identity and not isinstance(identity, dict):
            raise TypeError("Expected argument 'identity' to be a dict")
        pulumi.set(__self__, "identity", identity)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if properties and not isinstance(properties, dict):
            raise TypeError("Expected argument 'properties' to be a dict")
        pulumi.set(__self__, "properties", properties)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def identity(self) -> Optional['outputs.ResourceIdentityResponse']:
        """
        The identity block returned by ARM resource that supports managed identity.
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> 'outputs.ConfigurationProfileResourcePropertiesResponse':
        """
        The properties of a configuration profile.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> Optional['outputs.SystemDataResponse']:
        """
        Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetConfigurationProfileResult(GetConfigurationProfileResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetConfigurationProfileResult(
            identity=self.identity,
            name=self.name,
            properties=self.properties,
            system_data=self.system_data,
            type=self.type)


def get_configuration_profile(profile_name: Optional[str] = None,
                              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetConfigurationProfileResult:
    """
    Use this data source to access information about an existing resource.

    :param str profile_name: The name of the configuration profile. The profile name should be set to 'default', all other names will be overwritten.
    """
    __args__ = dict()
    __args__['profileName'] = profile_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:changeanalysis/v20200401preview:getConfigurationProfile', __args__, opts=opts, typ=GetConfigurationProfileResult).value

    return AwaitableGetConfigurationProfileResult(
        identity=__ret__.identity,
        name=__ret__.name,
        properties=__ret__.properties,
        system_data=__ret__.system_data,
        type=__ret__.type)