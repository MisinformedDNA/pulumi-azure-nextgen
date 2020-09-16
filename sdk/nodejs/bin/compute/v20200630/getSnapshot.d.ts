import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult>;
export interface GetSnapshotArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
     */
    readonly snapshotName: string;
}
/**
 * Snapshot resource.
 */
export interface GetSnapshotResult {
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    readonly creationData: outputs.compute.v20200630.CreationDataResponse;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    readonly diskAccessId?: string;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    readonly diskSizeBytes: number;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    readonly diskSizeGB?: number;
    /**
     * The state of the snapshot.
     */
    readonly diskState?: string;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    readonly encryption?: outputs.compute.v20200630.EncryptionResponse;
    /**
     * Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    readonly encryptionSettingsCollection?: outputs.compute.v20200630.EncryptionSettingsCollectionResponse;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    readonly hyperVGeneration?: string;
    /**
     * Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     */
    readonly incremental?: boolean;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Unused. Always Null.
     */
    readonly managedBy: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Policy for accessing the disk via network.
     */
    readonly networkAccessPolicy?: string;
    /**
     * The Operating System type.
     */
    readonly osType?: string;
    /**
     * The disk provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
     */
    readonly sku?: outputs.compute.v20200630.SnapshotSkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The time when the snapshot was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unique Guid identifying the resource.
     */
    readonly uniqueId: string;
}