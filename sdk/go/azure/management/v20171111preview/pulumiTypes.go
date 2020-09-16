// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171111preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The status of the blueprint. This field is readonly.
type BlueprintStatusResponse struct {
	// Last modified time of this blueprint.
	LastModified string `pulumi:"lastModified"`
	// Creation time of this blueprint.
	TimeCreated string `pulumi:"timeCreated"`
}

// BlueprintStatusResponseInput is an input type that accepts BlueprintStatusResponseArgs and BlueprintStatusResponseOutput values.
// You can construct a concrete instance of `BlueprintStatusResponseInput` via:
//
//          BlueprintStatusResponseArgs{...}
type BlueprintStatusResponseInput interface {
	pulumi.Input

	ToBlueprintStatusResponseOutput() BlueprintStatusResponseOutput
	ToBlueprintStatusResponseOutputWithContext(context.Context) BlueprintStatusResponseOutput
}

// The status of the blueprint. This field is readonly.
type BlueprintStatusResponseArgs struct {
	// Last modified time of this blueprint.
	LastModified pulumi.StringInput `pulumi:"lastModified"`
	// Creation time of this blueprint.
	TimeCreated pulumi.StringInput `pulumi:"timeCreated"`
}

func (BlueprintStatusResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*BlueprintStatusResponse)(nil)).Elem()
}

func (i BlueprintStatusResponseArgs) ToBlueprintStatusResponseOutput() BlueprintStatusResponseOutput {
	return i.ToBlueprintStatusResponseOutputWithContext(context.Background())
}

func (i BlueprintStatusResponseArgs) ToBlueprintStatusResponseOutputWithContext(ctx context.Context) BlueprintStatusResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BlueprintStatusResponseOutput)
}

func (i BlueprintStatusResponseArgs) ToBlueprintStatusResponsePtrOutput() BlueprintStatusResponsePtrOutput {
	return i.ToBlueprintStatusResponsePtrOutputWithContext(context.Background())
}

func (i BlueprintStatusResponseArgs) ToBlueprintStatusResponsePtrOutputWithContext(ctx context.Context) BlueprintStatusResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BlueprintStatusResponseOutput).ToBlueprintStatusResponsePtrOutputWithContext(ctx)
}

// BlueprintStatusResponsePtrInput is an input type that accepts BlueprintStatusResponseArgs, BlueprintStatusResponsePtr and BlueprintStatusResponsePtrOutput values.
// You can construct a concrete instance of `BlueprintStatusResponsePtrInput` via:
//
//          BlueprintStatusResponseArgs{...}
//
//  or:
//
//          nil
type BlueprintStatusResponsePtrInput interface {
	pulumi.Input

	ToBlueprintStatusResponsePtrOutput() BlueprintStatusResponsePtrOutput
	ToBlueprintStatusResponsePtrOutputWithContext(context.Context) BlueprintStatusResponsePtrOutput
}

type blueprintStatusResponsePtrType BlueprintStatusResponseArgs

func BlueprintStatusResponsePtr(v *BlueprintStatusResponseArgs) BlueprintStatusResponsePtrInput {
	return (*blueprintStatusResponsePtrType)(v)
}

func (*blueprintStatusResponsePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**BlueprintStatusResponse)(nil)).Elem()
}

func (i *blueprintStatusResponsePtrType) ToBlueprintStatusResponsePtrOutput() BlueprintStatusResponsePtrOutput {
	return i.ToBlueprintStatusResponsePtrOutputWithContext(context.Background())
}

func (i *blueprintStatusResponsePtrType) ToBlueprintStatusResponsePtrOutputWithContext(ctx context.Context) BlueprintStatusResponsePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BlueprintStatusResponsePtrOutput)
}

// The status of the blueprint. This field is readonly.
type BlueprintStatusResponseOutput struct{ *pulumi.OutputState }

func (BlueprintStatusResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*BlueprintStatusResponse)(nil)).Elem()
}

