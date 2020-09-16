// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Outputs
{

    [OutputType]
    public sealed class DatasetResponseFolder
    {
        /// <summary>
        /// The name of the folder that this Dataset is in.
        /// </summary>
        public readonly string? Name;

        [OutputConstructor]
        private DatasetResponseFolder(string? name)
        {
            Name = name;
        }
    }
}