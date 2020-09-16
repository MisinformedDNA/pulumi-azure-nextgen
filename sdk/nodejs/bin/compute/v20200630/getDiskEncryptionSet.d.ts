import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDiskEncryptionSet(args: GetDiskEncryptionSetArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskEncryptionSetResult>;
export interface GetDiskEncryptionSetArgs {
    /**
     * The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     */
    readonly diskEncryptionSetName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * disk encryption set resource.
 */
export interface GetDiskEncryptionSetResult {
    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    readonly activeKey?: outputs.compute.v20200630.KeyVaultAndKeyReferenceResponse;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    readonly encryptionType?: string;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    readonly identity?: outputs.compute.v20200630.EncryptionSetIdentityResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     */
    readonly previousKeys: outputs.compute.v20200630.KeyVaultAndKeyReferenceResponse[];
    /**
     * The disk encryption set provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}