// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Deployment information.
type DeploymentAtSubscriptionScope struct {
	pulumi.CustomResourceState

	// the location of the deployment.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the deployment.
	Name pulumi.StringOutput `pulumi:"name"`
	// Deployment properties.
	Properties DeploymentPropertiesExtendedResponseOutput `pulumi:"properties"`
	// Deployment tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the deployment.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDeploymentAtSubscriptionScope registers a new resource with the given unique name, arguments, and options.
func NewDeploymentAtSubscriptionScope(ctx *pulumi.Context,
	name string, args *DeploymentAtSubscriptionScopeArgs, opts ...pulumi.ResourceOption) (*DeploymentAtSubscriptionScope, error) {
	if args == nil || args.DeploymentName == nil {
		return nil, errors.New("missing required argument 'DeploymentName'")
	}
	if args == nil || args.Properties == nil {
		return nil, errors.New("missing required argument 'Properties'")
	}
	if args == nil {
		args = &DeploymentAtSubscriptionScopeArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:resources/latest:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20180501:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20190301:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20190501:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20190510:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20190701:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20190801:DeploymentAtSubscriptionScope"),
		},
		{
			Type: pulumi.String("azure-nextgen:resources/v20191001:DeploymentAtSubscriptionScope"),
		},
	})
	opts = append(opts, aliases)
	var resource DeploymentAtSubscriptionScope
	err := ctx.RegisterResource("azure-nextgen:resources/v20200601:DeploymentAtSubscriptionScope", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDeploymentAtSubscriptionScope gets an existing DeploymentAtSubscriptionScope resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDeploymentAtSubscriptionScope(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DeploymentAtSubscriptionScopeState, opts ...pulumi.ResourceOption) (*DeploymentAtSubscriptionScope, error) {
	var resource DeploymentAtSubscriptionScope
	err := ctx.ReadResource("azure-nextgen:resources/v20200601:DeploymentAtSubscriptionScope", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DeploymentAtSubscriptionScope resources.
type deploymentAtSubscriptionScopeState struct {
	// the location of the deployment.
	Location *string `pulumi:"location"`
	// The name of the deployment.
	Name *string `pulumi:"name"`
	// Deployment properties.
	Properties *DeploymentPropertiesExtendedResponse `pulumi:"properties"`
	// Deployment tags
	Tags map[string]string `pulumi:"tags"`
	// The type of the deployment.
	Type *string `pulumi:"type"`
}

type DeploymentAtSubscriptionScopeState struct {
	// the location of the deployment.
	Location pulumi.StringPtrInput
	// The name of the deployment.
	Name pulumi.StringPtrInput
	// Deployment properties.
	Properties DeploymentPropertiesExtendedResponsePtrInput
	// Deployment tags
	Tags pulumi.StringMapInput
	// The type of the deployment.
	Type pulumi.StringPtrInput
}

func (DeploymentAtSubscriptionScopeState) ElementType() reflect.Type {
	return reflect.TypeOf((*deploymentAtSubscriptionScopeState)(nil)).Elem()
}

type deploymentAtSubscriptionScopeArgs struct {
	// The name of the deployment.
	DeploymentName string `pulumi:"deploymentName"`
	// The location to store the deployment data.
	Location *string `pulumi:"location"`
	// The deployment properties.
	Properties DeploymentProperties `pulumi:"properties"`
	// Deployment tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a DeploymentAtSubscriptionScope resource.
type DeploymentAtSubscriptionScopeArgs struct {
	// The name of the deployment.
	DeploymentName pulumi.StringInput
	// The location to store the deployment data.
	Location pulumi.StringPtrInput
	// The deployment properties.
	Properties DeploymentPropertiesInput
	// Deployment tags
	Tags pulumi.StringMapInput
}

func (DeploymentAtSubscriptionScopeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*deploymentAtSubscriptionScopeArgs)(nil)).Elem()
}