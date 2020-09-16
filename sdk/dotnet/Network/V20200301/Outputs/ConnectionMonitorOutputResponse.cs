// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200301.Outputs
{

    [OutputType]
    public sealed class ConnectionMonitorOutputResponse
    {
        /// <summary>
        /// Connection monitor output destination type. Currently, only "Workspace" is supported.
        /// </summary>
        public readonly string? Type;
        /// <summary>
        /// Describes the settings for producing output into a log analytics workspace.
        /// </summary>
        public readonly Outputs.ConnectionMonitorWorkspaceSettingsResponse? WorkspaceSettings;

        [OutputConstructor]
        private ConnectionMonitorOutputResponse(
            string? type,

            Outputs.ConnectionMonitorWorkspaceSettingsResponse? workspaceSettings)
        {
            Type = type;
            WorkspaceSettings = workspaceSettings;
        }
    }
}