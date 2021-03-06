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
    /// HDInsight linked service.
    /// </summary>
    public sealed class HDInsightLinkedServiceArgs : Pulumi.ResourceArgs
    {
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

        [Input("clusterUri", required: true)]
        private InputMap<object>? _clusterUri;

        /// <summary>
        /// HDInsight cluster URI. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> ClusterUri
        {
            get => _clusterUri ?? (_clusterUri = new InputMap<object>());
            set => _clusterUri = value;
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

        [Input("fileSystem")]
        private InputMap<object>? _fileSystem;

        /// <summary>
        /// Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> FileSystem
        {
            get => _fileSystem ?? (_fileSystem = new InputMap<object>());
            set => _fileSystem = value;
        }

        /// <summary>
        /// A reference to the Azure SQL linked service that points to the HCatalog database.
        /// </summary>
        [Input("hcatalogLinkedServiceName")]
        public Input<Inputs.LinkedServiceReferenceArgs>? HcatalogLinkedServiceName { get; set; }

        [Input("isEspEnabled")]
        private InputMap<object>? _isEspEnabled;

        /// <summary>
        /// Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
        /// </summary>
        public InputMap<object> IsEspEnabled
        {
            get => _isEspEnabled ?? (_isEspEnabled = new InputMap<object>());
            set => _isEspEnabled = value;
        }

        /// <summary>
        /// The Azure Storage linked service reference.
        /// </summary>
        [Input("linkedServiceName")]
        public Input<Inputs.LinkedServiceReferenceArgs>? LinkedServiceName { get; set; }

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

        /// <summary>
        /// HDInsight cluster password.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// Type of linked service.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("userName")]
        private InputMap<object>? _userName;

        /// <summary>
        /// HDInsight cluster user name. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> UserName
        {
            get => _userName ?? (_userName = new InputMap<object>());
            set => _userName = value;
        }

        public HDInsightLinkedServiceArgs()
        {
        }
    }
}
