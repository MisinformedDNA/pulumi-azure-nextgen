// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20200601Preview.Inputs
{

    /// <summary>
    /// The object representing continuous mode backup policy.
    /// </summary>
    public sealed class ContinuousModeBackupPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes the mode of backups.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ContinuousModeBackupPolicyArgs()
        {
        }
    }
}