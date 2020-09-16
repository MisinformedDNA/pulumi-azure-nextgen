// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AppConfiguration.V20191001.Outputs
{

    [OutputType]
    public sealed class ResourceIdentityResponse
    {
        /// <summary>
        /// The principal id of the identity. This property will only be provided for a system-assigned identity.
        /// </summary>
        public readonly string PrincipalId;
        /// <summary>
        /// The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
        /// </summary>
        public readonly string TenantId;
        /// <summary>
        /// The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
        /// </summary>
        public readonly string? Type;
        /// <summary>
        /// The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.UserIdentityResponse>? UserAssignedIdentities;

        [OutputConstructor]
        private ResourceIdentityResponse(
            string principalId,

            string tenantId,

            string? type,

            ImmutableDictionary<string, Outputs.UserIdentityResponse>? userAssignedIdentities)
        {
            PrincipalId = principalId;
            TenantId = tenantId;
            Type = type;
            UserAssignedIdentities = userAssignedIdentities;
        }
    }
}