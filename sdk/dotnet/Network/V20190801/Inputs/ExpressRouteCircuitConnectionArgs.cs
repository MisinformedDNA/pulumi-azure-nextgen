// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190801.Inputs
{

    /// <summary>
    /// Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
    /// </summary>
    public sealed class ExpressRouteCircuitConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// /29 IP address space to carve out Customer addresses for tunnels.
        /// </summary>
        [Input("addressPrefix")]
        public Input<string>? AddressPrefix { get; set; }

        /// <summary>
        /// The authorization key.
        /// </summary>
        [Input("authorizationKey")]
        public Input<string>? AuthorizationKey { get; set; }

        /// <summary>
        /// Express Route Circuit connection state.
        /// </summary>
        [Input("circuitConnectionStatus")]
        public Input<string>? CircuitConnectionStatus { get; set; }

        /// <summary>
        /// Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
        /// </summary>
        [Input("expressRouteCircuitPeering")]
        public Input<Inputs.SubResourceArgs>? ExpressRouteCircuitPeering { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Reference to Express Route Circuit Private Peering Resource of the peered circuit.
        /// </summary>
        [Input("peerExpressRouteCircuitPeering")]
        public Input<Inputs.SubResourceArgs>? PeerExpressRouteCircuitPeering { get; set; }

        public ExpressRouteCircuitConnectionArgs()
        {
        }
    }
}