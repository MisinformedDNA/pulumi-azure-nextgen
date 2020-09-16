// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160301

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Specification for an App Service Environment to use for this resource.
type HostingEnvironmentProfileResponse struct {
	// Resource ID of the App Service Environment.
	Id *string `pulumi:"id"`
	// Name of the App Service Environment.
	Name string `pulumi:"name"`
	// Resource type of the App Service Environment.
	Type string `pulumi:"type"`
}

// HostingEnvironmentProfileResponseInput is an input type that accepts HostingEnvironmentProfileResponseArgs and HostingEnvironmentProfileResponseOutput values.
// You can construct a concrete instance of `HostingEnvironmentProfileResponseInput` via:
//
//          HostingEnvironmentProfileResponseArgs{...}
type HostingEnvironmentProfileResponseInput interface {
	pulumi.Input

	ToHostingEnvironmentProfileResponseOutput() HostingEnvironmentProfileResponseOutput
	ToHostingEnvironmentProfileResponseOutputWithContext(context.Context) HostingEnvironmentProfileResponseOutput
}

// Specification for an App Service Environment to use for this resource.
type HostingEnvironmentProfileResponseArgs struct {
	// Resource ID of the App Service Environment.
	Id pulumi.StringPtrInput `pulumi:"id"`
	// Name of the App Service Environment.
	Name pulumi.StringInput `pulumi:"name"`
	// Resource type of the App Service Environment.
	Type pulumi.StringInput `pulumi:"type"`
}

func (HostingEnvironmentProfileResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*HostingEnvironmentProfileResponse)(nil)).Elem()
}

func (i HostingEnvironmentProfileResponseArgs) ToHostingEnvironmentProfileResponseOutput() HostingEnvironmentProfileResponseOutput {
	return i.ToHostingEnvironmentProfileResponseOutputWithContext(context.Background())
}

func (i HostingEnvironmentProfileResponseArgs) ToHostingEnvironmentProfileResponseOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HostingEnvironmentProfileResponseOutput)
}

func (i HostingEnvironmentProfileResponseArgs) ToHostingEnvironmentProfileResponsePtrOutput() HostingEnvironmentProfileResponsePtrOutput {
	return i.ToHostingEnvironmentProfileResponsePtrOutputWithContext(context.Background())
}

func (i HostingEnvironmentProfileResponseArgs) ToHostingEnvironmentProfileResponsePtrOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HostingEnvironmentProfileResponseOutput).ToHostingEnvironmentProfileResponsePtrOutputWithContext(ctx)
}

// HostingEnvironmentProfileResponsePtrInput is an input type that accepts HostingEnvironmentProfileResponseArgs, HostingEnvironmentProfileResponsePtr and HostingEnvironmentProfileResponsePtrOutput values.
// You can construct a concrete instance of `HostingEnvironmentProfileResponsePtrInput` via:
//
//          HostingEnvironmentProfileResponseArgs{...}
//
//  or:
//
//          nil
type HostingEnvironmentProfileResponsePtrInput interface {
	pulumi.Input

	ToHostingEnvironmentProfileResponsePtrOutput() HostingEnvironmentProfileResponsePtrOutput
	ToHostingEnvironmentProfileResponsePtrOutputWithContext(context.Context) HostingEnvironmentProfileResponsePtrOutput
}

type hostingEnvironmentProfileResponsePtrType HostingEnvironmentProfileResponseArgs

func HostingEnvironmentProfileResponsePtr(v *HostingEnvironmentProfileResponseArgs) HostingEnvironmentProfileResponsePtrInput {
	return (*hostingEnvironmentProfileResponsePtrType)(v)
}

func (*hostingEnvironmentProfileResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**HostingEnvironmentProfileResponse)(nil)).Elem()
}

func (i *hostingEnvironmentProfileResponsePtrType) ToHostingEnvironmentProfileResponsePtrOutput() HostingEnvironmentProfileResponsePtrOutput {
	return i.ToHostingEnvironmentProfileResponsePtrOutputWithContext(context.Background())
}

func (i *hostingEnvironmentProfileResponsePtrType) ToHostingEnvironmentProfileResponsePtrOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HostingEnvironmentProfileResponsePtrOutput)
}

