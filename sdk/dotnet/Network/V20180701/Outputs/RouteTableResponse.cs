// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180701.Outputs
{

    [OutputType]
    public sealed class RouteTableResponse
    {
        /// <summary>
        /// Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
        /// </summary>
        public readonly bool? DisableBgpRoutePropagation;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Collection of routes contained within a route table.
        /// </summary>
        public readonly ImmutableArray<Outputs.RouteResponse> Routes;
        /// <summary>
        /// A collection of references to subnets.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubnetResponse> Subnets;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private RouteTableResponse(
            bool? disableBgpRoutePropagation,

            string? etag,

            string? id,

            string? location,

            string name,

            string? provisioningState,

            ImmutableArray<Outputs.RouteResponse> routes,

            ImmutableArray<Outputs.SubnetResponse> subnets,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            DisableBgpRoutePropagation = disableBgpRoutePropagation;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Routes = routes;
            Subnets = subnets;
            Tags = tags;
            Type = type;
        }
    }
}