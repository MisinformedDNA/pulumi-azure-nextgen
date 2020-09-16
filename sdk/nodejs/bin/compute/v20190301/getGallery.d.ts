import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGallery(args: GetGalleryArgs, opts?: pulumi.InvokeOptions): Promise<GetGalleryResult>;
export interface GetGalleryArgs {
    /**
     * The name of the Shared Image Gallery.
     */
    readonly galleryName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Specifies information about the Shared Image Gallery that you want to create or update.
 */
export interface GetGalleryResult {
    /**
     * The description of this Shared Image Gallery resource. This property is updatable.
     */
    readonly description?: string;
    /**
     * Describes the gallery unique name.
     */
    readonly identifier?: outputs.compute.v20190301.GalleryIdentifierResponse;
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