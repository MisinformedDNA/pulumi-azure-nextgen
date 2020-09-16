# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetDomainTopicResult',
    'AwaitableGetDomainTopicResult',
    'get_domain_topic',
]

@pulumi.output_type
class GetDomainTopicResult:
    """
    Domain Topic.
    """
    def __init__(__self__, name=None, provisioning_state=None, type=None):
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Provisioning state of the domain topic.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetDomainTopicResult(GetDomainTopicResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDomainTopicResult(
            name=self.name,
            provisioning_state=self.provisioning_state,
            type=self.type)


def get_domain_topic(domain_name: Optional[str] = None,
                     domain_topic_name: Optional[str] = None,
                     resource_group_name: Optional[str] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDomainTopicResult:
    """
    Use this data source to access information about an existing resource.

    :param str domain_name: Name of the domain.
    :param str domain_topic_name: Name of the topic.
    :param str resource_group_name: The name of the resource group within the user's subscription.
    """
    __args__ = dict()
    __args__['domainName'] = domain_name
    __args__['domainTopicName'] = domain_topic_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:eventgrid/latest:getDomainTopic', __args__, opts=opts, typ=GetDomainTopicResult).value

    return AwaitableGetDomainTopicResult(
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        type=__ret__.type)