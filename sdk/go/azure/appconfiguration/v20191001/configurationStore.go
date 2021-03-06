// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191001

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
type ConfigurationStore struct {
	pulumi.CustomResourceState

	// The creation date of configuration store.
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// The DNS endpoint where the configuration store API will be available.
	Endpoint pulumi.StringOutput `pulumi:"endpoint"`
	// The managed identity information, if configured.
	Identity ResourceIdentityResponsePtrOutput `pulumi:"identity"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the configuration store.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The sku of the configuration store.
	Sku SkuResponseOutput `pulumi:"sku"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewConfigurationStore registers a new resource with the given unique name, arguments, and options.
func NewConfigurationStore(ctx *pulumi.Context,
	name string, args *ConfigurationStoreArgs, opts ...pulumi.ResourceOption) (*ConfigurationStore, error) {
	if args == nil || args.ConfigStoreName == nil {
		return nil, errors.New("missing required argument 'ConfigStoreName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	if args == nil {
		args = &ConfigurationStoreArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:appconfiguration/latest:ConfigurationStore"),
		},
		{
			Type: pulumi.String("azure-nextgen:appconfiguration/v20190201preview:ConfigurationStore"),
		},
		{
			Type: pulumi.String("azure-nextgen:appconfiguration/v20191101preview:ConfigurationStore"),
		},
		{
			Type: pulumi.String("azure-nextgen:appconfiguration/v20200601:ConfigurationStore"),
		},
	})
	opts = append(opts, aliases)
	var resource ConfigurationStore
	err := ctx.RegisterResource("azure-nextgen:appconfiguration/v20191001:ConfigurationStore", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetConfigurationStore gets an existing ConfigurationStore resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConfigurationStore(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ConfigurationStoreState, opts ...pulumi.ResourceOption) (*ConfigurationStore, error) {
	var resource ConfigurationStore
	err := ctx.ReadResource("azure-nextgen:appconfiguration/v20191001:ConfigurationStore", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ConfigurationStore resources.
type configurationStoreState struct {
	// The creation date of configuration store.
	CreationDate *string `pulumi:"creationDate"`
	// The DNS endpoint where the configuration store API will be available.
	Endpoint *string `pulumi:"endpoint"`
	// The managed identity information, if configured.
	Identity *ResourceIdentityResponse `pulumi:"identity"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of the configuration store.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The sku of the configuration store.
	Sku *SkuResponse `pulumi:"sku"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ConfigurationStoreState struct {
	// The creation date of configuration store.
	CreationDate pulumi.StringPtrInput
	// The DNS endpoint where the configuration store API will be available.
	Endpoint pulumi.StringPtrInput
	// The managed identity information, if configured.
	Identity ResourceIdentityResponsePtrInput
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning state of the configuration store.
	ProvisioningState pulumi.StringPtrInput
	// The sku of the configuration store.
	Sku SkuResponsePtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ConfigurationStoreState) ElementType() reflect.Type {
	return reflect.TypeOf((*configurationStoreState)(nil)).Elem()
}

type configurationStoreArgs struct {
	// The name of the configuration store.
	ConfigStoreName string `pulumi:"configStoreName"`
	// The managed identity information, if configured.
	Identity *ResourceIdentity `pulumi:"identity"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location string `pulumi:"location"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The sku of the configuration store.
	Sku Sku `pulumi:"sku"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ConfigurationStore resource.
type ConfigurationStoreArgs struct {
	// The name of the configuration store.
	ConfigStoreName pulumi.StringInput
	// The managed identity information, if configured.
	Identity ResourceIdentityPtrInput
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The sku of the configuration store.
	Sku SkuInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
}

func (ConfigurationStoreArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*configurationStoreArgs)(nil)).Elem()
}
