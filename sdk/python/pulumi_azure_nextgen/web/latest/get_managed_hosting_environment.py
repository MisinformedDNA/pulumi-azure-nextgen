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
    'GetManagedHostingEnvironmentResult',
    'AwaitableGetManagedHostingEnvironmentResult',
    'get_managed_hosting_environment',
]

@pulumi.output_type
class GetManagedHostingEnvironmentResult:
    """
    Description of a managed hosting environment
    """
    def __init__(__self__, api_management_account=None, dns_suffix=None, environment_is_healthy=None, environment_status=None, ipssl_address_count=None, kind=None, location=None, name=None, resource_group=None, status=None, subscription_id=None, suspended=None, tags=None, type=None, virtual_network=None):
        if api_management_account and not isinstance(api_management_account, str):
            raise TypeError("Expected argument 'api_management_account' to be a str")
        pulumi.set(__self__, "api_management_account", api_management_account)
        if dns_suffix and not isinstance(dns_suffix, str):
            raise TypeError("Expected argument 'dns_suffix' to be a str")
        pulumi.set(__self__, "dns_suffix", dns_suffix)
        if environment_is_healthy and not isinstance(environment_is_healthy, bool):
            raise TypeError("Expected argument 'environment_is_healthy' to be a bool")
        pulumi.set(__self__, "environment_is_healthy", environment_is_healthy)
        if environment_status and not isinstance(environment_status, str):
            raise TypeError("Expected argument 'environment_status' to be a str")
        pulumi.set(__self__, "environment_status", environment_status)
        if ipssl_address_count and not isinstance(ipssl_address_count, int):
            raise TypeError("Expected argument 'ipssl_address_count' to be a int")
        pulumi.set(__self__, "ipssl_address_count", ipssl_address_count)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if resource_group and not isinstance(resource_group, str):
            raise TypeError("Expected argument 'resource_group' to be a str")
        pulumi.set(__self__, "resource_group", resource_group)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if subscription_id and not isinstance(subscription_id, str):
            raise TypeError("Expected argument 'subscription_id' to be a str")
        pulumi.set(__self__, "subscription_id", subscription_id)
        if suspended and not isinstance(suspended, bool):
            raise TypeError("Expected argument 'suspended' to be a bool")
        pulumi.set(__self__, "suspended", suspended)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_network and not isinstance(virtual_network, dict):
            raise TypeError("Expected argument 'virtual_network' to be a dict")
        pulumi.set(__self__, "virtual_network", virtual_network)

    @property
    @pulumi.getter(name="apiManagementAccount")
    def api_management_account(self) -> Optional[str]:
        """
        Resource id of the api management account associated with this managed hosting environment (read only)
        """
        return pulumi.get(self, "api_management_account")

    @property
    @pulumi.getter(name="dnsSuffix")
    def dns_suffix(self) -> Optional[str]:
        """
        DNS suffix of the managed hosting environment
        """
        return pulumi.get(self, "dns_suffix")

    @property
    @pulumi.getter(name="environmentIsHealthy")
    def environment_is_healthy(self) -> Optional[bool]:
        """
        True/false indicating whether the managed hosting environment is healthy
        """
        return pulumi.get(self, "environment_is_healthy")

    @property
    @pulumi.getter(name="environmentStatus")
    def environment_status(self) -> Optional[str]:
        """
        Detailed message about with results of the last check of the managed hosting environment
        """
        return pulumi.get(self, "environment_status")

    @property
    @pulumi.getter(name="ipsslAddressCount")
    def ipssl_address_count(self) -> Optional[int]:
        """
        Number of ip ssl addresses reserved for the managed hosting environment
        """
        return pulumi.get(self, "ipssl_address_count")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource Location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Resource Name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="resourceGroup")
    def resource_group(self) -> Optional[str]:
        """
        Resource group of the managed hosting environment (read only)
        """
        return pulumi.get(self, "resource_group")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        Current status of the managed hosting environment
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="subscriptionId")
    def subscription_id(self) -> Optional[str]:
        """
        Subscription of the managed hosting environment (read only)
        """
        return pulumi.get(self, "subscription_id")

    @property
    @pulumi.getter
    def suspended(self) -> Optional[bool]:
        """
        True/false indicating whether the managed hosting environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
                    (most likely because NSG blocked the incoming traffic)
        """
        return pulumi.get(self, "suspended")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualNetwork")
    def virtual_network(self) -> Optional['outputs.VirtualNetworkProfileResponse']:
        """
        Description of the managed hosting environment's virtual network
        """
        return pulumi.get(self, "virtual_network")


class AwaitableGetManagedHostingEnvironmentResult(GetManagedHostingEnvironmentResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetManagedHostingEnvironmentResult(
            api_management_account=self.api_management_account,
            dns_suffix=self.dns_suffix,
            environment_is_healthy=self.environment_is_healthy,
            environment_status=self.environment_status,
            ipssl_address_count=self.ipssl_address_count,
            kind=self.kind,
            location=self.location,
            name=self.name,
            resource_group=self.resource_group,
            status=self.status,
            subscription_id=self.subscription_id,
            suspended=self.suspended,
            tags=self.tags,
            type=self.type,
            virtual_network=self.virtual_network)


def get_managed_hosting_environment(name: Optional[str] = None,
                                    resource_group_name: Optional[str] = None,
                                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetManagedHostingEnvironmentResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: Name of managed hosting environment
    :param str resource_group_name: Name of resource group
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/latest:getManagedHostingEnvironment', __args__, opts=opts, typ=GetManagedHostingEnvironmentResult).value

    return AwaitableGetManagedHostingEnvironmentResult(
        api_management_account=__ret__.api_management_account,
        dns_suffix=__ret__.dns_suffix,
        environment_is_healthy=__ret__.environment_is_healthy,
        environment_status=__ret__.environment_status,
        ipssl_address_count=__ret__.ipssl_address_count,
        kind=__ret__.kind,
        location=__ret__.location,
        name=__ret__.name,
        resource_group=__ret__.resource_group,
        status=__ret__.status,
        subscription_id=__ret__.subscription_id,
        suspended=__ret__.suspended,
        tags=__ret__.tags,
        type=__ret__.type,
        virtual_network=__ret__.virtual_network)