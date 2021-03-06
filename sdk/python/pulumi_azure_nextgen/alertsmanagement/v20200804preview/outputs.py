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
    'HealthAlertActionResponse',
    'HealthAlertCriteriaResponse',
    'HealthStateResponse',
    'VmGuestHealthAlertCriterionResponse',
]

@pulumi.output_type
class HealthAlertActionResponse(dict):
    """
    An alert action.
    """
    def __init__(__self__, *,
                 action_group_id: Optional[str] = None,
                 web_hook_properties: Optional[Mapping[str, str]] = None):
        """
        An alert action.
        :param str action_group_id: the id of the action group to use.
        :param Mapping[str, str] web_hook_properties: The properties of a webhook object.
        """
        if action_group_id is not None:
            pulumi.set(__self__, "action_group_id", action_group_id)
        if web_hook_properties is not None:
            pulumi.set(__self__, "web_hook_properties", web_hook_properties)

    @property
    @pulumi.getter(name="actionGroupId")
    def action_group_id(self) -> Optional[str]:
        """
        the id of the action group to use.
        """
        return pulumi.get(self, "action_group_id")

    @property
    @pulumi.getter(name="webHookProperties")
    def web_hook_properties(self) -> Optional[Mapping[str, str]]:
        """
        The properties of a webhook object.
        """
        return pulumi.get(self, "web_hook_properties")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class HealthAlertCriteriaResponse(dict):
    """
    Specifies the resource health alert criteria for a single resource that has multiple metric criteria.
    """
    def __init__(__self__, *,
                 all_of: Optional[Sequence['outputs.VmGuestHealthAlertCriterionResponse']] = None):
        """
        Specifies the resource health alert criteria for a single resource that has multiple metric criteria.
        :param Sequence['VmGuestHealthAlertCriterionResponseArgs'] all_of: The list of metric criteria for this 'all of' operation. 
        """
        if all_of is not None:
            pulumi.set(__self__, "all_of", all_of)

    @property
    @pulumi.getter(name="allOf")
    def all_of(self) -> Optional[Sequence['outputs.VmGuestHealthAlertCriterionResponse']]:
        """
        The list of metric criteria for this 'all of' operation. 
        """
        return pulumi.get(self, "all_of")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class HealthStateResponse(dict):
    """
    Specifies the health state to alert on and the corresponding severity
    """
    def __init__(__self__, *,
                 health_state_name: str,
                 severity: str):
        """
        Specifies the health state to alert on and the corresponding severity
        :param str health_state_name: Health state
        :param str severity: Severity of alert fired
        """
        pulumi.set(__self__, "health_state_name", health_state_name)
        pulumi.set(__self__, "severity", severity)

    @property
    @pulumi.getter(name="healthStateName")
    def health_state_name(self) -> str:
        """
        Health state
        """
        return pulumi.get(self, "health_state_name")

    @property
    @pulumi.getter
    def severity(self) -> str:
        """
        Severity of alert fired
        """
        return pulumi.get(self, "severity")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VmGuestHealthAlertCriterionResponse(dict):
    """
    Specifies the health alert criteria to alert on.
    """
    def __init__(__self__, *,
                 health_monitor_name: str,
                 namespace: str,
                 health_states: Optional[Sequence['outputs.HealthStateResponse']] = None):
        """
        Specifies the health alert criteria to alert on.
        :param str health_monitor_name: Name of health monitor on which to define alert
        :param str namespace: specifies the type of the alert criterion.
        :param Sequence['HealthStateResponseArgs'] health_states: Health states to alert on
        """
        pulumi.set(__self__, "health_monitor_name", health_monitor_name)
        pulumi.set(__self__, "namespace", 'VmGuestHealth')
        if health_states is not None:
            pulumi.set(__self__, "health_states", health_states)

    @property
    @pulumi.getter(name="healthMonitorName")
    def health_monitor_name(self) -> str:
        """
        Name of health monitor on which to define alert
        """
        return pulumi.get(self, "health_monitor_name")

    @property
    @pulumi.getter
    def namespace(self) -> str:
        """
        specifies the type of the alert criterion.
        """
        return pulumi.get(self, "namespace")

    @property
    @pulumi.getter(name="healthStates")
    def health_states(self) -> Optional[Sequence['outputs.HealthStateResponse']]:
        """
        Health states to alert on
        """
        return pulumi.get(self, "health_states")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


