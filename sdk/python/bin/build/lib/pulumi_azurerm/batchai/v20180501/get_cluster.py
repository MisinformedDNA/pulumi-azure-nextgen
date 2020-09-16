# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetClusterResult',
    'AwaitableGetClusterResult',
    'get_cluster',
]

@pulumi.output_type
class GetClusterResult:
    """
    Information about a Cluster.
    """
    def __init__(__self__, allocation_state=None, allocation_state_transition_time=None, creation_time=None, current_node_count=None, errors=None, name=None, node_setup=None, node_state_counts=None, provisioning_state=None, provisioning_state_transition_time=None, scale_settings=None, subnet=None, type=None, user_account_settings=None, virtual_machine_configuration=None, vm_priority=None, vm_size=None):
        if allocation_state and not isinstance(allocation_state, str):
            raise TypeError("Expected argument 'allocation_state' to be a str")
        pulumi.set(__self__, "allocation_state", allocation_state)
        if allocation_state_transition_time and not isinstance(allocation_state_transition_time, str):
            raise TypeError("Expected argument 'allocation_state_transition_time' to be a str")
        pulumi.set(__self__, "allocation_state_transition_time", allocation_state_transition_time)
        if creation_time and not isinstance(creation_time, str):
            raise TypeError("Expected argument 'creation_time' to be a str")
        pulumi.set(__self__, "creation_time", creation_time)
        if current_node_count and not isinstance(current_node_count, float):
            raise TypeError("Expected argument 'current_node_count' to be a float")
        pulumi.set(__self__, "current_node_count", current_node_count)
        if errors and not isinstance(errors, list):
            raise TypeError("Expected argument 'errors' to be a list")
        pulumi.set(__self__, "errors", errors)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if node_setup and not isinstance(node_setup, dict):
            raise TypeError("Expected argument 'node_setup' to be a dict")
        pulumi.set(__self__, "node_setup", node_setup)
        if node_state_counts and not isinstance(node_state_counts, dict):
            raise TypeError("Expected argument 'node_state_counts' to be a dict")
        pulumi.set(__self__, "node_state_counts", node_state_counts)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if provisioning_state_transition_time and not isinstance(provisioning_state_transition_time, str):
            raise TypeError("Expected argument 'provisioning_state_transition_time' to be a str")
        pulumi.set(__self__, "provisioning_state_transition_time", provisioning_state_transition_time)
        if scale_settings and not isinstance(scale_settings, dict):
            raise TypeError("Expected argument 'scale_settings' to be a dict")
        pulumi.set(__self__, "scale_settings", scale_settings)
        if subnet and not isinstance(subnet, dict):
            raise TypeError("Expected argument 'subnet' to be a dict")
        pulumi.set(__self__, "subnet", subnet)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if user_account_settings and not isinstance(user_account_settings, dict):
            raise TypeError("Expected argument 'user_account_settings' to be a dict")
        pulumi.set(__self__, "user_account_settings", user_account_settings)
        if virtual_machine_configuration and not isinstance(virtual_machine_configuration, dict):
            raise TypeError("Expected argument 'virtual_machine_configuration' to be a dict")
        pulumi.set(__self__, "virtual_machine_configuration", virtual_machine_configuration)
        if vm_priority and not isinstance(vm_priority, str):
            raise TypeError("Expected argument 'vm_priority' to be a str")
        pulumi.set(__self__, "vm_priority", vm_priority)
        if vm_size and not isinstance(vm_size, str):
            raise TypeError("Expected argument 'vm_size' to be a str")
        pulumi.set(__self__, "vm_size", vm_size)

    @property
    @pulumi.getter(name="allocationState")
    def allocation_state(self) -> str:
        """
        Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
        """
        return pulumi.get(self, "allocation_state")

    @property
    @pulumi.getter(name="allocationStateTransitionTime")
    def allocation_state_transition_time(self) -> str:
        """
        The time at which the cluster entered its current allocation state.
        """
        return pulumi.get(self, "allocation_state_transition_time")

    @property
    @pulumi.getter(name="creationTime")
    def creation_time(self) -> str:
        """
        The time when the cluster was created.
        """
        return pulumi.get(self, "creation_time")

    @property
    @pulumi.getter(name="currentNodeCount")
    def current_node_count(self) -> float:
        """
        The number of compute nodes currently assigned to the cluster.
        """
        return pulumi.get(self, "current_node_count")

    @property
    @pulumi.getter
    def errors(self) -> List['outputs.BatchAIErrorResponse']:
        """
        Collection of errors encountered by various compute nodes during node setup.
        """
        return pulumi.get(self, "errors")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="nodeSetup")
    def node_setup(self) -> Optional['outputs.NodeSetupResponse']:
        """
        Setup (mount file systems, performance counters settings and custom setup task) to be performed on each compute node in the cluster.
        """
        return pulumi.get(self, "node_setup")

    @property
    @pulumi.getter(name="nodeStateCounts")
    def node_state_counts(self) -> 'outputs.NodeStateCountsResponse':
        """
        Counts of various node states on the cluster.
        """
        return pulumi.get(self, "node_state_counts")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="provisioningStateTransitionTime")
    def provisioning_state_transition_time(self) -> str:
        """
        Time when the provisioning state was changed.
        """
        return pulumi.get(self, "provisioning_state_transition_time")

    @property
    @pulumi.getter(name="scaleSettings")
    def scale_settings(self) -> Optional['outputs.ScaleSettingsResponse']:
        """
        Scale settings of the cluster.
        """
        return pulumi.get(self, "scale_settings")

    @property
    @pulumi.getter
    def subnet(self) -> Optional['outputs.ResourceIdResponse']:
        """
        Virtual network subnet resource ID the cluster nodes belong to.
        """
        return pulumi.get(self, "subnet")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userAccountSettings")
    def user_account_settings(self) -> Optional['outputs.UserAccountSettingsResponse']:
        """
        Administrator user account settings which can be used to SSH to compute nodes.
        """
        return pulumi.get(self, "user_account_settings")

    @property
    @pulumi.getter(name="virtualMachineConfiguration")
    def virtual_machine_configuration(self) -> Optional['outputs.VirtualMachineConfigurationResponse']:
        """
        Virtual machine configuration (OS image) of the compute nodes. All nodes in a cluster have the same OS image configuration.
        """
        return pulumi.get(self, "virtual_machine_configuration")

    @property
    @pulumi.getter(name="vmPriority")
    def vm_priority(self) -> Optional[str]:
        """
        VM priority of cluster nodes.
        """
        return pulumi.get(self, "vm_priority")

    @property
    @pulumi.getter(name="vmSize")
    def vm_size(self) -> Optional[str]:
        """
        The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size.
        """
        return pulumi.get(self, "vm_size")


