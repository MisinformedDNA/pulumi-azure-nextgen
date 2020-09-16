// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20190513.Inputs
{

    /// <summary>
    /// Additional information on the backed up item.
    /// </summary>
    public sealed class MabFileFolderProtectedItemExtendedInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Last time when the agent data synced to service.
        /// </summary>
        [Input("lastRefreshedAt")]
        public Input<string>? LastRefreshedAt { get; set; }

        /// <summary>
        /// The oldest backup copy available.
        /// </summary>
        [Input("oldestRecoveryPoint")]
        public Input<string>? OldestRecoveryPoint { get; set; }

        /// <summary>
        /// Number of backup copies associated with the backup item.
        /// </summary>
        [Input("recoveryPointCount")]
        public Input<int>? RecoveryPointCount { get; set; }

        public MabFileFolderProtectedItemExtendedInfoArgs()
        {
        }
    }
}