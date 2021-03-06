// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest
{
    public static class GetPipeline
    {
        public static Task<GetPipelineResult> InvokeAsync(GetPipelineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPipelineResult>("azure-nextgen:datafactory/latest:getPipeline", args ?? new GetPipelineArgs(), options.WithVersion());
    }


    public sealed class GetPipelineArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The factory name.
        /// </summary>
        [Input("factoryName", required: true)]
        public string FactoryName { get; set; } = null!;

        /// <summary>
        /// The pipeline name.
        /// </summary>
        [Input("pipelineName", required: true)]
        public string PipelineName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPipelineArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPipelineResult
    {
        /// <summary>
        /// List of activities in pipeline.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.ControlActivityResponse, Outputs.ExecutionActivityResponse>> Activities;
        /// <summary>
        /// List of tags that can be used for describing the Pipeline.
        /// </summary>
        public readonly ImmutableArray<ImmutableDictionary<string, object>> Annotations;
        /// <summary>
        /// The max number of concurrent runs for the pipeline.
        /// </summary>
        public readonly int? Concurrency;
        /// <summary>
        /// The description of the pipeline.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Etag identifies change in the resource.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
        /// </summary>
        public readonly Outputs.PipelineResponseFolder? Folder;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of parameters for pipeline.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// Dimensions emitted by Pipeline.
        /// </summary>
        public readonly ImmutableDictionary<string, ImmutableDictionary<string, object>>? RunDimensions;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// List of variables for pipeline.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.VariableSpecificationResponse>? Variables;

        [OutputConstructor]
        private GetPipelineResult(
            ImmutableArray<Union<Outputs.ControlActivityResponse, Outputs.ExecutionActivityResponse>> activities,

            ImmutableArray<ImmutableDictionary<string, object>> annotations,

            int? concurrency,

            string? description,

            string etag,

            Outputs.PipelineResponseFolder? folder,

            string name,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            ImmutableDictionary<string, ImmutableDictionary<string, object>>? runDimensions,

            string type,

            ImmutableDictionary<string, Outputs.VariableSpecificationResponse>? variables)
        {
            Activities = activities;
            Annotations = annotations;
            Concurrency = concurrency;
            Description = description;
            Etag = etag;
            Folder = folder;
            Name = name;
            Parameters = parameters;
            RunDimensions = runDimensions;
            Type = type;
            Variables = variables;
        }
    }
}
