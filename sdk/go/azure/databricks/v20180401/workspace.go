// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180401

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Information about workspace.
type Workspace struct {
	pulumi.CustomResourceState

	// The workspace provider authorizations.
	Authorizations WorkspaceProviderAuthorizationResponseArrayOutput `pulumi:"authorizations"`
	// Indicates the Object ID, PUID and Application ID of entity that created the workspace.
	CreatedBy CreatedByResponsePtrOutput `pulumi:"createdBy"`
	// Specifies the date and time when the workspace is created.
	CreatedDateTime pulumi.StringPtrOutput `pulumi:"createdDateTime"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringOutput `pulumi:"managedResourceGroupId"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The workspace's custom parameters.
	Parameters WorkspaceCustomParametersResponsePtrOutput `pulumi:"parameters"`
	// The workspace provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The SKU of the resource.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// The details of Managed Identity of Storage Account
	StorageAccountIdentity ManagedIdentityConfigurationResponsePtrOutput `pulumi:"storageAccountIdentity"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringOutput `pulumi:"type"`
	// The blob URI where the UI definition file is located.
	UiDefinitionUri pulumi.StringPtrOutput `pulumi:"uiDefinitionUri"`
	// Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
	UpdatedBy CreatedByResponsePtrOutput `pulumi:"updatedBy"`
	// The unique identifier of the databricks workspace in databricks control plane.
	WorkspaceId pulumi.StringOutput `pulumi:"workspaceId"`
	// The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
	WorkspaceUrl pulumi.StringOutput `pulumi:"workspaceUrl"`
}

// NewWorkspace registers a new resource with the given unique name, arguments, and options.
func NewWorkspace(ctx *pulumi.Context,
	name string, args *WorkspaceArgs, opts ...pulumi.ResourceOption) (*Workspace, error) {
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ManagedResourceGroupId == nil {
		return nil, errors.New("missing required argument 'ManagedResourceGroupId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.WorkspaceName == nil {
		return nil, errors.New("missing required argument 'WorkspaceName'")
	}
	if args == nil {
		args = &WorkspaceArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:databricks/latest:Workspace"),
		},
	})
	opts = append(opts, aliases)
	var resource Workspace
	err := ctx.RegisterResource("azure-nextgen:databricks/v20180401:Workspace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkspace gets an existing Workspace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkspace(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkspaceState, opts ...pulumi.ResourceOption) (*Workspace, error) {
	var resource Workspace
	err := ctx.ReadResource("azure-nextgen:databricks/v20180401:Workspace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Workspace resources.
type workspaceState struct {
	// The workspace provider authorizations.
	Authorizations []WorkspaceProviderAuthorizationResponse `pulumi:"authorizations"`
	// Indicates the Object ID, PUID and Application ID of entity that created the workspace.
	CreatedBy *CreatedByResponse `pulumi:"createdBy"`
	// Specifies the date and time when the workspace is created.
	CreatedDateTime *string `pulumi:"createdDateTime"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The managed resource group Id.
	ManagedResourceGroupId *string `pulumi:"managedResourceGroupId"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The workspace's custom parameters.
	Parameters *WorkspaceCustomParametersResponse `pulumi:"parameters"`
	// The workspace provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The SKU of the resource.
	Sku *SkuResponse `pulumi:"sku"`
	// The details of Managed Identity of Storage Account
	StorageAccountIdentity *ManagedIdentityConfigurationResponse `pulumi:"storageAccountIdentity"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type *string `pulumi:"type"`
	// The blob URI where the UI definition file is located.
	UiDefinitionUri *string `pulumi:"uiDefinitionUri"`
	// Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
	UpdatedBy *CreatedByResponse `pulumi:"updatedBy"`
	// The unique identifier of the databricks workspace in databricks control plane.
	WorkspaceId *string `pulumi:"workspaceId"`
	// The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
	WorkspaceUrl *string `pulumi:"workspaceUrl"`
}

type WorkspaceState struct {
	// The workspace provider authorizations.
	Authorizations WorkspaceProviderAuthorizationResponseArrayInput
	// Indicates the Object ID, PUID and Application ID of entity that created the workspace.
	CreatedBy CreatedByResponsePtrInput
	// Specifies the date and time when the workspace is created.
	CreatedDateTime pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The workspace's custom parameters.
	Parameters WorkspaceCustomParametersResponsePtrInput
	// The workspace provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The SKU of the resource.
	Sku SkuResponsePtrInput
	// The details of Managed Identity of Storage Account
	StorageAccountIdentity ManagedIdentityConfigurationResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringPtrInput
	// The blob URI where the UI definition file is located.
	UiDefinitionUri pulumi.StringPtrInput
	// Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
	UpdatedBy CreatedByResponsePtrInput
	// The unique identifier of the databricks workspace in databricks control plane.
	WorkspaceId pulumi.StringPtrInput
	// The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
	WorkspaceUrl pulumi.StringPtrInput
}

func (WorkspaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceState)(nil)).Elem()
}

type workspaceArgs struct {
	// The workspace provider authorizations.
	Authorizations []WorkspaceProviderAuthorization `pulumi:"authorizations"`
	// Specifies the date and time when the workspace is created.
	CreatedDateTime *string `pulumi:"createdDateTime"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The managed resource group Id.
	ManagedResourceGroupId string `pulumi:"managedResourceGroupId"`
	// The workspace's custom parameters.
	Parameters *WorkspaceCustomParameters `pulumi:"parameters"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU of the resource.
	Sku *Sku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The blob URI where the UI definition file is located.
	UiDefinitionUri *string `pulumi:"uiDefinitionUri"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a Workspace resource.
type WorkspaceArgs struct {
	// The workspace provider authorizations.
	Authorizations WorkspaceProviderAuthorizationArrayInput
	// Specifies the date and time when the workspace is created.
	CreatedDateTime pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The managed resource group Id.
	ManagedResourceGroupId pulumi.StringInput
	// The workspace's custom parameters.
	Parameters WorkspaceCustomParametersPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The SKU of the resource.
	Sku SkuPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The blob URI where the UI definition file is located.
	UiDefinitionUri pulumi.StringPtrInput
	// The name of the workspace.
	WorkspaceName pulumi.StringInput
}

func (WorkspaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceArgs)(nil)).Elem()
}