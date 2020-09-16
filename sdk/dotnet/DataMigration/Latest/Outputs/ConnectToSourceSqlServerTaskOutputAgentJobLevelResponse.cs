// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest.Outputs
{

    [OutputType]
    public sealed class ConnectToSourceSqlServerTaskOutputAgentJobLevelResponse
    {
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The state of the original AgentJob.
        /// </summary>
        public readonly bool IsEnabled;
        /// <summary>
        /// The type of AgentJob.
        /// </summary>
        public readonly string JobCategory;
        /// <summary>
        /// The owner of the AgentJob
        /// </summary>
        public readonly string JobOwner;
        /// <summary>
        /// UTC Date and time when the AgentJob was last executed.
        /// </summary>
        public readonly string LastExecutedOn;
        /// <summary>
        /// Information about eligibility of agent job for migration.
        /// </summary>
        public readonly Outputs.MigrationEligibilityInfoResponse MigrationEligibility;
        /// <summary>
        /// AgentJob name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Type of result - database level or task level
        /// </summary>
        public readonly string ResultType;

        [OutputConstructor]
        private ConnectToSourceSqlServerTaskOutputAgentJobLevelResponse(
            string id,

            bool isEnabled,

            string jobCategory,

            string jobOwner,

            string lastExecutedOn,

            Outputs.MigrationEligibilityInfoResponse migrationEligibility,

            string name,

            string resultType)
        {
            Id = id;
            IsEnabled = isEnabled;
            JobCategory = jobCategory;
            JobOwner = jobOwner;
            LastExecutedOn = lastExecutedOn;
            MigrationEligibility = migrationEligibility;
            Name = name;
            ResultType = resultType;
        }
    }
}