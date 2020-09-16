"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * Azure Migrate Project.
 */
class Project extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.projectName === undefined) {
                throw new Error("Missing required property 'projectName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["customerWorkspaceId"] = args ? args.customerWorkspaceId : undefined;
            inputs["customerWorkspaceLocation"] = args ? args.customerWorkspaceLocation : undefined;
            inputs["eTag"] = args ? args.eTag : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["projectName"] = args ? args.projectName : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["createdTimestamp"] = undefined /*out*/;
            inputs["discoveryStatus"] = undefined /*out*/;
            inputs["lastAssessmentTimestamp"] = undefined /*out*/;
            inputs["lastDiscoverySessionId"] = undefined /*out*/;
            inputs["lastDiscoveryTimestamp"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["numberOfAssessments"] = undefined /*out*/;
            inputs["numberOfGroups"] = undefined /*out*/;
            inputs["numberOfMachines"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedTimestamp"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Project.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new Project(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }
}
exports.Project = Project;
/** @internal */
Project.__pulumiType = 'azurerm:migrate/v20180202:Project';
//# sourceMappingURL=project.js.map