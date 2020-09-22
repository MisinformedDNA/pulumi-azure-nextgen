// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure SQL Database sync member.
type SyncMember struct {
	pulumi.CustomResourceState

	// Database name of the member database in the sync member.
	DatabaseName pulumi.StringPtrOutput `pulumi:"databaseName"`
	// Database type of the sync member.
	DatabaseType pulumi.StringPtrOutput `pulumi:"databaseType"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Password of the member database in the sync member.
	Password pulumi.StringPtrOutput `pulumi:"password"`
	// Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
	PrivateEndpointName pulumi.StringOutput `pulumi:"privateEndpointName"`
	// Server name of the member database in the sync member
	ServerName pulumi.StringPtrOutput `pulumi:"serverName"`
	// SQL Server database id of the sync member.
	SqlServerDatabaseId pulumi.StringPtrOutput `pulumi:"sqlServerDatabaseId"`
	// ARM resource id of the sync agent in the sync member.
	SyncAgentId pulumi.StringPtrOutput `pulumi:"syncAgentId"`
	// Sync direction of the sync member.
	SyncDirection pulumi.StringPtrOutput `pulumi:"syncDirection"`
	// ARM resource id of the sync member logical database, for sync members in Azure.
	SyncMemberAzureDatabaseResourceId pulumi.StringPtrOutput `pulumi:"syncMemberAzureDatabaseResourceId"`
	// Sync state of the sync member.
	SyncState pulumi.StringOutput `pulumi:"syncState"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Whether to use private link connection.
	UsePrivateLinkConnection pulumi.BoolPtrOutput `pulumi:"usePrivateLinkConnection"`
	// User name of the member database in the sync member.
	UserName pulumi.StringPtrOutput `pulumi:"userName"`
}

