"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Class that represents a BizTalk Hybrid Connection
 */
class SiteRelayServiceConnection extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.entityName === undefined) {
                throw new Error("Missing required property 'entityName'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["biztalkUri"] = args ? args.biztalkUri : undefined;
            inputs["entityConnectionString"] = args ? args.entityConnectionString : undefined;
            inputs["entityName"] = args ? args.entityName : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["resourceConnectionString"] = args ? args.resourceConnectionString : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceType"] = args ? args.resourceType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:web/v20160801:SiteRelayServiceConnection" }, { type: "azurerm:web/v20180201:SiteRelayServiceConnection" }, { type: "azurerm:web/v20181101:SiteRelayServiceConnection" }, { type: "azurerm:web/v20190801:SiteRelayServiceConnection" }, { type: "azurerm:web/v20200601:SiteRelayServiceConnection" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SiteRelayServiceConnection.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing SiteRelayServiceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new SiteRelayServiceConnection(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SiteRelayServiceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SiteRelayServiceConnection.__pulumiType;
    }
}
exports.SiteRelayServiceConnection = SiteRelayServiceConnection;
/** @internal */
SiteRelayServiceConnection.__pulumiType = 'azurerm:web/v20150801:SiteRelayServiceConnection';
//# sourceMappingURL=siteRelayServiceConnection.js.map