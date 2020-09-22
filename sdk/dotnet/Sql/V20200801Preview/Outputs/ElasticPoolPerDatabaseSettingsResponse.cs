// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview.Outputs
{

    [OutputType]
    public sealed class ElasticPoolPerDatabaseSettingsResponse
    {
        /// <summary>
        /// The maximum capacity any one database can consume.
        /// </summary>
        public readonly double? MaxCapacity;
        /// <summary>
        /// The minimum capacity all databases are guaranteed.
        /// </summary>
        public readonly double? MinCapacity;

        [OutputConstructor]
        private ElasticPoolPerDatabaseSettingsResponse(
            double? maxCapacity,

            double? minCapacity)
        {
            MaxCapacity = maxCapacity;
            MinCapacity = minCapacity;
        }
    }
}
