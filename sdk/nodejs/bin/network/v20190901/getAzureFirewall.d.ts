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
 * Azure Firewall resource.
 */
export interface GetAzureFirewallResult {
    /**
     * The additional properties used to further config this azure firewall.
     */
    readonly additionalProperties?: {
        [key: string]: string;
    };
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    readonly applicationRuleCollections?: outputs.network.v20190901.AzureFirewallApplicationRuleCollectionResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The firewallPolicy associated with this azure firewall.
     */
    readonly firewallPolicy?: outputs.network.v20190901.SubResourceResponse;
    /**
     * IP addresses associated with AzureFirewall.
     */
    readonly hubIpAddresses: outputs.network.v20190901.HubIPAddressesResponse;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations?: outputs.network.v20190901.AzureFirewallIPConfigurationResponse[];
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
    readonly natRuleCollections?: outputs.network.v20190901.AzureFirewallNatRuleCollectionResponse[];
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections?: outputs.network.v20190901.AzureFirewallNetworkRuleCollectionResponse[];
    /**
     * The provisioning state of the Azure firewall resource.
     */
    readonly provisioningState: string;
    /**
     * The Azure Firewall Resource SKU.
     */
    readonly sku?: outputs.network.v20190901.AzureFirewallSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The virtualHub to which the firewall belongs.
     */
    readonly virtualHub?: outputs.network.v20190901.SubResourceResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}