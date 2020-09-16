import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAzureFirewall(args: GetAzureFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureFirewallResult>;
export interface GetAzureFirewallArgs {
    /**
     * The name of the Azure Firewall.
     */
    readonly azureFirewallName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Azure Firewall resource
 */
export interface GetAzureFirewallResult {
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    readonly applicationRuleCollections?: outputs.network.v20181001.AzureFirewallApplicationRuleCollectionResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations?: outputs.network.v20181001.AzureFirewallIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    readonly natRuleCollections?: outputs.network.v20181001.AzureFirewallNatRuleCollectionResponse[];
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections?: outputs.network.v20181001.AzureFirewallNetworkRuleCollectionResponse[];
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}