// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SqlVirtualMachine.V20170301Preview.Inputs
{

    /// <summary>
    /// Storage Configurations for SQL Data, Log and TempDb.
    /// </summary>
    public sealed class StorageConfigurationSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Disk configuration to apply to SQL Server.
        /// </summary>
        [Input("diskConfigurationType")]
        public Input<string>? DiskConfigurationType { get; set; }

        /// <summary>
        /// SQL Server Data Storage Settings.
        /// </summary>
        [Input("sqlDataSettings")]
        public Input<Inputs.SQLStorageSettingsArgs>? SqlDataSettings { get; set; }

        /// <summary>
        /// SQL Server Log Storage Settings.
        /// </summary>
        [Input("sqlLogSettings")]
        public Input<Inputs.SQLStorageSettingsArgs>? SqlLogSettings { get; set; }

        /// <summary>
        /// SQL Server TempDb Storage Settings.
        /// </summary>
        [Input("sqlTempDbSettings")]
        public Input<Inputs.SQLStorageSettingsArgs>? SqlTempDbSettings { get; set; }

        /// <summary>
        /// Storage workload type.
        /// </summary>
        [Input("storageWorkloadType")]
        public Input<string>? StorageWorkloadType { get; set; }

        public StorageConfigurationSettingsArgs()
        {
        }
    }
}