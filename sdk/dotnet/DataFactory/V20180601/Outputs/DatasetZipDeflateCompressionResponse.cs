// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class DatasetZipDeflateCompressionResponse
    {
        /// <summary>
        /// The ZipDeflate compression level.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Level;
        /// <summary>
        /// Type of dataset compression.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private DatasetZipDeflateCompressionResponse(
            ImmutableDictionary<string, object>? level,

            string type)
        {
            Level = level;
            Type = type;
        }
    }
}
