// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// NamedValue details.
type NamedValue struct {
	pulumi.CustomResourceState

	// Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret pulumi.BoolPtrOutput `pulumi:"secret"`
	// Optional tags that when provided can be used to filter the NamedValue list.
	Tags pulumi.StringArrayOutput `pulumi:"tags"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	Value pulumi.StringPtrOutput `pulumi:"value"`
}

// NewNamedValue registers a new resource with the given unique name, arguments, and options.
func NewNamedValue(ctx *pulumi.Context,
	name string, args *NamedValueArgs, opts ...pulumi.ResourceOption) (*NamedValue, error) {
	if args == nil || args.DisplayName == nil {
		return nil, errors.New("missing required argument 'DisplayName'")
	}
	if args == nil || args.NamedValueId == nil {
		return nil, errors.New("missing required argument 'NamedValueId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServiceName == nil {
		return nil, errors.New("missing required argument 'ServiceName'")
	}
	if args == nil || args.Value == nil {
		return nil, errors.New("missing required argument 'Value'")
	}
	if args == nil {
		args = &NamedValueArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:NamedValue"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:NamedValue"),
		},
	})
	opts = append(opts, aliases)
	var resource NamedValue
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201:NamedValue", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNamedValue gets an existing NamedValue resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNamedValue(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NamedValueState, opts ...pulumi.ResourceOption) (*NamedValue, error) {
	var resource NamedValue
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201:NamedValue", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NamedValue resources.
type namedValueState struct {
	// Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName *string `pulumi:"displayName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret *bool `pulumi:"secret"`
	// Optional tags that when provided can be used to filter the NamedValue list.
	Tags []string `pulumi:"tags"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	Value *string `pulumi:"value"`
}

type NamedValueState struct {
	// Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret pulumi.BoolPtrInput
	// Optional tags that when provided can be used to filter the NamedValue list.
	Tags pulumi.StringArrayInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	Value pulumi.StringPtrInput
}

func (NamedValueState) ElementType() reflect.Type {
	return reflect.TypeOf((*namedValueState)(nil)).Elem()
}

type namedValueArgs struct {
	// Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName string `pulumi:"displayName"`
	// Identifier of the NamedValue.
	NamedValueId string `pulumi:"namedValueId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret *bool `pulumi:"secret"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Optional tags that when provided can be used to filter the NamedValue list.
	Tags []string `pulumi:"tags"`
	// Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	Value string `pulumi:"value"`
}

// The set of arguments for constructing a NamedValue resource.
type NamedValueArgs struct {
	// Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName pulumi.StringInput
	// Identifier of the NamedValue.
	NamedValueId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret pulumi.BoolPtrInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Optional tags that when provided can be used to filter the NamedValue list.
	Tags pulumi.StringArrayInput
	// Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
	Value pulumi.StringInput
}

func (NamedValueArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*namedValueArgs)(nil)).Elem()
}
