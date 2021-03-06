// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20171201.Outputs
{

    [OutputType]
    public sealed class ApiErrorResponseResult
    {
        /// <summary>
        /// The error code.
        /// </summary>
        public readonly string? Code;
        /// <summary>
        /// The Api error details
        /// </summary>
        public readonly ImmutableArray<Outputs.ApiErrorBaseResponseResult> Details;
        /// <summary>
        /// The Api inner error
        /// </summary>
        public readonly Outputs.InnerErrorResponseResult? Innererror;
        /// <summary>
        /// The error message.
        /// </summary>
        public readonly string? Message;
        /// <summary>
        /// The target of the particular error.
        /// </summary>
        public readonly string? Target;

        [OutputConstructor]
        private ApiErrorResponseResult(
            string? code,

            ImmutableArray<Outputs.ApiErrorBaseResponseResult> details,

            Outputs.InnerErrorResponseResult? innererror,

            string? message,

            string? target)
        {
            Code = code;
            Details = details;
            Innererror = innererror;
            Message = message;
            Target = target;
        }
    }
}
