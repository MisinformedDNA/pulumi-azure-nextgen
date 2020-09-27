// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20200214Preview.Outputs
{

    [OutputType]
    public sealed class MaintenanceWindowResponse
    {
        /// <summary>
        /// indicates whether custom window is enabled or disabled
        /// </summary>
        public readonly string? CustomWindow;
        /// <summary>
        /// day of week for maintenance window
        /// </summary>
        public readonly int? DayOfWeek;
        /// <summary>
        /// start hour for maintenance window
        /// </summary>
        public readonly int? StartHour;
        /// <summary>
        /// start minute for maintenance window
        /// </summary>
        public readonly int? StartMinute;

        [OutputConstructor]
        private MaintenanceWindowResponse(
            string? customWindow,

            int? dayOfWeek,

            int? startHour,

            int? startMinute)
        {
            CustomWindow = customWindow;
            DayOfWeek = dayOfWeek;
            StartHour = startHour;
            StartMinute = startMinute;
        }
    }
}