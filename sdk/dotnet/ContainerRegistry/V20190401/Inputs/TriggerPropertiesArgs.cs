// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190401.Inputs
{

    /// <summary>
    /// The properties of a trigger.
    /// </summary>
    public sealed class TriggerPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The trigger based on base image dependencies.
        /// </summary>
        [Input("baseImageTrigger")]
        public Input<Inputs.BaseImageTriggerArgs>? BaseImageTrigger { get; set; }

        [Input("sourceTriggers")]
        private InputList<Inputs.SourceTriggerArgs>? _sourceTriggers;

        /// <summary>
        /// The collection of triggers based on source code repository.
        /// </summary>
        public InputList<Inputs.SourceTriggerArgs> SourceTriggers
        {
            get => _sourceTriggers ?? (_sourceTriggers = new InputList<Inputs.SourceTriggerArgs>());
            set => _sourceTriggers = value;
        }

        [Input("timerTriggers")]
        private InputList<Inputs.TimerTriggerArgs>? _timerTriggers;

        /// <summary>
        /// The collection of timer triggers.
        /// </summary>
        public InputList<Inputs.TimerTriggerArgs> TimerTriggers
        {
            get => _timerTriggers ?? (_timerTriggers = new InputList<Inputs.TimerTriggerArgs>());
            set => _timerTriggers = value;
        }

        public TriggerPropertiesArgs()
        {
        }
    }
}