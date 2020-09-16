# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from ... import _utilities, _tables

__all__ = [
    'ContainerServiceLinuxProfileArgs',
    'ContainerServiceNetworkProfileArgs',
    'ContainerServiceSshConfigurationArgs',
    'ContainerServiceSshPublicKeyArgs',
    'ManagedClusterAADProfileArgs',
    'ManagedClusterAddonProfileArgs',
    'ManagedClusterAgentPoolProfileArgs',
    'ManagedClusterIdentityArgs',
    'ManagedClusterServicePrincipalProfileArgs',
    'ManagedClusterWindowsProfileArgs',
]

@pulumi.input_type
class ContainerServiceLinuxProfileArgs:
    def __init__(__self__, *,
                 admin_username: pulumi.Input[str],
                 ssh: pulumi.Input['ContainerServiceSshConfigurationArgs']):
        """
        Profile for Linux VMs in the container service cluster.
        :param pulumi.Input[str] admin_username: The administrator username to use for Linux VMs.
        :param pulumi.Input['ContainerServiceSshConfigurationArgs'] ssh: SSH configuration for Linux-based VMs running on Azure.
        """
        pulumi.set(__self__, "admin_username", admin_username)
        pulumi.set(__self__, "ssh", ssh)

    @property
    @pulumi.getter(name="adminUsername")
    def admin_username(self) -> pulumi.Input[str]:
        """
        The administrator username to use for Linux VMs.
        """
        return pulumi.get(self, "admin_username")

    @admin_username.setter
    def admin_username(self, value: pulumi.Input[str]):
        pulumi.set(self, "admin_username", value)

    @property
    @pulumi.getter
    def ssh(self) -> pulumi.Input['ContainerServiceSshConfigurationArgs']:
        """
        SSH configuration for Linux-based VMs running on Azure.
        """
        return pulumi.get(self, "ssh")

    @ssh.setter
    def ssh(self, value: pulumi.Input['ContainerServiceSshConfigurationArgs']):
        pulumi.set(self, "ssh", value)


@pulumi.input_type
class ContainerServiceNetworkProfileArgs:
    def __init__(__self__, *,
                 dns_service_ip: Optional[pulumi.Input[str]] = None,
                 docker_bridge_cidr: Optional[pulumi.Input[str]] = None,
                 load_balancer_sku: Optional[pulumi.Input[str]] = None,
                 network_plugin: Optional[pulumi.Input[str]] = None,
                 network_policy: Optional[pulumi.Input[str]] = None,
                 pod_cidr: Optional[pulumi.Input[str]] = None,
                 service_cidr: Optional[pulumi.Input[str]] = None):
        """
        Profile of network configuration.
        :param pulumi.Input[str] dns_service_ip: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
        :param pulumi.Input[str] docker_bridge_cidr: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
        :param pulumi.Input[str] load_balancer_sku: The load balancer sku for the managed cluster.
        :param pulumi.Input[str] network_plugin: Network plugin used for building Kubernetes network.
        :param pulumi.Input[str] network_policy: Network policy used for building Kubernetes network.
        :param pulumi.Input[str] pod_cidr: A CIDR notation IP range from which to assign pod IPs when kubenet is used.
        :param pulumi.Input[str] service_cidr: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
        """
        if dns_service_ip is not None:
            pulumi.set(__self__, "dns_service_ip", dns_service_ip)
        if docker_bridge_cidr is not None:
            pulumi.set(__self__, "docker_bridge_cidr", docker_bridge_cidr)
        if load_balancer_sku is not None:
            pulumi.set(__self__, "load_balancer_sku", load_balancer_sku)
        if network_plugin is not None:
            pulumi.set(__self__, "network_plugin", network_plugin)
        if network_policy is not None:
            pulumi.set(__self__, "network_policy", network_policy)
        if pod_cidr is not None:
            pulumi.set(__self__, "pod_cidr", pod_cidr)
        if service_cidr is not None:
            pulumi.set(__self__, "service_cidr", service_cidr)

    @property
    @pulumi.getter(name="dnsServiceIP")
    def dns_service_ip(self) -> Optional[pulumi.Input[str]]:
        """
        An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
        """
        return pulumi.get(self, "dns_service_ip")

    @dns_service_ip.setter
    def dns_service_ip(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "dns_service_ip", value)

    @property
    @pulumi.getter(name="dockerBridgeCidr")
    def docker_bridge_cidr(self) -> Optional[pulumi.Input[str]]:
        """
        A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
        """
        return pulumi.get(self, "docker_bridge_cidr")

    @docker_bridge_cidr.setter
    def docker_bridge_cidr(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "docker_bridge_cidr", value)

    @property
    @pulumi.getter(name="loadBalancerSku")
    def load_balancer_sku(self) -> Optional[pulumi.Input[str]]:
        """
        The load balancer sku for the managed cluster.
        """
        return pulumi.get(self, "load_balancer_sku")

    @load_balancer_sku.setter
    def load_balancer_sku(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "load_balancer_sku", value)

    @property
    @pulumi.getter(name="networkPlugin")
    def network_plugin(self) -> Optional[pulumi.Input[str]]:
        """
        Network plugin used for building Kubernetes network.
        """
        return pulumi.get(self, "network_plugin")

    @network_plugin.setter
    def network_plugin(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "network_plugin", value)

    @property
    @pulumi.getter(name="networkPolicy")
    def network_policy(self) -> Optional[pulumi.Input[str]]:
        """
        Network policy used for building Kubernetes network.
        """
        return pulumi.get(self, "network_policy")

    @network_policy.setter
    def network_policy(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "network_policy", value)

    @property
    @pulumi.getter(name="podCidr")
    def pod_cidr(self) -> Optional[pulumi.Input[str]]:
        """
        A CIDR notation IP range from which to assign pod IPs when kubenet is used.
        """
        return pulumi.get(self, "pod_cidr")

    @pod_cidr.setter
    def pod_cidr(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "pod_cidr", value)

    @property
    @pulumi.getter(name="serviceCidr")
    def service_cidr(self) -> Optional[pulumi.Input[str]]:
        """
        A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
        """
        return pulumi.get(self, "service_cidr")

    @service_cidr.setter
    def service_cidr(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "service_cidr", value)


