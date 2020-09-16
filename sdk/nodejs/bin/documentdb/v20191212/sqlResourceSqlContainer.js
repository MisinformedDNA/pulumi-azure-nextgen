"use strict";
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * An Azure Cosmos DB container.
 */
class SqlResourceSqlContainer extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (!(opts && opts.id)) {
            const args = argsOrState;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.containerName === undefined) {
                throw new Error("Missing required property 'containerName'");
            }
            if (!args || args.databaseName === undefined) {
                throw new Error("Missing required property 'databaseName'");
            }
            if (!args || args.options === undefined) {
                throw new Error("Missing required property 'options'");
            }
            if (!args || args.resource === undefined) {
                throw new Error("Missing required property 'resource'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["containerName"] = args ? args.containerName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["resource"] = args ? args.resource : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azurerm:documentdb/v20190801:SqlResourceSqlContainer" }, { type: "azurerm:documentdb/v20200301:SqlResourceSqlContainer" }, { type: "azurerm:documentdb/v20200401:SqlResourceSqlContainer" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SqlResourceSqlContainer.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing SqlResourceSqlContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new SqlResourceSqlContainer(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SqlResourceSqlContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlResourceSqlContainer.__pulumiType;
    }
}
exports.SqlResourceSqlContainer = SqlResourceSqlContainer;
/** @internal */
SqlResourceSqlContainer.__pulumiType = 'azurerm:documentdb/v20191212:SqlResourceSqlContainer';
//# sourceMappingURL=sqlResourceSqlContainer.js.map