// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20180201Preview
{
    public static class ListBuildStepBuildArguments
    {
        public static Task<ListBuildStepBuildArgumentsResult> InvokeAsync(ListBuildStepBuildArgumentsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListBuildStepBuildArgumentsResult>("azure-nextgen:containerregistry/v20180201preview:listBuildStepBuildArguments", args ?? new ListBuildStepBuildArgumentsArgs(), options.WithVersion());
    }


    public sealed class ListBuildStepBuildArgumentsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the container registry build task.
        /// </summary>
        [Input("buildTaskName", required: true)]
        public string BuildTaskName { get; set; } = null!;

        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public string RegistryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of a build step for a container registry build task.
        /// </summary>
        [Input("stepName", required: true)]
        public string StepName { get; set; } = null!;

        public ListBuildStepBuildArgumentsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListBuildStepBuildArgumentsResult
    {
        /// <summary>
        /// The URI that can be used to request the next set of paged results.
        /// </summary>
        public readonly string? NextLink;
        /// <summary>
        /// The collection value.
        /// </summary>
        public readonly ImmutableArray<Outputs.BuildArgumentResponse> Value;

        [OutputConstructor]
        private ListBuildStepBuildArgumentsResult(
            string? nextLink,

            ImmutableArray<Outputs.BuildArgumentResponse> value)
        {
            NextLink = nextLink;
            Value = value;
        }
    }
}