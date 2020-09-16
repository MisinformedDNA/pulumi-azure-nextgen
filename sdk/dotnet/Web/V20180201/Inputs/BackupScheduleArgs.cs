// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20180201.Inputs
{

    /// <summary>
    /// Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
    /// </summary>
    public sealed class BackupScheduleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
        /// </summary>
        [Input("frequencyInterval", required: true)]
        public int FrequencyInterval { get; set; }

        /// <summary>
        /// The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
        /// </summary>
        [Input("frequencyUnit", required: true)]
        public string FrequencyUnit { get; set; } = null!;

        /// <summary>
        /// True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
        /// </summary>
        [Input("keepAtLeastOneBackup", required: true)]
        public bool KeepAtLeastOneBackup { get; set; }

        /// <summary>
        /// After how many days backups should be deleted.
        /// </summary>
        [Input("retentionPeriodInDays", required: true)]
        public int RetentionPeriodInDays { get; set; }

        /// <summary>
        /// When the schedule should start working.
        /// </summary>
        [Input("startTime")]
        public string? StartTime { get; set; }

        public BackupScheduleArgs()
        {
        }
    }
}