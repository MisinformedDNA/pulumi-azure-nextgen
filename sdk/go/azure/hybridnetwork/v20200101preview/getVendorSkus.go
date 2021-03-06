// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVendorSkus(ctx *pulumi.Context, args *LookupVendorSkusArgs, opts ...pulumi.InvokeOption) (*LookupVendorSkusResult, error) {
	var rv LookupVendorSkusResult
	err := ctx.Invoke("azure-nextgen:hybridnetwork/v20200101preview:getVendorSkus", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVendorSkusArgs struct {
	// The name of the sku.
	SkuName string `pulumi:"skuName"`
	// The name of vendor.
	VendorName string `pulumi:"vendorName"`
}

// Sku sub resource.
type LookupVendorSkusResult struct {
	// Sku deployment mode.
	DeploymentMode *string `pulumi:"deploymentMode"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The parameters for the managed application to be supplied by vendor.
	ManagedApplicationParameters map[string]interface{} `pulumi:"managedApplicationParameters"`
	// The template for the managed application deployment.
	ManagedApplicationTemplate map[string]interface{} `pulumi:"managedApplicationTemplate"`
	// Resource name.
	Name string `pulumi:"name"`
	// Indicates if the vendor sku is in preview mode.
	Preview *bool `pulumi:"preview"`
	// The provisioning state of the vendor sku sub resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Sku type.
	SkuType *string `pulumi:"skuType"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The template definition of the virtual network function.
	VirtualNetworkFunctionTemplate *VirtualNetworkFunctionTemplateResponse `pulumi:"virtualNetworkFunctionTemplate"`
}
