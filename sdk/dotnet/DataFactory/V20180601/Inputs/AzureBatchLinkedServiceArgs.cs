// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// Azure Batch linked service.
    /// </summary>
    public sealed class AzureBatchLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Azure Batch account access key.
        /// </summary>
        [Input("accessKey")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? AccessKey { get; set; }

        [Input("accountName", required: true)]
        private InputMap<object>? _accountName;

        /// <summary>
        /// The Azure Batch account name. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> AccountName
        {
            get => _accountName ?? (_accountName = new InputMap<object>());
            set => _accountName = value;
        }

        [Input("annotations")]
        private InputList<ImmutableDictionary<string, object>>? _annotations;

        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public InputList<ImmutableDictionary<string, object>> Annotations
        {
            get => _annotations ?? (_annotations = new InputList<ImmutableDictionary<string, object>>());
            set => _annotations = value;
        }

        [Input("batchUri", required: true)]
        private InputMap<object>? _batchUri;

        /// <summary>
        /// The Azure Batch URI. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> BatchUri
        {
            get => _batchUri ?? (_batchUri = new InputMap<object>());
            set => _batchUri = value;
        }

        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        [Input("connectVia")]
        public Input<Inputs.IntegrationRuntimeReferenceArgs>? ConnectVia { get; set; }

        /// <summary>
        /// Linked service description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("encryptedCredential")]
        private InputMap<object>? _encryptedCredential;

        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> EncryptedCredential
        {
            get => _encryptedCredential ?? (_encryptedCredential = new InputMap<object>());
            set => _encryptedCredential = value;
        }

        /// <summary>
        /// The Azure Storage linked service reference.
        /// </summary>
        [Input("linkedServiceName", required: true)]
        public Input<Inputs.LinkedServiceReferenceArgs> LinkedServiceName { get; set; } = null!;

        [Input("parameters")]
        private InputMap<Inputs.ParameterSpecificationArgs>? _parameters;

        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public InputMap<Inputs.ParameterSpecificationArgs> Parameters
        {
            get => _parameters ?? (_parameters = new InputMap<Inputs.ParameterSpecificationArgs>());
            set => _parameters = value;
        }

        [Input("poolName", required: true)]
        private InputMap<object>? _poolName;

        /// <summary>
        /// The Azure Batch pool name. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> PoolName
        {
            get => _poolName ?? (_poolName = new InputMap<object>());
            set => _poolName = value;
        }

        /// <summary>
        /// Type of linked service.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public AzureBatchLinkedServiceArgs()
        {
        }
    }
}