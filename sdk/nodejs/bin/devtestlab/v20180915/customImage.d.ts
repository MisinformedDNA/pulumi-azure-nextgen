import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A custom image.
 */
export declare class CustomImage extends pulumi.CustomResource {
    /**
     * Get an existing CustomImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomImage;
    /**
     * Returns true if the given object is an instance of CustomImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomImage;
    /**
     * The author of the custom image.
     */
    readonly author: pulumi.Output<string | undefined>;
    /**
     * The creation date of the custom image.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * Storage information about the plan related to this custom image
     */
    readonly customImagePlan: pulumi.Output<outputs.devtestlab.v20180915.CustomImagePropertiesFromPlanResponse | undefined>;
    /**
     * Storage information about the data disks present in the custom image
     */
    readonly dataDiskStorageInfo: pulumi.Output<outputs.devtestlab.v20180915.DataDiskStorageTypeInfoResponse[] | undefined>;
    /**
     * The description of the custom image.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    readonly isPlanAuthorized: pulumi.Output<boolean | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The Managed Image Id backing the custom image.
     */
    readonly managedImageId: pulumi.Output<string | undefined>;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    readonly managedSnapshotId: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * The VHD from which the image is to be created.
     */
    readonly vhd: pulumi.Output<outputs.devtestlab.v20180915.CustomImagePropertiesCustomResponse | undefined>;
    /**
     * The virtual machine from which the image is to be created.
     */
    readonly vm: pulumi.Output<outputs.devtestlab.v20180915.CustomImagePropertiesFromVmResponse | undefined>;
    /**
     * Create a CustomImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomImageArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CustomImage resource.
 */
export interface CustomImageArgs {
    /**
     * The author of the custom image.
     */
    readonly author?: pulumi.Input<string>;
    /**
     * Storage information about the plan related to this custom image
     */
    readonly customImagePlan?: pulumi.Input<inputs.devtestlab.v20180915.CustomImagePropertiesFromPlan>;
    /**
     * Storage information about the data disks present in the custom image
     */
    readonly dataDiskStorageInfo?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.DataDiskStorageTypeInfo>[]>;
    /**
     * The description of the custom image.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    readonly isPlanAuthorized?: pulumi.Input<boolean>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Managed Image Id backing the custom image.
     */
    readonly managedImageId?: pulumi.Input<string>;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    readonly managedSnapshotId?: pulumi.Input<string>;
    /**
     * The name of the custom image.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The VHD from which the image is to be created.
     */
    readonly vhd?: pulumi.Input<inputs.devtestlab.v20180915.CustomImagePropertiesCustom>;
    /**
     * The virtual machine from which the image is to be created.
     */
    readonly vm?: pulumi.Input<inputs.devtestlab.v20180915.CustomImagePropertiesFromVm>;
}