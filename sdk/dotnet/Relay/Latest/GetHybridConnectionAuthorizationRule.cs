// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Relay.Latest
{
    public static class GetHybridConnectionAuthorizationRule
    {
        public static Task<GetHybridConnectionAuthorizationRuleResult> InvokeAsync(GetHybridConnectionAuthorizationRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHybridConnectionAuthorizationRuleResult>("azure-nextgen:relay/latest:getHybridConnectionAuthorizationRule", args ?? new GetHybridConnectionAuthorizationRuleArgs(), options.WithVersion());
    }


    public sealed class GetHybridConnectionAuthorizationRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The authorization rule name.
        /// </summary>
        [Input("authorizationRuleName", required: true)]
        public string AuthorizationRuleName { get; set; } = null!;

        /// <summary>
        /// The hybrid connection name.
        /// </summary>
        [Input("hybridConnectionName", required: true)]
        public string HybridConnectionName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetHybridConnectionAuthorizationRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHybridConnectionAuthorizationRuleResult
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The rights associated with the rule.
        /// </summary>
        public readonly ImmutableArray<string> Rights;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetHybridConnectionAuthorizationRuleResult(
            string name,

            ImmutableArray<string> rights,

            string type)
        {
            Name = name;
            Rights = rights;
            Type = type;
        }
    }
}