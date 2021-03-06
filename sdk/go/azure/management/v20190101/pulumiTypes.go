// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The policy definition reference.
type PolicyDefinitionReference struct {
	// Required if a parameter is used in policy rule.
	Parameters map[string]interface{} `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition.
	PolicyDefinitionId *string `pulumi:"policyDefinitionId"`
}

// PolicyDefinitionReferenceInput is an input type that accepts PolicyDefinitionReferenceArgs and PolicyDefinitionReferenceOutput values.
// You can construct a concrete instance of `PolicyDefinitionReferenceInput` via:
//
//          PolicyDefinitionReferenceArgs{...}
type PolicyDefinitionReferenceInput interface {
	pulumi.Input

	ToPolicyDefinitionReferenceOutput() PolicyDefinitionReferenceOutput
	ToPolicyDefinitionReferenceOutputWithContext(context.Context) PolicyDefinitionReferenceOutput
}

// The policy definition reference.
type PolicyDefinitionReferenceArgs struct {
	// Required if a parameter is used in policy rule.
	Parameters pulumi.MapInput `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition.
	PolicyDefinitionId pulumi.StringPtrInput `pulumi:"policyDefinitionId"`
}

func (PolicyDefinitionReferenceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionReference)(nil)).Elem()
}

func (i PolicyDefinitionReferenceArgs) ToPolicyDefinitionReferenceOutput() PolicyDefinitionReferenceOutput {
	return i.ToPolicyDefinitionReferenceOutputWithContext(context.Background())
}

func (i PolicyDefinitionReferenceArgs) ToPolicyDefinitionReferenceOutputWithContext(ctx context.Context) PolicyDefinitionReferenceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyDefinitionReferenceOutput)
}

// PolicyDefinitionReferenceArrayInput is an input type that accepts PolicyDefinitionReferenceArray and PolicyDefinitionReferenceArrayOutput values.
// You can construct a concrete instance of `PolicyDefinitionReferenceArrayInput` via:
//
//          PolicyDefinitionReferenceArray{ PolicyDefinitionReferenceArgs{...} }
type PolicyDefinitionReferenceArrayInput interface {
	pulumi.Input

	ToPolicyDefinitionReferenceArrayOutput() PolicyDefinitionReferenceArrayOutput
	ToPolicyDefinitionReferenceArrayOutputWithContext(context.Context) PolicyDefinitionReferenceArrayOutput
}

type PolicyDefinitionReferenceArray []PolicyDefinitionReferenceInput

func (PolicyDefinitionReferenceArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PolicyDefinitionReference)(nil)).Elem()
}

func (i PolicyDefinitionReferenceArray) ToPolicyDefinitionReferenceArrayOutput() PolicyDefinitionReferenceArrayOutput {
	return i.ToPolicyDefinitionReferenceArrayOutputWithContext(context.Background())
}

func (i PolicyDefinitionReferenceArray) ToPolicyDefinitionReferenceArrayOutputWithContext(ctx context.Context) PolicyDefinitionReferenceArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyDefinitionReferenceArrayOutput)
}

// The policy definition reference.
type PolicyDefinitionReferenceOutput struct{ *pulumi.OutputState }

func (PolicyDefinitionReferenceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionReference)(nil)).Elem()
}

func (o PolicyDefinitionReferenceOutput) ToPolicyDefinitionReferenceOutput() PolicyDefinitionReferenceOutput {
	return o
}

func (o PolicyDefinitionReferenceOutput) ToPolicyDefinitionReferenceOutputWithContext(ctx context.Context) PolicyDefinitionReferenceOutput {
	return o
}

// Required if a parameter is used in policy rule.
func (o PolicyDefinitionReferenceOutput) Parameters() pulumi.MapOutput {
	return o.ApplyT(func(v PolicyDefinitionReference) map[string]interface{} { return v.Parameters }).(pulumi.MapOutput)
}

// The ID of the policy definition or policy set definition.
func (o PolicyDefinitionReferenceOutput) PolicyDefinitionId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v PolicyDefinitionReference) *string { return v.PolicyDefinitionId }).(pulumi.StringPtrOutput)
}

type PolicyDefinitionReferenceArrayOutput struct{ *pulumi.OutputState }

func (PolicyDefinitionReferenceArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PolicyDefinitionReference)(nil)).Elem()
}

func (o PolicyDefinitionReferenceArrayOutput) ToPolicyDefinitionReferenceArrayOutput() PolicyDefinitionReferenceArrayOutput {
	return o
}

func (o PolicyDefinitionReferenceArrayOutput) ToPolicyDefinitionReferenceArrayOutputWithContext(ctx context.Context) PolicyDefinitionReferenceArrayOutput {
	return o
}

func (o PolicyDefinitionReferenceArrayOutput) Index(i pulumi.IntInput) PolicyDefinitionReferenceOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) PolicyDefinitionReference {
		return vs[0].([]PolicyDefinitionReference)[vs[1].(int)]
	}).(PolicyDefinitionReferenceOutput)
}

