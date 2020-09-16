// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180315Preview.Outputs
{

    [OutputType]
    public sealed class ConnectToSourceSqlServerTaskInputResponse
    {
        /// <summary>
        /// Permission group for validations
        /// </summary>
        public readonly string? CheckPermissionsGroup;
        /// <summary>
        /// Connection information for Source SQL Server
        /// </summary>
        public readonly Outputs.SqlConnectionInfoResponse SourceConnectionInfo;

        [OutputConstructor]
        private ConnectToSourceSqlServerTaskInputResponse(
            string? checkPermissionsGroup,

            Outputs.SqlConnectionInfoResponse sourceConnectionInfo)
        {
            CheckPermissionsGroup = checkPermissionsGroup;
            SourceConnectionInfo = sourceConnectionInfo;
        }
    }
}