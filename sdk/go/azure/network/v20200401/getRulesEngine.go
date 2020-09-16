// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupRulesEngine(ctx *pulumi.Context, args *LookupRulesEngineArgs, opts ...pulumi.InvokeOption) (*LookupRulesEngineResult, error) {
	var rv LookupRulesEngineResult
	err := ctx.Invoke("azure-nextgen:network/v20200401:getRulesEngine", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupRulesEngineArgs struct {
	// Name of the Front Door which is globally unique.
	FrontDoorName string `pulumi:"frontDoorName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the Rules Engine which is unique within the Front Door.
	RulesEngineName string `pulumi:"rulesEngineName"`
}

// A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
type LookupRulesEngineResult struct {
	// Resource name.
	Name string `pulumi:"name"`
	// Resource status.
	ResourceState *string `pulumi:"resourceState"`
	// A list of rules that define a particular Rules Engine Configuration.
	Rules []RulesEngineRuleResponse `pulumi:"rules"`
	// Resource type.
	Type string `pulumi:"type"`
}