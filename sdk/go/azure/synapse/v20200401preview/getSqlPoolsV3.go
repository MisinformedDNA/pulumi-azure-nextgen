// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSqlPoolsV3(ctx *pulumi.Context, args *LookupSqlPoolsV3Args, opts ...pulumi.InvokeOption) (*LookupSqlPoolsV3Result, error) {
	var rv LookupSqlPoolsV3Result
	err := ctx.Invoke("azure-nextgen:synapse/v20200401preview:getSqlPoolsV3", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSqlPoolsV3Args struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the sql pool.
	SqlPoolName string `pulumi:"sqlPoolName"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// A sql pool resource.
type LookupSqlPoolsV3Result struct {
	// The current service level objective name of the sql pool.
	CurrentServiceObjectiveName string `pulumi:"currentServiceObjectiveName"`
	// Kind of SqlPool.
	Kind string `pulumi:"kind"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The requested service level objective name of the sql pool.
	RequestedServiceObjectiveName string `pulumi:"requestedServiceObjectiveName"`
	// The sql pool SKU. The list of SKUs may vary by region and support offer.
	Sku *SkuResponse `pulumi:"sku"`
	// The Guid of the sql pool.
	SqlPoolGuid string `pulumi:"sqlPoolGuid"`
	// The status of the sql pool.
	Status string `pulumi:"status"`
	// SystemData of SqlPool.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
}