func (o BlueprintStatusResponseOutput) ToBlueprintStatusResponseOutput() BlueprintStatusResponseOutput {
	return o
}

func (o BlueprintStatusResponseOutput) ToBlueprintStatusResponseOutputWithContext(ctx context.Context) BlueprintStatusResponseOutput {
	return o
}

func (o BlueprintStatusResponseOutput) ToBlueprintStatusResponsePtrOutput() BlueprintStatusResponsePtrOutput {
	return o.ToBlueprintStatusResponsePtrOutputWithContext(context.Background())
}

func (o BlueprintStatusResponseOutput) ToBlueprintStatusResponsePtrOutputWithContext(ctx context.Context) BlueprintStatusResponsePtrOutput {
	return o.ApplyT(func(v BlueprintStatusResponse) *BlueprintStatusResponse {
		return &v
	}).(BlueprintStatusResponsePtrOutput)
}

// Last modified time of this blueprint.
func (o BlueprintStatusResponseOutput) LastModified() pulumi.StringOutput {
	return o.ApplyT(func(v BlueprintStatusResponse) string { return v.LastModified }).(pulumi.StringOutput)
}

// Creation time of this blueprint.
func (o BlueprintStatusResponseOutput) TimeCreated() pulumi.StringOutput {
	return o.ApplyT(func(v BlueprintStatusResponse) string { return v.TimeCreated }).(pulumi.StringOutput)
}

type BlueprintStatusResponsePtrOutput struct{ *pulumi.OutputState }

func (BlueprintStatusResponsePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**BlueprintStatusResponse)(nil)).Elem()
}

func (o BlueprintStatusResponsePtrOutput) ToBlueprintStatusResponsePtrOutput() BlueprintStatusResponsePtrOutput {
	return o
}

func (o BlueprintStatusResponsePtrOutput) ToBlueprintStatusResponsePtrOutputWithContext(ctx context.Context) BlueprintStatusResponsePtrOutput {
	return o
}

func (o BlueprintStatusResponsePtrOutput) Elem() BlueprintStatusResponseOutput {
	return o.ApplyT(func(v *BlueprintStatusResponse) BlueprintStatusResponse { return *v }).(BlueprintStatusResponseOutput)
}

// Last modified time of this blueprint.
func (o BlueprintStatusResponsePtrOutput) LastModified() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *BlueprintStatusResponse) *string {
		if v == nil {
			return nil
		}
		return &v.LastModified
	}).(pulumi.StringPtrOutput)
}

// Creation time of this blueprint.
func (o BlueprintStatusResponsePtrOutput) TimeCreated() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *BlueprintStatusResponse) *string {
		if v == nil {
			return nil
		}
		return &v.TimeCreated
	}).(pulumi.StringPtrOutput)
}

// Represent a parameter with constrains and metadata.
type ParameterDefinition struct {
	// Array of allowed values for this parameter.
	AllowedValues []map[string]interface{} `pulumi:"allowedValues"`
	// Default Value for this parameter.
	DefaultValue map[string]interface{} `pulumi:"defaultValue"`
	// Description of this parameter/resourceGroup.
	Description *string `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName *string `pulumi:"displayName"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType *string `pulumi:"strongType"`
	// Allowed data types for Azure Resource Manager template parameters.
	Type string `pulumi:"type"`
}

// ParameterDefinitionInput is an input type that accepts ParameterDefinitionArgs and ParameterDefinitionOutput values.
// You can construct a concrete instance of `ParameterDefinitionInput` via:
//
//          ParameterDefinitionArgs{...}
type ParameterDefinitionInput interface {
	pulumi.Input

	ToParameterDefinitionOutput() ParameterDefinitionOutput
	ToParameterDefinitionOutputWithContext(context.Context) ParameterDefinitionOutput
}

