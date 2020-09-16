// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.Latest.Outputs
{

    [OutputType]
    public sealed class WebhookReceiverResponse
    {
        /// <summary>
        /// Indicates the identifier uri for aad auth.
        /// </summary>
        public readonly string? IdentifierUri;
        /// <summary>
        /// The name of the webhook receiver. Names must be unique across all receivers within an action group.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Indicates the webhook app object Id for aad auth.
        /// </summary>
        public readonly string? ObjectId;
        /// <summary>
        /// The URI where webhooks should be sent.
        /// </summary>
        public readonly string ServiceUri;
        /// <summary>
        /// Indicates the tenant id for aad auth.
        /// </summary>
        public readonly string? TenantId;
        /// <summary>
        /// Indicates whether or not use AAD authentication.
        /// </summary>
        public readonly bool? UseAadAuth;
        /// <summary>
        /// Indicates whether to use common alert schema.
        /// </summary>
        public readonly bool UseCommonAlertSchema;

        [OutputConstructor]
        private WebhookReceiverResponse(
            string? identifierUri,

            string name,

            string? objectId,

            string serviceUri,

            string? tenantId,

            bool? useAadAuth,

            bool useCommonAlertSchema)
        {
            IdentifierUri = identifierUri;
            Name = name;
            ObjectId = objectId;
            ServiceUri = serviceUri;
            TenantId = tenantId;
            UseAadAuth = useAadAuth;
            UseCommonAlertSchema = useCommonAlertSchema;
        }
    }
}