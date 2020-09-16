// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HardwareSecurityModules.V20181031Preview.Inputs
{

    public sealed class NetworkProfileArgs : Pulumi.ResourceArgs
    {
        [Input("networkInterfaces")]
        private InputList<Inputs.NetworkInterfaceArgs>? _networkInterfaces;

        /// <summary>
        /// Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
        /// </summary>
        public InputList<Inputs.NetworkInterfaceArgs> NetworkInterfaces
        {
            get => _networkInterfaces ?? (_networkInterfaces = new InputList<Inputs.NetworkInterfaceArgs>());
            set => _networkInterfaces = value;
        }

        /// <summary>
        /// Specifies the identifier of the subnet.
        /// </summary>
        [Input("subnet")]
        public Input<Inputs.ApiEntityReferenceArgs>? Subnet { get; set; }

        public NetworkProfileArgs()
        {
        }
    }
}