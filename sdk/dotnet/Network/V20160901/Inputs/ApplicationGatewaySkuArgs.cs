// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20160901.Inputs
{

    /// <summary>
    /// SKU of an application gateway
    /// </summary>
    public sealed class ApplicationGatewaySkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Capacity (instance count) of an application gateway.
        /// </summary>
        [Input("capacity")]
        public Input<int>? Capacity { get; set; }

        /// <summary>
        /// Name of an application gateway SKU. Possible values are: 'Standard_Small', 'Standard_Medium', 'Standard_Large', 'WAF_Medium', and 'WAF_Large'.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Tier of an application gateway. Possible values are: 'Standard' and 'WAF'.
        /// </summary>
        [Input("tier")]
        public Input<string>? Tier { get; set; }

        public ApplicationGatewaySkuArgs()
        {
        }
    }
}