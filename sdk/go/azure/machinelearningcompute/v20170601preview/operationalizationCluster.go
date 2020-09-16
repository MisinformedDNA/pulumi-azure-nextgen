// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170601preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Instance of an Azure ML Operationalization Cluster resource.
type OperationalizationCluster struct {
	pulumi.CustomResourceState

	// AppInsights configuration
	AppInsights AppInsightsCredentialsResponsePtrOutput `pulumi:"appInsights"`
	// The cluster type.
	ClusterType pulumi.StringOutput `pulumi:"clusterType"`
	// Container Registry properties.
	ContainerRegistry ContainerRegistryPropertiesResponsePtrOutput `pulumi:"containerRegistry"`
	// Parameters for the Azure Container Service cluster.
	ContainerService AcsClusterPropertiesResponseOutput `pulumi:"containerService"`
	// The date and time when the cluster was created.
	CreatedOn pulumi.StringOutput `pulumi:"createdOn"`
	// The description of the cluster.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Contains global configuration for the web services in the cluster.
	GlobalServiceConfiguration GlobalServiceConfigurationResponsePtrOutput `pulumi:"globalServiceConfiguration"`
	// Specifies the location of the resource.
	Location pulumi.StringOutput `pulumi:"location"`
	// The date and time when the cluster was last modified.
	ModifiedOn pulumi.StringOutput `pulumi:"modifiedOn"`
	// Specifies the name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Storage Account properties.
	StorageAccount StorageAccountPropertiesResponsePtrOutput `pulumi:"storageAccount"`
	// Contains resource tags defined as key/value pairs.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Specifies the type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewOperationalizationCluster registers a new resource with the given unique name, arguments, and options.
func NewOperationalizationCluster(ctx *pulumi.Context,
	name string, args *OperationalizationClusterArgs, opts ...pulumi.ResourceOption) (*OperationalizationCluster, error) {
	if args == nil || args.ClusterName == nil {
		return nil, errors.New("missing required argument 'ClusterName'")
	}
	if args == nil || args.ClusterType == nil {
		return nil, errors.New("missing required argument 'ClusterType'")
	}
	if args == nil || args.ContainerService == nil {
		return nil, errors.New("missing required argument 'ContainerService'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &OperationalizationClusterArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:machinelearningcompute/v20170801preview:OperationalizationCluster"),
		},
	})
	opts = append(opts, aliases)
	var resource OperationalizationCluster
	err := ctx.RegisterResource("azure-nextgen:machinelearningcompute/v20170601preview:OperationalizationCluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetOperationalizationCluster gets an existing OperationalizationCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOperationalizationCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *OperationalizationClusterState, opts ...pulumi.ResourceOption) (*OperationalizationCluster, error) {
	var resource OperationalizationCluster
	err := ctx.ReadResource("azure-nextgen:machinelearningcompute/v20170601preview:OperationalizationCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering OperationalizationCluster resources.
type operationalizationClusterState struct {
	// AppInsights configuration
	AppInsights *AppInsightsCredentialsResponse `pulumi:"appInsights"`
	// The cluster type.
	ClusterType *string `pulumi:"clusterType"`
	// Container Registry properties.
	ContainerRegistry *ContainerRegistryPropertiesResponse `pulumi:"containerRegistry"`
	// Parameters for the Azure Container Service cluster.
	ContainerService *AcsClusterPropertiesResponse `pulumi:"containerService"`
	// The date and time when the cluster was created.
	CreatedOn *string `pulumi:"createdOn"`
	// The description of the cluster.
	Description *string `pulumi:"description"`
	// Contains global configuration for the web services in the cluster.
	GlobalServiceConfiguration *GlobalServiceConfigurationResponse `pulumi:"globalServiceConfiguration"`
	// Specifies the location of the resource.
	Location *string `pulumi:"location"`
	// The date and time when the cluster was last modified.
	ModifiedOn *string `pulumi:"modifiedOn"`
	// Specifies the name of the resource.
	Name *string `pulumi:"name"`
	// The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Storage Account properties.
	StorageAccount *StorageAccountPropertiesResponse `pulumi:"storageAccount"`
	// Contains resource tags defined as key/value pairs.
	Tags map[string]string `pulumi:"tags"`
	// Specifies the type of the resource.
	Type *string `pulumi:"type"`
}

type OperationalizationClusterState struct {
	// AppInsights configuration
	AppInsights AppInsightsCredentialsResponsePtrInput
	// The cluster type.
	ClusterType pulumi.StringPtrInput
	// Container Registry properties.
	ContainerRegistry ContainerRegistryPropertiesResponsePtrInput
	// Parameters for the Azure Container Service cluster.
	ContainerService AcsClusterPropertiesResponsePtrInput
	// The date and time when the cluster was created.
	CreatedOn pulumi.StringPtrInput
	// The description of the cluster.
	Description pulumi.StringPtrInput
	// Contains global configuration for the web services in the cluster.
	GlobalServiceConfiguration GlobalServiceConfigurationResponsePtrInput
	// Specifies the location of the resource.
	Location pulumi.StringPtrInput
	// The date and time when the cluster was last modified.
	ModifiedOn pulumi.StringPtrInput
	// Specifies the name of the resource.
	Name pulumi.StringPtrInput
	// The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
	ProvisioningState pulumi.StringPtrInput
	// Storage Account properties.
	StorageAccount StorageAccountPropertiesResponsePtrInput
	// Contains resource tags defined as key/value pairs.
	Tags pulumi.StringMapInput
	// Specifies the type of the resource.
	Type pulumi.StringPtrInput
}

func (OperationalizationClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*operationalizationClusterState)(nil)).Elem()
}

