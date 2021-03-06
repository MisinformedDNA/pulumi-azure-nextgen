// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class SalesforceMarketingCloudObjectDatasetResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public readonly ImmutableArray<ImmutableDictionary<string, object>> Annotations;
        /// <summary>
        /// Dataset description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse LinkedServiceName;
        /// <summary>
        /// Parameters for dataset.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Structure;
        /// <summary>
        /// Type of dataset.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private SalesforceMarketingCloudObjectDatasetResponse(
            ImmutableArray<ImmutableDictionary<string, object>> annotations,

            string? description,

            Outputs.LinkedServiceReferenceResponse linkedServiceName,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            ImmutableDictionary<string, object>? structure,

            string type)
        {
            Annotations = annotations;
            Description = description;
            LinkedServiceName = linkedServiceName;
            Parameters = parameters;
            Structure = structure;
            Type = type;
        }
    }
}
