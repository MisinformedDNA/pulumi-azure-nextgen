// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListConnectedClusterUserCredentials(ctx *pulumi.Context, args *ListConnectedClusterUserCredentialsArgs, opts ...pulumi.InvokeOption) (*ListConnectedClusterUserCredentialsResult, error) {
	var rv ListConnectedClusterUserCredentialsResult
	err := ctx.Invoke("azure-nextgen:kubernetes/v20200101preview:listConnectedClusterUserCredentials", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListConnectedClusterUserCredentialsArgs struct {
	// The mode of client authentication.
	AuthenticationMethod string `pulumi:"authenticationMethod"`
	// The name of the Kubernetes cluster on which get is called.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string                     `pulumi:"resourceGroupName"`
	Value             AuthenticationDetailsValue `pulumi:"value"`
}

// The list of credential result response.
type ListConnectedClusterUserCredentialsResult struct {
	// Base64-encoded Kubernetes configuration file.
	Kubeconfigs []CredentialResultResponse `pulumi:"kubeconfigs"`
}