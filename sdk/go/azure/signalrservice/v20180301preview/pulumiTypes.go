// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSku struct {
	// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
	// possible for the resource this may be omitted.
	Capacity *int `pulumi:"capacity"`
	// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family *string `pulumi:"family"`
	// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
	Name string `pulumi:"name"`
	// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size *string `pulumi:"size"`
	// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
	Tier *string `pulumi:"tier"`
}

// ResourceSkuInput is an input type that accepts ResourceSkuArgs and ResourceSkuOutput values.
// You can construct a concrete instance of `ResourceSkuInput` via:
//
//          ResourceSkuArgs{...}
type ResourceSkuInput interface {
	pulumi.Input

	ToResourceSkuOutput() ResourceSkuOutput
	ToResourceSkuOutputWithContext(context.Context) ResourceSkuOutput
}

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSkuArgs struct {
	// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
	// possible for the resource this may be omitted.
	Capacity pulumi.IntPtrInput `pulumi:"capacity"`
	// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family pulumi.StringPtrInput `pulumi:"family"`
	// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
	Name pulumi.StringInput `pulumi:"name"`
	// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size pulumi.StringPtrInput `pulumi:"size"`
	// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
	Tier pulumi.StringPtrInput `pulumi:"tier"`
}

func (ResourceSkuArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceSku)(nil)).Elem()
}

func (i ResourceSkuArgs) ToResourceSkuOutput() ResourceSkuOutput {
	return i.ToResourceSkuOutputWithContext(context.Background())
}

func (i ResourceSkuArgs) ToResourceSkuOutputWithContext(ctx context.Context) ResourceSkuOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuOutput)
}

func (i ResourceSkuArgs) ToResourceSkuPtrOutput() ResourceSkuPtrOutput {
	return i.ToResourceSkuPtrOutputWithContext(context.Background())
}

func (i ResourceSkuArgs) ToResourceSkuPtrOutputWithContext(ctx context.Context) ResourceSkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuOutput).ToResourceSkuPtrOutputWithContext(ctx)
}

// ResourceSkuPtrInput is an input type that accepts ResourceSkuArgs, ResourceSkuPtr and ResourceSkuPtrOutput values.
// You can construct a concrete instance of `ResourceSkuPtrInput` via:
//
//          ResourceSkuArgs{...}
//
//  or:
//
//          nil
type ResourceSkuPtrInput interface {
	pulumi.Input

	ToResourceSkuPtrOutput() ResourceSkuPtrOutput
	ToResourceSkuPtrOutputWithContext(context.Context) ResourceSkuPtrOutput
}

type resourceSkuPtrType ResourceSkuArgs

func ResourceSkuPtr(v *ResourceSkuArgs) ResourceSkuPtrInput {
	return (*resourceSkuPtrType)(v)
}

func (*resourceSkuPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceSku)(nil)).Elem()
}

func (i *resourceSkuPtrType) ToResourceSkuPtrOutput() ResourceSkuPtrOutput {
	return i.ToResourceSkuPtrOutputWithContext(context.Background())
}

func (i *resourceSkuPtrType) ToResourceSkuPtrOutputWithContext(ctx context.Context) ResourceSkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuPtrOutput)
}

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSkuOutput struct{ *pulumi.OutputState }

func (ResourceSkuOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceSku)(nil)).Elem()
}

func (o ResourceSkuOutput) ToResourceSkuOutput() ResourceSkuOutput {
	return o
}

func (o ResourceSkuOutput) ToResourceSkuOutputWithContext(ctx context.Context) ResourceSkuOutput {
	return o
}

func (o ResourceSkuOutput) ToResourceSkuPtrOutput() ResourceSkuPtrOutput {
	return o.ToResourceSkuPtrOutputWithContext(context.Background())
}

func (o ResourceSkuOutput) ToResourceSkuPtrOutputWithContext(ctx context.Context) ResourceSkuPtrOutput {
	return o.ApplyT(func(v ResourceSku) *ResourceSku {
		return &v
	}).(ResourceSkuPtrOutput)
}

// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
// possible for the resource this may be omitted.
func (o ResourceSkuOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v ResourceSku) *int { return v.Capacity }).(pulumi.IntPtrOutput)
}

// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o ResourceSkuOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSku) *string { return v.Family }).(pulumi.StringPtrOutput)
}

// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
func (o ResourceSkuOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v ResourceSku) string { return v.Name }).(pulumi.StringOutput)
}

// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o ResourceSkuOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSku) *string { return v.Size }).(pulumi.StringPtrOutput)
}

// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
func (o ResourceSkuOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSku) *string { return v.Tier }).(pulumi.StringPtrOutput)
}

type ResourceSkuPtrOutput struct{ *pulumi.OutputState }

func (ResourceSkuPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceSku)(nil)).Elem()
}

func (o ResourceSkuPtrOutput) ToResourceSkuPtrOutput() ResourceSkuPtrOutput {
	return o
}

func (o ResourceSkuPtrOutput) ToResourceSkuPtrOutputWithContext(ctx context.Context) ResourceSkuPtrOutput {
	return o
}

func (o ResourceSkuPtrOutput) Elem() ResourceSkuOutput {
	return o.ApplyT(func(v *ResourceSku) ResourceSku { return *v }).(ResourceSkuOutput)
}

// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
// possible for the resource this may be omitted.
func (o ResourceSkuPtrOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *ResourceSku) *int {
		if v == nil {
			return nil
		}
		return v.Capacity
	}).(pulumi.IntPtrOutput)
}

// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o ResourceSkuPtrOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSku) *string {
		if v == nil {
			return nil
		}
		return v.Family
	}).(pulumi.StringPtrOutput)
}

// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
func (o ResourceSkuPtrOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSku) *string {
		if v == nil {
			return nil
		}
		return &v.Name
	}).(pulumi.StringPtrOutput)
}

// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o ResourceSkuPtrOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSku) *string {
		if v == nil {
			return nil
		}
		return v.Size
	}).(pulumi.StringPtrOutput)
}

// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
func (o ResourceSkuPtrOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSku) *string {
		if v == nil {
			return nil
		}
		return v.Tier
	}).(pulumi.StringPtrOutput)
}

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSkuResponse struct {
	// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
	// possible for the resource this may be omitted.
	Capacity *int `pulumi:"capacity"`
	// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family *string `pulumi:"family"`
	// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
	Name string `pulumi:"name"`
	// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size *string `pulumi:"size"`
	// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
	Tier *string `pulumi:"tier"`
}

// ResourceSkuResponseInput is an input type that accepts ResourceSkuResponseArgs and ResourceSkuResponseOutput values.
// You can construct a concrete instance of `ResourceSkuResponseInput` via:
//
//          ResourceSkuResponseArgs{...}
type ResourceSkuResponseInput interface {
	pulumi.Input

	ToResourceSkuResponseOutput() ResourceSkuResponseOutput
	ToResourceSkuResponseOutputWithContext(context.Context) ResourceSkuResponseOutput
}

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSkuResponseArgs struct {
	// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
	// possible for the resource this may be omitted.
	Capacity pulumi.IntPtrInput `pulumi:"capacity"`
	// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
	Family pulumi.StringPtrInput `pulumi:"family"`
	// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
	Name pulumi.StringInput `pulumi:"name"`
	// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
	Size pulumi.StringPtrInput `pulumi:"size"`
	// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
	Tier pulumi.StringPtrInput `pulumi:"tier"`
}

func (ResourceSkuResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceSkuResponse)(nil)).Elem()
}

func (i ResourceSkuResponseArgs) ToResourceSkuResponseOutput() ResourceSkuResponseOutput {
	return i.ToResourceSkuResponseOutputWithContext(context.Background())
}

func (i ResourceSkuResponseArgs) ToResourceSkuResponseOutputWithContext(ctx context.Context) ResourceSkuResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuResponseOutput)
}

func (i ResourceSkuResponseArgs) ToResourceSkuResponsePtrOutput() ResourceSkuResponsePtrOutput {
	return i.ToResourceSkuResponsePtrOutputWithContext(context.Background())
}

