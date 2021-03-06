// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// Definition of a single parameter for an entity.
    /// </summary>
    public sealed class ParameterSpecificationArgs : Pulumi.ResourceArgs
    {
        [Input("defaultValue")]
        private InputMap<object>? _defaultValue;

        /// <summary>
        /// Default value of parameter.
        /// </summary>
        public InputMap<object> DefaultValue
        {
            get => _defaultValue ?? (_defaultValue = new InputMap<object>());
            set => _defaultValue = value;
        }

        /// <summary>
        /// Parameter type.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ParameterSpecificationArgs()
        {
        }
    }
}
