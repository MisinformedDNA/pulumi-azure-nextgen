// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20181201.Inputs
{

    public sealed class PoolEndpointConfigurationArgs : Pulumi.ResourceArgs
    {
        [Input("inboundNatPools", required: true)]
        private InputList<Inputs.InboundNatPoolArgs>? _inboundNatPools;

        /// <summary>
        /// The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.
        /// </summary>
        public InputList<Inputs.InboundNatPoolArgs> InboundNatPools
        {
            get => _inboundNatPools ?? (_inboundNatPools = new InputList<Inputs.InboundNatPoolArgs>());
            set => _inboundNatPools = value;
        }

        public PoolEndpointConfigurationArgs()
        {
        }
    }
}