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
    'CacheEncryptionSettingsResponse',
    'CacheHealthResponse',
    'CacheIdentityResponse',
    'CacheNetworkSettingsResponse',
    'CacheResponseSku',
    'CacheSecuritySettingsResponse',
    'CacheUpgradeStatusResponse',
    'ClfsTargetResponse',
    'KeyVaultKeyReferenceResponse',
    'KeyVaultKeyReferenceResponseSourceVault',
    'NamespaceJunctionResponse',
    'Nfs3TargetResponse',
    'UnknownTargetResponse',
]

@pulumi.output_type
class CacheEncryptionSettingsResponse(dict):
    """
    Cache encryption settings.
    """
    def __init__(__self__, *,
                 key_encryption_key: Optional['outputs.KeyVaultKeyReferenceResponse'] = None):
        """
        Cache encryption settings.
        :param 'KeyVaultKeyReferenceResponseArgs' key_encryption_key: Specifies the location of the key encryption key in Key Vault.
        """
        if key_encryption_key is not None:
            pulumi.set(__self__, "key_encryption_key", key_encryption_key)

    @property
    @pulumi.getter(name="keyEncryptionKey")
    def key_encryption_key(self) -> Optional['outputs.KeyVaultKeyReferenceResponse']:
        """
        Specifies the location of the key encryption key in Key Vault.
        """
        return pulumi.get(self, "key_encryption_key")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheHealthResponse(dict):
    """
    An indication of Cache health. Gives more information about health than just that related to provisioning.
    """
    def __init__(__self__, *,
                 state: Optional[str] = None,
                 status_description: Optional[str] = None):
        """
        An indication of Cache health. Gives more information about health than just that related to provisioning.
        :param str state: List of Cache health states.
        :param str status_description: Describes explanation of state.
        """
        if state is not None:
            pulumi.set(__self__, "state", state)
        if status_description is not None:
            pulumi.set(__self__, "status_description", status_description)

    @property
    @pulumi.getter
    def state(self) -> Optional[str]:
        """
        List of Cache health states.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="statusDescription")
    def status_description(self) -> Optional[str]:
        """
        Describes explanation of state.
        """
        return pulumi.get(self, "status_description")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheIdentityResponse(dict):
    """
    Cache identity properties.
    """
    def __init__(__self__, *,
                 principal_id: str,
                 tenant_id: str,
                 type: Optional[str] = None):
        """
        Cache identity properties.
        :param str principal_id: The principal id of the cache.
        :param str tenant_id: The tenant id associated with the cache.
        :param str type: The type of identity used for the cache
        """
        pulumi.set(__self__, "principal_id", principal_id)
        pulumi.set(__self__, "tenant_id", tenant_id)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> str:
        """
        The principal id of the cache.
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> str:
        """
        The tenant id associated with the cache.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of identity used for the cache
        """
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheNetworkSettingsResponse(dict):
    """
    Cache network settings.
    """
    def __init__(__self__, *,
                 utility_addresses: Sequence[str],
                 mtu: Optional[int] = None):
        """
        Cache network settings.
        :param Sequence[str] utility_addresses: Array of additional IP addresses used by this Cache.
        :param int mtu: The IPv4 maximum transmission unit configured for the subnet.
        """
        pulumi.set(__self__, "utility_addresses", utility_addresses)
        if mtu is not None:
            pulumi.set(__self__, "mtu", mtu)

    @property
    @pulumi.getter(name="utilityAddresses")
    def utility_addresses(self) -> Sequence[str]:
        """
        Array of additional IP addresses used by this Cache.
        """
        return pulumi.get(self, "utility_addresses")

    @property
    @pulumi.getter
    def mtu(self) -> Optional[int]:
        """
        The IPv4 maximum transmission unit configured for the subnet.
        """
        return pulumi.get(self, "mtu")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheResponseSku(dict):
    """
    SKU for the Cache.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None):
        """
        SKU for the Cache.
        :param str name: SKU name for this Cache.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        SKU name for this Cache.
        """
        return pulumi.get(self, "name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheSecuritySettingsResponse(dict):
    """
    Cache security settings.
    """
    def __init__(__self__, *,
                 root_squash: Optional[bool] = None):
        """
        Cache security settings.
        :param bool root_squash: root squash of cache property.
        """
        if root_squash is not None:
            pulumi.set(__self__, "root_squash", root_squash)

    @property
    @pulumi.getter(name="rootSquash")
    def root_squash(self) -> Optional[bool]:
        """
        root squash of cache property.
        """
        return pulumi.get(self, "root_squash")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CacheUpgradeStatusResponse(dict):
    """
    Properties describing the software upgrade state of the Cache.
    """
    def __init__(__self__, *,
                 current_firmware_version: str,
                 firmware_update_deadline: str,
                 firmware_update_status: str,
                 last_firmware_update: str,
                 pending_firmware_version: str):
        """
        Properties describing the software upgrade state of the Cache.
        :param str current_firmware_version: Version string of the firmware currently installed on this Cache.
        :param str firmware_update_deadline: Time at which the pending firmware update will automatically be installed on the Cache.
        :param str firmware_update_status: True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
        :param str last_firmware_update: Time of the last successful firmware update.
        :param str pending_firmware_version: When firmwareUpdateAvailable is true, this field holds the version string for the update.
        """
        pulumi.set(__self__, "current_firmware_version", current_firmware_version)
        pulumi.set(__self__, "firmware_update_deadline", firmware_update_deadline)
        pulumi.set(__self__, "firmware_update_status", firmware_update_status)
        pulumi.set(__self__, "last_firmware_update", last_firmware_update)
        pulumi.set(__self__, "pending_firmware_version", pending_firmware_version)

    @property
    @pulumi.getter(name="currentFirmwareVersion")
    def current_firmware_version(self) -> str:
        """
        Version string of the firmware currently installed on this Cache.
        """
        return pulumi.get(self, "current_firmware_version")

    @property
    @pulumi.getter(name="firmwareUpdateDeadline")
    def firmware_update_deadline(self) -> str:
        """
        Time at which the pending firmware update will automatically be installed on the Cache.
        """
        return pulumi.get(self, "firmware_update_deadline")

    @property
    @pulumi.getter(name="firmwareUpdateStatus")
    def firmware_update_status(self) -> str:
        """
        True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
        """
        return pulumi.get(self, "firmware_update_status")

    @property
    @pulumi.getter(name="lastFirmwareUpdate")
    def last_firmware_update(self) -> str:
        """
        Time of the last successful firmware update.
        """
        return pulumi.get(self, "last_firmware_update")

    @property
    @pulumi.getter(name="pendingFirmwareVersion")
    def pending_firmware_version(self) -> str:
        """
        When firmwareUpdateAvailable is true, this field holds the version string for the update.
        """
        return pulumi.get(self, "pending_firmware_version")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ClfsTargetResponse(dict):
    """
    Properties pertained to ClfsTarget
    """
    def __init__(__self__, *,
                 target: Optional[str] = None):
        """
        Properties pertained to ClfsTarget
        :param str target: Resource ID of storage container.
        """
        if target is not None:
            pulumi.set(__self__, "target", target)

    @property
    @pulumi.getter
    def target(self) -> Optional[str]:
        """
        Resource ID of storage container.
        """
        return pulumi.get(self, "target")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class KeyVaultKeyReferenceResponse(dict):
    """
    Describes a reference to Key Vault Key.
    """
    def __init__(__self__, *,
                 key_url: str,
                 source_vault: 'outputs.KeyVaultKeyReferenceResponseSourceVault'):
        """
        Describes a reference to Key Vault Key.
        :param str key_url: The URL referencing a key encryption key in Key Vault.
        :param 'KeyVaultKeyReferenceResponseSourceVaultArgs' source_vault: Describes a resource Id to source Key Vault.
        """
        pulumi.set(__self__, "key_url", key_url)
        pulumi.set(__self__, "source_vault", source_vault)

    @property
    @pulumi.getter(name="keyUrl")
    def key_url(self) -> str:
        """
        The URL referencing a key encryption key in Key Vault.
        """
        return pulumi.get(self, "key_url")

    @property
    @pulumi.getter(name="sourceVault")
    def source_vault(self) -> 'outputs.KeyVaultKeyReferenceResponseSourceVault':
        """
        Describes a resource Id to source Key Vault.
        """
        return pulumi.get(self, "source_vault")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class KeyVaultKeyReferenceResponseSourceVault(dict):
    """
    Describes a resource Id to source Key Vault.
    """
    def __init__(__self__, *,
                 id: Optional[str] = None):
        """
        Describes a resource Id to source Key Vault.
        :param str id: Resource Id.
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NamespaceJunctionResponse(dict):
    """
    A namespace junction.
    """
    def __init__(__self__, *,
                 namespace_path: Optional[str] = None,
                 nfs_export: Optional[str] = None,
                 target_path: Optional[str] = None):
        """
        A namespace junction.
        :param str namespace_path: Namespace path on a Cache for a Storage Target.
        :param str nfs_export: NFS export where targetPath exists.
        :param str target_path: Path in Storage Target to which namespacePath points.
        """
        if namespace_path is not None:
            pulumi.set(__self__, "namespace_path", namespace_path)
        if nfs_export is not None:
            pulumi.set(__self__, "nfs_export", nfs_export)
        if target_path is not None:
            pulumi.set(__self__, "target_path", target_path)

    @property
    @pulumi.getter(name="namespacePath")
    def namespace_path(self) -> Optional[str]:
        """
        Namespace path on a Cache for a Storage Target.
        """
        return pulumi.get(self, "namespace_path")

    @property
    @pulumi.getter(name="nfsExport")
    def nfs_export(self) -> Optional[str]:
        """
        NFS export where targetPath exists.
        """
        return pulumi.get(self, "nfs_export")

    @property
    @pulumi.getter(name="targetPath")
    def target_path(self) -> Optional[str]:
        """
        Path in Storage Target to which namespacePath points.
        """
        return pulumi.get(self, "target_path")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class Nfs3TargetResponse(dict):
    """
    Properties pertained to Nfs3Target
    """
    def __init__(__self__, *,
                 target: Optional[str] = None,
                 usage_model: Optional[str] = None):
        """
        Properties pertained to Nfs3Target
        :param str target: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
        :param str usage_model: Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels
        """
        if target is not None:
            pulumi.set(__self__, "target", target)
        if usage_model is not None:
            pulumi.set(__self__, "usage_model", usage_model)

    @property
    @pulumi.getter
    def target(self) -> Optional[str]:
        """
        IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
        """
        return pulumi.get(self, "target")

    @property
    @pulumi.getter(name="usageModel")
    def usage_model(self) -> Optional[str]:
        """
        Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels
        """
        return pulumi.get(self, "usage_model")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class UnknownTargetResponse(dict):
    """
    Properties pertained to UnknownTarget
    """
    def __init__(__self__, *,
                 unknown_map: Optional[Mapping[str, str]] = None):
        """
        Properties pertained to UnknownTarget
        :param Mapping[str, str] unknown_map: Dictionary of string->string pairs containing information about the Storage Target.
        """
        if unknown_map is not None:
            pulumi.set(__self__, "unknown_map", unknown_map)

    @property
    @pulumi.getter(name="unknownMap")
    def unknown_map(self) -> Optional[Mapping[str, str]]:
        """
        Dictionary of string->string pairs containing information about the Storage Target.
        """
        return pulumi.get(self, "unknown_map")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

