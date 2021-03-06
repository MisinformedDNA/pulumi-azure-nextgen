// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200808preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents an instance of a DNC controller.
type ControllerDetails struct {
	pulumi.CustomResourceState

	// The current state of dnc controller resource.
	DncAppId pulumi.StringPtrOutput `pulumi:"dncAppId"`
	// dnc endpoint url that customers can use to connect to
	DncEndpoint pulumi.StringPtrOutput `pulumi:"dncEndpoint"`
	// Location of the DNC controller resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the DNC controller resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The current state of dnc controller resource.
	State pulumi.StringOutput `pulumi:"state"`
	// The type of the DNC controller  resource.(Microsoft.DelegatedNetwork/controller)
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewControllerDetails registers a new resource with the given unique name, arguments, and options.
func NewControllerDetails(ctx *pulumi.Context,
	name string, args *ControllerDetailsArgs, opts ...pulumi.ResourceOption) (*ControllerDetails, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ResourceName == nil {
		return nil, errors.New("missing required argument 'ResourceName'")
	}
	if args == nil {
		args = &ControllerDetailsArgs{}
	}
	var resource ControllerDetails
	err := ctx.RegisterResource("azure-nextgen:delegatednetwork/v20200808preview:ControllerDetails", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetControllerDetails gets an existing ControllerDetails resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetControllerDetails(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ControllerDetailsState, opts ...pulumi.ResourceOption) (*ControllerDetails, error) {
	var resource ControllerDetails
	err := ctx.ReadResource("azure-nextgen:delegatednetwork/v20200808preview:ControllerDetails", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ControllerDetails resources.
type controllerDetailsState struct {
	// The current state of dnc controller resource.
	DncAppId *string `pulumi:"dncAppId"`
	// dnc endpoint url that customers can use to connect to
	DncEndpoint *string `pulumi:"dncEndpoint"`
	// Location of the DNC controller resource.
	Location *string `pulumi:"location"`
	// The name of the DNC controller resource.
	Name *string `pulumi:"name"`
	// The current state of dnc controller resource.
	State *string `pulumi:"state"`
	// The type of the DNC controller  resource.(Microsoft.DelegatedNetwork/controller)
	Type *string `pulumi:"type"`
}

type ControllerDetailsState struct {
	// The current state of dnc controller resource.
	DncAppId pulumi.StringPtrInput
	// dnc endpoint url that customers can use to connect to
	DncEndpoint pulumi.StringPtrInput
	// Location of the DNC controller resource.
	Location pulumi.StringPtrInput
	// The name of the DNC controller resource.
	Name pulumi.StringPtrInput
	// The current state of dnc controller resource.
	State pulumi.StringPtrInput
	// The type of the DNC controller  resource.(Microsoft.DelegatedNetwork/controller)
	Type pulumi.StringPtrInput
}

func (ControllerDetailsState) ElementType() reflect.Type {
	return reflect.TypeOf((*controllerDetailsState)(nil)).Elem()
}

type controllerDetailsArgs struct {
	// APIServer url
	ApiServerEndpoint *string `pulumi:"apiServerEndpoint"`
	// RootCA certificate of kubernetes cluster
	ClusterRootCA *string `pulumi:"clusterRootCA"`
	// Type of controller
	ControllerType *string `pulumi:"controllerType"`
	// The name of the Azure Resource group of which a given DelegatedNetwork resource is part. This name must be at least 1 character in length, and no more than 90.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
	ResourceName string `pulumi:"resourceName"`
	// AAD ID used with apiserver
	ServerAppID *string `pulumi:"serverAppID"`
	// TenantID of server App ID
	ServerTenantID *string `pulumi:"serverTenantID"`
}

// The set of arguments for constructing a ControllerDetails resource.
type ControllerDetailsArgs struct {
	// APIServer url
	ApiServerEndpoint pulumi.StringPtrInput
	// RootCA certificate of kubernetes cluster
	ClusterRootCA pulumi.StringPtrInput
	// Type of controller
	ControllerType pulumi.StringPtrInput
	// The name of the Azure Resource group of which a given DelegatedNetwork resource is part. This name must be at least 1 character in length, and no more than 90.
	ResourceGroupName pulumi.StringInput
	// The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
	ResourceName pulumi.StringInput
	// AAD ID used with apiserver
	ServerAppID pulumi.StringPtrInput
	// TenantID of server App ID
	ServerTenantID pulumi.StringPtrInput
}

func (ControllerDetailsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*controllerDetailsArgs)(nil)).Elem()
}
