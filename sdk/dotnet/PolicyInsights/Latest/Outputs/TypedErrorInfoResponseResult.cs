// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.PolicyInsights.Latest.Outputs
{

    [OutputType]
    public sealed class TypedErrorInfoResponseResult
    {
        /// <summary>
        /// The type of included error details.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private TypedErrorInfoResponseResult(string type)
        {
            Type = type;
        }
    }
}
