import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare function listWebAppBackupStatusSecrets(args: ListWebAppBackupStatusSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupStatusSecretsResult>;
export interface ListWebAppBackupStatusSecretsArgs {
    /**
     * ID of backup.
     */
    readonly backupId: string;
    /**
     * Name of the backup.
     */
    readonly backupName?: string;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    readonly backupSchedule?: inputs.web.v20180201.BackupSchedule;
    /**
     * Databases included in the backup.
     */
    readonly databases?: inputs.web.v20180201.DatabaseBackupSetting[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    readonly enabled?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Name of web app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * SAS URL to the container.
     */
    readonly storageAccountUrl: string;
}
/**
 * Backup description.
 */
export interface ListWebAppBackupStatusSecretsResult {
    /**
     * Id of the backup.
     */
    readonly backupId: number;
    /**
     * Name of the blob which contains data for this backup.
     */
    readonly blobName: string;
    /**
     * Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
     */
    readonly correlationId: string;
    /**
     * Timestamp of the backup creation.
     */
    readonly created: string;
    /**
     * List of databases included in the backup.
     */
    readonly databases: outputs.web.v20180201.DatabaseBackupSettingResponse[];
    /**
     * Timestamp when this backup finished.
     */
    readonly finishedTimeStamp: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Timestamp of a last restore operation which used this backup.
     */
    readonly lastRestoreTimeStamp: string;
    /**
     * Details regarding this backup. Might contain an error message.
     */
    readonly log: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * True if this backup has been created due to a schedule being triggered.
     */
    readonly scheduled: boolean;
    /**
     * Size of the backup in bytes.
     */
    readonly sizeInBytes: number;
    /**
     * Backup status.
     */
    readonly status: string;
    /**
     * SAS URL for the storage account container which contains this backup.
     */
    readonly storageAccountUrl: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Size of the original web app which has been backed up.
     */
    readonly websiteSizeInBytes: number;
}