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

__all__ = ['IotSecuritySolution']


class IotSecuritySolution(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 disabled_data_sources: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 export: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 iot_hubs: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 recommendations_configuration: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RecommendationConfigurationPropertiesArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 solution_name: Optional[pulumi.Input[str]] = None,
                 status: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 unmasked_ip_logging_status: Optional[pulumi.Input[str]] = None,
                 user_defined_resources: Optional[pulumi.Input[pulumi.InputType['UserDefinedResourcesPropertiesArgs']]] = None,
                 workspace: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        IoT Security solution configuration and resource information.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] disabled_data_sources: Disabled data sources. Disabling these data sources compromises the system.
        :param pulumi.Input[str] display_name: Resource display name.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] export: List of additional options for exporting to workspace data.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] iot_hubs: IoT Hub resource IDs
        :param pulumi.Input[str] location: The resource location.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RecommendationConfigurationPropertiesArgs']]]] recommendations_configuration: List of the configuration status for each recommendation type.
        :param pulumi.Input[str] resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
        :param pulumi.Input[str] solution_name: The name of the IoT Security solution.
        :param pulumi.Input[str] status: Status of the IoT Security solution.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags
        :param pulumi.Input[str] unmasked_ip_logging_status: Unmasked IP address logging status
        :param pulumi.Input[pulumi.InputType['UserDefinedResourcesPropertiesArgs']] user_defined_resources: Properties of the IoT Security solution's user defined resources.
        :param pulumi.Input[str] workspace: Workspace resource ID
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

            __props__['disabled_data_sources'] = disabled_data_sources
            if display_name is None:
                raise TypeError("Missing required property 'display_name'")
            __props__['display_name'] = display_name
            __props__['export'] = export
            if iot_hubs is None:
                raise TypeError("Missing required property 'iot_hubs'")
            __props__['iot_hubs'] = iot_hubs
            __props__['location'] = location
            __props__['recommendations_configuration'] = recommendations_configuration
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if solution_name is None:
                raise TypeError("Missing required property 'solution_name'")
            __props__['solution_name'] = solution_name
            __props__['status'] = status
            __props__['tags'] = tags
            __props__['unmasked_ip_logging_status'] = unmasked_ip_logging_status
            __props__['user_defined_resources'] = user_defined_resources
            __props__['workspace'] = workspace
            __props__['auto_discovered_resources'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:security/latest:IotSecuritySolution"), pulumi.Alias(type_="azure-nextgen:security/v20170801preview:IotSecuritySolution")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(IotSecuritySolution, __self__).__init__(
            'azure-nextgen:security/v20190801:IotSecuritySolution',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'IotSecuritySolution':
        """
        Get an existing IotSecuritySolution resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return IotSecuritySolution(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="autoDiscoveredResources")
    def auto_discovered_resources(self) -> pulumi.Output[Sequence[str]]:
        """
        List of resources that were automatically discovered as relevant to the security solution.
        """
        return pulumi.get(self, "auto_discovered_resources")

    @property
    @pulumi.getter(name="disabledDataSources")
    def disabled_data_sources(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        Disabled data sources. Disabling these data sources compromises the system.
        """
        return pulumi.get(self, "disabled_data_sources")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[str]:
        """
        Resource display name.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def export(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        List of additional options for exporting to workspace data.
        """
        return pulumi.get(self, "export")

    @property
    @pulumi.getter(name="iotHubs")
    def iot_hubs(self) -> pulumi.Output[Sequence[str]]:
        """
        IoT Hub resource IDs
        """
        return pulumi.get(self, "iot_hubs")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="recommendationsConfiguration")
    def recommendations_configuration(self) -> pulumi.Output[Optional[Sequence['outputs.RecommendationConfigurationPropertiesResponse']]]:
        """
        List of the configuration status for each recommendation type.
        """
        return pulumi.get(self, "recommendations_configuration")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[Optional[str]]:
        """
        Status of the IoT Security solution.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="unmaskedIpLoggingStatus")
    def unmasked_ip_logging_status(self) -> pulumi.Output[Optional[str]]:
        """
        Unmasked IP address logging status
        """
        return pulumi.get(self, "unmasked_ip_logging_status")

    @property
    @pulumi.getter(name="userDefinedResources")
    def user_defined_resources(self) -> pulumi.Output[Optional['outputs.UserDefinedResourcesPropertiesResponse']]:
        """
        Properties of the IoT Security solution's user defined resources.
        """
        return pulumi.get(self, "user_defined_resources")

    @property
    @pulumi.getter
    def workspace(self) -> pulumi.Output[Optional[str]]:
        """
        Workspace resource ID
        """
        return pulumi.get(self, "workspace")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
