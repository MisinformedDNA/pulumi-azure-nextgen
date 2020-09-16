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

__all__ = ['PipelineRun']


class PipelineRun(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 force_update_tag: Optional[pulumi.Input[str]] = None,
                 pipeline_run_name: Optional[pulumi.Input[str]] = None,
                 registry_name: Optional[pulumi.Input[str]] = None,
                 request: Optional[pulumi.Input[pulumi.InputType['PipelineRunRequestArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An object that represents a pipeline run for a container registry.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] force_update_tag: How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
        :param pulumi.Input[str] pipeline_run_name: The name of the pipeline run.
        :param pulumi.Input[str] registry_name: The name of the container registry.
        :param pulumi.Input[pulumi.InputType['PipelineRunRequestArgs']] request: The request parameters for a pipeline run.
        :param pulumi.Input[str] resource_group_name: The name of the resource group to which the container registry belongs.
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

            __props__['force_update_tag'] = force_update_tag
            if pipeline_run_name is None:
                raise TypeError("Missing required property 'pipeline_run_name'")
            __props__['pipeline_run_name'] = pipeline_run_name
            if registry_name is None:
                raise TypeError("Missing required property 'registry_name'")
            __props__['registry_name'] = registry_name
            __props__['request'] = request
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['response'] = None
            __props__['type'] = None
        super(PipelineRun, __self__).__init__(
            'azure-nextgen:containerregistry/v20191201preview:PipelineRun',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'PipelineRun':
        """
        Get an existing PipelineRun resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return PipelineRun(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="forceUpdateTag")
    def force_update_tag(self) -> pulumi.Output[Optional[str]]:
        """
        How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
        """
        return pulumi.get(self, "force_update_tag")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of a pipeline run.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def request(self) -> pulumi.Output[Optional['outputs.PipelineRunRequestResponse']]:
        """
        The request parameters for a pipeline run.
        """
        return pulumi.get(self, "request")

    @property
    @pulumi.getter
    def response(self) -> pulumi.Output['outputs.PipelineRunResponseResponse']:
        """
        The response of a pipeline run.
        """
        return pulumi.get(self, "response")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