// Specification for an App Service Environment to use for this resource.
type HostingEnvironmentProfileResponseOutput struct{ *pulumi.OutputState }

func (HostingEnvironmentProfileResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*HostingEnvironmentProfileResponse)(nil)).Elem()
}

func (o HostingEnvironmentProfileResponseOutput) ToHostingEnvironmentProfileResponseOutput() HostingEnvironmentProfileResponseOutput {
	return o
}

func (o HostingEnvironmentProfileResponseOutput) ToHostingEnvironmentProfileResponseOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponseOutput {
	return o
}

func (o HostingEnvironmentProfileResponseOutput) ToHostingEnvironmentProfileResponsePtrOutput() HostingEnvironmentProfileResponsePtrOutput {
	return o.ToHostingEnvironmentProfileResponsePtrOutputWithContext(context.Background())
}

func (o HostingEnvironmentProfileResponseOutput) ToHostingEnvironmentProfileResponsePtrOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponsePtrOutput {
	return o.ApplyT(func(v HostingEnvironmentProfileResponse) *HostingEnvironmentProfileResponse {
		return &v
	}).(HostingEnvironmentProfileResponsePtrOutput)
}

// Resource ID of the App Service Environment.
func (o HostingEnvironmentProfileResponseOutput) Id() pulumi.StringPtrOutput {
	return o.ApplyT(func(v HostingEnvironmentProfileResponse) *string { return v.Id }).(pulumi.StringPtrOutput)
}

// Name of the App Service Environment.
func (o HostingEnvironmentProfileResponseOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v HostingEnvironmentProfileResponse) string { return v.Name }).(pulumi.StringOutput)
}

// Resource type of the App Service Environment.
func (o HostingEnvironmentProfileResponseOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v HostingEnvironmentProfileResponse) string { return v.Type }).(pulumi.StringOutput)
}

type HostingEnvironmentProfileResponsePtrOutput struct{ *pulumi.OutputState }

func (HostingEnvironmentProfileResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**HostingEnvironmentProfileResponse)(nil)).Elem()
}

func (o HostingEnvironmentProfileResponsePtrOutput) ToHostingEnvironmentProfileResponsePtrOutput() HostingEnvironmentProfileResponsePtrOutput {
	return o
}

func (o HostingEnvironmentProfileResponsePtrOutput) ToHostingEnvironmentProfileResponsePtrOutputWithContext(ctx context.Context) HostingEnvironmentProfileResponsePtrOutput {
	return o
}

func (o HostingEnvironmentProfileResponsePtrOutput) Elem() HostingEnvironmentProfileResponseOutput {
	return o.ApplyT(func(v *HostingEnvironmentProfileResponse) HostingEnvironmentProfileResponse { return *v }).(HostingEnvironmentProfileResponseOutput)
}

// Resource ID of the App Service Environment.
func (o HostingEnvironmentProfileResponsePtrOutput) Id() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *HostingEnvironmentProfileResponse) *string {
		if v == nil {
			return nil
		}
		return v.Id
	}).(pulumi.StringPtrOutput)
}

// Name of the App Service Environment.
func (o HostingEnvironmentProfileResponsePtrOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *HostingEnvironmentProfileResponse) *string {
		if v == nil {
			return nil
		}
		return &v.Name
	}).(pulumi.StringPtrOutput)
}

// Resource type of the App Service Environment.
func (o HostingEnvironmentProfileResponsePtrOutput) Type() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *HostingEnvironmentProfileResponse) *string {
		if v == nil {
			return nil
		}
		return &v.Type
	}).(pulumi.StringPtrOutput)
}

// A domain specific resource identifier.
type IdentifierResponse struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Resource type.
	Type string `pulumi:"type"`
}

// IdentifierResponseInput is an input type that accepts IdentifierResponseArgs and IdentifierResponseOutput values.
// You can construct a concrete instance of `IdentifierResponseInput` via:
//
//          IdentifierResponseArgs{...}
type IdentifierResponseInput interface {
	pulumi.Input

	ToIdentifierResponseOutput() IdentifierResponseOutput
	ToIdentifierResponseOutputWithContext(context.Context) IdentifierResponseOutput
}

