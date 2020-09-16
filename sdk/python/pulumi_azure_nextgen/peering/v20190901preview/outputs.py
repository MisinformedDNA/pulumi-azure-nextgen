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
    'BgpSessionResponse',
    'ContactInfoResponse',
    'DirectConnectionResponse',
    'ExchangeConnectionResponse',
    'PeeringPropertiesDirectResponse',
    'PeeringPropertiesExchangeResponse',
    'PeeringServicePrefixEventResponse',
    'PeeringSkuResponse',
    'SubResourceResponse',
]

@pulumi.output_type
class BgpSessionResponse(dict):
    """
    The properties that define a BGP session.
    """
    def __init__(__self__, *,
                 microsoft_session_i_pv4_address: str,
                 microsoft_session_i_pv6_address: str,
                 session_state_v4: str,
                 session_state_v6: str,
                 max_prefixes_advertised_v4: Optional[int] = None,
                 max_prefixes_advertised_v6: Optional[int] = None,
                 md5_authentication_key: Optional[str] = None,
                 peer_session_i_pv4_address: Optional[str] = None,
                 peer_session_i_pv6_address: Optional[str] = None,
                 session_prefix_v4: Optional[str] = None,
                 session_prefix_v6: Optional[str] = None):
        """
        The properties that define a BGP session.
        :param str microsoft_session_i_pv4_address: The IPv4 session address on Microsoft's end.
        :param str microsoft_session_i_pv6_address: The IPv6 session address on Microsoft's end.
        :param str session_state_v4: The state of the IPv4 session.
        :param str session_state_v6: The state of the IPv6 session.
        :param int max_prefixes_advertised_v4: The maximum number of prefixes advertised over the IPv4 session.
        :param int max_prefixes_advertised_v6: The maximum number of prefixes advertised over the IPv6 session.
        :param str md5_authentication_key: The MD5 authentication key of the session.
        :param str peer_session_i_pv4_address: The IPv4 session address on peer's end.
        :param str peer_session_i_pv6_address: The IPv6 session address on peer's end.
        :param str session_prefix_v4: The IPv4 prefix that contains both ends' IPv4 addresses.
        :param str session_prefix_v6: The IPv6 prefix that contains both ends' IPv6 addresses.
        """
        pulumi.set(__self__, "microsoft_session_i_pv4_address", microsoft_session_i_pv4_address)
        pulumi.set(__self__, "microsoft_session_i_pv6_address", microsoft_session_i_pv6_address)
        pulumi.set(__self__, "session_state_v4", session_state_v4)
        pulumi.set(__self__, "session_state_v6", session_state_v6)
        if max_prefixes_advertised_v4 is not None:
            pulumi.set(__self__, "max_prefixes_advertised_v4", max_prefixes_advertised_v4)
        if max_prefixes_advertised_v6 is not None:
            pulumi.set(__self__, "max_prefixes_advertised_v6", max_prefixes_advertised_v6)
        if md5_authentication_key is not None:
            pulumi.set(__self__, "md5_authentication_key", md5_authentication_key)
        if peer_session_i_pv4_address is not None:
            pulumi.set(__self__, "peer_session_i_pv4_address", peer_session_i_pv4_address)
        if peer_session_i_pv6_address is not None:
            pulumi.set(__self__, "peer_session_i_pv6_address", peer_session_i_pv6_address)
        if session_prefix_v4 is not None:
            pulumi.set(__self__, "session_prefix_v4", session_prefix_v4)
        if session_prefix_v6 is not None:
            pulumi.set(__self__, "session_prefix_v6", session_prefix_v6)

    @property
    @pulumi.getter(name="microsoftSessionIPv4Address")
    def microsoft_session_i_pv4_address(self) -> str:
        """
        The IPv4 session address on Microsoft's end.
        """
        return pulumi.get(self, "microsoft_session_i_pv4_address")

    @property
    @pulumi.getter(name="microsoftSessionIPv6Address")
    def microsoft_session_i_pv6_address(self) -> str:
        """
        The IPv6 session address on Microsoft's end.
        """
        return pulumi.get(self, "microsoft_session_i_pv6_address")

    @property
    @pulumi.getter(name="sessionStateV4")
    def session_state_v4(self) -> str:
        """
        The state of the IPv4 session.
        """
        return pulumi.get(self, "session_state_v4")

    @property
    @pulumi.getter(name="sessionStateV6")
    def session_state_v6(self) -> str:
        """
        The state of the IPv6 session.
        """
        return pulumi.get(self, "session_state_v6")

    @property
    @pulumi.getter(name="maxPrefixesAdvertisedV4")
    def max_prefixes_advertised_v4(self) -> Optional[int]:
        """
        The maximum number of prefixes advertised over the IPv4 session.
        """
        return pulumi.get(self, "max_prefixes_advertised_v4")

    @property
    @pulumi.getter(name="maxPrefixesAdvertisedV6")
    def max_prefixes_advertised_v6(self) -> Optional[int]:
        """
        The maximum number of prefixes advertised over the IPv6 session.
        """
        return pulumi.get(self, "max_prefixes_advertised_v6")

    @property
    @pulumi.getter(name="md5AuthenticationKey")
    def md5_authentication_key(self) -> Optional[str]:
        """
        The MD5 authentication key of the session.
        """
        return pulumi.get(self, "md5_authentication_key")

    @property
    @pulumi.getter(name="peerSessionIPv4Address")
    def peer_session_i_pv4_address(self) -> Optional[str]:
        """
        The IPv4 session address on peer's end.
        """
        return pulumi.get(self, "peer_session_i_pv4_address")

    @property
    @pulumi.getter(name="peerSessionIPv6Address")
    def peer_session_i_pv6_address(self) -> Optional[str]:
        """
        The IPv6 session address on peer's end.
        """
        return pulumi.get(self, "peer_session_i_pv6_address")

    @property
    @pulumi.getter(name="sessionPrefixV4")
    def session_prefix_v4(self) -> Optional[str]:
        """
        The IPv4 prefix that contains both ends' IPv4 addresses.
        """
        return pulumi.get(self, "session_prefix_v4")

    @property
    @pulumi.getter(name="sessionPrefixV6")
    def session_prefix_v6(self) -> Optional[str]:
        """
        The IPv6 prefix that contains both ends' IPv6 addresses.
        """
        return pulumi.get(self, "session_prefix_v6")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContactInfoResponse(dict):
    """
    The contact information of the peer.
    """
    def __init__(__self__, *,
                 emails: Optional[Sequence[str]] = None,
                 phone: Optional[Sequence[str]] = None):
        """
        The contact information of the peer.
        :param Sequence[str] emails: The list of email addresses.
        :param Sequence[str] phone: The list of contact numbers.
        """
        if emails is not None:
            pulumi.set(__self__, "emails", emails)
        if phone is not None:
            pulumi.set(__self__, "phone", phone)

    @property
    @pulumi.getter
    def emails(self) -> Optional[Sequence[str]]:
        """
        The list of email addresses.
        """
        return pulumi.get(self, "emails")

    @property
    @pulumi.getter
    def phone(self) -> Optional[Sequence[str]]:
        """
        The list of contact numbers.
        """
        return pulumi.get(self, "phone")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DirectConnectionResponse(dict):
    """
    The properties that define a direct connection.
    """
    def __init__(__self__, *,
                 connection_state: str,
                 error_message: str,
                 provisioned_bandwidth_in_mbps: int,
                 bandwidth_in_mbps: Optional[int] = None,
                 bgp_session: Optional['outputs.BgpSessionResponse'] = None,
                 connection_identifier: Optional[str] = None,
                 peering_db_facility_id: Optional[int] = None,
                 session_address_provider: Optional[str] = None,
                 use_for_peering_service: Optional[bool] = None):
        """
        The properties that define a direct connection.
        :param str connection_state: The state of the connection.
        :param str error_message: The error message related to the connection state, if any.
        :param int provisioned_bandwidth_in_mbps: The bandwidth that is actually provisioned.
        :param int bandwidth_in_mbps: The bandwidth of the connection.
        :param 'BgpSessionResponseArgs' bgp_session: The BGP session associated with the connection.
        :param str connection_identifier: The unique identifier (GUID) for the connection.
        :param int peering_db_facility_id: The PeeringDB.com ID of the facility at which the connection has to be set up.
        :param str session_address_provider: The field indicating if Microsoft provides session ip addresses.
        :param bool use_for_peering_service: The flag that indicates whether or not the connection is used for peering service.
        """
        pulumi.set(__self__, "connection_state", connection_state)
        pulumi.set(__self__, "error_message", error_message)
        pulumi.set(__self__, "provisioned_bandwidth_in_mbps", provisioned_bandwidth_in_mbps)
        if bandwidth_in_mbps is not None:
            pulumi.set(__self__, "bandwidth_in_mbps", bandwidth_in_mbps)
        if bgp_session is not None:
            pulumi.set(__self__, "bgp_session", bgp_session)
        if connection_identifier is not None:
            pulumi.set(__self__, "connection_identifier", connection_identifier)
        if peering_db_facility_id is not None:
            pulumi.set(__self__, "peering_db_facility_id", peering_db_facility_id)
        if session_address_provider is not None:
            pulumi.set(__self__, "session_address_provider", session_address_provider)
        if use_for_peering_service is not None:
            pulumi.set(__self__, "use_for_peering_service", use_for_peering_service)

    @property
    @pulumi.getter(name="connectionState")
    def connection_state(self) -> str:
        """
        The state of the connection.
        """
        return pulumi.get(self, "connection_state")

    @property
    @pulumi.getter(name="errorMessage")
    def error_message(self) -> str:
        """
        The error message related to the connection state, if any.
        """
        return pulumi.get(self, "error_message")

    @property
    @pulumi.getter(name="provisionedBandwidthInMbps")
    def provisioned_bandwidth_in_mbps(self) -> int:
        """
        The bandwidth that is actually provisioned.
        """
        return pulumi.get(self, "provisioned_bandwidth_in_mbps")

    @property
    @pulumi.getter(name="bandwidthInMbps")
    def bandwidth_in_mbps(self) -> Optional[int]:
        """
        The bandwidth of the connection.
        """
        return pulumi.get(self, "bandwidth_in_mbps")

    @property
    @pulumi.getter(name="bgpSession")
    def bgp_session(self) -> Optional['outputs.BgpSessionResponse']:
        """
        The BGP session associated with the connection.
        """
        return pulumi.get(self, "bgp_session")

    @property
    @pulumi.getter(name="connectionIdentifier")
    def connection_identifier(self) -> Optional[str]:
        """
        The unique identifier (GUID) for the connection.
        """
        return pulumi.get(self, "connection_identifier")

    @property
    @pulumi.getter(name="peeringDBFacilityId")
    def peering_db_facility_id(self) -> Optional[int]:
        """
        The PeeringDB.com ID of the facility at which the connection has to be set up.
        """
        return pulumi.get(self, "peering_db_facility_id")

    @property
    @pulumi.getter(name="sessionAddressProvider")
    def session_address_provider(self) -> Optional[str]:
        """
        The field indicating if Microsoft provides session ip addresses.
        """
        return pulumi.get(self, "session_address_provider")

    @property
    @pulumi.getter(name="useForPeeringService")
    def use_for_peering_service(self) -> Optional[bool]:
        """
        The flag that indicates whether or not the connection is used for peering service.
        """
        return pulumi.get(self, "use_for_peering_service")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ExchangeConnectionResponse(dict):
    """
    The properties that define an exchange connection.
    """
    def __init__(__self__, *,
                 connection_state: str,
                 error_message: str,
                 bgp_session: Optional['outputs.BgpSessionResponse'] = None,
                 connection_identifier: Optional[str] = None,
                 peering_db_facility_id: Optional[int] = None):
        """
        The properties that define an exchange connection.
        :param str connection_state: The state of the connection.
        :param str error_message: The error message related to the connection state, if any.
        :param 'BgpSessionResponseArgs' bgp_session: The BGP session associated with the connection.
        :param str connection_identifier: The unique identifier (GUID) for the connection.
        :param int peering_db_facility_id: The PeeringDB.com ID of the facility at which the connection has to be set up.
        """
        pulumi.set(__self__, "connection_state", connection_state)
        pulumi.set(__self__, "error_message", error_message)
        if bgp_session is not None:
            pulumi.set(__self__, "bgp_session", bgp_session)
        if connection_identifier is not None:
            pulumi.set(__self__, "connection_identifier", connection_identifier)
        if peering_db_facility_id is not None:
            pulumi.set(__self__, "peering_db_facility_id", peering_db_facility_id)

    @property
    @pulumi.getter(name="connectionState")
    def connection_state(self) -> str:
        """
        The state of the connection.
        """
        return pulumi.get(self, "connection_state")

    @property
    @pulumi.getter(name="errorMessage")
    def error_message(self) -> str:
        """
        The error message related to the connection state, if any.
        """
        return pulumi.get(self, "error_message")

    @property
    @pulumi.getter(name="bgpSession")
    def bgp_session(self) -> Optional['outputs.BgpSessionResponse']:
        """
        The BGP session associated with the connection.
        """
        return pulumi.get(self, "bgp_session")

    @property
    @pulumi.getter(name="connectionIdentifier")
    def connection_identifier(self) -> Optional[str]:
        """
        The unique identifier (GUID) for the connection.
        """
        return pulumi.get(self, "connection_identifier")

    @property
    @pulumi.getter(name="peeringDBFacilityId")
    def peering_db_facility_id(self) -> Optional[int]:
        """
        The PeeringDB.com ID of the facility at which the connection has to be set up.
        """
        return pulumi.get(self, "peering_db_facility_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PeeringPropertiesDirectResponse(dict):
    """
    The properties that define a direct peering.
    """
    def __init__(__self__, *,
                 use_for_peering_service: bool,
                 connections: Optional[Sequence['outputs.DirectConnectionResponse']] = None,
                 direct_peering_type: Optional[str] = None,
                 peer_asn: Optional['outputs.SubResourceResponse'] = None):
        """
        The properties that define a direct peering.
        :param bool use_for_peering_service: The flag that indicates whether or not the peering is used for peering service.
        :param Sequence['DirectConnectionResponseArgs'] connections: The set of connections that constitute a direct peering.
        :param str direct_peering_type: The type of direct peering.
        :param 'SubResourceResponseArgs' peer_asn: The reference of the peer ASN.
        """
        pulumi.set(__self__, "use_for_peering_service", use_for_peering_service)
        if connections is not None:
            pulumi.set(__self__, "connections", connections)
        if direct_peering_type is not None:
            pulumi.set(__self__, "direct_peering_type", direct_peering_type)
        if peer_asn is not None:
            pulumi.set(__self__, "peer_asn", peer_asn)

    @property
    @pulumi.getter(name="useForPeeringService")
    def use_for_peering_service(self) -> bool:
        """
        The flag that indicates whether or not the peering is used for peering service.
        """
        return pulumi.get(self, "use_for_peering_service")

    @property
    @pulumi.getter
    def connections(self) -> Optional[Sequence['outputs.DirectConnectionResponse']]:
        """
        The set of connections that constitute a direct peering.
        """
        return pulumi.get(self, "connections")

    @property
    @pulumi.getter(name="directPeeringType")
    def direct_peering_type(self) -> Optional[str]:
        """
        The type of direct peering.
        """
        return pulumi.get(self, "direct_peering_type")

    @property
    @pulumi.getter(name="peerAsn")
    def peer_asn(self) -> Optional['outputs.SubResourceResponse']:
        """
        The reference of the peer ASN.
        """
        return pulumi.get(self, "peer_asn")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PeeringPropertiesExchangeResponse(dict):
    """
    The properties that define an exchange peering.
    """
    def __init__(__self__, *,
                 connections: Optional[Sequence['outputs.ExchangeConnectionResponse']] = None,
                 peer_asn: Optional['outputs.SubResourceResponse'] = None):
        """
        The properties that define an exchange peering.
        :param Sequence['ExchangeConnectionResponseArgs'] connections: The set of connections that constitute an exchange peering.
        :param 'SubResourceResponseArgs' peer_asn: The reference of the peer ASN.
        """
        if connections is not None:
            pulumi.set(__self__, "connections", connections)
        if peer_asn is not None:
            pulumi.set(__self__, "peer_asn", peer_asn)

    @property
    @pulumi.getter
    def connections(self) -> Optional[Sequence['outputs.ExchangeConnectionResponse']]:
        """
        The set of connections that constitute an exchange peering.
        """
        return pulumi.get(self, "connections")

    @property
    @pulumi.getter(name="peerAsn")
    def peer_asn(self) -> Optional['outputs.SubResourceResponse']:
        """
        The reference of the peer ASN.
        """
        return pulumi.get(self, "peer_asn")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PeeringServicePrefixEventResponse(dict):
    """
    The details of the event associated with a prefix.
    """
    def __init__(__self__, *,
                 event_description: str,
                 event_level: str,
                 event_summary: str,
                 event_timestamp: str,
                 event_type: str):
        """
        The details of the event associated with a prefix.
        :param str event_description: The description of the event associated with a prefix.
        :param str event_level: The level of the event associated with a prefix.
        :param str event_summary: The summary of the event associated with a prefix.
        :param str event_timestamp: The timestamp of the event associated with a prefix.
        :param str event_type: The type of the event associated with a prefix.
        """
        pulumi.set(__self__, "event_description", event_description)
        pulumi.set(__self__, "event_level", event_level)
        pulumi.set(__self__, "event_summary", event_summary)
        pulumi.set(__self__, "event_timestamp", event_timestamp)
        pulumi.set(__self__, "event_type", event_type)

    @property
    @pulumi.getter(name="eventDescription")
    def event_description(self) -> str:
        """
        The description of the event associated with a prefix.
        """
        return pulumi.get(self, "event_description")

    @property
    @pulumi.getter(name="eventLevel")
    def event_level(self) -> str:
        """
        The level of the event associated with a prefix.
        """
        return pulumi.get(self, "event_level")

    @property
    @pulumi.getter(name="eventSummary")
    def event_summary(self) -> str:
        """
        The summary of the event associated with a prefix.
        """
        return pulumi.get(self, "event_summary")

    @property
    @pulumi.getter(name="eventTimestamp")
    def event_timestamp(self) -> str:
        """
        The timestamp of the event associated with a prefix.
        """
        return pulumi.get(self, "event_timestamp")

    @property
    @pulumi.getter(name="eventType")
    def event_type(self) -> str:
        """
        The type of the event associated with a prefix.
        """
        return pulumi.get(self, "event_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PeeringSkuResponse(dict):
    """
    The SKU that defines the tier and kind of the peering.
    """
    def __init__(__self__, *,
                 family: Optional[str] = None,
                 name: Optional[str] = None,
                 size: Optional[str] = None,
                 tier: Optional[str] = None):
        """
        The SKU that defines the tier and kind of the peering.
        :param str family: The family of the peering SKU.
        :param str name: The name of the peering SKU.
        :param str size: The size of the peering SKU.
        :param str tier: The tier of the peering SKU.
        """
        if family is not None:
            pulumi.set(__self__, "family", family)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if size is not None:
            pulumi.set(__self__, "size", size)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter
    def family(self) -> Optional[str]:
        """
        The family of the peering SKU.
        """
        return pulumi.get(self, "family")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the peering SKU.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def size(self) -> Optional[str]:
        """
        The size of the peering SKU.
        """
        return pulumi.get(self, "size")

    @property
    @pulumi.getter
    def tier(self) -> Optional[str]:
        """
        The tier of the peering SKU.
        """
        return pulumi.get(self, "tier")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SubResourceResponse(dict):
    """
    The sub resource.
    """
    def __init__(__self__, *,
                 id: Optional[str] = None):
        """
        The sub resource.
        :param str id: The identifier of the referenced resource.
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        The identifier of the referenced resource.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