@pulumi.input_type
class ContainerServiceSshConfigurationArgs:
    def __init__(__self__, *,
                 public_keys: pulumi.Input[List[pulumi.Input['ContainerServiceSshPublicKeyArgs']]]):
        """
        SSH configuration for Linux-based VMs running on Azure.
        :param pulumi.Input[List[pulumi.Input['ContainerServiceSshPublicKeyArgs']]] public_keys: The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
        """
        pulumi.set(__self__, "public_keys", public_keys)

    @property
    @pulumi.getter(name="publicKeys")
    def public_keys(self) -> pulumi.Input[List[pulumi.Input['ContainerServiceSshPublicKeyArgs']]]:
        """
        The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
        """
        return pulumi.get(self, "public_keys")

    @public_keys.setter
    def public_keys(self, value: pulumi.Input[List[pulumi.Input['ContainerServiceSshPublicKeyArgs']]]):
        pulumi.set(self, "public_keys", value)


@pulumi.input_type
class ContainerServiceSshPublicKeyArgs:
    def __init__(__self__, *,
                 key_data: pulumi.Input[str]):
        """
        Contains information about SSH certificate public key data.
        :param pulumi.Input[str] key_data: Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
        """
        pulumi.set(__self__, "key_data", key_data)

    @property
    @pulumi.getter(name="keyData")
    def key_data(self) -> pulumi.Input[str]:
        """
        Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
        """
        return pulumi.get(self, "key_data")

    @key_data.setter
    def key_data(self, value: pulumi.Input[str]):
        pulumi.set(self, "key_data", value)


@pulumi.input_type
class ManagedClusterAADProfileArgs:
    def __init__(__self__, *,
                 client_app_id: pulumi.Input[str],
                 server_app_id: pulumi.Input[str],
                 server_app_secret: Optional[pulumi.Input[str]] = None,
                 tenant_id: Optional[pulumi.Input[str]] = None):
        """
        AADProfile specifies attributes for Azure Active Directory integration.
        :param pulumi.Input[str] client_app_id: The client AAD application ID.
        :param pulumi.Input[str] server_app_id: The server AAD application ID.
        :param pulumi.Input[str] server_app_secret: The server AAD application secret.
        :param pulumi.Input[str] tenant_id: The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
        """
        pulumi.set(__self__, "client_app_id", client_app_id)
        pulumi.set(__self__, "server_app_id", server_app_id)
        if server_app_secret is not None:
            pulumi.set(__self__, "server_app_secret", server_app_secret)
        if tenant_id is not None:
            pulumi.set(__self__, "tenant_id", tenant_id)

    @property
    @pulumi.getter(name="clientAppID")
    def client_app_id(self) -> pulumi.Input[str]:
        """
        The client AAD application ID.
        """
        return pulumi.get(self, "client_app_id")

    @client_app_id.setter
    def client_app_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "client_app_id", value)

    @property
    @pulumi.getter(name="serverAppID")
    def server_app_id(self) -> pulumi.Input[str]:
        """
        The server AAD application ID.
        """
        return pulumi.get(self, "server_app_id")

    @server_app_id.setter
    def server_app_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "server_app_id", value)

    @property
    @pulumi.getter(name="serverAppSecret")
    def server_app_secret(self) -> Optional[pulumi.Input[str]]:
        """
        The server AAD application secret.
        """
        return pulumi.get(self, "server_app_secret")

    @server_app_secret.setter
    def server_app_secret(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "server_app_secret", value)

    @property
    @pulumi.getter(name="tenantID")
    def tenant_id(self) -> Optional[pulumi.Input[str]]:
        """
        The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
        """
        return pulumi.get(self, "tenant_id")

    @tenant_id.setter
    def tenant_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "tenant_id", value)