// The policy definition reference.
type PolicyDefinitionReferenceResponse struct {
	// Required if a parameter is used in policy rule.
	Parameters map[string]interface{} `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition.
	PolicyDefinitionId *string `pulumi:"policyDefinitionId"`
}

// PolicyDefinitionReferenceResponseInput is an input type that accepts PolicyDefinitionReferenceResponseArgs and PolicyDefinitionReferenceResponseOutput values.
// You can construct a concrete instance of `PolicyDefinitionReferenceResponseInput` via:
//
//          PolicyDefinitionReferenceResponseArgs{...}
type PolicyDefinitionReferenceResponseInput interface {
	pulumi.Input

	ToPolicyDefinitionReferenceResponseOutput() PolicyDefinitionReferenceResponseOutput
	ToPolicyDefinitionReferenceResponseOutputWithContext(context.Context) PolicyDefinitionReferenceResponseOutput
}

// The policy definition reference.
type PolicyDefinitionReferenceResponseArgs struct {
	// Required if a parameter is used in policy rule.
	Parameters pulumi.MapInput `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition.
	PolicyDefinitionId pulumi.StringPtrInput `pulumi:"policyDefinitionId"`
}

func (PolicyDefinitionReferenceResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionReferenceResponse)(nil)).Elem()
}

func (i PolicyDefinitionReferenceResponseArgs) ToPolicyDefinitionReferenceResponseOutput() PolicyDefinitionReferenceResponseOutput {
	return i.ToPolicyDefinitionReferenceResponseOutputWithContext(context.Background())
}

func (i PolicyDefinitionReferenceResponseArgs) ToPolicyDefinitionReferenceResponseOutputWithContext(ctx context.Context) PolicyDefinitionReferenceResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyDefinitionReferenceResponseOutput)
}

// PolicyDefinitionReferenceResponseArrayInput is an input type that accepts PolicyDefinitionReferenceResponseArray and PolicyDefinitionReferenceResponseArrayOutput values.
// You can construct a concrete instance of `PolicyDefinitionReferenceResponseArrayInput` via:
//
//          PolicyDefinitionReferenceResponseArray{ PolicyDefinitionReferenceResponseArgs{...} }
type PolicyDefinitionReferenceResponseArrayInput interface {
	pulumi.Input

	ToPolicyDefinitionReferenceResponseArrayOutput() PolicyDefinitionReferenceResponseArrayOutput
	ToPolicyDefinitionReferenceResponseArrayOutputWithContext(context.Context) PolicyDefinitionReferenceResponseArrayOutput
}

type PolicyDefinitionReferenceResponseArray []PolicyDefinitionReferenceResponseInput

func (PolicyDefinitionReferenceResponseArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PolicyDefinitionReferenceResponse)(nil)).Elem()
}

func (i PolicyDefinitionReferenceResponseArray) ToPolicyDefinitionReferenceResponseArrayOutput() PolicyDefinitionReferenceResponseArrayOutput {
	return i.ToPolicyDefinitionReferenceResponseArrayOutputWithContext(context.Background())
}

func (i PolicyDefinitionReferenceResponseArray) ToPolicyDefinitionReferenceResponseArrayOutputWithContext(ctx context.Context) PolicyDefinitionReferenceResponseArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyDefinitionReferenceResponseArrayOutput)
}

// The policy definition reference.
type PolicyDefinitionReferenceResponseOutput struct{ *pulumi.OutputState }

func (PolicyDefinitionReferenceResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionReferenceResponse)(nil)).Elem()
}

func (o PolicyDefinitionReferenceResponseOutput) ToPolicyDefinitionReferenceResponseOutput() PolicyDefinitionReferenceResponseOutput {
	return o
}

func (o PolicyDefinitionReferenceResponseOutput) ToPolicyDefinitionReferenceResponseOutputWithContext(ctx context.Context) PolicyDefinitionReferenceResponseOutput {
	return o
}

// Required if a parameter is used in policy rule.
func (o PolicyDefinitionReferenceResponseOutput) Parameters() pulumi.MapOutput {
	return o.ApplyT(func(v PolicyDefinitionReferenceResponse) map[string]interface{} { return v.Parameters }).(pulumi.MapOutput)
}

// The ID of the policy definition or policy set definition.
func (o PolicyDefinitionReferenceResponseOutput) PolicyDefinitionId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v PolicyDefinitionReferenceResponse) *string { return v.PolicyDefinitionId }).(pulumi.StringPtrOutput)
}

type PolicyDefinitionReferenceResponseArrayOutput struct{ *pulumi.OutputState }

func (PolicyDefinitionReferenceResponseArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]PolicyDefinitionReferenceResponse)(nil)).Elem()
}

func (o PolicyDefinitionReferenceResponseArrayOutput) ToPolicyDefinitionReferenceResponseArrayOutput() PolicyDefinitionReferenceResponseArrayOutput {
	return o
}

func (o PolicyDefinitionReferenceResponseArrayOutput) ToPolicyDefinitionReferenceResponseArrayOutputWithContext(ctx context.Context) PolicyDefinitionReferenceResponseArrayOutput {
	return o
}

func (o PolicyDefinitionReferenceResponseArrayOutput) Index(i pulumi.IntInput) PolicyDefinitionReferenceResponseOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) PolicyDefinitionReferenceResponse {
		return vs[0].([]PolicyDefinitionReferenceResponse)[vs[1].(int)]
	}).(PolicyDefinitionReferenceResponseOutput)
}

func init() {
	pulumi.RegisterOutputType(PolicyDefinitionReferenceOutput{})
	pulumi.RegisterOutputType(PolicyDefinitionReferenceArrayOutput{})
	pulumi.RegisterOutputType(PolicyDefinitionReferenceResponseOutput{})
	pulumi.RegisterOutputType(PolicyDefinitionReferenceResponseArrayOutput{})
}
