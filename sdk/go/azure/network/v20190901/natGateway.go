// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190901

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Nat Gateway resource.
type NatGateway struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes pulumi.IntPtrOutput `pulumi:"idleTimeoutInMinutes"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the NAT gateway resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses SubResourceResponseArrayOutput `pulumi:"publicIpAddresses"`
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes SubResourceResponseArrayOutput `pulumi:"publicIpPrefixes"`
	// The resource GUID property of the NAT gateway resource.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// The nat gateway SKU.
	Sku NatGatewaySkuResponsePtrOutput `pulumi:"sku"`
	// An array of references to the subnets using this nat gateway resource.
	Subnets SubResourceResponseArrayOutput `pulumi:"subnets"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewNatGateway registers a new resource with the given unique name, arguments, and options.
func NewNatGateway(ctx *pulumi.Context,
	name string, args *NatGatewayArgs, opts ...pulumi.ResourceOption) (*NatGateway, error) {
	if args == nil || args.NatGatewayName == nil {
		return nil, errors.New("missing required argument 'NatGatewayName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &NatGatewayArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:NatGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:NatGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource NatGateway
	err := ctx.RegisterResource("azure-nextgen:network/v20190901:NatGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNatGateway gets an existing NatGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNatGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NatGatewayState, opts ...pulumi.ResourceOption) (*NatGateway, error) {
	var resource NatGateway
	err := ctx.ReadResource("azure-nextgen:network/v20190901:NatGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NatGateway resources.
type natGatewayState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the NAT gateway resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses []SubResourceResponse `pulumi:"publicIpAddresses"`
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes []SubResourceResponse `pulumi:"publicIpPrefixes"`
	// The resource GUID property of the NAT gateway resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The nat gateway SKU.
	Sku *NatGatewaySkuResponse `pulumi:"sku"`
	// An array of references to the subnets using this nat gateway resource.
	Subnets []SubResourceResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones []string `pulumi:"zones"`
}

type NatGatewayState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the NAT gateway resource.
	ProvisioningState pulumi.StringPtrInput
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses SubResourceResponseArrayInput
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes SubResourceResponseArrayInput
	// The resource GUID property of the NAT gateway resource.
	ResourceGuid pulumi.StringPtrInput
	// The nat gateway SKU.
	Sku NatGatewaySkuResponsePtrInput
	// An array of references to the subnets using this nat gateway resource.
	Subnets SubResourceResponseArrayInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones pulumi.StringArrayInput
}

func (NatGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*natGatewayState)(nil)).Elem()
}

type natGatewayArgs struct {
	// Resource ID.
	Id *string `pulumi:"id"`
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the nat gateway.
	NatGatewayName string `pulumi:"natGatewayName"`
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses []SubResource `pulumi:"publicIpAddresses"`
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes []SubResource `pulumi:"publicIpPrefixes"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The nat gateway SKU.
	Sku *NatGatewaySku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a NatGateway resource.
type NatGatewayArgs struct {
	// Resource ID.
	Id pulumi.StringPtrInput
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the nat gateway.
	NatGatewayName pulumi.StringInput
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses SubResourceArrayInput
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes SubResourceArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The nat gateway SKU.
	Sku NatGatewaySkuPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones pulumi.StringArrayInput
}

func (NatGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*natGatewayArgs)(nil)).Elem()
}
