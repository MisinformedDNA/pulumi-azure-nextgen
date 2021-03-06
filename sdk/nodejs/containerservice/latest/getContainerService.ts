// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getContainerService(args: GetContainerServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerServiceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:containerservice/latest:getContainerService", {
        "containerServiceName": args.containerServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerServiceArgs {
    /**
     * The name of the container service in the specified subscription and resource group.
     */
    readonly containerServiceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Container service.
 */
export interface GetContainerServiceResult {
    /**
     * Properties of the agent pool.
     */
    readonly agentPoolProfiles?: outputs.containerservice.latest.ContainerServiceAgentPoolProfileResponse[];
    /**
     * Properties to configure a custom container service cluster.
     */
    readonly customProfile?: outputs.containerservice.latest.ContainerServiceCustomProfileResponse;
    /**
     * Profile for diagnostics in the container service cluster.
     */
    readonly diagnosticsProfile?: outputs.containerservice.latest.ContainerServiceDiagnosticsProfileResponse;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    readonly linuxProfile: outputs.containerservice.latest.ContainerServiceLinuxProfileResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Profile for the container service master.
     */
    readonly masterProfile: outputs.containerservice.latest.ContainerServiceMasterProfileResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Profile for the container service orchestrator.
     */
    readonly orchestratorProfile: outputs.containerservice.latest.ContainerServiceOrchestratorProfileResponse;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs. Exact one of secret or keyVaultSecretRef need to be specified.
     */
    readonly servicePrincipalProfile?: outputs.containerservice.latest.ContainerServiceServicePrincipalProfileResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Profile for Windows VMs in the container service cluster.
     */
    readonly windowsProfile?: outputs.containerservice.latest.ContainerServiceWindowsProfileResponse;
}
