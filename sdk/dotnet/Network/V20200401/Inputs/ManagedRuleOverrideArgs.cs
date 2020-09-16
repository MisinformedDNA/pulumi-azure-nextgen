// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200401.Inputs
{

    /// <summary>
    /// Defines a managed rule group override setting.
    /// </summary>
    public sealed class ManagedRuleOverrideArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Identifier for the managed rule.
        /// </summary>
        [Input("ruleId", required: true)]
        public Input<string> RuleId { get; set; } = null!;

        /// <summary>
        /// The state of the managed rule. Defaults to Disabled if not specified.
        /// </summary>
        [Input("state")]
        public Input<string>? State { get; set; }

        public ManagedRuleOverrideArgs()
        {
        }
    }
}