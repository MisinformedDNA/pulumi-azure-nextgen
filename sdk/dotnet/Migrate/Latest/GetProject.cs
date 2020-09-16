// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.Latest
{
    public static class GetProject
    {
        public static Task<GetProjectResult> InvokeAsync(GetProjectArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetProjectResult>("azure-nextgen:migrate/latest:getProject", args ?? new GetProjectArgs(), options.WithVersion());
    }


    public sealed class GetProjectArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the Azure Migrate project.
        /// </summary>
        [Input("projectName", required: true)]
        public string ProjectName { get; set; } = null!;

        /// <summary>
        /// Name of the Azure Resource Group that project is part of.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetProjectArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetProjectResult
    {
        /// <summary>
        /// For optimistic concurrency control.
        /// </summary>
        public readonly string? ETag;
        /// <summary>
        /// Azure location in which project is created.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Name of the project.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties of the project.
        /// </summary>
        public readonly Outputs.ProjectPropertiesResponse Properties;
        /// <summary>
        /// Tags provided by Azure Tagging service.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Tags;
        /// <summary>
        /// Type of the object = [Microsoft.Migrate/assessmentProjects].
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetProjectResult(
            string? eTag,

            string? location,

            string name,

            Outputs.ProjectPropertiesResponse properties,

            ImmutableDictionary<string, object>? tags,

            string type)
        {
            ETag = eTag;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}