// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerInstance.V20181001.Outputs
{

    [OutputType]
    public sealed class ContainerPropertiesResponseInstanceView
    {
        /// <summary>
        /// Current container instance state.
        /// </summary>
        public readonly Outputs.ContainerStateResponse CurrentState;
        /// <summary>
        /// The events of the container instance.
        /// </summary>
        public readonly ImmutableArray<Outputs.EventResponse> Events;
        /// <summary>
        /// Previous container instance state.
        /// </summary>
        public readonly Outputs.ContainerStateResponse PreviousState;
        /// <summary>
        /// The number of times that the container instance has been restarted.
        /// </summary>
        public readonly int RestartCount;

        [OutputConstructor]
        private ContainerPropertiesResponseInstanceView(
            Outputs.ContainerStateResponse currentState,

            ImmutableArray<Outputs.EventResponse> events,

            Outputs.ContainerStateResponse previousState,

            int restartCount)
        {
            CurrentState = currentState;
            Events = events;
            PreviousState = previousState;
            RestartCount = restartCount;
        }
    }
}