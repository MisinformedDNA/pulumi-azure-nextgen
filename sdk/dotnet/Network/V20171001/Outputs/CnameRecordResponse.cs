// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20171001.Outputs
{

    [OutputType]
    public sealed class CnameRecordResponse
    {
        /// <summary>
        /// The canonical name for this CNAME record.
        /// </summary>
        public readonly string? Cname;

        [OutputConstructor]
        private CnameRecordResponse(string? cname)
        {
            Cname = cname;
        }
    }
}