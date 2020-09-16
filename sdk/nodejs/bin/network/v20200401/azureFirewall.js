"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Azure Firewall resource.
 */
class AzureFirewall extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.azureFirewallName === undefined) {
                throw new Error("Missing required property 'azureFirewallName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            inputs["applicationRuleCollections"] = args ? args.applicationRuleCollections : undefined;
            inputs["azureFirewallName"] = args ? args.azureFirewallName : undefined;
            inputs["firewallPolicy"] = args ? args.firewallPolicy : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["managementIpConfiguration"] = args ? args.managementIpConfiguration : undefined;
            inputs["natRuleCollections"] = args ? args.natRuleCollections : undefined;
            inputs["networkRuleCollections"] = args ? args.networkRuleCollections : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["threatIntelMode"] = args ? args.threatIntelMode : undefined;
            inputs["virtualHub"] = args ? args.virtualHub : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["hubIpAddresses"] = undefined /*out*/;
            inputs["ipGroups"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:network/v20180401:AzureFirewall" }, { type: "azurerm:network/v20180601:AzureFirewall" }, { type: "azurerm:network/v20180701:AzureFirewall" }, { type: "azurerm:network/v20180801:AzureFirewall" }, { type: "azurerm:network/v20181001:AzureFirewall" }, { type: "azurerm:network/v20181101:AzureFirewall" }, { type: "azurerm:network/v20181201:AzureFirewall" }, { type: "azurerm:network/v20190201:AzureFirewall" }, { type: "azurerm:network/v20190401:AzureFirewall" }, { type: "azurerm:network/v20190601:AzureFirewall" }, { type: "azurerm:network/v20190701:AzureFirewall" }, { type: "azurerm:network/v20190801:AzureFirewall" }, { type: "azurerm:network/v20190901:AzureFirewall" }, { type: "azurerm:network/v20191101:AzureFirewall" }, { type: "azurerm:network/v20191201:AzureFirewall" }, { type: "azurerm:network/v20200301:AzureFirewall" }, { type: "azurerm:network/v20200501:AzureFirewall" }, { type: "azurerm:network/v20200601:AzureFirewall" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(AzureFirewall.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing AzureFirewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new AzureFirewall(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of AzureFirewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureFirewall.__pulumiType;
    }
}
exports.AzureFirewall = AzureFirewall;
/** @internal */
AzureFirewall.__pulumiType = 'azurerm:network/v20200401:AzureFirewall';
//# sourceMappingURL=azureFirewall.js.map