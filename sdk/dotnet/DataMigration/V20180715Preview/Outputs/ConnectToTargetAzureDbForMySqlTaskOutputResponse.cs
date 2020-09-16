// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180715Preview.Outputs
{

    [OutputType]
    public sealed class ConnectToTargetAzureDbForMySqlTaskOutputResponse
    {
        /// <summary>
        /// List of databases on target server
        /// </summary>
        public readonly ImmutableArray<string> Databases;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Version of the target server
        /// </summary>
        public readonly string ServerVersion;
        /// <summary>
        /// Target server brand version
        /// </summary>
        public readonly string TargetServerBrandVersion;
        /// <summary>
        /// Validation errors associated with the task
        /// </summary>
        public readonly ImmutableArray<Outputs.ReportableExceptionResponse> ValidationErrors;

        [OutputConstructor]
        private ConnectToTargetAzureDbForMySqlTaskOutputResponse(
            ImmutableArray<string> databases,

            string id,

            string serverVersion,

            string targetServerBrandVersion,

            ImmutableArray<Outputs.ReportableExceptionResponse> validationErrors)
        {
            Databases = databases;
            Id = id;
            ServerVersion = serverVersion;
            TargetServerBrandVersion = targetServerBrandVersion;
            ValidationErrors = validationErrors;
        }
    }
}