// Represent a parameter with constrains and metadata.
type ParameterDefinitionArgs struct {
	// Array of allowed values for this parameter.
	AllowedValues pulumi.MapArrayInput `pulumi:"allowedValues"`
	// Default Value for this parameter.
	DefaultValue pulumi.MapInput `pulumi:"defaultValue"`
	// Description of this parameter/resourceGroup.
	Description pulumi.StringPtrInput `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName pulumi.StringPtrInput `pulumi:"displayName"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType pulumi.StringPtrInput `pulumi:"strongType"`
	// Allowed data types for Azure Resource Manager template parameters.
	Type pulumi.StringInput `pulumi:"type"`
}

func (ParameterDefinitionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ParameterDefinition)(nil)).Elem()
}

func (i ParameterDefinitionArgs) ToParameterDefinitionOutput() ParameterDefinitionOutput {
	return i.ToParameterDefinitionOutputWithContext(context.Background())
}

func (i ParameterDefinitionArgs) ToParameterDefinitionOutputWithContext(ctx context.Context) ParameterDefinitionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ParameterDefinitionOutput)
}

// ParameterDefinitionMapInput is an input type that accepts ParameterDefinitionMap and ParameterDefinitionMapOutput values.
// You can construct a concrete instance of `ParameterDefinitionMapInput` via:
//
//          ParameterDefinitionMap{ "key": ParameterDefinitionArgs{...} }
type ParameterDefinitionMapInput interface {
	pulumi.Input

	ToParameterDefinitionMapOutput() ParameterDefinitionMapOutput
	ToParameterDefinitionMapOutputWithContext(context.Context) ParameterDefinitionMapOutput
}

type ParameterDefinitionMap map[string]ParameterDefinitionInput

func (ParameterDefinitionMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ParameterDefinition)(nil)).Elem()
}

func (i ParameterDefinitionMap) ToParameterDefinitionMapOutput() ParameterDefinitionMapOutput {
	return i.ToParameterDefinitionMapOutputWithContext(context.Background())
}

func (i ParameterDefinitionMap) ToParameterDefinitionMapOutputWithContext(ctx context.Context) ParameterDefinitionMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ParameterDefinitionMapOutput)
}

// Represent a parameter with constrains and metadata.
type ParameterDefinitionOutput struct{ *pulumi.OutputState }

func (ParameterDefinitionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ParameterDefinition)(nil)).Elem()
}

func (o ParameterDefinitionOutput) ToParameterDefinitionOutput() ParameterDefinitionOutput {
	return o
}

func (o ParameterDefinitionOutput) ToParameterDefinitionOutputWithContext(ctx context.Context) ParameterDefinitionOutput {
	return o
}

// Array of allowed values for this parameter.
func (o ParameterDefinitionOutput) AllowedValues() pulumi.MapArrayOutput {
	return o.ApplyT(func(v ParameterDefinition) []map[string]interface{} { return v.AllowedValues }).(pulumi.MapArrayOutput)
}

// Default Value for this parameter.
func (o ParameterDefinitionOutput) DefaultValue() pulumi.MapOutput {
	return o.ApplyT(func(v ParameterDefinition) map[string]interface{} { return v.DefaultValue }).(pulumi.MapOutput)
}

// Description of this parameter/resourceGroup.
func (o ParameterDefinitionOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinition) *string { return v.Description }).(pulumi.StringPtrOutput)
}

// DisplayName of this parameter/resourceGroup.
func (o ParameterDefinitionOutput) DisplayName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinition) *string { return v.DisplayName }).(pulumi.StringPtrOutput)
}

// StrongType for UI to render rich experience during assignment time.
func (o ParameterDefinitionOutput) StrongType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinition) *string { return v.StrongType }).(pulumi.StringPtrOutput)
}

// Allowed data types for Azure Resource Manager template parameters.
func (o ParameterDefinitionOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v ParameterDefinition) string { return v.Type }).(pulumi.StringOutput)
}

type ParameterDefinitionMapOutput struct{ *pulumi.OutputState }

