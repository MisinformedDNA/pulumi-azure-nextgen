import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIotSecuritySolution(args: GetIotSecuritySolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetIotSecuritySolutionResult>;
export interface GetIotSecuritySolutionArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT Security solution.
     */
    readonly solutionName: string;
}
/**
 * IoT Security solution configuration and resource information.
 */
export interface GetIotSecuritySolutionResult {
    /**
     * List of resources that were automatically discovered as relevant to the security solution.
     */
    readonly autoDiscoveredResources: string[];
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    readonly disabledDataSources?: string[];
    /**
     * Resource display name.
     */
    readonly displayName: string;
    /**
     * List of additional options for exporting to workspace data.
     */
    readonly export?: string[];
    /**
     * IoT Hub resource IDs
     */
    readonly iotHubs: string[];
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * List of the configuration status for each recommendation type.
     */
    readonly recommendationsConfiguration?: outputs.security.v20190801.RecommendationConfigurationPropertiesResponse[];
    /**
     * Status of the IoT Security solution.
     */
    readonly status?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unmasked IP address logging status
     */
    readonly unmaskedIpLoggingStatus?: string;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    readonly userDefinedResources?: outputs.security.v20190801.UserDefinedResourcesPropertiesResponse;
    /**
     * Workspace resource ID
     */
    readonly workspace?: string;
}