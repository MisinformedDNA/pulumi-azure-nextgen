// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDeviceSecurityGroup(ctx *pulumi.Context, args *LookupDeviceSecurityGroupArgs, opts ...pulumi.InvokeOption) (*LookupDeviceSecurityGroupResult, error) {
	var rv LookupDeviceSecurityGroupResult
	err := ctx.Invoke("azure-nextgen:security/v20190801:getDeviceSecurityGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDeviceSecurityGroupArgs struct {
	// The name of the device security group. Note that the name of the device security group is case insensitive.
	DeviceSecurityGroupName string `pulumi:"deviceSecurityGroupName"`
	// The identifier of the resource.
	ResourceId string `pulumi:"resourceId"`
}

// The device security group resource
type LookupDeviceSecurityGroupResult struct {
	// The allow-list custom alert rules.
	AllowlistRules []AllowlistCustomAlertRuleResponse `pulumi:"allowlistRules"`
	// The deny-list custom alert rules.
	DenylistRules []DenylistCustomAlertRuleResponse `pulumi:"denylistRules"`
	// Resource name
	Name string `pulumi:"name"`
	// The list of custom alert threshold rules.
	ThresholdRules []ThresholdCustomAlertRuleResponse `pulumi:"thresholdRules"`
	// The list of custom alert time-window rules.
	TimeWindowRules []TimeWindowCustomAlertRuleResponse `pulumi:"timeWindowRules"`
	// Resource type
	Type string `pulumi:"type"`
}