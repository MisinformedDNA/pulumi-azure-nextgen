// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BatchAI.V20180301.Outputs
{

    [OutputType]
    public sealed class PerformanceCountersSettingsResponse
    {
        /// <summary>
        /// If provided, Batch AI will upload node performance counters to the corresponding Azure Application Insights account.
        /// </summary>
        public readonly Outputs.AppInsightsReferenceResponse AppInsightsReference;

        [OutputConstructor]
        private PerformanceCountersSettingsResponse(Outputs.AppInsightsReferenceResponse appInsightsReference)
        {
            AppInsightsReference = appInsightsReference;
        }
    }
}