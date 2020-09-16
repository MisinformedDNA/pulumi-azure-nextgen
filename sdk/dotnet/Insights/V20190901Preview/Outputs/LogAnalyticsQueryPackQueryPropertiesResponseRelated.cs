// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20190901Preview.Outputs
{

    [OutputType]
    public sealed class LogAnalyticsQueryPackQueryPropertiesResponseRelated
    {
        /// <summary>
        /// The related categories for the function.
        /// </summary>
        public readonly ImmutableArray<string> Categories;
        /// <summary>
        /// The related resource types for the function.
        /// </summary>
        public readonly ImmutableArray<string> ResourceTypes;
        /// <summary>
        /// The related Log Analytics solutions for the function.
        /// </summary>
        public readonly ImmutableArray<string> Solutions;

        [OutputConstructor]
        private LogAnalyticsQueryPackQueryPropertiesResponseRelated(
            ImmutableArray<string> categories,

            ImmutableArray<string> resourceTypes,

            ImmutableArray<string> solutions)
        {
            Categories = categories;
            ResourceTypes = resourceTypes;
            Solutions = solutions;
        }
    }
}