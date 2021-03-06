// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview.Inputs
{

    /// <summary>
    /// Represents a Watchlist Item in Azure Security Insights.
    /// </summary>
    public sealed class WatchlistItemArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes a user that created the watchlist
        /// </summary>
        [Input("createdBy")]
        public Input<Inputs.UserInfoArgs>? CreatedBy { get; set; }

        /// <summary>
        /// The time the watchlist item was created
        /// </summary>
        [Input("createdTimeUtc")]
        public Input<string>? CreatedTimeUtc { get; set; }

        [Input("entityMapping")]
        private InputMap<object>? _entityMapping;

        /// <summary>
        /// A key-value pair for a watchlist item entity mapping
        /// </summary>
        public InputMap<object> EntityMapping
        {
            get => _entityMapping ?? (_entityMapping = new InputMap<object>());
            set => _entityMapping = value;
        }

        /// <summary>
        /// The last time the watchlist item was updated
        /// </summary>
        [Input("lastUpdatedTimeUtc")]
        public Input<string>? LastUpdatedTimeUtc { get; set; }

        /// <summary>
        /// The tenantId to which this watchlist item belongs to
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        /// <summary>
        /// The time to live for the watchlist item
        /// </summary>
        [Input("timeToLiveUtc")]
        public Input<string>? TimeToLiveUtc { get; set; }

        /// <summary>
        /// Describes a user that updated the watchlist
        /// </summary>
        [Input("updatedBy")]
        public Input<Inputs.UserInfoArgs>? UpdatedBy { get; set; }

        /// <summary>
        /// The watchlist id of the parent of this watchlist item
        /// </summary>
        [Input("watchlistId", required: true)]
        public Input<string> WatchlistId { get; set; } = null!;

        /// <summary>
        /// Name of the watchlist item
        /// </summary>
        [Input("watchlistItemName")]
        public Input<string>? WatchlistItemName { get; set; }

        [Input("watchlistItemPair", required: true)]
        private InputMap<object>? _watchlistItemPair;

        /// <summary>
        /// A key-value pair for a watchlist item
        /// </summary>
        public InputMap<object> WatchlistItemPair
        {
            get => _watchlistItemPair ?? (_watchlistItemPair = new InputMap<object>());
            set => _watchlistItemPair = value;
        }

        /// <summary>
        /// The type of the watchlist item
        /// </summary>
        [Input("watchlistItemType")]
        public Input<string>? WatchlistItemType { get; set; }

        public WatchlistItemArgs()
        {
        }
    }
}
