// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest.Outputs
{

    [OutputType]
    public sealed class MigrateSqlServerSqlMIDatabaseInputResponse
    {
        /// <summary>
        /// The list of backup files to be used in case of existing backups.
        /// </summary>
        public readonly ImmutableArray<string> BackupFilePaths;
        /// <summary>
        /// Backup file share information for backing up this database.
        /// </summary>
        public readonly Outputs.FileShareResponse? BackupFileShare;
        /// <summary>
        /// Name of the database
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Name of the database at destination
        /// </summary>
        public readonly string RestoreDatabaseName;

        [OutputConstructor]
        private MigrateSqlServerSqlMIDatabaseInputResponse(
            ImmutableArray<string> backupFilePaths,

            Outputs.FileShareResponse? backupFileShare,

            string name,

            string restoreDatabaseName)
        {
            BackupFilePaths = backupFilePaths;
            BackupFileShare = backupFileShare;
            Name = name;
            RestoreDatabaseName = restoreDatabaseName;
        }
    }
}