func (ParameterDefinitionMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ParameterDefinition)(nil)).Elem()
}

func (o ParameterDefinitionMapOutput) ToParameterDefinitionMapOutput() ParameterDefinitionMapOutput {
	return o
}

func (o ParameterDefinitionMapOutput) ToParameterDefinitionMapOutputWithContext(ctx context.Context) ParameterDefinitionMapOutput {
	return o
}

func (o ParameterDefinitionMapOutput) MapIndex(k pulumi.StringInput) ParameterDefinitionOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) ParameterDefinition {
		return vs[0].(map[string]ParameterDefinition)[vs[1].(string)]
	}).(ParameterDefinitionOutput)
}

// Represent a parameter with constrains and metadata.
type ParameterDefinitionResponse struct {
	// Array of allowed values for this parameter.
	AllowedValues []map[string]interface{} `pulumi:"allowedValues"`
	// Default Value for this parameter.
	DefaultValue map[string]interface{} `pulumi:"defaultValue"`
	// Description of this parameter/resourceGroup.
	Description *string `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName *string `pulumi:"displayName"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType *string `pulumi:"strongType"`
	// Allowed data types for Azure Resource Manager template parameters.
	Type string `pulumi:"type"`
}

// ParameterDefinitionResponseInput is an input type that accepts ParameterDefinitionResponseArgs and ParameterDefinitionResponseOutput values.
// You can construct a concrete instance of `ParameterDefinitionResponseInput` via:
//
//          ParameterDefinitionResponseArgs{...}
type ParameterDefinitionResponseInput interface {
	pulumi.Input

	ToParameterDefinitionResponseOutput() ParameterDefinitionResponseOutput
	ToParameterDefinitionResponseOutputWithContext(context.Context) ParameterDefinitionResponseOutput
}

// Represent a parameter with constrains and metadata.
type ParameterDefinitionResponseArgs struct {
	// Array of allowed values for this parameter.
	AllowedValues pulumi.MapArrayInput `pulumi:"allowedValues"`
	// Default Value for this parameter.
	DefaultValue pulumi.MapInput `pulumi:"defaultValue"`
	// Description of this parameter/resourceGroup.
	Description pulumi.StringPtrInput `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName pulumi.StringPtrInput `pulumi:"displayName"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType pulumi.StringPtrInput `pulumi:"strongType"`
	// Allowed data types for Azure Resource Manager template parameters.
	Type pulumi.StringInput `pulumi:"type"`
}

func (ParameterDefinitionResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ParameterDefinitionResponse)(nil)).Elem()
}

func (i ParameterDefinitionResponseArgs) ToParameterDefinitionResponseOutput() ParameterDefinitionResponseOutput {
	return i.ToParameterDefinitionResponseOutputWithContext(context.Background())
}

func (i ParameterDefinitionResponseArgs) ToParameterDefinitionResponseOutputWithContext(ctx context.Context) ParameterDefinitionResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ParameterDefinitionResponseOutput)
}

// ParameterDefinitionResponseMapInput is an input type that accepts ParameterDefinitionResponseMap and ParameterDefinitionResponseMapOutput values.
// You can construct a concrete instance of `ParameterDefinitionResponseMapInput` via:
//
//          ParameterDefinitionResponseMap{ "key": ParameterDefinitionResponseArgs{...} }
type ParameterDefinitionResponseMapInput interface {
	pulumi.Input

	ToParameterDefinitionResponseMapOutput() ParameterDefinitionResponseMapOutput
	ToParameterDefinitionResponseMapOutputWithContext(context.Context) ParameterDefinitionResponseMapOutput
}

type ParameterDefinitionResponseMap map[string]ParameterDefinitionResponseInput

func (ParameterDefinitionResponseMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ParameterDefinitionResponse)(nil)).Elem()
}

func (i ParameterDefinitionResponseMap) ToParameterDefinitionResponseMapOutput() ParameterDefinitionResponseMapOutput {
	return i.ToParameterDefinitionResponseMapOutputWithContext(context.Background())
}

