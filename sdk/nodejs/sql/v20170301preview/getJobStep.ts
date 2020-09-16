// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getJobStep(args: GetJobStepArgs, opts?: pulumi.InvokeOptions): Promise<GetJobStepResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20170301preview:getJobStep", {
        "jobAgentName": args.jobAgentName,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "stepName": args.stepName,
    }, opts);
}

export interface GetJobStepArgs {
    /**
     * The name of the job agent.
     */
    readonly jobAgentName: string;
    /**
     * The name of the job.
     */
    readonly jobName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
    /**
     * The name of the job step.
     */
    readonly stepName: string;
}

/**
 * A job step.
 */
export interface GetJobStepResult {
    /**
     * The action payload of the job step.
     */
    readonly action: outputs.sql.v20170301preview.JobStepActionResponse;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    readonly credential: string;
    /**
     * Execution options for the job step.
     */
    readonly executionOptions?: outputs.sql.v20170301preview.JobStepExecutionOptionsResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Output destination properties of the job step.
     */
    readonly output?: outputs.sql.v20170301preview.JobStepOutputResponse;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    readonly stepId?: number;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    readonly targetGroup: string;
    /**
     * Resource type.
     */
    readonly type: string;
}