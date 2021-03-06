// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200808preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Properties of kubernetes cluster
type KubernetesProperties struct {
	// APIServer url
	ApiServerEndpoint *string `pulumi:"apiServerEndpoint"`
	// RootCA certificate of kubernetes cluster
	ClusterRootCA *string `pulumi:"clusterRootCA"`
	// AAD ID used with apiserver
	ServerAppID *string `pulumi:"serverAppID"`
	// TenantID of server App ID
	ServerTenantID *string `pulumi:"serverTenantID"`
}

// KubernetesPropertiesInput is an input type that accepts KubernetesPropertiesArgs and KubernetesPropertiesOutput values.
// You can construct a concrete instance of `KubernetesPropertiesInput` via:
//
//          KubernetesPropertiesArgs{...}
type KubernetesPropertiesInput interface {
	pulumi.Input

	ToKubernetesPropertiesOutput() KubernetesPropertiesOutput
	ToKubernetesPropertiesOutputWithContext(context.Context) KubernetesPropertiesOutput
}

// Properties of kubernetes cluster
type KubernetesPropertiesArgs struct {
	// APIServer url
	ApiServerEndpoint pulumi.StringPtrInput `pulumi:"apiServerEndpoint"`
	// RootCA certificate of kubernetes cluster
	ClusterRootCA pulumi.StringPtrInput `pulumi:"clusterRootCA"`
	// AAD ID used with apiserver
	ServerAppID pulumi.StringPtrInput `pulumi:"serverAppID"`
	// TenantID of server App ID
	ServerTenantID pulumi.StringPtrInput `pulumi:"serverTenantID"`
}

func (KubernetesPropertiesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*KubernetesProperties)(nil)).Elem()
}

func (i KubernetesPropertiesArgs) ToKubernetesPropertiesOutput() KubernetesPropertiesOutput {
	return i.ToKubernetesPropertiesOutputWithContext(context.Background())
}

func (i KubernetesPropertiesArgs) ToKubernetesPropertiesOutputWithContext(ctx context.Context) KubernetesPropertiesOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KubernetesPropertiesOutput)
}

// KubernetesPropertiesArrayInput is an input type that accepts KubernetesPropertiesArray and KubernetesPropertiesArrayOutput values.
// You can construct a concrete instance of `KubernetesPropertiesArrayInput` via:
//
//          KubernetesPropertiesArray{ KubernetesPropertiesArgs{...} }
type KubernetesPropertiesArrayInput interface {
	pulumi.Input

	ToKubernetesPropertiesArrayOutput() KubernetesPropertiesArrayOutput
	ToKubernetesPropertiesArrayOutputWithContext(context.Context) KubernetesPropertiesArrayOutput
}

type KubernetesPropertiesArray []KubernetesPropertiesInput

func (KubernetesPropertiesArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]KubernetesProperties)(nil)).Elem()
}

func (i KubernetesPropertiesArray) ToKubernetesPropertiesArrayOutput() KubernetesPropertiesArrayOutput {
	return i.ToKubernetesPropertiesArrayOutputWithContext(context.Background())
}

func (i KubernetesPropertiesArray) ToKubernetesPropertiesArrayOutputWithContext(ctx context.Context) KubernetesPropertiesArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KubernetesPropertiesArrayOutput)
}

// Properties of kubernetes cluster
type KubernetesPropertiesOutput struct{ *pulumi.OutputState }

func (KubernetesPropertiesOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*KubernetesProperties)(nil)).Elem()
}

func (o KubernetesPropertiesOutput) ToKubernetesPropertiesOutput() KubernetesPropertiesOutput {
	return o
}

func (o KubernetesPropertiesOutput) ToKubernetesPropertiesOutputWithContext(ctx context.Context) KubernetesPropertiesOutput {
	return o
}

// APIServer url
func (o KubernetesPropertiesOutput) ApiServerEndpoint() pulumi.StringPtrOutput {
	return o.ApplyT(func(v KubernetesProperties) *string { return v.ApiServerEndpoint }).(pulumi.StringPtrOutput)
}

// RootCA certificate of kubernetes cluster
func (o KubernetesPropertiesOutput) ClusterRootCA() pulumi.StringPtrOutput {
	return o.ApplyT(func(v KubernetesProperties) *string { return v.ClusterRootCA }).(pulumi.StringPtrOutput)
}

// AAD ID used with apiserver
func (o KubernetesPropertiesOutput) ServerAppID() pulumi.StringPtrOutput {
	return o.ApplyT(func(v KubernetesProperties) *string { return v.ServerAppID }).(pulumi.StringPtrOutput)
}

// TenantID of server App ID
func (o KubernetesPropertiesOutput) ServerTenantID() pulumi.StringPtrOutput {
	return o.ApplyT(func(v KubernetesProperties) *string { return v.ServerTenantID }).(pulumi.StringPtrOutput)
}

type KubernetesPropertiesArrayOutput struct{ *pulumi.OutputState }

func (KubernetesPropertiesArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]KubernetesProperties)(nil)).Elem()
}

func (o KubernetesPropertiesArrayOutput) ToKubernetesPropertiesArrayOutput() KubernetesPropertiesArrayOutput {
	return o
}

func (o KubernetesPropertiesArrayOutput) ToKubernetesPropertiesArrayOutputWithContext(ctx context.Context) KubernetesPropertiesArrayOutput {
	return o
}

func (o KubernetesPropertiesArrayOutput) Index(i pulumi.IntInput) KubernetesPropertiesOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) KubernetesProperties {
		return vs[0].([]KubernetesProperties)[vs[1].(int)]
	}).(KubernetesPropertiesOutput)
}

func init() {
	pulumi.RegisterOutputType(KubernetesPropertiesOutput{})
	pulumi.RegisterOutputType(KubernetesPropertiesArrayOutput{})
}
