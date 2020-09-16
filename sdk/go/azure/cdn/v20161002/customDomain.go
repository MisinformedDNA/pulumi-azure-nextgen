// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20161002

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Customer provided domain for branding purposes, e.g. www.contoso.com.
type CustomDomain struct {
	pulumi.CustomResourceState

	// Provisioning state of Custom Https of the custom domain.
	CustomHttpsProvisioningState pulumi.StringOutput `pulumi:"customHttpsProvisioningState"`
	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringOutput `pulumi:"hostName"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning status of the custom domain.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource status of the custom domain.
	ResourceState pulumi.StringOutput `pulumi:"resourceState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
	ValidationData pulumi.StringPtrOutput `pulumi:"validationData"`
}

// NewCustomDomain registers a new resource with the given unique name, arguments, and options.
func NewCustomDomain(ctx *pulumi.Context,
	name string, args *CustomDomainArgs, opts ...pulumi.ResourceOption) (*CustomDomain, error) {
	if args == nil || args.CustomDomainName == nil {
		return nil, errors.New("missing required argument 'CustomDomainName'")
	}
	if args == nil || args.EndpointName == nil {
		return nil, errors.New("missing required argument 'EndpointName'")
	}
	if args == nil || args.HostName == nil {
		return nil, errors.New("missing required argument 'HostName'")
	}
	if args == nil || args.ProfileName == nil {
		return nil, errors.New("missing required argument 'ProfileName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &CustomDomainArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20150601:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20160402:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20170402:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20171012:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190415:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190615:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20190615preview:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20191231:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200331:CustomDomain"),
		},
		{
			Type: pulumi.String("azure-nextgen:cdn/v20200415:CustomDomain"),
		},
	})
	opts = append(opts, aliases)
	var resource CustomDomain
	err := ctx.RegisterResource("azure-nextgen:cdn/v20161002:CustomDomain", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomDomain gets an existing CustomDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomDomain(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomDomainState, opts ...pulumi.ResourceOption) (*CustomDomain, error) {
	var resource CustomDomain
	err := ctx.ReadResource("azure-nextgen:cdn/v20161002:CustomDomain", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomDomain resources.
type customDomainState struct {
	// Provisioning state of Custom Https of the custom domain.
	CustomHttpsProvisioningState *string `pulumi:"customHttpsProvisioningState"`
	// The host name of the custom domain. Must be a domain name.
	HostName *string `pulumi:"hostName"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Provisioning status of the custom domain.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource status of the custom domain.
	ResourceState *string `pulumi:"resourceState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
	ValidationData *string `pulumi:"validationData"`
}

type CustomDomainState struct {
	// Provisioning state of Custom Https of the custom domain.
	CustomHttpsProvisioningState pulumi.StringPtrInput
	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Provisioning status of the custom domain.
	ProvisioningState pulumi.StringPtrInput
	// Resource status of the custom domain.
	ResourceState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
	ValidationData pulumi.StringPtrInput
}

func (CustomDomainState) ElementType() reflect.Type {
	return reflect.TypeOf((*customDomainState)(nil)).Elem()
}

type customDomainArgs struct {
	// Name of the custom domain within an endpoint.
	CustomDomainName string `pulumi:"customDomainName"`
	// Name of the endpoint under the profile which is unique globally.
	EndpointName string `pulumi:"endpointName"`
	// The host name of the custom domain. Must be a domain name.
	HostName string `pulumi:"hostName"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a CustomDomain resource.
type CustomDomainArgs struct {
	// Name of the custom domain within an endpoint.
	CustomDomainName pulumi.StringInput
	// Name of the endpoint under the profile which is unique globally.
	EndpointName pulumi.StringInput
	// The host name of the custom domain. Must be a domain name.
	HostName pulumi.StringInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
}

func (CustomDomainArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customDomainArgs)(nil)).Elem()
}