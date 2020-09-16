// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20160601.Inputs
{

    /// <summary>
    /// The service with name and endpoint names
    /// </summary>
    public sealed class WsdlServiceArgs : Pulumi.ResourceArgs
    {
        [Input("endpointQualifiedNames")]
        private InputList<string>? _endpointQualifiedNames;

        /// <summary>
        /// List of the endpoints' qualified names
        /// </summary>
        public InputList<string> EndpointQualifiedNames
        {
            get => _endpointQualifiedNames ?? (_endpointQualifiedNames = new InputList<string>());
            set => _endpointQualifiedNames = value;
        }

        /// <summary>
        /// The service's qualified name
        /// </summary>
        [Input("qualifiedName", required: true)]
        public Input<string> QualifiedName { get; set; } = null!;

        public WsdlServiceArgs()
        {
        }
    }
}