func (i ParameterDefinitionResponseMap) ToParameterDefinitionResponseMapOutputWithContext(ctx context.Context) ParameterDefinitionResponseMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ParameterDefinitionResponseMapOutput)
}

// Represent a parameter with constrains and metadata.
type ParameterDefinitionResponseOutput struct{ *pulumi.OutputState }

func (ParameterDefinitionResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ParameterDefinitionResponse)(nil)).Elem()
}

func (o ParameterDefinitionResponseOutput) ToParameterDefinitionResponseOutput() ParameterDefinitionResponseOutput {
	return o
}

func (o ParameterDefinitionResponseOutput) ToParameterDefinitionResponseOutputWithContext(ctx context.Context) ParameterDefinitionResponseOutput {
	return o
}

// Array of allowed values for this parameter.
func (o ParameterDefinitionResponseOutput) AllowedValues() pulumi.MapArrayOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) []map[string]interface{} { return v.AllowedValues }).(pulumi.MapArrayOutput)
}

// Default Value for this parameter.
func (o ParameterDefinitionResponseOutput) DefaultValue() pulumi.MapOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) map[string]interface{} { return v.DefaultValue }).(pulumi.MapOutput)
}

// Description of this parameter/resourceGroup.
func (o ParameterDefinitionResponseOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) *string { return v.Description }).(pulumi.StringPtrOutput)
}

// DisplayName of this parameter/resourceGroup.
func (o ParameterDefinitionResponseOutput) DisplayName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) *string { return v.DisplayName }).(pulumi.StringPtrOutput)
}

// StrongType for UI to render rich experience during assignment time.
func (o ParameterDefinitionResponseOutput) StrongType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) *string { return v.StrongType }).(pulumi.StringPtrOutput)
}

// Allowed data types for Azure Resource Manager template parameters.
func (o ParameterDefinitionResponseOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v ParameterDefinitionResponse) string { return v.Type }).(pulumi.StringOutput)
}

type ParameterDefinitionResponseMapOutput struct{ *pulumi.OutputState }

func (ParameterDefinitionResponseMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ParameterDefinitionResponse)(nil)).Elem()
}

func (o ParameterDefinitionResponseMapOutput) ToParameterDefinitionResponseMapOutput() ParameterDefinitionResponseMapOutput {
	return o
}

func (o ParameterDefinitionResponseMapOutput) ToParameterDefinitionResponseMapOutputWithContext(ctx context.Context) ParameterDefinitionResponseMapOutput {
	return o
}

func (o ParameterDefinitionResponseMapOutput) MapIndex(k pulumi.StringInput) ParameterDefinitionResponseOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) ParameterDefinitionResponse {
		return vs[0].(map[string]ParameterDefinitionResponse)[vs[1].(string)]
	}).(ParameterDefinitionResponseOutput)
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinition struct {
	// Artifacts which need to be deployed before this resource group.
	DependsOn []string `pulumi:"dependsOn"`
	// Description of this parameter/resourceGroup.
	Description *string `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName *string `pulumi:"displayName"`
	// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
	Location *string `pulumi:"location"`
	// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
	Name *string `pulumi:"name"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType *string `pulumi:"strongType"`
}

// ResourceGroupDefinitionInput is an input type that accepts ResourceGroupDefinitionArgs and ResourceGroupDefinitionOutput values.
// You can construct a concrete instance of `ResourceGroupDefinitionInput` via:
//
//          ResourceGroupDefinitionArgs{...}
type ResourceGroupDefinitionInput interface {
	pulumi.Input

	ToResourceGroupDefinitionOutput() ResourceGroupDefinitionOutput
	ToResourceGroupDefinitionOutputWithContext(context.Context) ResourceGroupDefinitionOutput
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinitionArgs struct {
	// Artifacts which need to be deployed before this resource group.
	DependsOn pulumi.StringArrayInput `pulumi:"dependsOn"`
	// Description of this parameter/resourceGroup.
	Description pulumi.StringPtrInput `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName pulumi.StringPtrInput `pulumi:"displayName"`
	// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
	Location pulumi.StringPtrInput `pulumi:"location"`
	// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
	Name pulumi.StringPtrInput `pulumi:"name"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType pulumi.StringPtrInput `pulumi:"strongType"`
}

func (ResourceGroupDefinitionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupDefinition)(nil)).Elem()
}

