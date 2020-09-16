// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerInstance.V20191201.Inputs
{

    /// <summary>
    /// The init container definition.
    /// </summary>
    public sealed class InitContainerDefinitionArgs : Pulumi.ResourceArgs
    {
        [Input("command")]
        private InputList<string>? _command;

        /// <summary>
        /// The command to execute within the init container in exec form.
        /// </summary>
        public InputList<string> Command
        {
            get => _command ?? (_command = new InputList<string>());
            set => _command = value;
        }

        [Input("environmentVariables")]
        private InputList<Inputs.EnvironmentVariableArgs>? _environmentVariables;

        /// <summary>
        /// The environment variables to set in the init container.
        /// </summary>
        public InputList<Inputs.EnvironmentVariableArgs> EnvironmentVariables
        {
            get => _environmentVariables ?? (_environmentVariables = new InputList<Inputs.EnvironmentVariableArgs>());
            set => _environmentVariables = value;
        }

        /// <summary>
        /// The image of the init container.
        /// </summary>
        [Input("image")]
        public Input<string>? Image { get; set; }

        /// <summary>
        /// The name for the init container.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("volumeMounts")]
        private InputList<Inputs.VolumeMountArgs>? _volumeMounts;

        /// <summary>
        /// The volume mounts available to the init container.
        /// </summary>
        public InputList<Inputs.VolumeMountArgs> VolumeMounts
        {
            get => _volumeMounts ?? (_volumeMounts = new InputList<Inputs.VolumeMountArgs>());
            set => _volumeMounts = value;
        }

        public InitContainerDefinitionArgs()
        {
        }
    }
}