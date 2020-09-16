// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabricMesh.V20180901Preview.Outputs
{

    [OutputType]
    public sealed class HttpRouteMatchHeaderResponse
    {
        /// <summary>
        /// Name of header to match in request.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// how to match header value
        /// </summary>
        public readonly string? Type;
        /// <summary>
        /// Value of header to match in request.
        /// </summary>
        public readonly string? Value;

        [OutputConstructor]
        private HttpRouteMatchHeaderResponse(
            string name,

            string? type,

            string? value)
        {
            Name = name;
            Type = type;
            Value = value;
        }
    }
}