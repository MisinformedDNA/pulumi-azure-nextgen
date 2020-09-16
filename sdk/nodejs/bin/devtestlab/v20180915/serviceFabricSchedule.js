"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * A schedule.
 */
class ServiceFabricSchedule extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.labName === undefined) {
                throw new Error("Missing required property 'labName'");
            }
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serviceFabricName === undefined) {
                throw new Error("Missing required property 'serviceFabricName'");
            }
            if (!args || args.userName === undefined) {
                throw new Error("Missing required property 'userName'");
            }
            inputs["dailyRecurrence"] = args ? args.dailyRecurrence : undefined;
            inputs["hourlyRecurrence"] = args ? args.hourlyRecurrence : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notificationSettings"] = args ? args.notificationSettings : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceFabricName"] = args ? args.serviceFabricName : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            inputs["taskType"] = args ? args.taskType : undefined;
            inputs["timeZoneId"] = args ? args.timeZoneId : undefined;
            inputs["userName"] = args ? args.userName : undefined;
            inputs["weeklyRecurrence"] = args ? args.weeklyRecurrence : undefined;
            inputs["createdDate"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueIdentifier"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ServiceFabricSchedule.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing ServiceFabricSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new ServiceFabricSchedule(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ServiceFabricSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceFabricSchedule.__pulumiType;
    }
}
exports.ServiceFabricSchedule = ServiceFabricSchedule;
/** @internal */
ServiceFabricSchedule.__pulumiType = 'azurerm:devtestlab/v20180915:ServiceFabricSchedule';
//# sourceMappingURL=serviceFabricSchedule.js.map