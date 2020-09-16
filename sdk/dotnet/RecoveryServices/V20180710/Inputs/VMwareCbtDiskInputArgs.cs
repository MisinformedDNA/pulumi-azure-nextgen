// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710.Inputs
{

    /// <summary>
    /// VMwareCbt disk input.
    /// </summary>
    public sealed class VMwareCbtDiskInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The disk Id.
        /// </summary>
        [Input("diskId", required: true)]
        public Input<string> DiskId { get; set; } = null!;

        /// <summary>
        /// The disk type.
        /// </summary>
        [Input("diskType")]
        public Input<string>? DiskType { get; set; }

        /// <summary>
        /// A value indicating whether the disk is the OS disk.
        /// </summary>
        [Input("isOSDisk", required: true)]
        public Input<string> IsOSDisk { get; set; } = null!;

        /// <summary>
        /// The log storage account ARM Id.
        /// </summary>
        [Input("logStorageAccountId", required: true)]
        public Input<string> LogStorageAccountId { get; set; } = null!;

        /// <summary>
        /// The key vault secret name of the log storage account.
        /// </summary>
        [Input("logStorageAccountSasSecretName", required: true)]
        public Input<string> LogStorageAccountSasSecretName { get; set; } = null!;

        public VMwareCbtDiskInputArgs()
        {
        }
    }
}