// A domain specific resource identifier.
type IdentifierResponseArgs struct {
	// Resource Id.
	Id pulumi.StringInput `pulumi:"id"`
	// Kind of resource.
	Kind pulumi.StringPtrInput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringInput `pulumi:"name"`
	// Resource type.
	Type pulumi.StringInput `pulumi:"type"`
}

func (IdentifierResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*IdentifierResponse)(nil)).Elem()
}

func (i IdentifierResponseArgs) ToIdentifierResponseOutput() IdentifierResponseOutput {
	return i.ToIdentifierResponseOutputWithContext(context.Background())
}

func (i IdentifierResponseArgs) ToIdentifierResponseOutputWithContext(ctx context.Context) IdentifierResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IdentifierResponseOutput)
}

// IdentifierResponseArrayInput is an input type that accepts IdentifierResponseArray and IdentifierResponseArrayOutput values.
// You can construct a concrete instance of `IdentifierResponseArrayInput` via:
//
//          IdentifierResponseArray{ IdentifierResponseArgs{...} }
type IdentifierResponseArrayInput interface {
	pulumi.Input

	ToIdentifierResponseArrayOutput() IdentifierResponseArrayOutput
	ToIdentifierResponseArrayOutputWithContext(context.Context) IdentifierResponseArrayOutput
}

type IdentifierResponseArray []IdentifierResponseInput

func (IdentifierResponseArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]IdentifierResponse)(nil)).Elem()
}

func (i IdentifierResponseArray) ToIdentifierResponseArrayOutput() IdentifierResponseArrayOutput {
	return i.ToIdentifierResponseArrayOutputWithContext(context.Background())
}

func (i IdentifierResponseArray) ToIdentifierResponseArrayOutputWithContext(ctx context.Context) IdentifierResponseArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IdentifierResponseArrayOutput)
}

// A domain specific resource identifier.
type IdentifierResponseOutput struct{ *pulumi.OutputState }

func (IdentifierResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IdentifierResponse)(nil)).Elem()
}

func (o IdentifierResponseOutput) ToIdentifierResponseOutput() IdentifierResponseOutput {
	return o
}

func (o IdentifierResponseOutput) ToIdentifierResponseOutputWithContext(ctx context.Context) IdentifierResponseOutput {
	return o
}

// Resource Id.
func (o IdentifierResponseOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v IdentifierResponse) string { return v.Id }).(pulumi.StringOutput)
}

// Kind of resource.
func (o IdentifierResponseOutput) Kind() pulumi.StringPtrOutput {
	return o.ApplyT(func(v IdentifierResponse) *string { return v.Kind }).(pulumi.StringPtrOutput)
}

// Resource Name.
func (o IdentifierResponseOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v IdentifierResponse) string { return v.Name }).(pulumi.StringOutput)
}

// Resource type.
func (o IdentifierResponseOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v IdentifierResponse) string { return v.Type }).(pulumi.StringOutput)
}

type IdentifierResponseArrayOutput struct{ *pulumi.OutputState }

func (IdentifierResponseArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]IdentifierResponse)(nil)).Elem()
}

func (o IdentifierResponseArrayOutput) ToIdentifierResponseArrayOutput() IdentifierResponseArrayOutput {
	return o
}

func (o IdentifierResponseArrayOutput) ToIdentifierResponseArrayOutputWithContext(ctx context.Context) IdentifierResponseArrayOutput {
	return o
}

func (o IdentifierResponseArrayOutput) Index(i pulumi.IntInput) IdentifierResponseOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) IdentifierResponse {
		return vs[0].([]IdentifierResponse)[vs[1].(int)]
	}).(IdentifierResponseOutput)
}

func init() {
	pulumi.RegisterOutputType(HostingEnvironmentProfileResponseOutput{})
	pulumi.RegisterOutputType(HostingEnvironmentProfileResponsePtrOutput{})
	pulumi.RegisterOutputType(IdentifierResponseOutput{})
	pulumi.RegisterOutputType(IdentifierResponseArrayOutput{})
}