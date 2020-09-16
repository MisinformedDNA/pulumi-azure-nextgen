// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ManagedNetwork.V20190601Preview
{
    public static class GetManagedNetworkGroup
    {
        public static Task<GetManagedNetworkGroupResult> InvokeAsync(GetManagedNetworkGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagedNetworkGroupResult>("azure-nextgen:managednetwork/v20190601preview:getManagedNetworkGroup", args ?? new GetManagedNetworkGroupArgs(), options.WithVersion());
    }


    public sealed class GetManagedNetworkGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Managed Network Group.
        /// </summary>
        [Input("managedNetworkGroupName", required: true)]
        public string ManagedNetworkGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Managed Network.
        /// </summary>
        [Input("managedNetworkName", required: true)]
        public string ManagedNetworkName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetManagedNetworkGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagedNetworkGroupResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Responsibility role under which this Managed Network Group will be created
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The collection of management groups covered by the Managed Network
        /// </summary>
        public readonly ImmutableArray<Outputs.ResourceIdResponse> ManagementGroups;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning state of the ManagedNetwork resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The collection of  subnets covered by the Managed Network
        /// </summary>
        public readonly ImmutableArray<Outputs.ResourceIdResponse> Subnets;
        /// <summary>
        /// The collection of subscriptions covered by the Managed Network
        /// </summary>
        public readonly ImmutableArray<Outputs.ResourceIdResponse> Subscriptions;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The collection of virtual nets covered by the Managed Network
        /// </summary>
        public readonly ImmutableArray<Outputs.ResourceIdResponse> VirtualNetworks;

        [OutputConstructor]
        private GetManagedNetworkGroupResult(
            string etag,

            string? kind,

            string? location,

            ImmutableArray<Outputs.ResourceIdResponse> managementGroups,

            string name,

            string provisioningState,

            ImmutableArray<Outputs.ResourceIdResponse> subnets,

            ImmutableArray<Outputs.ResourceIdResponse> subscriptions,

            string type,

            ImmutableArray<Outputs.ResourceIdResponse> virtualNetworks)
        {
            Etag = etag;
            Kind = kind;
            Location = location;
            ManagementGroups = managementGroups;
            Name = name;
            ProvisioningState = provisioningState;
            Subnets = subnets;
            Subscriptions = subscriptions;
            Type = type;
            VirtualNetworks = virtualNetworks;
        }
    }
}