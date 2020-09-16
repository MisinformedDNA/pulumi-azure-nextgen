// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Scheduler.Latest.Outputs
{

    [OutputType]
    public sealed class OAuthAuthenticationResponse
    {
        /// <summary>
        /// Gets or sets the audience.
        /// </summary>
        public readonly string? Audience;
        /// <summary>
        /// Gets or sets the client identifier.
        /// </summary>
        public readonly string? ClientId;
        /// <summary>
        /// Gets or sets the secret, return value will always be empty.
        /// </summary>
        public readonly string? Secret;
        /// <summary>
        /// Gets or sets the tenant.
        /// </summary>
        public readonly string? Tenant;
        /// <summary>
        /// Gets or sets the HTTP authentication type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private OAuthAuthenticationResponse(
            string? audience,

            string? clientId,

            string? secret,

            string? tenant,

            string type)
        {
            Audience = audience;
            ClientId = clientId;
            Secret = secret;
            Tenant = tenant;
            Type = type;
        }
    }
}