type operationalizationClusterArgs struct {
	// AppInsights configuration
	AppInsights *AppInsightsCredentials `pulumi:"appInsights"`
	// The name of the cluster.
	ClusterName string `pulumi:"clusterName"`
	// The cluster type.
	ClusterType string `pulumi:"clusterType"`
	// Container Registry properties.
	ContainerRegistry *ContainerRegistryProperties `pulumi:"containerRegistry"`
	// Parameters for the Azure Container Service cluster.
	ContainerService AcsClusterProperties `pulumi:"containerService"`
	// The description of the cluster.
	Description *string `pulumi:"description"`
	// Contains global configuration for the web services in the cluster.
	GlobalServiceConfiguration *GlobalServiceConfiguration `pulumi:"globalServiceConfiguration"`
	// Specifies the location of the resource.
	Location string `pulumi:"location"`
	// Name of the resource group in which the cluster is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Storage Account properties.
	StorageAccount *StorageAccountProperties `pulumi:"storageAccount"`
	// Contains resource tags defined as key/value pairs.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a OperationalizationCluster resource.
type OperationalizationClusterArgs struct {
	// AppInsights configuration
	AppInsights AppInsightsCredentialsPtrInput
	// The name of the cluster.
	ClusterName pulumi.StringInput
	// The cluster type.
	ClusterType pulumi.StringInput
	// Container Registry properties.
	ContainerRegistry ContainerRegistryPropertiesPtrInput
	// Parameters for the Azure Container Service cluster.
	ContainerService AcsClusterPropertiesInput
	// The description of the cluster.
	Description pulumi.StringPtrInput
	// Contains global configuration for the web services in the cluster.
	GlobalServiceConfiguration GlobalServiceConfigurationPtrInput
	// Specifies the location of the resource.
	Location pulumi.StringInput
	// Name of the resource group in which the cluster is located.
	ResourceGroupName pulumi.StringInput
	// Storage Account properties.
	StorageAccount StorageAccountPropertiesPtrInput
	// Contains resource tags defined as key/value pairs.
	Tags pulumi.StringMapInput
}

func (OperationalizationClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*operationalizationClusterArgs)(nil)).Elem()
}