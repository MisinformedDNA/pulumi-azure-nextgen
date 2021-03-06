// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180801.Outputs
{

    [OutputType]
    public sealed class AzureManagedOverrideRuleGroupResponse
    {
        /// <summary>
        /// Type of Actions
        /// </summary>
        public readonly string Action;
        /// <summary>
        /// Describes override rule group
        /// </summary>
        public readonly string RuleGroupOverride;

        [OutputConstructor]
        private AzureManagedOverrideRuleGroupResponse(
            string action,

            string ruleGroupOverride)
        {
            Action = action;
            RuleGroupOverride = ruleGroupOverride;
        }
    }
}
