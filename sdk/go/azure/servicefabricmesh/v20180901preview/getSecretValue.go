// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSecretValue(ctx *pulumi.Context, args *LookupSecretValueArgs, opts ...pulumi.InvokeOption) (*LookupSecretValueResult, error) {
	var rv LookupSecretValueResult
	err := ctx.Invoke("azure-nextgen:servicefabricmesh/v20180901preview:getSecretValue", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSecretValueArgs struct {
	// Azure resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the secret resource.
	SecretResourceName string `pulumi:"secretResourceName"`
	// The name of the secret resource value which is typically the version identifier for the value.
	SecretValueResourceName string `pulumi:"secretValueResourceName"`
}

// This type describes a value of a secret resource. The name of this resource is the version identifier corresponding to this secret value.
type LookupSecretValueResult struct {
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// State of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
	// The actual value of the secret.
	Value *string `pulumi:"value"`
}