@pulumi.input_type
class ManagedClusterAddonProfileArgs:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 config: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None):
        """
        A Kubernetes add-on profile for a managed cluster.
        :param pulumi.Input[bool] enabled: Whether the add-on is enabled or not.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] config: Key-value pairs for configuring an add-on.
        """
        pulumi.set(__self__, "enabled", enabled)
        if config is not None:
            pulumi.set(__self__, "config", config)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        Whether the add-on is enabled or not.
        """
        return pulumi.get(self, "enabled")

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        pulumi.set(self, "enabled", value)

    @property
    @pulumi.getter
    def config(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        Key-value pairs for configuring an add-on.
        """
        return pulumi.get(self, "config")

    @config.setter
    def config(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "config", value)


@pulumi.input_type
class ManagedClusterAgentPoolProfileArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 availability_zones: Optional[pulumi.Input[List[pulumi.Input[str]]]] = None,
                 count: Optional[pulumi.Input[float]] = None,
                 enable_auto_scaling: Optional[pulumi.Input[bool]] = None,
                 enable_node_public_ip: Optional[pulumi.Input[bool]] = None,
                 max_count: Optional[pulumi.Input[float]] = None,
                 max_pods: Optional[pulumi.Input[float]] = None,
                 min_count: Optional[pulumi.Input[float]] = None,
                 node_taints: Optional[pulumi.Input[List[pulumi.Input[str]]]] = None,
                 orchestrator_version: Optional[pulumi.Input[str]] = None,
                 os_disk_size_gb: Optional[pulumi.Input[float]] = None,
                 os_type: Optional[pulumi.Input[str]] = None,
                 scale_set_eviction_policy: Optional[pulumi.Input[str]] = None,
                 scale_set_priority: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[str]] = None,
                 vm_size: Optional[pulumi.Input[str]] = None,
                 vnet_subnet_id: Optional[pulumi.Input[str]] = None):
        """
        Profile for the container service agent pool.
        :param pulumi.Input[str] name: Unique name of the agent pool profile in the context of the subscription and resource group.
        :param pulumi.Input[List[pulumi.Input[str]]] availability_zones: (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        :param pulumi.Input[float] count: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
        :param pulumi.Input[bool] enable_auto_scaling: Whether to enable auto-scaler
        :param pulumi.Input[bool] enable_node_public_ip: Enable public IP for nodes
        :param pulumi.Input[float] max_count: Maximum number of nodes for auto-scaling
        :param pulumi.Input[float] max_pods: Maximum number of pods that can run on a node.
        :param pulumi.Input[float] min_count: Minimum number of nodes for auto-scaling
        :param pulumi.Input[List[pulumi.Input[str]]] node_taints: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        :param pulumi.Input[str] orchestrator_version: Version of orchestrator specified when creating the managed cluster.
        :param pulumi.Input[float] os_disk_size_gb: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        :param pulumi.Input[str] os_type: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        :param pulumi.Input[str] scale_set_eviction_policy: ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
        :param pulumi.Input[str] scale_set_priority: ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        :param pulumi.Input[str] type: AgentPoolType represents types of an agent pool
        :param pulumi.Input[str] vm_size: Size of agent VMs.
        :param pulumi.Input[str] vnet_subnet_id: VNet SubnetID specifies the VNet's subnet identifier.
        """
        pulumi.set(__self__, "name", name)
        if availability_zones is not None:
            pulumi.set(__self__, "availability_zones", availability_zones)
        if count is not None:
            pulumi.set(__self__, "count", count)
        if enable_auto_scaling is not None:
            pulumi.set(__self__, "enable_auto_scaling", enable_auto_scaling)
        if enable_node_public_ip is not None:
            pulumi.set(__self__, "enable_node_public_ip", enable_node_public_ip)
        if max_count is not None:
            pulumi.set(__self__, "max_count", max_count)
        if max_pods is not None:
            pulumi.set(__self__, "max_pods", max_pods)
        if min_count is not None:
            pulumi.set(__self__, "min_count", min_count)
        if node_taints is not None:
            pulumi.set(__self__, "node_taints", node_taints)
        if orchestrator_version is not None:
            pulumi.set(__self__, "orchestrator_version", orchestrator_version)
        if os_disk_size_gb is not None:
            pulumi.set(__self__, "os_disk_size_gb", os_disk_size_gb)
        if os_type is not None:
            pulumi.set(__self__, "os_type", os_type)
        if scale_set_eviction_policy is not None:
            pulumi.set(__self__, "scale_set_eviction_policy", scale_set_eviction_policy)
        if scale_set_priority is not None:
            pulumi.set(__self__, "scale_set_priority", scale_set_priority)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if vm_size is not None:
            pulumi.set(__self__, "vm_size", vm_size)
        if vnet_subnet_id is not None:
            pulumi.set(__self__, "vnet_subnet_id", vnet_subnet_id)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        Unique name of the agent pool profile in the context of the subscription and resource group.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="availabilityZones")
    def availability_zones(self) -> Optional[pulumi.Input[List[pulumi.Input[str]]]]:
        """
        (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        """
        return pulumi.get(self, "availability_zones")

    @availability_zones.setter
    def availability_zones(self, value: Optional[pulumi.Input[List[pulumi.Input[str]]]]):
        pulumi.set(self, "availability_zones", value)

    @property
    @pulumi.getter
    def count(self) -> Optional[pulumi.Input[float]]:
        """
        Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
        """
        return pulumi.get(self, "count")

    @count.setter
    def count(self, value: Optional[pulumi.Input[float]]):
        pulumi.set(self, "count", value)

    @property
    @pulumi.getter(name="enableAutoScaling")
    def enable_auto_scaling(self) -> Optional[pulumi.Input[bool]]:
        """
        Whether to enable auto-scaler
        """
        return pulumi.get(self, "enable_auto_scaling")

    @enable_auto_scaling.setter
    def enable_auto_scaling(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "enable_auto_scaling", value)

    @property
    @pulumi.getter(name="enableNodePublicIP")
    def enable_node_public_ip(self) -> Optional[pulumi.Input[bool]]:
        """
        Enable public IP for nodes
        """
        return pulumi.get(self, "enable_node_public_ip")

    @enable_node_public_ip.setter
    def enable_node_public_ip(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "enable_node_public_ip", value)

    @property
    @pulumi.getter(name="maxCount")
    def max_count(self) -> Optional[pulumi.Input[float]]:
        """
        Maximum number of nodes for auto-scaling
        """
        return pulumi.get(self, "max_count")

    @max_count.setter
    def max_count(self, value: Optional[pulumi.Input[float]]):
        pulumi.set(self, "max_count", value)

    @property
    @pulumi.getter(name="maxPods")
    def max_pods(self) -> Optional[pulumi.Input[float]]:
        """
        Maximum number of pods that can run on a node.
        """
        return pulumi.get(self, "max_pods")

    @max_pods.setter
    def max_pods(self, value: Optional[pulumi.Input[float]]):
        pulumi.set(self, "max_pods", value)

    @property
    @pulumi.getter(name="minCount")
    def min_count(self) -> Optional[pulumi.Input[float]]:
        """
        Minimum number of nodes for auto-scaling
        """
        return pulumi.get(self, "min_count")

    @min_count.setter
    def min_count(self, value: Optional[pulumi.Input[float]]):
        pulumi.set(self, "min_count", value)

    @property
    @pulumi.getter(name="nodeTaints")
    def node_taints(self) -> Optional[pulumi.Input[List[pulumi.Input[str]]]]:
        """
        Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        """
        return pulumi.get(self, "node_taints")

    @node_taints.setter
    def node_taints(self, value: Optional[pulumi.Input[List[pulumi.Input[str]]]]):
        pulumi.set(self, "node_taints", value)

    @property
    @pulumi.getter(name="orchestratorVersion")
    def orchestrator_version(self) -> Optional[pulumi.Input[str]]:
        """
        Version of orchestrator specified when creating the managed cluster.
        """
        return pulumi.get(self, "orchestrator_version")

    @orchestrator_version.setter
    def orchestrator_version(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "orchestrator_version", value)

    @property
    @pulumi.getter(name="osDiskSizeGB")
    def os_disk_size_gb(self) -> Optional[pulumi.Input[float]]:
        """
        OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        """
        return pulumi.get(self, "os_disk_size_gb")

    @os_disk_size_gb.setter
    def os_disk_size_gb(self, value: Optional[pulumi.Input[float]]):
        pulumi.set(self, "os_disk_size_gb", value)

    @property
    @pulumi.getter(name="osType")
    def os_type(self) -> Optional[pulumi.Input[str]]:
        """
        OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        """
        return pulumi.get(self, "os_type")

    @os_type.setter
    def os_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "os_type", value)

    @property
    @pulumi.getter(name="scaleSetEvictionPolicy")
    def scale_set_eviction_policy(self) -> Optional[pulumi.Input[str]]:
        """
        ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
        """
        return pulumi.get(self, "scale_set_eviction_policy")

    @scale_set_eviction_policy.setter
    def scale_set_eviction_policy(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scale_set_eviction_policy", value)

    @property
    @pulumi.getter(name="scaleSetPriority")
    def scale_set_priority(self) -> Optional[pulumi.Input[str]]:
        """
        ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        """
        return pulumi.get(self, "scale_set_priority")

    @scale_set_priority.setter
    def scale_set_priority(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scale_set_priority", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[str]]:
        """
        AgentPoolType represents types of an agent pool
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "type", value)

    @property
    @pulumi.getter(name="vmSize")
    def vm_size(self) -> Optional[pulumi.Input[str]]:
        """
        Size of agent VMs.
        """
        return pulumi.get(self, "vm_size")

    @vm_size.setter
    def vm_size(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "vm_size", value)

    @property
    @pulumi.getter(name="vnetSubnetID")
    def vnet_subnet_id(self) -> Optional[pulumi.Input[str]]:
        """
        VNet SubnetID specifies the VNet's subnet identifier.
        """
        return pulumi.get(self, "vnet_subnet_id")

    @vnet_subnet_id.setter
    def vnet_subnet_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "vnet_subnet_id", value)


@pulumi.input_type
class ManagedClusterIdentityArgs:
    def __init__(__self__, *,
                 type: Optional[pulumi.Input[str]] = None):
        """
        Identity for the managed cluster.
        :param pulumi.Input[str] type: The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
        """
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[str]]:
        """
        The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class ManagedClusterServicePrincipalProfileArgs:
    def __init__(__self__, *,
                 client_id: pulumi.Input[str],
                 secret: Optional[pulumi.Input[str]] = None):
        """
        Information about a service principal identity for the cluster to use for manipulating Azure APIs.
        :param pulumi.Input[str] client_id: The ID for the service principal.
        :param pulumi.Input[str] secret: The secret password associated with the service principal in plain text.
        """
        pulumi.set(__self__, "client_id", client_id)
        if secret is not None:
            pulumi.set(__self__, "secret", secret)

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Input[str]:
        """
        The ID for the service principal.
        """
        return pulumi.get(self, "client_id")

    @client_id.setter
    def client_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "client_id", value)

    @property
    @pulumi.getter
    def secret(self) -> Optional[pulumi.Input[str]]:
        """
        The secret password associated with the service principal in plain text.
        """
        return pulumi.get(self, "secret")

    @secret.setter
    def secret(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "secret", value)


@pulumi.input_type
class ManagedClusterWindowsProfileArgs:
    def __init__(__self__, *,
                 admin_username: pulumi.Input[str],
                 admin_password: Optional[pulumi.Input[str]] = None):
        """
        Profile for Windows VMs in the container service cluster.
        :param pulumi.Input[str] admin_username: The administrator username to use for Windows VMs.
        :param pulumi.Input[str] admin_password: The administrator password to use for Windows VMs.
        """
        pulumi.set(__self__, "admin_username", admin_username)
        if admin_password is not None:
            pulumi.set(__self__, "admin_password", admin_password)

    @property
    @pulumi.getter(name="adminUsername")
    def admin_username(self) -> pulumi.Input[str]:
        """
        The administrator username to use for Windows VMs.
        """
        return pulumi.get(self, "admin_username")

    @admin_username.setter
    def admin_username(self, value: pulumi.Input[str]):
        pulumi.set(self, "admin_username", value)

    @property
    @pulumi.getter(name="adminPassword")
    def admin_password(self) -> Optional[pulumi.Input[str]]:
        """
        The administrator password to use for Windows VMs.
        """
        return pulumi.get(self, "admin_password")

    @admin_password.setter
    def admin_password(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "admin_password", value)

