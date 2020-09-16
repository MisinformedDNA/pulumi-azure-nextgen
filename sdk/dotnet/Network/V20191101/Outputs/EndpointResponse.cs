// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191101.Outputs
{

    [OutputType]
    public sealed class EndpointResponse
    {
        /// <summary>
        /// The endpoint URL
        /// </summary>
        public readonly string? Endpoint;
        /// <summary>
        /// The name of the endpoint
        /// </summary>
        public readonly string? Name;

        [OutputConstructor]
        private EndpointResponse(
            string? endpoint,

            string? name)
        {
            Endpoint = endpoint;
            Name = name;
        }
    }
}