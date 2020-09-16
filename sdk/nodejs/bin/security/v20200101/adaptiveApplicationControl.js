"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
class AdaptiveApplicationControl extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.ascLocation === undefined) {
                throw new Error("Missing required property 'ascLocation'");
            }
            if (!args || args.groupName === undefined) {
                throw new Error("Missing required property 'groupName'");
            }
            inputs["ascLocation"] = args ? args.ascLocation : undefined;
            inputs["enforcementMode"] = args ? args.enforcementMode : undefined;
            inputs["groupName"] = args ? args.groupName : undefined;
            inputs["pathRecommendations"] = args ? args.pathRecommendations : undefined;
            inputs["protectionMode"] = args ? args.protectionMode : undefined;
            inputs["vmRecommendations"] = args ? args.vmRecommendations : undefined;
            inputs["configurationStatus"] = undefined /*out*/;
            inputs["issues"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["recommendationStatus"] = undefined /*out*/;
            inputs["sourceSystem"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AdaptiveApplicationControl.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing AdaptiveApplicationControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new AdaptiveApplicationControl(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of AdaptiveApplicationControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdaptiveApplicationControl.__pulumiType;
    }
}
exports.AdaptiveApplicationControl = AdaptiveApplicationControl;
/** @internal */
AdaptiveApplicationControl.__pulumiType = 'azurerm:security/v20200101:AdaptiveApplicationControl';
//# sourceMappingURL=adaptiveApplicationControl.js.map