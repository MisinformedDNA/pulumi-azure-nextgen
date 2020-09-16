// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SqlVirtualMachine.V20170301Preview.Outputs
{

    [OutputType]
    public sealed class AdditionalFeaturesServerConfigurationsResponse
    {
        /// <summary>
        /// Enable or disable R services (SQL 2016 onwards).
        /// </summary>
        public readonly bool? IsRServicesEnabled;

        [OutputConstructor]
        private AdditionalFeaturesServerConfigurationsResponse(bool? isRServicesEnabled)
        {
            IsRServicesEnabled = isRServicesEnabled;
        }
    }
}