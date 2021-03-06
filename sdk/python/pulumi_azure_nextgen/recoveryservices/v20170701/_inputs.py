# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'AzureRecoveryServiceVaultProtectionIntentArgs',
    'AzureResourceProtectionIntentArgs',
]

@pulumi.input_type
class AzureRecoveryServiceVaultProtectionIntentArgs:
    def __init__(__self__, *,
                 backup_management_type: Optional[pulumi.Input[str]] = None,
                 item_id: Optional[pulumi.Input[str]] = None,
                 policy_id: Optional[pulumi.Input[str]] = None,
                 protection_intent_item_type: Optional[pulumi.Input[str]] = None,
                 protection_state: Optional[pulumi.Input[str]] = None,
                 source_resource_id: Optional[pulumi.Input[str]] = None):
        """
        Azure Recovery Services Vault specific protection intent item.
        :param pulumi.Input[str] backup_management_type: Type of backup management for the backed up item.
        :param pulumi.Input[str] item_id: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        :param pulumi.Input[str] policy_id: ID of the backup policy with which this item is backed up.
        :param pulumi.Input[str] protection_intent_item_type: backup protectionIntent type.
        :param pulumi.Input[str] protection_state: Backup state of this backup item.
        :param pulumi.Input[str] source_resource_id: ARM ID of the resource to be backed up.
        """
        if backup_management_type is not None:
            pulumi.set(__self__, "backup_management_type", backup_management_type)
        if item_id is not None:
            pulumi.set(__self__, "item_id", item_id)
        if policy_id is not None:
            pulumi.set(__self__, "policy_id", policy_id)
        if protection_intent_item_type is not None:
            pulumi.set(__self__, "protection_intent_item_type", 'RecoveryServiceVaultItem')
        if protection_state is not None:
            pulumi.set(__self__, "protection_state", protection_state)
        if source_resource_id is not None:
            pulumi.set(__self__, "source_resource_id", source_resource_id)

    @property
    @pulumi.getter(name="backupManagementType")
    def backup_management_type(self) -> Optional[pulumi.Input[str]]:
        """
        Type of backup management for the backed up item.
        """
        return pulumi.get(self, "backup_management_type")

    @backup_management_type.setter
    def backup_management_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "backup_management_type", value)

    @property
    @pulumi.getter(name="itemId")
    def item_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        """
        return pulumi.get(self, "item_id")

    @item_id.setter
    def item_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "item_id", value)

    @property
    @pulumi.getter(name="policyId")
    def policy_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the backup policy with which this item is backed up.
        """
        return pulumi.get(self, "policy_id")

    @policy_id.setter
    def policy_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "policy_id", value)

    @property
    @pulumi.getter(name="protectionIntentItemType")
    def protection_intent_item_type(self) -> Optional[pulumi.Input[str]]:
        """
        backup protectionIntent type.
        """
        return pulumi.get(self, "protection_intent_item_type")

    @protection_intent_item_type.setter
    def protection_intent_item_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "protection_intent_item_type", value)

    @property
    @pulumi.getter(name="protectionState")
    def protection_state(self) -> Optional[pulumi.Input[str]]:
        """
        Backup state of this backup item.
        """
        return pulumi.get(self, "protection_state")

    @protection_state.setter
    def protection_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "protection_state", value)

    @property
    @pulumi.getter(name="sourceResourceId")
    def source_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        ARM ID of the resource to be backed up.
        """
        return pulumi.get(self, "source_resource_id")

    @source_resource_id.setter
    def source_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "source_resource_id", value)


@pulumi.input_type
class AzureResourceProtectionIntentArgs:
    def __init__(__self__, *,
                 backup_management_type: Optional[pulumi.Input[str]] = None,
                 friendly_name: Optional[pulumi.Input[str]] = None,
                 item_id: Optional[pulumi.Input[str]] = None,
                 policy_id: Optional[pulumi.Input[str]] = None,
                 protection_intent_item_type: Optional[pulumi.Input[str]] = None,
                 protection_state: Optional[pulumi.Input[str]] = None,
                 source_resource_id: Optional[pulumi.Input[str]] = None):
        """
        IaaS VM specific backup protection intent item.
        :param pulumi.Input[str] backup_management_type: Type of backup management for the backed up item.
        :param pulumi.Input[str] friendly_name: Friendly name of the VM represented by this backup item.
        :param pulumi.Input[str] item_id: ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        :param pulumi.Input[str] policy_id: ID of the backup policy with which this item is backed up.
        :param pulumi.Input[str] protection_intent_item_type: backup protectionIntent type.
        :param pulumi.Input[str] protection_state: Backup state of this backup item.
        :param pulumi.Input[str] source_resource_id: ARM ID of the resource to be backed up.
        """
        if backup_management_type is not None:
            pulumi.set(__self__, "backup_management_type", backup_management_type)
        if friendly_name is not None:
            pulumi.set(__self__, "friendly_name", friendly_name)
        if item_id is not None:
            pulumi.set(__self__, "item_id", item_id)
        if policy_id is not None:
            pulumi.set(__self__, "policy_id", policy_id)
        if protection_intent_item_type is not None:
            pulumi.set(__self__, "protection_intent_item_type", 'AzureResourceItem')
        if protection_state is not None:
            pulumi.set(__self__, "protection_state", protection_state)
        if source_resource_id is not None:
            pulumi.set(__self__, "source_resource_id", source_resource_id)

    @property
    @pulumi.getter(name="backupManagementType")
    def backup_management_type(self) -> Optional[pulumi.Input[str]]:
        """
        Type of backup management for the backed up item.
        """
        return pulumi.get(self, "backup_management_type")

    @backup_management_type.setter
    def backup_management_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "backup_management_type", value)

    @property
    @pulumi.getter(name="friendlyName")
    def friendly_name(self) -> Optional[pulumi.Input[str]]:
        """
        Friendly name of the VM represented by this backup item.
        """
        return pulumi.get(self, "friendly_name")

    @friendly_name.setter
    def friendly_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "friendly_name", value)

    @property
    @pulumi.getter(name="itemId")
    def item_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        """
        return pulumi.get(self, "item_id")

    @item_id.setter
    def item_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "item_id", value)

    @property
    @pulumi.getter(name="policyId")
    def policy_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the backup policy with which this item is backed up.
        """
        return pulumi.get(self, "policy_id")

    @policy_id.setter
    def policy_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "policy_id", value)

    @property
    @pulumi.getter(name="protectionIntentItemType")
    def protection_intent_item_type(self) -> Optional[pulumi.Input[str]]:
        """
        backup protectionIntent type.
        """
        return pulumi.get(self, "protection_intent_item_type")

    @protection_intent_item_type.setter
    def protection_intent_item_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "protection_intent_item_type", value)

    @property
    @pulumi.getter(name="protectionState")
    def protection_state(self) -> Optional[pulumi.Input[str]]:
        """
        Backup state of this backup item.
        """
        return pulumi.get(self, "protection_state")

    @protection_state.setter
    def protection_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "protection_state", value)

    @property
    @pulumi.getter(name="sourceResourceId")
    def source_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        ARM ID of the resource to be backed up.
        """
        return pulumi.get(self, "source_resource_id")

    @source_resource_id.setter
    def source_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "source_resource_id", value)


