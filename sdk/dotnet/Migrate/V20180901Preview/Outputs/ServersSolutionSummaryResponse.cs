// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20180901Preview.Outputs
{

    [OutputType]
    public sealed class ServersSolutionSummaryResponse
    {
        /// <summary>
        /// Gets or sets the count of servers assessed.
        /// </summary>
        public readonly int? AssessedCount;
        /// <summary>
        /// Gets or sets the count of servers discovered.
        /// </summary>
        public readonly int? DiscoveredCount;
        /// <summary>
        /// Gets the Instance type.
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// Gets or sets the count of servers migrated.
        /// </summary>
        public readonly int? MigratedCount;
        /// <summary>
        /// Gets or sets the count of servers being replicated.
        /// </summary>
        public readonly int? ReplicatingCount;
        /// <summary>
        /// Gets or sets the count of servers test migrated.
        /// </summary>
        public readonly int? TestMigratedCount;

        [OutputConstructor]
        private ServersSolutionSummaryResponse(
            int? assessedCount,

            int? discoveredCount,

            string instanceType,

            int? migratedCount,

            int? replicatingCount,

            int? testMigratedCount)
        {
            AssessedCount = assessedCount;
            DiscoveredCount = discoveredCount;
            InstanceType = instanceType;
            MigratedCount = migratedCount;
            ReplicatingCount = replicatingCount;
            TestMigratedCount = testMigratedCount;
        }
    }
}