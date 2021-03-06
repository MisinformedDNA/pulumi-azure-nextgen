// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.V20200301Preview
{
    public static class GetDataExport
    {
        public static Task<GetDataExportResult> InvokeAsync(GetDataExportArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDataExportResult>("azure-nextgen:operationalinsights/v20200301preview:getDataExport", args ?? new GetDataExportArgs(), options.WithVersion());
    }


    public sealed class GetDataExportArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The data export rule name.
        /// </summary>
        [Input("dataExportName", required: true)]
        public string DataExportName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetDataExportArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDataExportResult
    {
        /// <summary>
        /// The latest data export rule modification time.
        /// </summary>
        public readonly string? CreatedDate;
        /// <summary>
        /// The data export rule ID.
        /// </summary>
        public readonly string? DataExportId;
        /// <summary>
        /// Active when enabled.
        /// </summary>
        public readonly bool? Enable;
        /// <summary>
        /// Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
        /// </summary>
        public readonly string? EventHubName;
        /// <summary>
        /// Date and time when the export was last modified.
        /// </summary>
        public readonly string? LastModifiedDate;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
        /// </summary>
        public readonly string ResourceId;
        /// <summary>
        /// An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
        /// </summary>
        public readonly ImmutableArray<string> TableNames;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDataExportResult(
            string? createdDate,

            string? dataExportId,

            bool? enable,

            string? eventHubName,

            string? lastModifiedDate,

            string name,

            string resourceId,

            ImmutableArray<string> tableNames,

            string type)
        {
            CreatedDate = createdDate;
            DataExportId = dataExportId;
            Enable = enable;
            EventHubName = eventHubName;
            LastModifiedDate = lastModifiedDate;
            Name = name;
            ResourceId = resourceId;
            TableNames = tableNames;
            Type = type;
        }
    }
}
