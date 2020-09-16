import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeployment(args: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult>;
export interface GetDeploymentArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Deployment information.
 */
export interface GetDeploymentResult {
    /**
     * The name of the deployment.
     */
    readonly name: string;
    /**
     * Deployment properties.
     */
    readonly properties: outputs.resources.v20160201.DeploymentPropertiesExtendedResponse;
}