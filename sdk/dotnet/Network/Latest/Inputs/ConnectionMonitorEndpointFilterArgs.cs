// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest.Inputs
{

    /// <summary>
    /// Describes the connection monitor endpoint filter.
    /// </summary>
    public sealed class ConnectionMonitorEndpointFilterArgs : Pulumi.ResourceArgs
    {
        [Input("items")]
        private InputList<Inputs.ConnectionMonitorEndpointFilterItemArgs>? _items;

        /// <summary>
        /// List of items in the filter.
        /// </summary>
        public InputList<Inputs.ConnectionMonitorEndpointFilterItemArgs> Items
        {
            get => _items ?? (_items = new InputList<Inputs.ConnectionMonitorEndpointFilterItemArgs>());
            set => _items = value;
        }

        /// <summary>
        /// The behavior of the endpoint filter. Currently only 'Include' is supported.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public ConnectionMonitorEndpointFilterArgs()
        {
        }
    }
}