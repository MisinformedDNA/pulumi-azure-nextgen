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
    /// Azure Data Lake Storage Gen2 linked service.
    /// </summary>
    public sealed class AzureBlobFSLinkedServiceArgs : Pulumi.ResourceArgs
    {
        [Input("accountKey")]
        private InputMap<object>? _accountKey;

        /// <summary>
        /// Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> AccountKey
        {
            get => _accountKey ?? (_accountKey = new InputMap<object>());
            set => _accountKey = value;
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

        [Input("azureCloudType")]
        private InputMap<object>? _azureCloudType;

        /// <summary>
        /// Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> AzureCloudType
        {
            get => _azureCloudType ?? (_azureCloudType = new InputMap<object>());
            set => _azureCloudType = value;
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

        [Input("servicePrincipalId")]
        private InputMap<object>? _servicePrincipalId;

        /// <summary>
        /// The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> ServicePrincipalId
        {
            get => _servicePrincipalId ?? (_servicePrincipalId = new InputMap<object>());
            set => _servicePrincipalId = value;
        }

        /// <summary>
        /// The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account.
        /// </summary>
        [Input("servicePrincipalKey")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalKey { get; set; }

        [Input("tenant")]
        private InputMap<object>? _tenant;

        /// <summary>
        /// The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Tenant
        {
            get => _tenant ?? (_tenant = new InputMap<object>());
            set => _tenant = value;
        }

        /// <summary>
        /// Type of linked service.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("url", required: true)]
        private InputMap<object>? _url;

        /// <summary>
        /// Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Url
        {
            get => _url ?? (_url = new InputMap<object>());
            set => _url = value;
        }

        public AzureBlobFSLinkedServiceArgs()
        {
        }
    }
}
