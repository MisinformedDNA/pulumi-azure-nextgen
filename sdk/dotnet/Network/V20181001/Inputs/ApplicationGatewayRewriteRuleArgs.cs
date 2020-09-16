// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181001.Inputs
{

    /// <summary>
    /// Rewrite rule of an application gateway.
    /// </summary>
    public sealed class ApplicationGatewayRewriteRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Set of actions to be done as part of the rewrite Rule.
        /// </summary>
        [Input("actionSet")]
        public Input<Inputs.ApplicationGatewayRewriteRuleActionSetArgs>? ActionSet { get; set; }

        /// <summary>
        /// Name of the rewrite rule that is unique within an Application Gateway.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ApplicationGatewayRewriteRuleArgs()
        {
        }
    }
}