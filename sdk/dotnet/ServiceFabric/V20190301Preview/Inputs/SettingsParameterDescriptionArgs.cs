// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20190301Preview.Inputs
{

    /// <summary>
    /// Describes a parameter in fabric settings of the cluster.
    /// </summary>
    public sealed class SettingsParameterDescriptionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The parameter name of fabric setting.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The parameter value of fabric setting.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public SettingsParameterDescriptionArgs()
        {
        }
    }
}