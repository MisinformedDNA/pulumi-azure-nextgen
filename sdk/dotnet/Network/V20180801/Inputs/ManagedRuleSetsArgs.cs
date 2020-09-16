// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180801.Inputs
{

    /// <summary>
    /// Defines ManagedRuleSets - array of managedRuleSet
    /// </summary>
    public sealed class ManagedRuleSetsArgs : Pulumi.ResourceArgs
    {
        [Input("ruleSets")]
        private InputList<Inputs.AzureManagedRuleSetArgs>? _ruleSets;

        /// <summary>
        /// List of rules
        /// </summary>
        public InputList<Inputs.AzureManagedRuleSetArgs> RuleSets
        {
            get => _ruleSets ?? (_ruleSets = new InputList<Inputs.AzureManagedRuleSetArgs>());
            set => _ruleSets = value;
        }

        public ManagedRuleSetsArgs()
        {
        }
    }
}