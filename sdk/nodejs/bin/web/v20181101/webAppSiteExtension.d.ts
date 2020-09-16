import * as pulumi from "@pulumi/pulumi";
/**
 * Site Extension Information.
 */
export declare class WebAppSiteExtension extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSiteExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSiteExtension;
    /**
     * Returns true if the given object is an instance of WebAppSiteExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppSiteExtension;
    /**
     * List of authors.
     */
    readonly authors: pulumi.Output<string[] | undefined>;
    /**
     * Site Extension comment.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Detailed description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Count of downloads.
     */
    readonly downloadCount: pulumi.Output<number | undefined>;
    /**
     * Site extension ID.
     */
    readonly extensionId: pulumi.Output<string | undefined>;
    /**
     * Site extension type.
     */
    readonly extensionType: pulumi.Output<string | undefined>;
    /**
     * Extension URL.
     */
    readonly extensionUrl: pulumi.Output<string | undefined>;
    /**
     * Feed URL.
     */
    readonly feedUrl: pulumi.Output<string | undefined>;
    /**
     * Icon URL.
     */
    readonly iconUrl: pulumi.Output<string | undefined>;
    /**
     * Installed timestamp.
     */
    readonly installedDateTime: pulumi.Output<string | undefined>;
    /**
     * Installer command line parameters.
     */
    readonly installerCommandLineParams: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * License URL.
     */
    readonly licenseUrl: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
     */
    readonly localIsLatestVersion: pulumi.Output<boolean | undefined>;
    /**
     * Local path.
     */
    readonly localPath: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Project URL.
     */
    readonly projectUrl: pulumi.Output<string | undefined>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Published timestamp.
     */
    readonly publishedDateTime: pulumi.Output<string | undefined>;
    /**
     * Summary description.
     */
    readonly summary: pulumi.Output<string | undefined>;
    readonly title: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Version information.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a WebAppSiteExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSiteExtensionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppSiteExtension resource.
 */
export interface WebAppSiteExtensionArgs {
    /**
     * Site name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Site extension name.
     */
    readonly siteExtensionId: pulumi.Input<string>;
}