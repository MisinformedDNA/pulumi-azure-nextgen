// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupProximityPlacementGroup(ctx *pulumi.Context, args *LookupProximityPlacementGroupArgs, opts ...pulumi.InvokeOption) (*LookupProximityPlacementGroupResult, error) {
	var rv LookupProximityPlacementGroupResult
	err := ctx.Invoke("azure-nextgen:compute/v20190301:getProximityPlacementGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupProximityPlacementGroupArgs struct {
	// The name of the proximity placement group.
	ProximityPlacementGroupName string `pulumi:"proximityPlacementGroupName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Specifies information about the proximity placement group.
type LookupProximityPlacementGroupResult struct {
	// A list of references to all availability sets in the proximity placement group.
	AvailabilitySets []SubResourceResponse `pulumi:"availabilitySets"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
	ProximityPlacementGroupType *string `pulumi:"proximityPlacementGroupType"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// A list of references to all virtual machine scale sets in the proximity placement group.
	VirtualMachineScaleSets []SubResourceResponse `pulumi:"virtualMachineScaleSets"`
	// A list of references to all virtual machines in the proximity placement group.
	VirtualMachines []SubResourceResponse `pulumi:"virtualMachines"`
}