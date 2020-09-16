// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20150801Preview.Inputs
{

    public sealed class AS2ErrorSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The value indicating whether to resend message If MDN is not received.
        /// </summary>
        [Input("resendIfMdnNotReceived")]
        public Input<bool>? ResendIfMdnNotReceived { get; set; }

        /// <summary>
        /// The value indicating whether to suspend duplicate message.
        /// </summary>
        [Input("suspendDuplicateMessage")]
        public Input<bool>? SuspendDuplicateMessage { get; set; }

        public AS2ErrorSettingsArgs()
        {
        }
    }
}