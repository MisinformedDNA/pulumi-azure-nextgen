// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview.Inputs
{

    /// <summary>
    /// The custom setup of running cmdkey commands.
    /// </summary>
    public sealed class CmdkeySetupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The password of data source access.
        /// </summary>
        [Input("password", required: true)]
        public Input<Inputs.SecureStringArgs> Password { get; set; } = null!;

        [Input("targetName", required: true)]
        private InputMap<object>? _targetName;

        /// <summary>
        /// The server name of data source access.
        /// </summary>
        public InputMap<object> TargetName
        {
            get => _targetName ?? (_targetName = new InputMap<object>());
            set => _targetName = value;
        }

        /// <summary>
        /// The type of custom setup.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("userName", required: true)]
        private InputMap<object>? _userName;

        /// <summary>
        /// The user name of data source access.
        /// </summary>
        public InputMap<object> UserName
        {
            get => _userName ?? (_userName = new InputMap<object>());
            set => _userName = value;
        }

        public CmdkeySetupArgs()
        {
        }
    }
}