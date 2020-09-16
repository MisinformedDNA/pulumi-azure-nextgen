// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class AzureBatchLinkedServiceResponse
    {
        /// <summary>
        /// The Azure Batch account access key.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? AccessKey;
        /// <summary>
        /// The Azure Batch account name. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> AccountName;
        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public readonly ImmutableArray<ImmutableDictionary<string, object>> Annotations;
        /// <summary>
        /// The Azure Batch URI. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> BatchUri;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? EncryptedCredential;
        /// <summary>
        /// The Azure Storage linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse LinkedServiceName;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The Azure Batch pool name. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> PoolName;
        /// <summary>
        /// Type of linked service.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private AzureBatchLinkedServiceResponse(
            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? accessKey,

            ImmutableDictionary<string, object> accountName,

            ImmutableArray<ImmutableDictionary<string, object>> annotations,

            ImmutableDictionary<string, object> batchUri,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            string? description,

            ImmutableDictionary<string, object>? encryptedCredential,

            Outputs.LinkedServiceReferenceResponse linkedServiceName,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            ImmutableDictionary<string, object> poolName,

            string type)
        {
            AccessKey = accessKey;
            AccountName = accountName;
            Annotations = annotations;
            BatchUri = batchUri;
            ConnectVia = connectVia;
            Description = description;
            EncryptedCredential = encryptedCredential;
            LinkedServiceName = linkedServiceName;
            Parameters = parameters;
            PoolName = poolName;
            Type = type;
        }
    }
}