// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Domain Topic.
type DomainTopic struct {
	pulumi.CustomResourceState

	// Name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state of the domain topic.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDomainTopic registers a new resource with the given unique name, arguments, and options.
func NewDomainTopic(ctx *pulumi.Context,
	name string, args *DomainTopicArgs, opts ...pulumi.ResourceOption) (*DomainTopic, error) {
	if args == nil || args.DomainName == nil {
		return nil, errors.New("missing required argument 'DomainName'")
	}
	if args == nil || args.DomainTopicName == nil {
		return nil, errors.New("missing required argument 'DomainTopicName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &DomainTopicArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:eventgrid/v20190201preview:DomainTopic"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventgrid/v20190601:DomainTopic"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventgrid/v20200101preview:DomainTopic"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventgrid/v20200401preview:DomainTopic"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventgrid/v20200601:DomainTopic"),
		},
	})
	opts = append(opts, aliases)
	var resource DomainTopic
	err := ctx.RegisterResource("azure-nextgen:eventgrid/latest:DomainTopic", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDomainTopic gets an existing DomainTopic resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDomainTopic(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DomainTopicState, opts ...pulumi.ResourceOption) (*DomainTopic, error) {
	var resource DomainTopic
	err := ctx.ReadResource("azure-nextgen:eventgrid/latest:DomainTopic", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DomainTopic resources.
type domainTopicState struct {
	// Name of the resource.
	Name *string `pulumi:"name"`
	// Provisioning state of the domain topic.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Type of the resource.
	Type *string `pulumi:"type"`
}

type DomainTopicState struct {
	// Name of the resource.
	Name pulumi.StringPtrInput
	// Provisioning state of the domain topic.
	ProvisioningState pulumi.StringPtrInput
	// Type of the resource.
	Type pulumi.StringPtrInput
}

func (DomainTopicState) ElementType() reflect.Type {
	return reflect.TypeOf((*domainTopicState)(nil)).Elem()
}

type domainTopicArgs struct {
	// Name of the domain.
	DomainName string `pulumi:"domainName"`
	// Name of the domain topic.
	DomainTopicName string `pulumi:"domainTopicName"`
	// The name of the resource group within the user's subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DomainTopic resource.
type DomainTopicArgs struct {
	// Name of the domain.
	DomainName pulumi.StringInput
	// Name of the domain topic.
	DomainTopicName pulumi.StringInput
	// The name of the resource group within the user's subscription.
	ResourceGroupName pulumi.StringInput
}

func (DomainTopicArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*domainTopicArgs)(nil)).Elem()
}
