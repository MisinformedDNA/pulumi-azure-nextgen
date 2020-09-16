# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from ... import _utilities, _tables

__all__ = [
    'ProtectionContainerResponse',
]

@pulumi.output_type
class ProtectionContainerResponse(dict):
    """
    Base class for container with backup items. Containers with specific workloads are derived from this class.
    """
    def __init__(__self__, *,
                 backup_management_type: Optional[str] = None,
                 container_type: Optional[str] = None,
                 friendly_name: Optional[str] = None,
                 health_status: Optional[str] = None,
                 registration_status: Optional[str] = None):
        """
        Base class for container with backup items. Containers with specific workloads are derived from this class.
        :param str backup_management_type: Type of backup management for the container.
        :param str container_type: Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
               Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
               Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
               Backup is VMAppContainer
        :param str friendly_name: Friendly name of the container.
        :param str health_status: Status of health of the container.
        :param str registration_status: Status of registration of the container with the Recovery Services Vault.
        """
        if backup_management_type is not None:
            pulumi.set(__self__, "backup_management_type", backup_management_type)
        if container_type is not None:
            pulumi.set(__self__, "container_type", container_type)
        if friendly_name is not None:
            pulumi.set(__self__, "friendly_name", friendly_name)
        if health_status is not None:
            pulumi.set(__self__, "health_status", health_status)
        if registration_status is not None:
            pulumi.set(__self__, "registration_status", registration_status)

    @property
    @pulumi.getter(name="backupManagementType")
    def backup_management_type(self) -> Optional[str]:
        """
        Type of backup management for the container.
        """
        return pulumi.get(self, "backup_management_type")

    @property
    @pulumi.getter(name="containerType")
    def container_type(self) -> Optional[str]:
        """
        Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
        Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
        Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
        Backup is VMAppContainer
        """
        return pulumi.get(self, "container_type")

    @property
    @pulumi.getter(name="friendlyName")
    def friendly_name(self) -> Optional[str]:
        """
        Friendly name of the container.
        """
        return pulumi.get(self, "friendly_name")

    @property
    @pulumi.getter(name="healthStatus")
    def health_status(self) -> Optional[str]:
        """
        Status of health of the container.
        """
        return pulumi.get(self, "health_status")

    @property
    @pulumi.getter(name="registrationStatus")
    def registration_status(self) -> Optional[str]:
        """
        Status of registration of the container with the Recovery Services Vault.
        """
        return pulumi.get(self, "registration_status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

