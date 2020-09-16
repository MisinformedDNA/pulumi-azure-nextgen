// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HanaOnAzure.V20171103Preview.Inputs
{

    /// <summary>
    /// Specifies the disk information fo the HANA instance
    /// </summary>
    public sealed class DiskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the size of an empty data disk in gigabytes.
        /// </summary>
        [Input("diskSizeGB")]
        public Input<int>? DiskSizeGB { get; set; }

        /// <summary>
        /// The disk name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public DiskArgs()
        {
        }
    }
}