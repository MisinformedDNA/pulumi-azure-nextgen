// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearning.Latest.Inputs
{

    /// <summary>
    /// Web Service Parameter object for node and global parameter
    /// </summary>
    public sealed class WebServiceParameterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here.
        /// </summary>
        [Input("certificateThumbprint")]
        public Input<string>? CertificateThumbprint { get; set; }

        [Input("value")]
        private InputMap<object>? _value;

        /// <summary>
        /// The parameter value
        /// </summary>
        public InputMap<object> Value
        {
            get => _value ?? (_value = new InputMap<object>());
            set => _value = value;
        }

        public WebServiceParameterArgs()
        {
        }
    }
}