func (i ResourceGroupDefinitionArgs) ToResourceGroupDefinitionOutput() ResourceGroupDefinitionOutput {
	return i.ToResourceGroupDefinitionOutputWithContext(context.Background())
}

func (i ResourceGroupDefinitionArgs) ToResourceGroupDefinitionOutputWithContext(ctx context.Context) ResourceGroupDefinitionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupDefinitionOutput)
}

// ResourceGroupDefinitionMapInput is an input type that accepts ResourceGroupDefinitionMap and ResourceGroupDefinitionMapOutput values.
// You can construct a concrete instance of `ResourceGroupDefinitionMapInput` via:
//
//          ResourceGroupDefinitionMap{ "key": ResourceGroupDefinitionArgs{...} }
type ResourceGroupDefinitionMapInput interface {
	pulumi.Input

	ToResourceGroupDefinitionMapOutput() ResourceGroupDefinitionMapOutput
	ToResourceGroupDefinitionMapOutputWithContext(context.Context) ResourceGroupDefinitionMapOutput
}

type ResourceGroupDefinitionMap map[string]ResourceGroupDefinitionInput

func (ResourceGroupDefinitionMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ResourceGroupDefinition)(nil)).Elem()
}

func (i ResourceGroupDefinitionMap) ToResourceGroupDefinitionMapOutput() ResourceGroupDefinitionMapOutput {
	return i.ToResourceGroupDefinitionMapOutputWithContext(context.Background())
}

func (i ResourceGroupDefinitionMap) ToResourceGroupDefinitionMapOutputWithContext(ctx context.Context) ResourceGroupDefinitionMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupDefinitionMapOutput)
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinitionOutput struct{ *pulumi.OutputState }

func (ResourceGroupDefinitionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupDefinition)(nil)).Elem()
}

func (o ResourceGroupDefinitionOutput) ToResourceGroupDefinitionOutput() ResourceGroupDefinitionOutput {
	return o
}

func (o ResourceGroupDefinitionOutput) ToResourceGroupDefinitionOutputWithContext(ctx context.Context) ResourceGroupDefinitionOutput {
	return o
}

// Artifacts which need to be deployed before this resource group.
func (o ResourceGroupDefinitionOutput) DependsOn() pulumi.StringArrayOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) []string { return v.DependsOn }).(pulumi.StringArrayOutput)
}

// Description of this parameter/resourceGroup.
func (o ResourceGroupDefinitionOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) *string { return v.Description }).(pulumi.StringPtrOutput)
}

// DisplayName of this parameter/resourceGroup.
func (o ResourceGroupDefinitionOutput) DisplayName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) *string { return v.DisplayName }).(pulumi.StringPtrOutput)
}

// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
func (o ResourceGroupDefinitionOutput) Location() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) *string { return v.Location }).(pulumi.StringPtrOutput)
}

// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
func (o ResourceGroupDefinitionOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) *string { return v.Name }).(pulumi.StringPtrOutput)
}

// StrongType for UI to render rich experience during assignment time.
func (o ResourceGroupDefinitionOutput) StrongType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinition) *string { return v.StrongType }).(pulumi.StringPtrOutput)
}

type ResourceGroupDefinitionMapOutput struct{ *pulumi.OutputState }

func (ResourceGroupDefinitionMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ResourceGroupDefinition)(nil)).Elem()
}

func (o ResourceGroupDefinitionMapOutput) ToResourceGroupDefinitionMapOutput() ResourceGroupDefinitionMapOutput {
	return o
}

