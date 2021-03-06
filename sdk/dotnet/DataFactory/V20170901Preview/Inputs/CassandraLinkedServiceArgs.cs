// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Inputs
{

    /// <summary>
    /// Linked service for Cassandra data source.
    /// </summary>
    public sealed class CassandraLinkedServiceArgs : Pulumi.ResourceArgs
    {
        [Input("annotations")]
        private InputList<ImmutableDictionary<string, object>>? _annotations;

        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public InputList<ImmutableDictionary<string, object>> Annotations
        {
            get => _annotations ?? (_annotations = new InputList<ImmutableDictionary<string, object>>());
            set => _annotations = value;
        }

        [Input("authenticationType")]
        private InputMap<object>? _authenticationType;

        /// <summary>
        /// AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> AuthenticationType
        {
            get => _authenticationType ?? (_authenticationType = new InputMap<object>());
            set => _authenticationType = value;
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

        [Input("host", required: true)]
        private InputMap<object>? _host;

        /// <summary>
        /// Host name for connection. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Host
        {
            get => _host ?? (_host = new InputMap<object>());
            set => _host = value;
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

        /// <summary>
        /// Password for authentication.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        [Input("port")]
        private InputMap<object>? _port;

        /// <summary>
        /// The port for the connection. Type: integer (or Expression with resultType integer).
        /// </summary>
        public InputMap<object> Port
        {
            get => _port ?? (_port = new InputMap<object>());
            set => _port = value;
        }

        /// <summary>
        /// Type of linked service.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("username")]
        private InputMap<object>? _username;

        /// <summary>
        /// Username for authentication. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Username
        {
            get => _username ?? (_username = new InputMap<object>());
            set => _username = value;
        }

        public CassandraLinkedServiceArgs()
        {
        }
    }
}
