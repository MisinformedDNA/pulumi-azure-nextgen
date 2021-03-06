// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20200201.Inputs
{

    /// <summary>
    /// Profile for Windows VMs in the container service cluster.
    /// </summary>
    public sealed class ManagedClusterWindowsProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The administrator password to use for Windows VMs.
        /// </summary>
        [Input("adminPassword")]
        public Input<string>? AdminPassword { get; set; }

        /// <summary>
        /// The administrator username to use for Windows VMs.
        /// </summary>
        [Input("adminUsername", required: true)]
        public Input<string> AdminUsername { get; set; } = null!;

        public ManagedClusterWindowsProfileArgs()
        {
        }
    }
}
