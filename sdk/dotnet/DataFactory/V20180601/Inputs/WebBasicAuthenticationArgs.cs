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
    /// A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
    /// </summary>
    public sealed class WebBasicAuthenticationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of authentication used to connect to the web table source.
        /// </summary>
        [Input("authenticationType", required: true)]
        public Input<string> AuthenticationType { get; set; } = null!;

        /// <summary>
        /// The password for Basic authentication.
        /// </summary>
        [Input("password", required: true)]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs> Password { get; set; } = null!;

        [Input("url", required: true)]
        private InputMap<object>? _url;

        /// <summary>
        /// The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Url
        {
            get => _url ?? (_url = new InputMap<object>());
            set => _url = value;
        }

        [Input("username", required: true)]
        private InputMap<object>? _username;

        /// <summary>
        /// User name for Basic authentication. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Username
        {
            get => _username ?? (_username = new InputMap<object>());
            set => _username = value;
        }

        public WebBasicAuthenticationArgs()
        {
        }
    }
}