func (i ResourceSkuResponseArgs) ToResourceSkuResponsePtrOutputWithContext(ctx context.Context) ResourceSkuResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuResponseOutput).ToResourceSkuResponsePtrOutputWithContext(ctx)
}

// ResourceSkuResponsePtrInput is an input type that accepts ResourceSkuResponseArgs, ResourceSkuResponsePtr and ResourceSkuResponsePtrOutput values.
// You can construct a concrete instance of `ResourceSkuResponsePtrInput` via:
//
//          ResourceSkuResponseArgs{...}
//
//  or:
//
//          nil
type ResourceSkuResponsePtrInput interface {
	pulumi.Input

	ToResourceSkuResponsePtrOutput() ResourceSkuResponsePtrOutput
	ToResourceSkuResponsePtrOutputWithContext(context.Context) ResourceSkuResponsePtrOutput
}

type resourceSkuResponsePtrType ResourceSkuResponseArgs

func ResourceSkuResponsePtr(v *ResourceSkuResponseArgs) ResourceSkuResponsePtrInput {
	return (*resourceSkuResponsePtrType)(v)
}

func (*resourceSkuResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceSkuResponse)(nil)).Elem()
}

func (i *resourceSkuResponsePtrType) ToResourceSkuResponsePtrOutput() ResourceSkuResponsePtrOutput {
	return i.ToResourceSkuResponsePtrOutputWithContext(context.Background())
}

func (i *resourceSkuResponsePtrType) ToResourceSkuResponsePtrOutputWithContext(ctx context.Context) ResourceSkuResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceSkuResponsePtrOutput)
}

// The billing information of the resource.(e.g. basic vs. standard)
type ResourceSkuResponseOutput struct{ *pulumi.OutputState }

func (ResourceSkuResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceSkuResponse)(nil)).Elem()
}

func (o ResourceSkuResponseOutput) ToResourceSkuResponseOutput() ResourceSkuResponseOutput {
	return o
}

func (o ResourceSkuResponseOutput) ToResourceSkuResponseOutputWithContext(ctx context.Context) ResourceSkuResponseOutput {
	return o
}

func (o ResourceSkuResponseOutput) ToResourceSkuResponsePtrOutput() ResourceSkuResponsePtrOutput {
	return o.ToResourceSkuResponsePtrOutputWithContext(context.Background())
}

func (o ResourceSkuResponseOutput) ToResourceSkuResponsePtrOutputWithContext(ctx context.Context) ResourceSkuResponsePtrOutput {
	return o.ApplyT(func(v ResourceSkuResponse) *ResourceSkuResponse {
		return &v
	}).(ResourceSkuResponsePtrOutput)
}

// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
// possible for the resource this may be omitted.
func (o ResourceSkuResponseOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v ResourceSkuResponse) *int { return v.Capacity }).(pulumi.IntPtrOutput)
}

// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o ResourceSkuResponseOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSkuResponse) *string { return v.Family }).(pulumi.StringPtrOutput)
}

// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
func (o ResourceSkuResponseOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v ResourceSkuResponse) string { return v.Name }).(pulumi.StringOutput)
}

// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o ResourceSkuResponseOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSkuResponse) *string { return v.Size }).(pulumi.StringPtrOutput)
}

// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
func (o ResourceSkuResponseOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceSkuResponse) *string { return v.Tier }).(pulumi.StringPtrOutput)
}

type ResourceSkuResponsePtrOutput struct{ *pulumi.OutputState }

func (ResourceSkuResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceSkuResponse)(nil)).Elem()
}

func (o ResourceSkuResponsePtrOutput) ToResourceSkuResponsePtrOutput() ResourceSkuResponsePtrOutput {
	return o
}

func (o ResourceSkuResponsePtrOutput) ToResourceSkuResponsePtrOutputWithContext(ctx context.Context) ResourceSkuResponsePtrOutput {
	return o
}

func (o ResourceSkuResponsePtrOutput) Elem() ResourceSkuResponseOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) ResourceSkuResponse { return *v }).(ResourceSkuResponseOutput)
}

// Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not
// possible for the resource this may be omitted.
func (o ResourceSkuResponsePtrOutput) Capacity() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) *int {
		if v == nil {
			return nil
		}
		return v.Capacity
	}).(pulumi.IntPtrOutput)
}

// Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
func (o ResourceSkuResponsePtrOutput) Family() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Family
	}).(pulumi.StringPtrOutput)
}

// The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
func (o ResourceSkuResponsePtrOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) *string {
		if v == nil {
			return nil
		}
		return &v.Name
	}).(pulumi.StringPtrOutput)
}

// Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
func (o ResourceSkuResponsePtrOutput) Size() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Size
	}).(pulumi.StringPtrOutput)
}

// Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier
func (o ResourceSkuResponsePtrOutput) Tier() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ResourceSkuResponse) *string {
		if v == nil {
			return nil
		}
		return v.Tier
	}).(pulumi.StringPtrOutput)
}

// Settings used to provision or configure the resource.
type SignalRCreateOrUpdateProperties struct {
	// Prefix for the hostName of the SignalR service. Retained for future use.
	// The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
	HostNamePrefix *string `pulumi:"hostNamePrefix"`
}

// SignalRCreateOrUpdatePropertiesInput is an input type that accepts SignalRCreateOrUpdatePropertiesArgs and SignalRCreateOrUpdatePropertiesOutput values.
// You can construct a concrete instance of `SignalRCreateOrUpdatePropertiesInput` via:
//
//          SignalRCreateOrUpdatePropertiesArgs{...}
type SignalRCreateOrUpdatePropertiesInput interface {
	pulumi.Input

	ToSignalRCreateOrUpdatePropertiesOutput() SignalRCreateOrUpdatePropertiesOutput
	ToSignalRCreateOrUpdatePropertiesOutputWithContext(context.Context) SignalRCreateOrUpdatePropertiesOutput
}

// Settings used to provision or configure the resource.
type SignalRCreateOrUpdatePropertiesArgs struct {
	// Prefix for the hostName of the SignalR service. Retained for future use.
	// The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
	HostNamePrefix pulumi.StringPtrInput `pulumi:"hostNamePrefix"`
}

func (SignalRCreateOrUpdatePropertiesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*SignalRCreateOrUpdateProperties)(nil)).Elem()
}

func (i SignalRCreateOrUpdatePropertiesArgs) ToSignalRCreateOrUpdatePropertiesOutput() SignalRCreateOrUpdatePropertiesOutput {
	return i.ToSignalRCreateOrUpdatePropertiesOutputWithContext(context.Background())
}

func (i SignalRCreateOrUpdatePropertiesArgs) ToSignalRCreateOrUpdatePropertiesOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SignalRCreateOrUpdatePropertiesOutput)
}

func (i SignalRCreateOrUpdatePropertiesArgs) ToSignalRCreateOrUpdatePropertiesPtrOutput() SignalRCreateOrUpdatePropertiesPtrOutput {
	return i.ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(context.Background())
}

func (i SignalRCreateOrUpdatePropertiesArgs) ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SignalRCreateOrUpdatePropertiesOutput).ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(ctx)
}

// SignalRCreateOrUpdatePropertiesPtrInput is an input type that accepts SignalRCreateOrUpdatePropertiesArgs, SignalRCreateOrUpdatePropertiesPtr and SignalRCreateOrUpdatePropertiesPtrOutput values.
// You can construct a concrete instance of `SignalRCreateOrUpdatePropertiesPtrInput` via:
//
//          SignalRCreateOrUpdatePropertiesArgs{...}
//
//  or:
//
//          nil
type SignalRCreateOrUpdatePropertiesPtrInput interface {
	pulumi.Input

	ToSignalRCreateOrUpdatePropertiesPtrOutput() SignalRCreateOrUpdatePropertiesPtrOutput
	ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(context.Context) SignalRCreateOrUpdatePropertiesPtrOutput
}

type signalRCreateOrUpdatePropertiesPtrType SignalRCreateOrUpdatePropertiesArgs

