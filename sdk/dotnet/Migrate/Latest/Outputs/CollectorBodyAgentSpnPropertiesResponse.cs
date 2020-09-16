// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.Latest.Outputs
{

    [OutputType]
    public sealed class CollectorBodyAgentSpnPropertiesResponse
    {
        /// <summary>
        /// Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
        /// </summary>
        public readonly string? ApplicationId;
        /// <summary>
        /// Intended audience for the service principal.
        /// </summary>
        public readonly string? Audience;
        /// <summary>
        /// AAD Authority URL which was used to request the token for the service principal.
        /// </summary>
        public readonly string? Authority;
        /// <summary>
        /// Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
        /// </summary>
        public readonly string? ObjectId;
        /// <summary>
        /// Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
        /// </summary>
        public readonly string? TenantId;

        [OutputConstructor]
        private CollectorBodyAgentSpnPropertiesResponse(
            string? applicationId,

            string? audience,

            string? authority,

            string? objectId,

            string? tenantId)
        {
            ApplicationId = applicationId;
            Audience = audience;
            Authority = authority;
            ObjectId = objectId;
            TenantId = tenantId;
        }
    }
}