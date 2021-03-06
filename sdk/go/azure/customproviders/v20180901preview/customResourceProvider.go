// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A manifest file that defines the custom resource provider resources.
type CustomResourceProvider struct {
	pulumi.CustomResourceState

	// A list of actions that the custom resource provider implements.
	Actions CustomRPActionRouteDefinitionResponseArrayOutput `pulumi:"actions"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the resource provider.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// A list of resource types that the custom resource provider implements.
	ResourceTypes CustomRPResourceTypeRouteDefinitionResponseArrayOutput `pulumi:"resourceTypes"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// A list of validations to run on the custom resource provider's requests.
	Validations CustomRPValidationsResponseArrayOutput `pulumi:"validations"`
}

// NewCustomResourceProvider registers a new resource with the given unique name, arguments, and options.
func NewCustomResourceProvider(ctx *pulumi.Context,
	name string, args *CustomResourceProviderArgs, opts ...pulumi.ResourceOption) (*CustomResourceProvider, error) {
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ResourceProviderName == nil {
		return nil, errors.New("missing required argument 'ResourceProviderName'")
	}
	if args == nil {
		args = &CustomResourceProviderArgs{}
	}
	var resource CustomResourceProvider
	err := ctx.RegisterResource("azure-nextgen:customproviders/v20180901preview:CustomResourceProvider", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomResourceProvider gets an existing CustomResourceProvider resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomResourceProvider(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomResourceProviderState, opts ...pulumi.ResourceOption) (*CustomResourceProvider, error) {
	var resource CustomResourceProvider
	err := ctx.ReadResource("azure-nextgen:customproviders/v20180901preview:CustomResourceProvider", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomResourceProvider resources.
type customResourceProviderState struct {
	// A list of actions that the custom resource provider implements.
	Actions []CustomRPActionRouteDefinitionResponse `pulumi:"actions"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// The provisioning state of the resource provider.
	ProvisioningState *string `pulumi:"provisioningState"`
	// A list of resource types that the custom resource provider implements.
	ResourceTypes []CustomRPResourceTypeRouteDefinitionResponse `pulumi:"resourceTypes"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// A list of validations to run on the custom resource provider's requests.
	Validations []CustomRPValidationsResponse `pulumi:"validations"`
}

type CustomResourceProviderState struct {
	// A list of actions that the custom resource provider implements.
	Actions CustomRPActionRouteDefinitionResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// The provisioning state of the resource provider.
	ProvisioningState pulumi.StringPtrInput
	// A list of resource types that the custom resource provider implements.
	ResourceTypes CustomRPResourceTypeRouteDefinitionResponseArrayInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// A list of validations to run on the custom resource provider's requests.
	Validations CustomRPValidationsResponseArrayInput
}

func (CustomResourceProviderState) ElementType() reflect.Type {
	return reflect.TypeOf((*customResourceProviderState)(nil)).Elem()
}

type customResourceProviderArgs struct {
	// A list of actions that the custom resource provider implements.
	Actions []CustomRPActionRouteDefinition `pulumi:"actions"`
	// Resource location
	Location string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the resource provider.
	ResourceProviderName string `pulumi:"resourceProviderName"`
	// A list of resource types that the custom resource provider implements.
	ResourceTypes []CustomRPResourceTypeRouteDefinition `pulumi:"resourceTypes"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// A list of validations to run on the custom resource provider's requests.
	Validations []CustomRPValidations `pulumi:"validations"`
}

// The set of arguments for constructing a CustomResourceProvider resource.
type CustomResourceProviderArgs struct {
	// A list of actions that the custom resource provider implements.
	Actions CustomRPActionRouteDefinitionArrayInput
	// Resource location
	Location pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the resource provider.
	ResourceProviderName pulumi.StringInput
	// A list of resource types that the custom resource provider implements.
	ResourceTypes CustomRPResourceTypeRouteDefinitionArrayInput
	// Resource tags
	Tags pulumi.StringMapInput
	// A list of validations to run on the custom resource provider's requests.
	Validations CustomRPValidationsArrayInput
}

func (CustomResourceProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customResourceProviderArgs)(nil)).Elem()
}
