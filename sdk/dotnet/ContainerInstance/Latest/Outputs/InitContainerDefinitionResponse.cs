// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerInstance.Latest.Outputs
{

    [OutputType]
    public sealed class InitContainerDefinitionResponse
    {
        /// <summary>
        /// The command to execute within the init container in exec form.
        /// </summary>
        public readonly ImmutableArray<string> Command;
        /// <summary>
        /// The environment variables to set in the init container.
        /// </summary>
        public readonly ImmutableArray<Outputs.EnvironmentVariableResponse> EnvironmentVariables;
        /// <summary>
        /// The image of the init container.
        /// </summary>
        public readonly string? Image;
        /// <summary>
        /// The instance view of the init container. Only valid in response.
        /// </summary>
        public readonly Outputs.InitContainerPropertiesDefinitionResponseInstanceView InstanceView;
        /// <summary>
        /// The name for the init container.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The volume mounts available to the init container.
        /// </summary>
        public readonly ImmutableArray<Outputs.VolumeMountResponse> VolumeMounts;

        [OutputConstructor]
        private InitContainerDefinitionResponse(
            ImmutableArray<string> command,

            ImmutableArray<Outputs.EnvironmentVariableResponse> environmentVariables,

            string? image,

            Outputs.InitContainerPropertiesDefinitionResponseInstanceView instanceView,

            string name,

            ImmutableArray<Outputs.VolumeMountResponse> volumeMounts)
        {
            Command = command;
            EnvironmentVariables = environmentVariables;
            Image = image;
            InstanceView = instanceView;
            Name = name;
            VolumeMounts = volumeMounts;
        }
    }
}