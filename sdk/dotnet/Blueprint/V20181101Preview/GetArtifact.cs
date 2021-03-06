// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Blueprint.V20181101Preview
{
    public static class GetArtifact
    {
        public static Task<GetArtifactResult> InvokeAsync(GetArtifactArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetArtifactResult>("azure-nextgen:blueprint/v20181101preview:getArtifact", args ?? new GetArtifactArgs(), options.WithVersion());
    }


    public sealed class GetArtifactArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the blueprint artifact.
        /// </summary>
        [Input("artifactName", required: true)]
        public string ArtifactName { get; set; } = null!;

        /// <summary>
        /// Name of the blueprint definition.
        /// </summary>
        [Input("blueprintName", required: true)]
        public string BlueprintName { get; set; } = null!;

        /// <summary>
        /// The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
        /// </summary>
        [Input("resourceScope", required: true)]
        public string ResourceScope { get; set; } = null!;

        public GetArtifactArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetArtifactResult
    {
        /// <summary>
        /// Specifies the kind of blueprint artifact.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Name of this resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Type of this resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetArtifactResult(
            string kind,

            string name,

            string type)
        {
            Kind = kind;
            Name = name;
            Type = type;
        }
    }
}
