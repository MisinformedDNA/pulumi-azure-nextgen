// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.V20200401Preview.Inputs
{

    /// <summary>
    /// Properties of the managed HSM Pool
    /// </summary>
    public sealed class ManagedHsmPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The create mode to indicate whether the resource is being created or is being recovered from a deleted resource.
        /// </summary>
        [Input("createMode")]
        public Input<string>? CreateMode { get; set; }

        /// <summary>
        /// Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible.
        /// </summary>
        [Input("enablePurgeProtection")]
        public Input<bool>? EnablePurgeProtection { get; set; }

        /// <summary>
        /// Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. If it's not set to any value(true or false) when creating new managed HSM pool, it will be set to true by default. Once set to true, it cannot be reverted to false.
        /// </summary>
        [Input("enableSoftDelete")]
        public Input<bool>? EnableSoftDelete { get; set; }

        /// <summary>
        /// The URI of the managed hsm pool for performing operations on keys.
        /// </summary>
        [Input("hsmUri")]
        public Input<string>? HsmUri { get; set; }

        [Input("initialAdminObjectIds")]
        private InputList<string>? _initialAdminObjectIds;

        /// <summary>
        /// Array of initial administrators object ids for this managed hsm pool.
        /// </summary>
        public InputList<string> InitialAdminObjectIds
        {
            get => _initialAdminObjectIds ?? (_initialAdminObjectIds = new InputList<string>());
            set => _initialAdminObjectIds = value;
        }

        /// <summary>
        /// softDelete data retention days. It accepts &gt;=7 and &lt;=90.
        /// </summary>
        [Input("softDeleteRetentionInDays")]
        public Input<int>? SoftDeleteRetentionInDays { get; set; }

        /// <summary>
        /// The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        public ManagedHsmPropertiesArgs()
        {
        }
    }
}
