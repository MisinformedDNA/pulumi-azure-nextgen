import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppSiteExtensionSlot(args: GetWebAppSiteExtensionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteExtensionSlotResult>;
export interface GetWebAppSiteExtensionSlotArgs {
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Site extension name.
     */
    readonly siteExtensionId: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
     */
    readonly slot: string;
}
/**
 * Site Extension Information.
 */
export interface GetWebAppSiteExtensionSlotResult {
    /**
     * List of authors.
     */
    readonly authors?: string[];
    /**
     * Site Extension comment.
     */
    readonly comment?: string;
    /**
     * Detailed description.
     */
    readonly description?: string;
    /**
     * Count of downloads.
     */
    readonly downloadCount?: number;
    /**
     * Extension URL.
     */
    readonly extensionUrl?: string;
    /**
     * Feed URL.
     */
    readonly feedUrl?: string;
    /**
     * Icon URL.
     */
    readonly iconUrl?: string;
    /**
     * Installer command line parameters.
     */
    readonly installationArgs?: string;
    /**
     * Installed timestamp.
     */
    readonly installedDateTime?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * License URL.
     */
    readonly licenseUrl?: string;
    /**
     * <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
     */
    readonly localIsLatestVersion?: boolean;
    /**
     * Local path.
     */
    readonly localPath?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Project URL.
     */
    readonly projectUrl?: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * Published timestamp.
     */
    readonly publishedDateTime?: string;
    /**
     * Summary description.
     */
    readonly summary?: string;
    /**
     * Site extension title.
     */
    readonly title?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Version information.
     */
    readonly version?: string;
}