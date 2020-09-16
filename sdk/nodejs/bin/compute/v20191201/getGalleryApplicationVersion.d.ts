import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGalleryApplicationVersion(args: GetGalleryApplicationVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryApplicationVersionResult>;
export interface GetGalleryApplicationVersionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    readonly expand?: string;
    /**
     * The name of the gallery Application Definition in which the Application Version resides.
     */
    readonly galleryApplicationName: string;
    /**
     * The name of the gallery Application Version to be retrieved.
     */
    readonly galleryApplicationVersionName: string;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    readonly galleryName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Specifies information about the gallery Application Version that you want to create or update.
 */
export interface GetGalleryApplicationVersionResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The publishing profile of a gallery Image Version.
     */
    readonly publishingProfile: outputs.compute.v20191201.GalleryApplicationVersionPublishingProfileResponse;
    /**
     * This is the replication status of the gallery Image Version.
     */
    readonly replicationStatus: outputs.compute.v20191201.ReplicationStatusResponse;
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