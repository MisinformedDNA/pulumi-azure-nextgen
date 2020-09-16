import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
export interface GetServiceArgs {
    /**
     * The name of the application resource.
     */
    readonly applicationName: string;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    readonly serviceName: string;
}
/**
 * The service resource.
 */
export interface GetServiceResult {
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly correlationScheme?: outputs.servicefabric.v20190301.ServiceCorrelationDescriptionResponse[];
    /**
     * Specifies the move cost for the service.
     */
    readonly defaultMoveCost?: string;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Describes how the service is partitioned.
     */
    readonly partitionDescription?: outputs.servicefabric.v20190301.PartitionSchemeDescriptionResponse;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    readonly placementConstraints?: string;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: string;
    /**
     * The kind of service (Stateless or Stateful).
     */
    readonly serviceKind: string;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    readonly serviceLoadMetrics?: outputs.servicefabric.v20190301.ServiceLoadMetricDescriptionResponse[];
    /**
     * The activation Mode of the service package
     */
    readonly servicePackageActivationMode?: string;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly servicePlacementPolicies?: outputs.servicefabric.v20190301.ServicePlacementPolicyDescriptionResponse[];
    /**
     * The name of the service type
     */
    readonly serviceTypeName?: string;
    /**
     * Azure resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Azure resource type.
     */
    readonly type: string;
}