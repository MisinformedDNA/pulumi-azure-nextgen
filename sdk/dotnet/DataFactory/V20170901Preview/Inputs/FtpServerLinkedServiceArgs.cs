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
    /// A FTP server Linked Service.
    /// </summary>
    public sealed class FtpServerLinkedServiceArgs : Pulumi.ResourceArgs
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

        /// <summary>
        /// The authentication type to be used to connect to the FTP server.
        /// </summary>
        [Input("authenticationType")]
        public Input<string>? AuthenticationType { get; set; }

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

        [Input("enableServerCertificateValidation")]
        private InputMap<object>? _enableServerCertificateValidation;

        /// <summary>
        /// If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
        /// </summary>
        public InputMap<object> EnableServerCertificateValidation
        {
            get => _enableServerCertificateValidation ?? (_enableServerCertificateValidation = new InputMap<object>());
            set => _enableServerCertificateValidation = value;
        }

        [Input("enableSsl")]
        private InputMap<object>? _enableSsl;

        /// <summary>
        /// If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
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
        /// Host name of the FTP server. Type: string (or Expression with resultType string).
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
        /// Password to logon the FTP server.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        [Input("port")]
        private InputMap<object>? _port;

        /// <summary>
        /// The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
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

        [Input("userName")]
        private InputMap<object>? _userName;

        /// <summary>
        /// Username to logon the FTP server. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> UserName
        {
            get => _userName ?? (_userName = new InputMap<object>());
            set => _userName = value;
        }

        public FtpServerLinkedServiceArgs()
        {
        }
    }
}