func SignalRCreateOrUpdatePropertiesPtr(v *SignalRCreateOrUpdatePropertiesArgs) SignalRCreateOrUpdatePropertiesPtrInput {
	return (*signalRCreateOrUpdatePropertiesPtrType)(v)
}

func (*signalRCreateOrUpdatePropertiesPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**SignalRCreateOrUpdateProperties)(nil)).Elem()
}

func (i *signalRCreateOrUpdatePropertiesPtrType) ToSignalRCreateOrUpdatePropertiesPtrOutput() SignalRCreateOrUpdatePropertiesPtrOutput {
	return i.ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(context.Background())
}

func (i *signalRCreateOrUpdatePropertiesPtrType) ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SignalRCreateOrUpdatePropertiesPtrOutput)
}

// Settings used to provision or configure the resource.
type SignalRCreateOrUpdatePropertiesOutput struct{ *pulumi.OutputState }

func (SignalRCreateOrUpdatePropertiesOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SignalRCreateOrUpdateProperties)(nil)).Elem()
}

func (o SignalRCreateOrUpdatePropertiesOutput) ToSignalRCreateOrUpdatePropertiesOutput() SignalRCreateOrUpdatePropertiesOutput {
	return o
}

func (o SignalRCreateOrUpdatePropertiesOutput) ToSignalRCreateOrUpdatePropertiesOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesOutput {
	return o
}

func (o SignalRCreateOrUpdatePropertiesOutput) ToSignalRCreateOrUpdatePropertiesPtrOutput() SignalRCreateOrUpdatePropertiesPtrOutput {
	return o.ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(context.Background())
}

func (o SignalRCreateOrUpdatePropertiesOutput) ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesPtrOutput {
	return o.ApplyT(func(v SignalRCreateOrUpdateProperties) *SignalRCreateOrUpdateProperties {
		return &v
	}).(SignalRCreateOrUpdatePropertiesPtrOutput)
}

// Prefix for the hostName of the SignalR service. Retained for future use.
// The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
func (o SignalRCreateOrUpdatePropertiesOutput) HostNamePrefix() pulumi.StringPtrOutput {
	return o.ApplyT(func(v SignalRCreateOrUpdateProperties) *string { return v.HostNamePrefix }).(pulumi.StringPtrOutput)
}

type SignalRCreateOrUpdatePropertiesPtrOutput struct{ *pulumi.OutputState }

func (SignalRCreateOrUpdatePropertiesPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SignalRCreateOrUpdateProperties)(nil)).Elem()
}

func (o SignalRCreateOrUpdatePropertiesPtrOutput) ToSignalRCreateOrUpdatePropertiesPtrOutput() SignalRCreateOrUpdatePropertiesPtrOutput {
	return o
}

func (o SignalRCreateOrUpdatePropertiesPtrOutput) ToSignalRCreateOrUpdatePropertiesPtrOutputWithContext(ctx context.Context) SignalRCreateOrUpdatePropertiesPtrOutput {
	return o
}

func (o SignalRCreateOrUpdatePropertiesPtrOutput) Elem() SignalRCreateOrUpdatePropertiesOutput {
	return o.ApplyT(func(v *SignalRCreateOrUpdateProperties) SignalRCreateOrUpdateProperties { return *v }).(SignalRCreateOrUpdatePropertiesOutput)
}

// Prefix for the hostName of the SignalR service. Retained for future use.
// The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
func (o SignalRCreateOrUpdatePropertiesPtrOutput) HostNamePrefix() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SignalRCreateOrUpdateProperties) *string {
		if v == nil {
			return nil
		}
		return v.HostNamePrefix
	}).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(ResourceSkuOutput{})
	pulumi.RegisterOutputType(ResourceSkuPtrOutput{})
	pulumi.RegisterOutputType(ResourceSkuResponseOutput{})
	pulumi.RegisterOutputType(ResourceSkuResponsePtrOutput{})
	pulumi.RegisterOutputType(SignalRCreateOrUpdatePropertiesOutput{})
	pulumi.RegisterOutputType(SignalRCreateOrUpdatePropertiesPtrOutput{})
}