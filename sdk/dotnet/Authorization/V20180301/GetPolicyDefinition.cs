// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Authorization.V20180301
{
    public static class GetPolicyDefinition
    {
        public static Task<GetPolicyDefinitionResult> InvokeAsync(GetPolicyDefinitionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPolicyDefinitionResult>("azure-nextgen:authorization/v20180301:getPolicyDefinition", args ?? new GetPolicyDefinitionArgs(), options.WithVersion());
    }


    public sealed class GetPolicyDefinitionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the policy definition to get.
        /// </summary>
        [Input("policyDefinitionName", required: true)]
        public string PolicyDefinitionName { get; set; } = null!;

        public GetPolicyDefinitionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPolicyDefinitionResult
    {
        /// <summary>
        /// The policy definition description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The display name of the policy definition.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The policy definition metadata.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Metadata;
        /// <summary>
        /// The policy definition mode. Possible values are NotSpecified, Indexed, and All.
        /// </summary>
        public readonly string? Mode;
        /// <summary>
        /// The name of the policy definition.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Required if a parameter is used in policy rule.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Parameters;
        /// <summary>
        /// The policy rule.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? PolicyRule;
        /// <summary>
        /// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
        /// </summary>
        public readonly string? PolicyType;
        /// <summary>
        /// The type of the resource (Microsoft.Authorization/policyDefinitions).
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPolicyDefinitionResult(
            string? description,

            string? displayName,

            ImmutableDictionary<string, object>? metadata,

            string? mode,

            string name,

            ImmutableDictionary<string, object>? parameters,

            ImmutableDictionary<string, object>? policyRule,

            string? policyType,

            string type)
        {
            Description = description;
            DisplayName = displayName;
            Metadata = metadata;
            Mode = mode;
            Name = name;
            Parameters = parameters;
            PolicyRule = policyRule;
            PolicyType = policyType;
            Type = type;
        }
    }
}
