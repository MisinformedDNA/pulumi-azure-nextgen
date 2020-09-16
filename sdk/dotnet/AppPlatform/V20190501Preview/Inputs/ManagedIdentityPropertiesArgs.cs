// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AppPlatform.V20190501Preview.Inputs
{

    /// <summary>
    /// Managed identity properties retrieved from ARM request headers.
    /// </summary>
    public sealed class ManagedIdentityPropertiesArgs : Pulumi.ResourceArgs
    {
        [Input("principalId")]
        public Input<string>? PrincipalId { get; set; }

        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        public ManagedIdentityPropertiesArgs()
        {
        }
    }
}