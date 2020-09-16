// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180715Preview.Outputs
{

    [OutputType]
    public sealed class MongoDbShardKeySettingResponse
    {
        /// <summary>
        /// The fields within the shard key
        /// </summary>
        public readonly ImmutableArray<Outputs.MongoDbShardKeyFieldResponse> Fields;
        /// <summary>
        /// Whether the shard key is unique
        /// </summary>
        public readonly bool IsUnique;

        [OutputConstructor]
        private MongoDbShardKeySettingResponse(
            ImmutableArray<Outputs.MongoDbShardKeyFieldResponse> fields,

            bool isUnique)
        {
            Fields = fields;
            IsUnique = isUnique;
        }
    }
}