func (o ResourceGroupDefinitionMapOutput) ToResourceGroupDefinitionMapOutputWithContext(ctx context.Context) ResourceGroupDefinitionMapOutput {
	return o
}

func (o ResourceGroupDefinitionMapOutput) MapIndex(k pulumi.StringInput) ResourceGroupDefinitionOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) ResourceGroupDefinition {
		return vs[0].(map[string]ResourceGroupDefinition)[vs[1].(string)]
	}).(ResourceGroupDefinitionOutput)
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinitionResponse struct {
	// Artifacts which need to be deployed before this resource group.
	DependsOn []string `pulumi:"dependsOn"`
	// Description of this parameter/resourceGroup.
	Description *string `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName *string `pulumi:"displayName"`
	// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
	Location *string `pulumi:"location"`
	// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
	Name *string `pulumi:"name"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType *string `pulumi:"strongType"`
}

// ResourceGroupDefinitionResponseInput is an input type that accepts ResourceGroupDefinitionResponseArgs and ResourceGroupDefinitionResponseOutput values.
// You can construct a concrete instance of `ResourceGroupDefinitionResponseInput` via:
//
//          ResourceGroupDefinitionResponseArgs{...}
type ResourceGroupDefinitionResponseInput interface {
	pulumi.Input

	ToResourceGroupDefinitionResponseOutput() ResourceGroupDefinitionResponseOutput
	ToResourceGroupDefinitionResponseOutputWithContext(context.Context) ResourceGroupDefinitionResponseOutput
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinitionResponseArgs struct {
	// Artifacts which need to be deployed before this resource group.
	DependsOn pulumi.StringArrayInput `pulumi:"dependsOn"`
	// Description of this parameter/resourceGroup.
	Description pulumi.StringPtrInput `pulumi:"description"`
	// DisplayName of this parameter/resourceGroup.
	DisplayName pulumi.StringPtrInput `pulumi:"displayName"`
	// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
	Location pulumi.StringPtrInput `pulumi:"location"`
	// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
	Name pulumi.StringPtrInput `pulumi:"name"`
	// StrongType for UI to render rich experience during assignment time.
	StrongType pulumi.StringPtrInput `pulumi:"strongType"`
}

func (ResourceGroupDefinitionResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupDefinitionResponse)(nil)).Elem()
}

func (i ResourceGroupDefinitionResponseArgs) ToResourceGroupDefinitionResponseOutput() ResourceGroupDefinitionResponseOutput {
	return i.ToResourceGroupDefinitionResponseOutputWithContext(context.Background())
}

func (i ResourceGroupDefinitionResponseArgs) ToResourceGroupDefinitionResponseOutputWithContext(ctx context.Context) ResourceGroupDefinitionResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupDefinitionResponseOutput)
}

// ResourceGroupDefinitionResponseMapInput is an input type that accepts ResourceGroupDefinitionResponseMap and ResourceGroupDefinitionResponseMapOutput values.
// You can construct a concrete instance of `ResourceGroupDefinitionResponseMapInput` via:
//
//          ResourceGroupDefinitionResponseMap{ "key": ResourceGroupDefinitionResponseArgs{...} }
type ResourceGroupDefinitionResponseMapInput interface {
	pulumi.Input

	ToResourceGroupDefinitionResponseMapOutput() ResourceGroupDefinitionResponseMapOutput
	ToResourceGroupDefinitionResponseMapOutputWithContext(context.Context) ResourceGroupDefinitionResponseMapOutput
}

type ResourceGroupDefinitionResponseMap map[string]ResourceGroupDefinitionResponseInput

func (ResourceGroupDefinitionResponseMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ResourceGroupDefinitionResponse)(nil)).Elem()
}

func (i ResourceGroupDefinitionResponseMap) ToResourceGroupDefinitionResponseMapOutput() ResourceGroupDefinitionResponseMapOutput {
	return i.ToResourceGroupDefinitionResponseMapOutputWithContext(context.Background())
}

