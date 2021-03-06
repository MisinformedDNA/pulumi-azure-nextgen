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
    'ImageReferenceResponse',
    'NetworkInterfaceIPConfigurationResponse',
    'NetworkInterfaceResponse',
    'OsProfileResponse',
    'SubResourceResponse',
    'VirtualNetworkFunctionRoleConfigurationResponse',
    'VirtualNetworkFunctionTemplateResponse',
    'VirtualNetworkFunctionUserConfigurationResponse',
]

@pulumi.output_type
class ImageReferenceResponse(dict):
    """
    The image reference properties.
    """
    def __init__(__self__, *,
                 os_type: Optional[str] = None,
                 sas_uri: Optional[str] = None,
                 vhd_name: Optional[str] = None,
                 vhd_type: Optional[str] = None):
        """
        The image reference properties.
        :param str os_type: The OS type.
        :param str sas_uri: The VHD SAS URI.
        :param str vhd_name: The VHD name.
        :param str vhd_type: The VHD type.
        """
        if os_type is not None:
            pulumi.set(__self__, "os_type", os_type)
        if sas_uri is not None:
            pulumi.set(__self__, "sas_uri", sas_uri)
        if vhd_name is not None:
            pulumi.set(__self__, "vhd_name", vhd_name)
        if vhd_type is not None:
            pulumi.set(__self__, "vhd_type", vhd_type)

    @property
    @pulumi.getter(name="osType")
    def os_type(self) -> Optional[str]:
        """
        The OS type.
        """
        return pulumi.get(self, "os_type")

    @property
    @pulumi.getter(name="sasUri")
    def sas_uri(self) -> Optional[str]:
        """
        The VHD SAS URI.
        """
        return pulumi.get(self, "sas_uri")

    @property
    @pulumi.getter(name="vhdName")
    def vhd_name(self) -> Optional[str]:
        """
        The VHD name.
        """
        return pulumi.get(self, "vhd_name")

    @property
    @pulumi.getter(name="vhdType")
    def vhd_type(self) -> Optional[str]:
        """
        The VHD type.
        """
        return pulumi.get(self, "vhd_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NetworkInterfaceIPConfigurationResponse(dict):
    """
    Network interface IP configuration properties.
    """
    def __init__(__self__, *,
                 dns_servers: Optional[Sequence[str]] = None,
                 gateway: Optional[str] = None,
                 ip_address: Optional[str] = None,
                 ip_allocation_method: Optional[str] = None,
                 ip_version: Optional[str] = None,
                 subnet: Optional[str] = None):
        """
        Network interface IP configuration properties.
        :param Sequence[str] dns_servers: The list of DNS servers IP addresses.
        :param str gateway: The value of the gateway.
        :param str ip_address: The value of the IP address.
        :param str ip_allocation_method: IP address allocation method.
        :param str ip_version: IP address version.
        :param str subnet: The value of the subnet.
        """
        if dns_servers is not None:
            pulumi.set(__self__, "dns_servers", dns_servers)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)
        if ip_address is not None:
            pulumi.set(__self__, "ip_address", ip_address)
        if ip_allocation_method is not None:
            pulumi.set(__self__, "ip_allocation_method", ip_allocation_method)
        if ip_version is not None:
            pulumi.set(__self__, "ip_version", ip_version)
        if subnet is not None:
            pulumi.set(__self__, "subnet", subnet)

    @property
    @pulumi.getter(name="dnsServers")
    def dns_servers(self) -> Optional[Sequence[str]]:
        """
        The list of DNS servers IP addresses.
        """
        return pulumi.get(self, "dns_servers")

    @property
    @pulumi.getter
    def gateway(self) -> Optional[str]:
        """
        The value of the gateway.
        """
        return pulumi.get(self, "gateway")

    @property
    @pulumi.getter(name="ipAddress")
    def ip_address(self) -> Optional[str]:
        """
        The value of the IP address.
        """
        return pulumi.get(self, "ip_address")

    @property
    @pulumi.getter(name="ipAllocationMethod")
    def ip_allocation_method(self) -> Optional[str]:
        """
        IP address allocation method.
        """
        return pulumi.get(self, "ip_allocation_method")

    @property
    @pulumi.getter(name="ipVersion")
    def ip_version(self) -> Optional[str]:
        """
        IP address version.
        """
        return pulumi.get(self, "ip_version")

    @property
    @pulumi.getter
    def subnet(self) -> Optional[str]:
        """
        The value of the subnet.
        """
        return pulumi.get(self, "subnet")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NetworkInterfaceResponse(dict):
    """
    Network interface properties.
    """
    def __init__(__self__, *,
                 ip_configurations: Optional[Sequence['outputs.NetworkInterfaceIPConfigurationResponse']] = None,
                 mac_address: Optional[str] = None,
                 network_interface_name: Optional[str] = None,
                 vm_switch_type: Optional[str] = None):
        """
        Network interface properties.
        :param Sequence['NetworkInterfaceIPConfigurationResponseArgs'] ip_configurations: A list of IP configurations of the network interface.
        :param str mac_address: The MAC address of the network interface.
        :param str network_interface_name: The name of the network interface.
        :param str vm_switch_type: The type of VM switch
        """
        if ip_configurations is not None:
            pulumi.set(__self__, "ip_configurations", ip_configurations)
        if mac_address is not None:
            pulumi.set(__self__, "mac_address", mac_address)
        if network_interface_name is not None:
            pulumi.set(__self__, "network_interface_name", network_interface_name)
        if vm_switch_type is not None:
            pulumi.set(__self__, "vm_switch_type", vm_switch_type)

    @property
    @pulumi.getter(name="ipConfigurations")
    def ip_configurations(self) -> Optional[Sequence['outputs.NetworkInterfaceIPConfigurationResponse']]:
        """
        A list of IP configurations of the network interface.
        """
        return pulumi.get(self, "ip_configurations")

    @property
    @pulumi.getter(name="macAddress")
    def mac_address(self) -> Optional[str]:
        """
        The MAC address of the network interface.
        """
        return pulumi.get(self, "mac_address")

    @property
    @pulumi.getter(name="networkInterfaceName")
    def network_interface_name(self) -> Optional[str]:
        """
        The name of the network interface.
        """
        return pulumi.get(self, "network_interface_name")

    @property
    @pulumi.getter(name="vmSwitchType")
    def vm_switch_type(self) -> Optional[str]:
        """
        The type of VM switch
        """
        return pulumi.get(self, "vm_switch_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OsProfileResponse(dict):
    """
    Specifies the operating system settings for the role instance.
    """
    def __init__(__self__, *,
                 admin_password: Optional[str] = None,
                 admin_username: Optional[str] = None,
                 ssh_public_key: Optional[str] = None):
        """
        Specifies the operating system settings for the role instance.
        :param str admin_password: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password).
        :param str admin_username: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
        :param str ssh_public_key: Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
        """
        if admin_password is not None:
            pulumi.set(__self__, "admin_password", admin_password)
        if admin_username is not None:
            pulumi.set(__self__, "admin_username", admin_username)
        if ssh_public_key is not None:
            pulumi.set(__self__, "ssh_public_key", ssh_public_key)

    @property
    @pulumi.getter(name="adminPassword")
    def admin_password(self) -> Optional[str]:
        """
        Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password).
        """
        return pulumi.get(self, "admin_password")

    @property
    @pulumi.getter(name="adminUsername")
    def admin_username(self) -> Optional[str]:
        """
        Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
        """
        return pulumi.get(self, "admin_username")

    @property
    @pulumi.getter(name="sshPublicKey")
    def ssh_public_key(self) -> Optional[str]:
        """
        Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
        """
        return pulumi.get(self, "ssh_public_key")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SubResourceResponse(dict):
    """
    Reference to another sub resource.
    """
    def __init__(__self__, *,
                 id: Optional[str] = None):
        """
        Reference to another sub resource.
        :param str id: Resource ID.
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VirtualNetworkFunctionRoleConfigurationResponse(dict):
    """
    Virtual network function role configuration.
    """
    def __init__(__self__, *,
                 image_reference: Optional['outputs.ImageReferenceResponse'] = None,
                 network_interfaces: Optional[Sequence['outputs.NetworkInterfaceResponse']] = None,
                 os_profile: Optional['outputs.OsProfileResponse'] = None,
                 role_name: Optional[str] = None,
                 role_type: Optional[str] = None,
                 user_data_parameters: Optional[Mapping[str, Any]] = None,
                 user_data_template: Optional[Mapping[str, Any]] = None,
                 virtual_machine_size: Optional[str] = None):
        """
        Virtual network function role configuration.
        :param 'ImageReferenceResponseArgs' image_reference: The definition of image reference.
        :param Sequence['NetworkInterfaceResponseArgs'] network_interfaces: The network interface configurations.
        :param 'OsProfileResponseArgs' os_profile: Specifies the operating system settings for the role instance. This value can be updated during the deployment of virtual network function.
        :param str role_name: The name of the virtual network function role.
        :param str role_type: Role type.
        :param Mapping[str, Any] user_data_parameters: The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
        :param Mapping[str, Any] user_data_template: The user data template for customers. This is json scheme template describing the format and data type of user data parameters.
        :param str virtual_machine_size: The size of the virtual machine.
        """
        if image_reference is not None:
            pulumi.set(__self__, "image_reference", image_reference)
        if network_interfaces is not None:
            pulumi.set(__self__, "network_interfaces", network_interfaces)
        if os_profile is not None:
            pulumi.set(__self__, "os_profile", os_profile)
        if role_name is not None:
            pulumi.set(__self__, "role_name", role_name)
        if role_type is not None:
            pulumi.set(__self__, "role_type", role_type)
        if user_data_parameters is not None:
            pulumi.set(__self__, "user_data_parameters", user_data_parameters)
        if user_data_template is not None:
            pulumi.set(__self__, "user_data_template", user_data_template)
        if virtual_machine_size is not None:
            pulumi.set(__self__, "virtual_machine_size", virtual_machine_size)

    @property
    @pulumi.getter(name="imageReference")
    def image_reference(self) -> Optional['outputs.ImageReferenceResponse']:
        """
        The definition of image reference.
        """
        return pulumi.get(self, "image_reference")

    @property
    @pulumi.getter(name="networkInterfaces")
    def network_interfaces(self) -> Optional[Sequence['outputs.NetworkInterfaceResponse']]:
        """
        The network interface configurations.
        """
        return pulumi.get(self, "network_interfaces")

    @property
    @pulumi.getter(name="osProfile")
    def os_profile(self) -> Optional['outputs.OsProfileResponse']:
        """
        Specifies the operating system settings for the role instance. This value can be updated during the deployment of virtual network function.
        """
        return pulumi.get(self, "os_profile")

    @property
    @pulumi.getter(name="roleName")
    def role_name(self) -> Optional[str]:
        """
        The name of the virtual network function role.
        """
        return pulumi.get(self, "role_name")

    @property
    @pulumi.getter(name="roleType")
    def role_type(self) -> Optional[str]:
        """
        Role type.
        """
        return pulumi.get(self, "role_type")

    @property
    @pulumi.getter(name="userDataParameters")
    def user_data_parameters(self) -> Optional[Mapping[str, Any]]:
        """
        The user parameters for customers. The format of user data parameters has to be matched with the provided user data template.
        """
        return pulumi.get(self, "user_data_parameters")

    @property
    @pulumi.getter(name="userDataTemplate")
    def user_data_template(self) -> Optional[Mapping[str, Any]]:
        """
        The user data template for customers. This is json scheme template describing the format and data type of user data parameters.
        """
        return pulumi.get(self, "user_data_template")

    @property
    @pulumi.getter(name="virtualMachineSize")
    def virtual_machine_size(self) -> Optional[str]:
        """
        The size of the virtual machine.
        """
        return pulumi.get(self, "virtual_machine_size")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VirtualNetworkFunctionTemplateResponse(dict):
    """
    The virtual network function template.
    """
    def __init__(__self__, *,
                 virutal_network_function_role_configurations: Optional[Sequence['outputs.VirtualNetworkFunctionRoleConfigurationResponse']] = None):
        """
        The virtual network function template.
        :param Sequence['VirtualNetworkFunctionRoleConfigurationResponseArgs'] virutal_network_function_role_configurations: An array of virtual network function role definitions.
        """
        if virutal_network_function_role_configurations is not None:
            pulumi.set(__self__, "virutal_network_function_role_configurations", virutal_network_function_role_configurations)

    @property
    @pulumi.getter(name="virutalNetworkFunctionRoleConfigurations")
    def virutal_network_function_role_configurations(self) -> Optional[Sequence['outputs.VirtualNetworkFunctionRoleConfigurationResponse']]:
        """
        An array of virtual network function role definitions.
        """
        return pulumi.get(self, "virutal_network_function_role_configurations")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VirtualNetworkFunctionUserConfigurationResponse(dict):
    """
    The virtual network function user configuration.
    """
    def __init__(__self__, *,
                 network_interfaces: Optional[Sequence['outputs.NetworkInterfaceResponse']] = None,
                 role_name: Optional[str] = None,
                 user_data_parameters: Optional[Mapping[str, Any]] = None):
        """
        The virtual network function user configuration.
        :param Sequence['NetworkInterfaceResponseArgs'] network_interfaces: The network interface configuration.
        :param str role_name: The name of the virtual network function role.
        :param Mapping[str, Any] user_data_parameters: The user data parameters from the customer.
        """
        if network_interfaces is not None:
            pulumi.set(__self__, "network_interfaces", network_interfaces)
        if role_name is not None:
            pulumi.set(__self__, "role_name", role_name)
        if user_data_parameters is not None:
            pulumi.set(__self__, "user_data_parameters", user_data_parameters)

    @property
    @pulumi.getter(name="networkInterfaces")
    def network_interfaces(self) -> Optional[Sequence['outputs.NetworkInterfaceResponse']]:
        """
        The network interface configuration.
        """
        return pulumi.get(self, "network_interfaces")

    @property
    @pulumi.getter(name="roleName")
    def role_name(self) -> Optional[str]:
        """
        The name of the virtual network function role.
        """
        return pulumi.get(self, "role_name")

    @property
    @pulumi.getter(name="userDataParameters")
    def user_data_parameters(self) -> Optional[Mapping[str, Any]]:
        """
        The user data parameters from the customer.
        """
        return pulumi.get(self, "user_data_parameters")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


