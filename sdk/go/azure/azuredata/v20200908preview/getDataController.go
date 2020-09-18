// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200908preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDataController(ctx *pulumi.Context, args *LookupDataControllerArgs, opts ...pulumi.InvokeOption) (*LookupDataControllerResult, error) {
	var rv LookupDataControllerResult
	err := ctx.Invoke("azure-nextgen:azuredata/v20200908preview:getDataController", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDataControllerArgs struct {
	DataControllerName string `pulumi:"dataControllerName"`
	// The name of the Azure resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Data controller resource
type LookupDataControllerResult struct {
	// The raw kubernetes information
	K8sRaw map[string]interface{} `pulumi:"k8sRaw"`
	// Last uploaded date from on premise cluster. Defaults to current date time
	LastUploadedDate *string `pulumi:"lastUploadedDate"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Properties from the on premise data controller
	OnPremiseProperty OnPremisePropertyResponse `pulumi:"onPremiseProperty"`
	// Read only system data
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
}