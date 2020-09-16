// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20160201.Outputs
{

    [OutputType]
    public sealed class SkuResponse
    {
        /// <summary>
        /// The sku capacity.
        /// </summary>
        public readonly int? Capacity;
        /// <summary>
        /// The sku family.
        /// </summary>
        public readonly string? Family;
        /// <summary>
        /// The sku model.
        /// </summary>
        public readonly string? Model;
        /// <summary>
        /// The sku name.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The sku size.
        /// </summary>
        public readonly string? Size;
        /// <summary>
        /// The sku tier.
        /// </summary>
        public readonly string? Tier;

        [OutputConstructor]
        private SkuResponse(
            int? capacity,

            string? family,

            string? model,

            string? name,

            string? size,

            string? tier)
        {
            Capacity = capacity;
            Family = family;
            Model = model;
            Name = name;
            Size = size;
            Tier = tier;
        }
    }
}