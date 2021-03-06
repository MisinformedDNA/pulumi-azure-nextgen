// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupConnectedCluster(ctx *pulumi.Context, args *LookupConnectedClusterArgs, opts ...pulumi.InvokeOption) (*LookupConnectedClusterResult, error) {
	var rv LookupConnectedClusterResult
	err := ctx.Invoke("azure-nextgen:kubernetes/v20200101preview:getConnectedCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupConnectedClusterArgs struct {
	// The name of the Kubernetes cluster on which get is called.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Represents a connected cluster.
type LookupConnectedClusterResult struct {
	AadProfile ConnectedClusterAADProfileResponse `pulumi:"aadProfile"`
	// Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
	AgentPublicKeyCertificate string `pulumi:"agentPublicKeyCertificate"`
	// Version of the agent running on the connected cluster resource
	AgentVersion string `pulumi:"agentVersion"`
	// The identity of the connected cluster.
	Identity ConnectedClusterIdentityResponse `pulumi:"identity"`
	// The Kubernetes version of the connected cluster resource
	KubernetesVersion string `pulumi:"kubernetesVersion"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The current deployment state of connectedClusters.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Number of nodes present in the connected cluster resource
	TotalNodeCount int `pulumi:"totalNodeCount"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
}
