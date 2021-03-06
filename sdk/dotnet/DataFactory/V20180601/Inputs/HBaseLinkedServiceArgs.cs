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
    /// HBase server linked service.
    /// </summary>
    public sealed class HBaseLinkedServiceArgs : Pulumi.ResourceArgs
    {
        [Input("allowHostNameCNMismatch")]
        private InputMap<object>? _allowHostNameCNMismatch;

        /// <summary>
        /// Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
        /// </summary>
        public InputMap<object> AllowHostNameCNMismatch
        {
            get => _allowHostNameCNMismatch ?? (_allowHostNameCNMismatch = new InputMap<object>());
            set => _allowHostNameCNMismatch = value;
        }

        [Input("allowSelfSignedServerCert")]
        private InputMap<object>? _allowSelfSignedServerCert;

        /// <summary>
        /// Specifies whether to allow self-signed certificates from the server. The default value is false.
        /// </summary>
        public InputMap<object> AllowSelfSignedServerCert
        {
            get => _allowSelfSignedServerCert ?? (_allowSelfSignedServerCert = new InputMap<object>());
            set => _allowSelfSignedServerCert = value;
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

        /// <summary>
        /// The authentication mechanism to use to connect to the HBase server.
        /// </summary>
        [Input("authenticationType", required: true)]
        public Input<string> AuthenticationType { get; set; } = null!;

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

        [Input("enableSsl")]
        private InputMap<object>? _enableSsl;

        /// <summary>
        /// Specifies whether the connections to the server are encrypted using SSL. The default value is false.
        /// </summary>
        public InputMap<object> EnableSsl
        {
            get => _enableSsl ?? (_enableSsl = new InputMap<object>());
            set => _enableSsl = value;
        }

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
        /// The IP address or host name of the HBase server. (i.e. 192.168.222.160)
        /// </summary>
        public InputMap<object> Host
        {
            get => _host ?? (_host = new InputMap<object>());
            set => _host = value;
        }

        [Input("httpPath")]
        private InputMap<object>? _httpPath;

        /// <summary>
        /// The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
        /// </summary>
        public InputMap<object> HttpPath
        {
            get => _httpPath ?? (_httpPath = new InputMap<object>());
            set => _httpPath = value;
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
        /// The password corresponding to the user name.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        [Input("port")]
        private InputMap<object>? _port;

        /// <summary>
        /// The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
        /// </summary>
        public InputMap<object> Port
        {
            get => _port ?? (_port = new InputMap<object>());
            set => _port = value;
        }

        [Input("trustedCertPath")]
        private InputMap<object>? _trustedCertPath;

        /// <summary>
        /// The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
        /// </summary>
        public InputMap<object> TrustedCertPath
        {
            get => _trustedCertPath ?? (_trustedCertPath = new InputMap<object>());
            set => _trustedCertPath = value;
        }

        /// <summary>
        /// Type of linked service.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("username")]
        private InputMap<object>? _username;

        /// <summary>
        /// The user name used to connect to the HBase instance.
        /// </summary>
        public InputMap<object> Username
        {
            get => _username ?? (_username = new InputMap<object>());
            set => _username = value;
        }

        public HBaseLinkedServiceArgs()
        {
        }
    }
}
