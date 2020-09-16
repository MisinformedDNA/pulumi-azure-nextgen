// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151031

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVariable(ctx *pulumi.Context, args *LookupVariableArgs, opts ...pulumi.InvokeOption) (*LookupVariableResult, error) {
	var rv LookupVariableResult
	err := ctx.Invoke("azure-nextgen:automation/v20151031:getVariable", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVariableArgs struct {
	// The name of the automation account.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// Name of an Azure Resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of variable.
	VariableName string `pulumi:"variableName"`
}

// Definition of the variable.
type LookupVariableResult struct {
	// Gets or sets the creation time.
	CreationTime *string `pulumi:"creationTime"`
	// Gets or sets the description.
	Description *string `pulumi:"description"`
	// Gets or sets the encrypted flag of the variable.
	IsEncrypted *bool `pulumi:"isEncrypted"`
	// Gets or sets the last modified time.
	LastModifiedTime *string `pulumi:"lastModifiedTime"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// Gets or sets the value of the variable.
	Value *string `pulumi:"value"`
}