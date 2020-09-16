// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20170601.Inputs
{

    /// <summary>
    /// The time.
    /// </summary>
    public sealed class TimeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The hour.
        /// </summary>
        [Input("hours", required: true)]
        public Input<int> Hours { get; set; } = null!;

        /// <summary>
        /// The minute.
        /// </summary>
        [Input("minutes", required: true)]
        public Input<int> Minutes { get; set; } = null!;

        /// <summary>
        /// The second.
        /// </summary>
        [Input("seconds", required: true)]
        public Input<int> Seconds { get; set; } = null!;

        public TimeArgs()
        {
        }
    }
}