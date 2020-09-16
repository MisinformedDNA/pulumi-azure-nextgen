// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151106

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB SQL database.
type DatabaseAccountSqlDatabase struct {
	pulumi.CustomResourceState

	// A system generated property that specified the addressable path of the collections resource.
	Colls pulumi.StringPtrOutput `pulumi:"colls"`
	// A system generated property representing the resource etag required for optimistic concurrency control.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the database account.
	Name pulumi.StringOutput `pulumi:"name"`
	// A system generated property. A unique identifier.
	Rid pulumi.StringPtrOutput `pulumi:"rid"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// A system generated property that denotes the last updated timestamp of the resource.
	Ts pulumi.MapOutput `pulumi:"ts"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// A system generated property that specifies the addressable path of the users resource.
	Users pulumi.StringPtrOutput `pulumi:"users"`
}

// NewDatabaseAccountSqlDatabase registers a new resource with the given unique name, arguments, and options.
func NewDatabaseAccountSqlDatabase(ctx *pulumi.Context,
	name string, args *DatabaseAccountSqlDatabaseArgs, opts ...pulumi.ResourceOption) (*DatabaseAccountSqlDatabase, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.DatabaseName == nil {
		return nil, errors.New("missing required argument 'DatabaseName'")
	}
	if args == nil || args.Options == nil {
		return nil, errors.New("missing required argument 'Options'")
	}
	if args == nil || args.Resource == nil {
		return nil, errors.New("missing required argument 'Resource'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &DatabaseAccountSqlDatabaseArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:documentdb/latest:DatabaseAccountSqlDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150401:DatabaseAccountSqlDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150408:DatabaseAccountSqlDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160319:DatabaseAccountSqlDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160331:DatabaseAccountSqlDatabase"),
		},
	})
	opts = append(opts, aliases)
	var resource DatabaseAccountSqlDatabase
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20151106:DatabaseAccountSqlDatabase", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDatabaseAccountSqlDatabase gets an existing DatabaseAccountSqlDatabase resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabaseAccountSqlDatabase(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DatabaseAccountSqlDatabaseState, opts ...pulumi.ResourceOption) (*DatabaseAccountSqlDatabase, error) {
	var resource DatabaseAccountSqlDatabase
	err := ctx.ReadResource("azure-nextgen:documentdb/v20151106:DatabaseAccountSqlDatabase", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DatabaseAccountSqlDatabase resources.
type databaseAccountSqlDatabaseState struct {
	// A system generated property that specified the addressable path of the collections resource.
	Colls *string `pulumi:"colls"`
	// A system generated property representing the resource etag required for optimistic concurrency control.
	Etag *string `pulumi:"etag"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name *string `pulumi:"name"`
	// A system generated property. A unique identifier.
	Rid *string `pulumi:"rid"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// A system generated property that denotes the last updated timestamp of the resource.
	Ts map[string]interface{} `pulumi:"ts"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
	// A system generated property that specifies the addressable path of the users resource.
	Users *string `pulumi:"users"`
}

type DatabaseAccountSqlDatabaseState struct {
	// A system generated property that specified the addressable path of the collections resource.
	Colls pulumi.StringPtrInput
	// A system generated property representing the resource etag required for optimistic concurrency control.
	Etag pulumi.StringPtrInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the database account.
	Name pulumi.StringPtrInput
	// A system generated property. A unique identifier.
	Rid pulumi.StringPtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// A system generated property that denotes the last updated timestamp of the resource.
	Ts pulumi.MapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
	// A system generated property that specifies the addressable path of the users resource.
	Users pulumi.StringPtrInput
}

func (DatabaseAccountSqlDatabaseState) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountSqlDatabaseState)(nil)).Elem()
}

type databaseAccountSqlDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options map[string]string `pulumi:"options"`
	// The standard JSON format of a SQL database
	Resource SqlDatabaseResource `pulumi:"resource"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DatabaseAccountSqlDatabase resource.
type DatabaseAccountSqlDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB database name.
	DatabaseName pulumi.StringInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options pulumi.StringMapInput
	// The standard JSON format of a SQL database
	Resource SqlDatabaseResourceInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
}

func (DatabaseAccountSqlDatabaseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountSqlDatabaseArgs)(nil)).Elem()
}