// NewSyncMember registers a new resource with the given unique name, arguments, and options.
func NewSyncMember(ctx *pulumi.Context,
	name string, args *SyncMemberArgs, opts ...pulumi.ResourceOption) (*SyncMember, error) {
	if args == nil || args.DatabaseName == nil {
		return nil, errors.New("missing required argument 'DatabaseName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerName == nil {
		return nil, errors.New("missing required argument 'ServerName'")
	}
	if args == nil || args.SyncGroupName == nil {
		return nil, errors.New("missing required argument 'SyncGroupName'")
	}
	if args == nil || args.SyncMemberName == nil {
		return nil, errors.New("missing required argument 'SyncMemberName'")
	}
	if args == nil {
		args = &SyncMemberArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20150501preview:SyncMember"),
		},
	})
	opts = append(opts, aliases)
	var resource SyncMember
	err := ctx.RegisterResource("azure-nextgen:sql/v20190601preview:SyncMember", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSyncMember gets an existing SyncMember resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSyncMember(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SyncMemberState, opts ...pulumi.ResourceOption) (*SyncMember, error) {
	var resource SyncMember
	err := ctx.ReadResource("azure-nextgen:sql/v20190601preview:SyncMember", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SyncMember resources.
type syncMemberState struct {
	// Database name of the member database in the sync member.
	DatabaseName *string `pulumi:"databaseName"`
	// Database type of the sync member.
	DatabaseType *string `pulumi:"databaseType"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Password of the member database in the sync member.
	Password *string `pulumi:"password"`
	// Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
	PrivateEndpointName *string `pulumi:"privateEndpointName"`
	// Server name of the member database in the sync member
	ServerName *string `pulumi:"serverName"`
	// SQL Server database id of the sync member.
	SqlServerDatabaseId *string `pulumi:"sqlServerDatabaseId"`
	// ARM resource id of the sync agent in the sync member.
	SyncAgentId *string `pulumi:"syncAgentId"`
	// Sync direction of the sync member.
	SyncDirection *string `pulumi:"syncDirection"`
	// ARM resource id of the sync member logical database, for sync members in Azure.
	SyncMemberAzureDatabaseResourceId *string `pulumi:"syncMemberAzureDatabaseResourceId"`
	// Sync state of the sync member.
	SyncState *string `pulumi:"syncState"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Whether to use private link connection.
	UsePrivateLinkConnection *bool `pulumi:"usePrivateLinkConnection"`
	// User name of the member database in the sync member.
	UserName *string `pulumi:"userName"`
}

type SyncMemberState struct {
	// Database name of the member database in the sync member.
	DatabaseName pulumi.StringPtrInput
	// Database type of the sync member.
	DatabaseType pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Password of the member database in the sync member.
	Password pulumi.StringPtrInput
	// Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
	PrivateEndpointName pulumi.StringPtrInput
	// Server name of the member database in the sync member
	ServerName pulumi.StringPtrInput
	// SQL Server database id of the sync member.
	SqlServerDatabaseId pulumi.StringPtrInput
	// ARM resource id of the sync agent in the sync member.
	SyncAgentId pulumi.StringPtrInput
	// Sync direction of the sync member.
	SyncDirection pulumi.StringPtrInput
	// ARM resource id of the sync member logical database, for sync members in Azure.
	SyncMemberAzureDatabaseResourceId pulumi.StringPtrInput
	// Sync state of the sync member.
	SyncState pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Whether to use private link connection.
	UsePrivateLinkConnection pulumi.BoolPtrInput
	// User name of the member database in the sync member.
	UserName pulumi.StringPtrInput
}

func (SyncMemberState) ElementType() reflect.Type {
	return reflect.TypeOf((*syncMemberState)(nil)).Elem()
}

type syncMemberArgs struct {
	// Database name of the member database in the sync member.
	DatabaseName string `pulumi:"databaseName"`
	// Database type of the sync member.
	DatabaseType *string `pulumi:"databaseType"`
	// Password of the member database in the sync member.
	Password *string `pulumi:"password"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Server name of the member database in the sync member
	ServerName string `pulumi:"serverName"`
	// SQL Server database id of the sync member.
	SqlServerDatabaseId *string `pulumi:"sqlServerDatabaseId"`
	// ARM resource id of the sync agent in the sync member.
	SyncAgentId *string `pulumi:"syncAgentId"`
	// Sync direction of the sync member.
	SyncDirection *string `pulumi:"syncDirection"`
	// The name of the sync group on which the sync member is hosted.
	SyncGroupName string `pulumi:"syncGroupName"`
	// ARM resource id of the sync member logical database, for sync members in Azure.
	SyncMemberAzureDatabaseResourceId *string `pulumi:"syncMemberAzureDatabaseResourceId"`
	// The name of the sync member.
	SyncMemberName string `pulumi:"syncMemberName"`
	// Whether to use private link connection.
	UsePrivateLinkConnection *bool `pulumi:"usePrivateLinkConnection"`
	// User name of the member database in the sync member.
	UserName *string `pulumi:"userName"`
}

// The set of arguments for constructing a SyncMember resource.
type SyncMemberArgs struct {
	// Database name of the member database in the sync member.
	DatabaseName pulumi.StringInput
	// Database type of the sync member.
	DatabaseType pulumi.StringPtrInput
	// Password of the member database in the sync member.
	Password pulumi.StringPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// Server name of the member database in the sync member
	ServerName pulumi.StringInput
	// SQL Server database id of the sync member.
	SqlServerDatabaseId pulumi.StringPtrInput
	// ARM resource id of the sync agent in the sync member.
	SyncAgentId pulumi.StringPtrInput
	// Sync direction of the sync member.
	SyncDirection pulumi.StringPtrInput
	// The name of the sync group on which the sync member is hosted.
	SyncGroupName pulumi.StringInput
	// ARM resource id of the sync member logical database, for sync members in Azure.
	SyncMemberAzureDatabaseResourceId pulumi.StringPtrInput
	// The name of the sync member.
	SyncMemberName pulumi.StringInput
	// Whether to use private link connection.
	UsePrivateLinkConnection pulumi.BoolPtrInput
	// User name of the member database in the sync member.
	UserName pulumi.StringPtrInput
}

func (SyncMemberArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*syncMemberArgs)(nil)).Elem()
}
