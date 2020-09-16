"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Registered Server resource.
 */
class RegisteredServer extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverId === undefined) {
                throw new Error("Missing required property 'serverId'");
            }
            if (!args || args.storageSyncServiceName === undefined) {
                throw new Error("Missing required property 'storageSyncServiceName'");
            }
            inputs["agentVersion"] = args ? args.agentVersion : undefined;
            inputs["clusterId"] = args ? args.clusterId : undefined;
            inputs["clusterName"] = args ? args.clusterName : undefined;
            inputs["friendlyName"] = args ? args.friendlyName : undefined;
            inputs["lastHeartBeat"] = args ? args.lastHeartBeat : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverCertificate"] = args ? args.serverCertificate : undefined;
            inputs["serverId"] = args ? args.serverId : undefined;
            inputs["serverOSVersion"] = args ? args.serverOSVersion : undefined;
            inputs["serverRole"] = args ? args.serverRole : undefined;
            inputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            inputs["discoveryEndpointUri"] = undefined /*out*/;
            inputs["lastOperationName"] = undefined /*out*/;
            inputs["lastWorkflowId"] = undefined /*out*/;
            inputs["managementEndpointUri"] = undefined /*out*/;
            inputs["monitoringConfiguration"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceLocation"] = undefined /*out*/;
            inputs["serverManagementErrorCode"] = undefined /*out*/;
            inputs["serviceLocation"] = undefined /*out*/;
            inputs["storageSyncServiceUid"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:storagesync/v20180402:RegisteredServer" }, { type: "azurerm:storagesync/v20180701:RegisteredServer" }, { type: "azurerm:storagesync/v20190201:RegisteredServer" }, { type: "azurerm:storagesync/v20190301:RegisteredServer" }, { type: "azurerm:storagesync/v20190601:RegisteredServer" }, { type: "azurerm:storagesync/v20191001:RegisteredServer" }, { type: "azurerm:storagesync/v20200301:RegisteredServer" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(RegisteredServer.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing RegisteredServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new RegisteredServer(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of RegisteredServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegisteredServer.__pulumiType;
    }
}
exports.RegisteredServer = RegisteredServer;
/** @internal */
RegisteredServer.__pulumiType = 'azurerm:storagesync/v20181001:RegisteredServer';
//# sourceMappingURL=registeredServer.js.map