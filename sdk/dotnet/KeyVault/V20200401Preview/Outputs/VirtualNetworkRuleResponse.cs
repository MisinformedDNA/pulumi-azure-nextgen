// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.V20200401Preview.Outputs
{

    [OutputType]
    public sealed class VirtualNetworkRuleResponse
    {
        /// <summary>
        /// Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private VirtualNetworkRuleResponse(string id)
        {
            Id = id;
        }
    }
}