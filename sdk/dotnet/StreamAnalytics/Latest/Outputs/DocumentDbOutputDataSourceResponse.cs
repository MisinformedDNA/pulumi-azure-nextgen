// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.Latest.Outputs
{

    [OutputType]
    public sealed class DocumentDbOutputDataSourceResponse
    {
        /// <summary>
        /// The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly string? AccountId;
        /// <summary>
        /// The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly string? AccountKey;
        /// <summary>
        /// The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly string? CollectionNamePattern;
        /// <summary>
        /// The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly string? Database;
        /// <summary>
        /// The name of the field in output events used to specify the primary key which insert or update operations are based on.
        /// </summary>
        public readonly string? DocumentId;
        /// <summary>
        /// The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
        /// </summary>
        public readonly string? PartitionKey;
        /// <summary>
        /// Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private DocumentDbOutputDataSourceResponse(
            string? accountId,

            string? accountKey,

            string? collectionNamePattern,

            string? database,

            string? documentId,

            string? partitionKey,

            string? type)
        {
            AccountId = accountId;
            AccountKey = accountKey;
            CollectionNamePattern = collectionNamePattern;
            Database = database;
            DocumentId = documentId;
            PartitionKey = partitionKey;
            Type = type;
        }
    }
}