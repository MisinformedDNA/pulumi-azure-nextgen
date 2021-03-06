# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'SkuArgs',
]

@pulumi.input_type
class SkuArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str]):
        """
        The SKU of the cognitive services account.
        :param pulumi.Input[str] name: Gets or sets the sku name. Required for account creation, optional for update.
        """
        pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        Gets or sets the sku name. Required for account creation, optional for update.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)


