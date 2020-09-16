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
    'GetVirtualNetworkGatewayResult',
    'AwaitableGetVirtualNetworkGatewayResult',
    'get_virtual_network_gateway',
]

@pulumi.output_type
class GetVirtualNetworkGatewayResult:
    """
    A common class for general resource information
    """
    def __init__(__self__, active_active=None, bgp_settings=None, enable_bgp=None, etag=None, gateway_default_site=None, gateway_type=None, ip_configurations=None, location=None, name=None, provisioning_state=None, resource_guid=None, sku=None, tags=None, type=None, vpn_client_configuration=None, vpn_type=None):
        if active_active and not isinstance(active_active, bool):
            raise TypeError("Expected argument 'active_active' to be a bool")
        pulumi.set(__self__, "active_active", active_active)
        if bgp_settings and not isinstance(bgp_settings, dict):
            raise TypeError("Expected argument 'bgp_settings' to be a dict")
        pulumi.set(__self__, "bgp_settings", bgp_settings)
        if enable_bgp and not isinstance(enable_bgp, bool):
            raise TypeError("Expected argument 'enable_bgp' to be a bool")
        pulumi.set(__self__, "enable_bgp", enable_bgp)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if gateway_default_site and not isinstance(gateway_default_site, dict):
            raise TypeError("Expected argument 'gateway_default_site' to be a dict")
        pulumi.set(__self__, "gateway_default_site", gateway_default_site)
        if gateway_type and not isinstance(gateway_type, str):
            raise TypeError("Expected argument 'gateway_type' to be a str")
        pulumi.set(__self__, "gateway_type", gateway_type)
        if ip_configurations and not isinstance(ip_configurations, list):
            raise TypeError("Expected argument 'ip_configurations' to be a list")
        pulumi.set(__self__, "ip_configurations", ip_configurations)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        pulumi.set(__self__, "resource_guid", resource_guid)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if vpn_client_configuration and not isinstance(vpn_client_configuration, dict):
            raise TypeError("Expected argument 'vpn_client_configuration' to be a dict")
        pulumi.set(__self__, "vpn_client_configuration", vpn_client_configuration)
        if vpn_type and not isinstance(vpn_type, str):
            raise TypeError("Expected argument 'vpn_type' to be a str")
        pulumi.set(__self__, "vpn_type", vpn_type)

    @property
    @pulumi.getter(name="activeActive")
    def active_active(self) -> Optional[bool]:
        """
        ActiveActive flag
        """
        return pulumi.get(self, "active_active")

    @property
    @pulumi.getter(name="bgpSettings")
    def bgp_settings(self) -> Optional['outputs.BgpSettingsResponse']:
        """
        Virtual network gateway's BGP speaker settings
        """
        return pulumi.get(self, "bgp_settings")

    @property
    @pulumi.getter(name="enableBgp")
    def enable_bgp(self) -> Optional[bool]:
        """
        EnableBgp Flag
        """
        return pulumi.get(self, "enable_bgp")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Gets a unique read-only string that changes whenever the resource is updated
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="gatewayDefaultSite")
    def gateway_default_site(self) -> Optional['outputs.SubResourceResponse']:
        """
        Gets or sets the reference of the LocalNetworkGateway resource which represents Local network site having default routes. Assign Null value in case of removing existing default site setting.
        """
        return pulumi.get(self, "gateway_default_site")

    @property
    @pulumi.getter(name="gatewayType")
    def gateway_type(self) -> Optional[str]:
        """
        The type of this virtual network gateway.
        """
        return pulumi.get(self, "gateway_type")

    @property
    @pulumi.getter(name="ipConfigurations")
    def ip_configurations(self) -> Optional[List['outputs.VirtualNetworkGatewayIPConfigurationResponse']]:
        """
        IpConfigurations for Virtual network gateway.
        """
        return pulumi.get(self, "ip_configurations")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Gets provisioning state of the VirtualNetworkGateway resource Updating/Deleting/Failed
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="resourceGuid")
    def resource_guid(self) -> Optional[str]:
        """
        Gets or sets resource guid property of the VirtualNetworkGateway resource
        """
        return pulumi.get(self, "resource_guid")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.VirtualNetworkGatewaySkuResponse']:
        """
        Gets or sets the reference of the VirtualNetworkGatewaySku resource which represents the sku selected for Virtual network gateway.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="vpnClientConfiguration")
    def vpn_client_configuration(self) -> Optional['outputs.VpnClientConfigurationResponse']:
        """
        Gets or sets the reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
        """
        return pulumi.get(self, "vpn_client_configuration")

    @property
    @pulumi.getter(name="vpnType")
    def vpn_type(self) -> Optional[str]:
        """
        The type of this virtual network gateway.
        """
        return pulumi.get(self, "vpn_type")


class AwaitableGetVirtualNetworkGatewayResult(GetVirtualNetworkGatewayResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualNetworkGatewayResult(
            active_active=self.active_active,
            bgp_settings=self.bgp_settings,
            enable_bgp=self.enable_bgp,
            etag=self.etag,
            gateway_default_site=self.gateway_default_site,
            gateway_type=self.gateway_type,
            ip_configurations=self.ip_configurations,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            resource_guid=self.resource_guid,
            sku=self.sku,
            tags=self.tags,
            type=self.type,
            vpn_client_configuration=self.vpn_client_configuration,
            vpn_type=self.vpn_type)


def get_virtual_network_gateway(resource_group_name: Optional[str] = None,
                                virtual_network_gateway_name: Optional[str] = None,
                                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualNetworkGatewayResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group.
    :param str virtual_network_gateway_name: The name of the virtual network gateway.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['virtualNetworkGatewayName'] = virtual_network_gateway_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azurerm:network/v20160601:getVirtualNetworkGateway', __args__, opts=opts, typ=GetVirtualNetworkGatewayResult).value

    return AwaitableGetVirtualNetworkGatewayResult(
        active_active=__ret__.active_active,
        bgp_settings=__ret__.bgp_settings,
        enable_bgp=__ret__.enable_bgp,
        etag=__ret__.etag,
        gateway_default_site=__ret__.gateway_default_site,
        gateway_type=__ret__.gateway_type,
        ip_configurations=__ret__.ip_configurations,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        resource_guid=__ret__.resource_guid,
        sku=__ret__.sku,
        tags=__ret__.tags,
        type=__ret__.type,
        vpn_client_configuration=__ret__.vpn_client_configuration,
        vpn_type=__ret__.vpn_type)