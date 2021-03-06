// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview
{
    public static class GetWatchlist
    {
        public static Task<GetWatchlistResult> InvokeAsync(GetWatchlistArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWatchlistResult>("azure-nextgen:securityinsights/v20190101preview:getWatchlist", args ?? new GetWatchlistArgs(), options.WithVersion());
    }


    public sealed class GetWatchlistArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
        /// </summary>
        [Input("operationalInsightsResourceProvider", required: true)]
        public string OperationalInsightsResourceProvider { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Watchlist Alias
        /// </summary>
        [Input("watchlistAlias", required: true)]
        public string WatchlistAlias { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetWatchlistArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWatchlistResult
    {
        /// <summary>
        /// Describes a user that created the watchlist
        /// </summary>
        public readonly Outputs.UserInfoResponse? CreatedBy;
        /// <summary>
        /// The time the watchlist was created
        /// </summary>
        public readonly string? CreatedTimeUtc;
        /// <summary>
        /// The default duration of a watchlist (in ISO 8601 duration format)
        /// </summary>
        public readonly string? DefaultDuration;
        /// <summary>
        /// A description of the watchlist
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The display name of the watchlist
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// List of labels relevant to this watchlist
        /// </summary>
        public readonly ImmutableArray<string> Labels;
        /// <summary>
        /// The last time the watchlist was updated
        /// </summary>
        public readonly string? LastUpdatedTimeUtc;
        /// <summary>
        /// Azure resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The notes of the watchlist
        /// </summary>
        public readonly string? Notes;
        /// <summary>
        /// The provider of the watchlist
        /// </summary>
        public readonly string Provider;
        /// <summary>
        /// The source of the watchlist
        /// </summary>
        public readonly string Source;
        /// <summary>
        /// The tenantId where the watchlist belongs to.
        /// </summary>
        public readonly string? TenantId;
        /// <summary>
        /// Azure resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Describes a user that updated the watchlist
        /// </summary>
        public readonly Outputs.UserInfoResponse? UpdatedBy;
        /// <summary>
        /// List of watchlist items.
        /// </summary>
        public readonly ImmutableArray<Outputs.WatchlistItemResponse> WatchlistItems;
        /// <summary>
        /// The type of the watchlist
        /// </summary>
        public readonly string? WatchlistType;
        /// <summary>
        /// The workspaceId where the watchlist belongs to.
        /// </summary>
        public readonly string? WorkspaceId;

        [OutputConstructor]
        private GetWatchlistResult(
            Outputs.UserInfoResponse? createdBy,

            string? createdTimeUtc,

            string? defaultDuration,

            string? description,

            string displayName,

            string? etag,

            ImmutableArray<string> labels,

            string? lastUpdatedTimeUtc,

            string name,

            string? notes,

            string provider,

            string source,

            string? tenantId,

            string type,

            Outputs.UserInfoResponse? updatedBy,

            ImmutableArray<Outputs.WatchlistItemResponse> watchlistItems,

            string? watchlistType,

            string? workspaceId)
        {
            CreatedBy = createdBy;
            CreatedTimeUtc = createdTimeUtc;
            DefaultDuration = defaultDuration;
            Description = description;
            DisplayName = displayName;
            Etag = etag;
            Labels = labels;
            LastUpdatedTimeUtc = lastUpdatedTimeUtc;
            Name = name;
            Notes = notes;
            Provider = provider;
            Source = source;
            TenantId = tenantId;
            Type = type;
            UpdatedBy = updatedBy;
            WatchlistItems = watchlistItems;
            WatchlistType = watchlistType;
            WorkspaceId = workspaceId;
        }
    }
}