func (i ResourceGroupDefinitionResponseMap) ToResourceGroupDefinitionResponseMapOutputWithContext(ctx context.Context) ResourceGroupDefinitionResponseMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupDefinitionResponseMapOutput)
}

// Represents an Azure resource group in a Blueprint definition.
type ResourceGroupDefinitionResponseOutput struct{ *pulumi.OutputState }

func (ResourceGroupDefinitionResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupDefinitionResponse)(nil)).Elem()
}

func (o ResourceGroupDefinitionResponseOutput) ToResourceGroupDefinitionResponseOutput() ResourceGroupDefinitionResponseOutput {
	return o
}

func (o ResourceGroupDefinitionResponseOutput) ToResourceGroupDefinitionResponseOutputWithContext(ctx context.Context) ResourceGroupDefinitionResponseOutput {
	return o
}

// Artifacts which need to be deployed before this resource group.
func (o ResourceGroupDefinitionResponseOutput) DependsOn() pulumi.StringArrayOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) []string { return v.DependsOn }).(pulumi.StringArrayOutput)
}

// Description of this parameter/resourceGroup.
func (o ResourceGroupDefinitionResponseOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) *string { return v.Description }).(pulumi.StringPtrOutput)
}

// DisplayName of this parameter/resourceGroup.
func (o ResourceGroupDefinitionResponseOutput) DisplayName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) *string { return v.DisplayName }).(pulumi.StringPtrOutput)
}

// Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment.
func (o ResourceGroupDefinitionResponseOutput) Location() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) *string { return v.Location }).(pulumi.StringPtrOutput)
}

// Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment.
func (o ResourceGroupDefinitionResponseOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) *string { return v.Name }).(pulumi.StringPtrOutput)
}

// StrongType for UI to render rich experience during assignment time.
func (o ResourceGroupDefinitionResponseOutput) StrongType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ResourceGroupDefinitionResponse) *string { return v.StrongType }).(pulumi.StringPtrOutput)
}

type ResourceGroupDefinitionResponseMapOutput struct{ *pulumi.OutputState }

func (ResourceGroupDefinitionResponseMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ResourceGroupDefinitionResponse)(nil)).Elem()
}

func (o ResourceGroupDefinitionResponseMapOutput) ToResourceGroupDefinitionResponseMapOutput() ResourceGroupDefinitionResponseMapOutput {
	return o
}

func (o ResourceGroupDefinitionResponseMapOutput) ToResourceGroupDefinitionResponseMapOutputWithContext(ctx context.Context) ResourceGroupDefinitionResponseMapOutput {
	return o
}

func (o ResourceGroupDefinitionResponseMapOutput) MapIndex(k pulumi.StringInput) ResourceGroupDefinitionResponseOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) ResourceGroupDefinitionResponse {
		return vs[0].(map[string]ResourceGroupDefinitionResponse)[vs[1].(string)]
	}).(ResourceGroupDefinitionResponseOutput)
}

func init() {
	pulumi.RegisterOutputType(BlueprintStatusResponseOutput{})
	pulumi.RegisterOutputType(BlueprintStatusResponsePtrOutput{})
	pulumi.RegisterOutputType(ParameterDefinitionOutput{})
	pulumi.RegisterOutputType(ParameterDefinitionMapOutput{})
	pulumi.RegisterOutputType(ParameterDefinitionResponseOutput{})
	pulumi.RegisterOutputType(ParameterDefinitionResponseMapOutput{})
	pulumi.RegisterOutputType(ResourceGroupDefinitionOutput{})
	pulumi.RegisterOutputType(ResourceGroupDefinitionMapOutput{})
	pulumi.RegisterOutputType(ResourceGroupDefinitionResponseOutput{})
	pulumi.RegisterOutputType(ResourceGroupDefinitionResponseMapOutput{})
}