class AwaitableGetClusterResult(GetClusterResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetClusterResult(
            allocation_state=self.allocation_state,
            allocation_state_transition_time=self.allocation_state_transition_time,
            creation_time=self.creation_time,
            current_node_count=self.current_node_count,
            errors=self.errors,
            name=self.name,
            node_setup=self.node_setup,
            node_state_counts=self.node_state_counts,
            provisioning_state=self.provisioning_state,
            provisioning_state_transition_time=self.provisioning_state_transition_time,
            scale_settings=self.scale_settings,
            subnet=self.subnet,
            type=self.type,
            user_account_settings=self.user_account_settings,
            virtual_machine_configuration=self.virtual_machine_configuration,
            vm_priority=self.vm_priority,
            vm_size=self.vm_size)


def get_cluster(cluster_name: Optional[str] = None,
                resource_group_name: Optional[str] = None,
                workspace_name: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetClusterResult:
    """
    Use this data source to access information about an existing resource.

    :param str cluster_name: The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    :param str workspace_name: The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    """
    __args__ = dict()
    __args__['clusterName'] = cluster_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['workspaceName'] = workspace_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azurerm:batchai/v20180501:getCluster', __args__, opts=opts, typ=GetClusterResult).value

    return AwaitableGetClusterResult(
        allocation_state=__ret__.allocation_state,
        allocation_state_transition_time=__ret__.allocation_state_transition_time,
        creation_time=__ret__.creation_time,
        current_node_count=__ret__.current_node_count,
        errors=__ret__.errors,
        name=__ret__.name,
        node_setup=__ret__.node_setup,
        node_state_counts=__ret__.node_state_counts,
        provisioning_state=__ret__.provisioning_state,
        provisioning_state_transition_time=__ret__.provisioning_state_transition_time,
        scale_settings=__ret__.scale_settings,
        subnet=__ret__.subnet,
        type=__ret__.type,
        user_account_settings=__ret__.user_account_settings,
        virtual_machine_configuration=__ret__.virtual_machine_configuration,
        vm_priority=__ret__.vm_priority,
        vm_size=__ret__.vm_size)