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
    'GetVirtualMachineResult',
    'AwaitableGetVirtualMachineResult',
    'get_virtual_machine',
]

@pulumi.output_type
class GetVirtualMachineResult:
    """
    Virtual machine model
    """
    def __init__(__self__, amount_of_ram=None, controllers=None, customization=None, disks=None, dnsname=None, expose_to_guest_vm=None, folder=None, guest_os=None, guest_os_type=None, location=None, name=None, nics=None, number_of_cores=None, password=None, private_cloud_id=None, provisioning_state=None, public_ip=None, resource_pool=None, status=None, tags=None, template_id=None, type=None, username=None, v_sphere_networks=None, vm_id=None, vmwaretools=None):
        if amount_of_ram and not isinstance(amount_of_ram, int):
            raise TypeError("Expected argument 'amount_of_ram' to be a int")
        pulumi.set(__self__, "amount_of_ram", amount_of_ram)
        if controllers and not isinstance(controllers, list):
            raise TypeError("Expected argument 'controllers' to be a list")
        pulumi.set(__self__, "controllers", controllers)
        if customization and not isinstance(customization, dict):
            raise TypeError("Expected argument 'customization' to be a dict")
        pulumi.set(__self__, "customization", customization)
        if disks and not isinstance(disks, list):
            raise TypeError("Expected argument 'disks' to be a list")
        pulumi.set(__self__, "disks", disks)
        if dnsname and not isinstance(dnsname, str):
            raise TypeError("Expected argument 'dnsname' to be a str")
        pulumi.set(__self__, "dnsname", dnsname)
        if expose_to_guest_vm and not isinstance(expose_to_guest_vm, bool):
            raise TypeError("Expected argument 'expose_to_guest_vm' to be a bool")
        pulumi.set(__self__, "expose_to_guest_vm", expose_to_guest_vm)
        if folder and not isinstance(folder, str):
            raise TypeError("Expected argument 'folder' to be a str")
        pulumi.set(__self__, "folder", folder)
        if guest_os and not isinstance(guest_os, str):
            raise TypeError("Expected argument 'guest_os' to be a str")
        pulumi.set(__self__, "guest_os", guest_os)
        if guest_os_type and not isinstance(guest_os_type, str):
            raise TypeError("Expected argument 'guest_os_type' to be a str")
        pulumi.set(__self__, "guest_os_type", guest_os_type)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if nics and not isinstance(nics, list):
            raise TypeError("Expected argument 'nics' to be a list")
        pulumi.set(__self__, "nics", nics)
        if number_of_cores and not isinstance(number_of_cores, int):
            raise TypeError("Expected argument 'number_of_cores' to be a int")
        pulumi.set(__self__, "number_of_cores", number_of_cores)
        if password and not isinstance(password, str):
            raise TypeError("Expected argument 'password' to be a str")
        pulumi.set(__self__, "password", password)
        if private_cloud_id and not isinstance(private_cloud_id, str):
            raise TypeError("Expected argument 'private_cloud_id' to be a str")
        pulumi.set(__self__, "private_cloud_id", private_cloud_id)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if public_ip and not isinstance(public_ip, str):
            raise TypeError("Expected argument 'public_ip' to be a str")
        pulumi.set(__self__, "public_ip", public_ip)
        if resource_pool and not isinstance(resource_pool, dict):
            raise TypeError("Expected argument 'resource_pool' to be a dict")
        pulumi.set(__self__, "resource_pool", resource_pool)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if template_id and not isinstance(template_id, str):
            raise TypeError("Expected argument 'template_id' to be a str")
        pulumi.set(__self__, "template_id", template_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if username and not isinstance(username, str):
            raise TypeError("Expected argument 'username' to be a str")
        pulumi.set(__self__, "username", username)
        if v_sphere_networks and not isinstance(v_sphere_networks, list):
            raise TypeError("Expected argument 'v_sphere_networks' to be a list")
        pulumi.set(__self__, "v_sphere_networks", v_sphere_networks)
        if vm_id and not isinstance(vm_id, str):
            raise TypeError("Expected argument 'vm_id' to be a str")
        pulumi.set(__self__, "vm_id", vm_id)
        if vmwaretools and not isinstance(vmwaretools, str):
            raise TypeError("Expected argument 'vmwaretools' to be a str")
        pulumi.set(__self__, "vmwaretools", vmwaretools)

    @property
    @pulumi.getter(name="amountOfRam")
    def amount_of_ram(self) -> int:
        """
        The amount of memory
        """
        return pulumi.get(self, "amount_of_ram")

    @property
    @pulumi.getter
    def controllers(self) -> Sequence['outputs.VirtualDiskControllerResponse']:
        """
        The list of Virtual Disks' Controllers
        """
        return pulumi.get(self, "controllers")

    @property
    @pulumi.getter
    def customization(self) -> Optional['outputs.GuestOSCustomizationResponse']:
        """
        Virtual machine properties
        """
        return pulumi.get(self, "customization")

    @property
    @pulumi.getter
    def disks(self) -> Optional[Sequence['outputs.VirtualDiskResponse']]:
        """
        The list of Virtual Disks
        """
        return pulumi.get(self, "disks")

    @property
    @pulumi.getter
    def dnsname(self) -> str:
        """
        The DNS name of Virtual Machine in VCenter
        """
        return pulumi.get(self, "dnsname")

    @property
    @pulumi.getter(name="exposeToGuestVM")
    def expose_to_guest_vm(self) -> Optional[bool]:
        """
        Expose Guest OS or not
        """
        return pulumi.get(self, "expose_to_guest_vm")

    @property
    @pulumi.getter
    def folder(self) -> str:
        """
        The path to virtual machine folder in VCenter
        """
        return pulumi.get(self, "folder")

    @property
    @pulumi.getter(name="guestOS")
    def guest_os(self) -> str:
        """
        The name of Guest OS
        """
        return pulumi.get(self, "guest_os")

    @property
    @pulumi.getter(name="guestOSType")
    def guest_os_type(self) -> str:
        """
        The Guest OS type
        """
        return pulumi.get(self, "guest_os_type")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Azure region
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        {virtualMachineName}
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def nics(self) -> Optional[Sequence['outputs.VirtualNicResponse']]:
        """
        The list of Virtual NICs
        """
        return pulumi.get(self, "nics")

    @property
    @pulumi.getter(name="numberOfCores")
    def number_of_cores(self) -> int:
        """
        The number of CPU cores
        """
        return pulumi.get(self, "number_of_cores")

    @property
    @pulumi.getter
    def password(self) -> Optional[str]:
        """
        Password for login. Deprecated - use customization property
        """
        return pulumi.get(self, "password")

    @property
    @pulumi.getter(name="privateCloudId")
    def private_cloud_id(self) -> str:
        """
        Private Cloud Id
        """
        return pulumi.get(self, "private_cloud_id")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning status of the resource
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicIP")
    def public_ip(self) -> str:
        """
        The public ip of Virtual Machine
        """
        return pulumi.get(self, "public_ip")

    @property
    @pulumi.getter(name="resourcePool")
    def resource_pool(self) -> Optional['outputs.ResourcePoolResponse']:
        """
        Virtual Machines Resource Pool
        """
        return pulumi.get(self, "resource_pool")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        The status of Virtual machine
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        The list of tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="templateId")
    def template_id(self) -> Optional[str]:
        """
        Virtual Machine Template Id
        """
        return pulumi.get(self, "template_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        {resourceProviderNamespace}/{resourceType}
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def username(self) -> Optional[str]:
        """
        Username for login. Deprecated - use customization property
        """
        return pulumi.get(self, "username")

    @property
    @pulumi.getter(name="vSphereNetworks")
    def v_sphere_networks(self) -> Optional[Sequence[str]]:
        """
        The list of Virtual VSphere Networks
        """
        return pulumi.get(self, "v_sphere_networks")

    @property
    @pulumi.getter(name="vmId")
    def vm_id(self) -> str:
        """
        The internal id of Virtual Machine in VCenter
        """
        return pulumi.get(self, "vm_id")

    @property
    @pulumi.getter
    def vmwaretools(self) -> str:
        """
        VMware tools version
        """
        return pulumi.get(self, "vmwaretools")


class AwaitableGetVirtualMachineResult(GetVirtualMachineResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualMachineResult(
            amount_of_ram=self.amount_of_ram,
            controllers=self.controllers,
            customization=self.customization,
            disks=self.disks,
            dnsname=self.dnsname,
            expose_to_guest_vm=self.expose_to_guest_vm,
            folder=self.folder,
            guest_os=self.guest_os,
            guest_os_type=self.guest_os_type,
            location=self.location,
            name=self.name,
            nics=self.nics,
            number_of_cores=self.number_of_cores,
            password=self.password,
            private_cloud_id=self.private_cloud_id,
            provisioning_state=self.provisioning_state,
            public_ip=self.public_ip,
            resource_pool=self.resource_pool,
            status=self.status,
            tags=self.tags,
            template_id=self.template_id,
            type=self.type,
            username=self.username,
            v_sphere_networks=self.v_sphere_networks,
            vm_id=self.vm_id,
            vmwaretools=self.vmwaretools)


def get_virtual_machine(resource_group_name: Optional[str] = None,
                        virtual_machine_name: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualMachineResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group
    :param str virtual_machine_name: virtual machine name
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['virtualMachineName'] = virtual_machine_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:vmwarecloudsimple/v20190401:getVirtualMachine', __args__, opts=opts, typ=GetVirtualMachineResult).value

    return AwaitableGetVirtualMachineResult(
        amount_of_ram=__ret__.amount_of_ram,
        controllers=__ret__.controllers,
        customization=__ret__.customization,
        disks=__ret__.disks,
        dnsname=__ret__.dnsname,
        expose_to_guest_vm=__ret__.expose_to_guest_vm,
        folder=__ret__.folder,
        guest_os=__ret__.guest_os,
        guest_os_type=__ret__.guest_os_type,
        location=__ret__.location,
        name=__ret__.name,
        nics=__ret__.nics,
        number_of_cores=__ret__.number_of_cores,
        password=__ret__.password,
        private_cloud_id=__ret__.private_cloud_id,
        provisioning_state=__ret__.provisioning_state,
        public_ip=__ret__.public_ip,
        resource_pool=__ret__.resource_pool,
        status=__ret__.status,
        tags=__ret__.tags,
        template_id=__ret__.template_id,
        type=__ret__.type,
        username=__ret__.username,
        v_sphere_networks=__ret__.v_sphere_networks,
        vm_id=__ret__.vm_id,
        vmwaretools=__ret__.vmwaretools)