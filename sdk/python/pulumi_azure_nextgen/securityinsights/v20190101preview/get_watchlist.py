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
    'GetWatchlistResult',
    'AwaitableGetWatchlistResult',
    'get_watchlist',
]

@pulumi.output_type
class GetWatchlistResult:
    """
    Represents a Watchlist in Azure Security Insights.
    """
    def __init__(__self__, created_by=None, created_time_utc=None, default_duration=None, description=None, display_name=None, etag=None, labels=None, last_updated_time_utc=None, name=None, notes=None, provider=None, source=None, tenant_id=None, type=None, updated_by=None, watchlist_items=None, watchlist_type=None, workspace_id=None):
        if created_by and not isinstance(created_by, dict):
            raise TypeError("Expected argument 'created_by' to be a dict")
        pulumi.set(__self__, "created_by", created_by)
        if created_time_utc and not isinstance(created_time_utc, str):
            raise TypeError("Expected argument 'created_time_utc' to be a str")
        pulumi.set(__self__, "created_time_utc", created_time_utc)
        if default_duration and not isinstance(default_duration, str):
            raise TypeError("Expected argument 'default_duration' to be a str")
        pulumi.set(__self__, "default_duration", default_duration)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if labels and not isinstance(labels, list):
            raise TypeError("Expected argument 'labels' to be a list")
        pulumi.set(__self__, "labels", labels)
        if last_updated_time_utc and not isinstance(last_updated_time_utc, str):
            raise TypeError("Expected argument 'last_updated_time_utc' to be a str")
        pulumi.set(__self__, "last_updated_time_utc", last_updated_time_utc)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if notes and not isinstance(notes, str):
            raise TypeError("Expected argument 'notes' to be a str")
        pulumi.set(__self__, "notes", notes)
        if provider and not isinstance(provider, str):
            raise TypeError("Expected argument 'provider' to be a str")
        pulumi.set(__self__, "provider", provider)
        if source and not isinstance(source, str):
            raise TypeError("Expected argument 'source' to be a str")
        pulumi.set(__self__, "source", source)
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        pulumi.set(__self__, "tenant_id", tenant_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if updated_by and not isinstance(updated_by, dict):
            raise TypeError("Expected argument 'updated_by' to be a dict")
        pulumi.set(__self__, "updated_by", updated_by)
        if watchlist_items and not isinstance(watchlist_items, list):
            raise TypeError("Expected argument 'watchlist_items' to be a list")
        pulumi.set(__self__, "watchlist_items", watchlist_items)
        if watchlist_type and not isinstance(watchlist_type, str):
            raise TypeError("Expected argument 'watchlist_type' to be a str")
        pulumi.set(__self__, "watchlist_type", watchlist_type)
        if workspace_id and not isinstance(workspace_id, str):
            raise TypeError("Expected argument 'workspace_id' to be a str")
        pulumi.set(__self__, "workspace_id", workspace_id)

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> Optional['outputs.UserInfoResponse']:
        """
        Describes a user that created the watchlist
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="createdTimeUtc")
    def created_time_utc(self) -> Optional[str]:
        """
        The time the watchlist was created
        """
        return pulumi.get(self, "created_time_utc")

    @property
    @pulumi.getter(name="defaultDuration")
    def default_duration(self) -> Optional[str]:
        """
        The default duration of a watchlist (in ISO 8601 duration format)
        """
        return pulumi.get(self, "default_duration")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        A description of the watchlist
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The display name of the watchlist
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Etag of the azure resource
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def labels(self) -> Optional[Sequence[str]]:
        """
        List of labels relevant to this watchlist
        """
        return pulumi.get(self, "labels")

    @property
    @pulumi.getter(name="lastUpdatedTimeUtc")
    def last_updated_time_utc(self) -> Optional[str]:
        """
        The last time the watchlist was updated
        """
        return pulumi.get(self, "last_updated_time_utc")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def notes(self) -> Optional[str]:
        """
        The notes of the watchlist
        """
        return pulumi.get(self, "notes")

    @property
    @pulumi.getter
    def provider(self) -> str:
        """
        The provider of the watchlist
        """
        return pulumi.get(self, "provider")

    @property
    @pulumi.getter
    def source(self) -> str:
        """
        The source of the watchlist
        """
        return pulumi.get(self, "source")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> Optional[str]:
        """
        The tenantId where the watchlist belongs to.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="updatedBy")
    def updated_by(self) -> Optional['outputs.UserInfoResponse']:
        """
        Describes a user that updated the watchlist
        """
        return pulumi.get(self, "updated_by")

    @property
    @pulumi.getter(name="watchlistItems")
    def watchlist_items(self) -> Optional[Sequence['outputs.WatchlistItemResponse']]:
        """
        List of watchlist items.
        """
        return pulumi.get(self, "watchlist_items")

    @property
    @pulumi.getter(name="watchlistType")
    def watchlist_type(self) -> Optional[str]:
        """
        The type of the watchlist
        """
        return pulumi.get(self, "watchlist_type")

    @property
    @pulumi.getter(name="workspaceId")
    def workspace_id(self) -> Optional[str]:
        """
        The workspaceId where the watchlist belongs to.
        """
        return pulumi.get(self, "workspace_id")


class AwaitableGetWatchlistResult(GetWatchlistResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWatchlistResult(
            created_by=self.created_by,
            created_time_utc=self.created_time_utc,
            default_duration=self.default_duration,
            description=self.description,
            display_name=self.display_name,
            etag=self.etag,
            labels=self.labels,
            last_updated_time_utc=self.last_updated_time_utc,
            name=self.name,
            notes=self.notes,
            provider=self.provider,
            source=self.source,
            tenant_id=self.tenant_id,
            type=self.type,
            updated_by=self.updated_by,
            watchlist_items=self.watchlist_items,
            watchlist_type=self.watchlist_type,
            workspace_id=self.workspace_id)


def get_watchlist(operational_insights_resource_provider: Optional[str] = None,
                  resource_group_name: Optional[str] = None,
                  watchlist_alias: Optional[str] = None,
                  workspace_name: Optional[str] = None,
                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWatchlistResult:
    """
    Use this data source to access information about an existing resource.

    :param str operational_insights_resource_provider: The namespace of workspaces resource provider- Microsoft.OperationalInsights.
    :param str resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
    :param str watchlist_alias: Watchlist Alias
    :param str workspace_name: The name of the workspace.
    """
    __args__ = dict()
    __args__['operationalInsightsResourceProvider'] = operational_insights_resource_provider
    __args__['resourceGroupName'] = resource_group_name
    __args__['watchlistAlias'] = watchlist_alias
    __args__['workspaceName'] = workspace_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:securityinsights/v20190101preview:getWatchlist', __args__, opts=opts, typ=GetWatchlistResult).value

    return AwaitableGetWatchlistResult(
        created_by=__ret__.created_by,
        created_time_utc=__ret__.created_time_utc,
        default_duration=__ret__.default_duration,
        description=__ret__.description,
        display_name=__ret__.display_name,
        etag=__ret__.etag,
        labels=__ret__.labels,
        last_updated_time_utc=__ret__.last_updated_time_utc,
        name=__ret__.name,
        notes=__ret__.notes,
        provider=__ret__.provider,
        source=__ret__.source,
        tenant_id=__ret__.tenant_id,
        type=__ret__.type,
        updated_by=__ret__.updated_by,
        watchlist_items=__ret__.watchlist_items,
        watchlist_type=__ret__.watchlist_type,
        workspace_id=__ret__.workspace_id)