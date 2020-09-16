// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20160301.Outputs
{

    [OutputType]
    public sealed class RuleManagementEventClaimsDataSourceResponse
    {
        /// <summary>
        /// the email address.
        /// </summary>
        public readonly string? EmailAddress;

        [OutputConstructor]
        private RuleManagementEventClaimsDataSourceResponse(string? emailAddress)
        {
            EmailAddress = emailAddress;
        }
    }
}