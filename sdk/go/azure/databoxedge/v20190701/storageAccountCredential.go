// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190701

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The storage account credential.
type StorageAccountCredential struct {
	pulumi.CustomResourceState

	// Encrypted storage key.
	AccountKey AsymmetricEncryptedSecretResponsePtrOutput `pulumi:"accountKey"`
	// Type of storage accessed on the storage account.
	AccountType pulumi.StringOutput `pulumi:"accountType"`
	// Alias for the storage account.
	Alias pulumi.StringOutput `pulumi:"alias"`
	// Blob end point for private clouds.
	BlobDomainName pulumi.StringPtrOutput `pulumi:"blobDomainName"`
	// Connection string for the storage account. Use this string if username and account key are not specified.
	ConnectionString pulumi.StringPtrOutput `pulumi:"connectionString"`
	// The object name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Signifies whether SSL needs to be enabled or not.
	SslStatus pulumi.StringOutput `pulumi:"sslStatus"`
	// Id of the storage account.
	StorageAccountId pulumi.StringPtrOutput `pulumi:"storageAccountId"`
	// The hierarchical type of the object.
	Type pulumi.StringOutput `pulumi:"type"`
	// Username for the storage account.
	UserName pulumi.StringPtrOutput `pulumi:"userName"`
}

// NewStorageAccountCredential registers a new resource with the given unique name, arguments, and options.
func NewStorageAccountCredential(ctx *pulumi.Context,
	name string, args *StorageAccountCredentialArgs, opts ...pulumi.ResourceOption) (*StorageAccountCredential, error) {
	if args == nil || args.AccountType == nil {
		return nil, errors.New("missing required argument 'AccountType'")
	}
	if args == nil || args.Alias == nil {
		return nil, errors.New("missing required argument 'Alias'")
	}
	if args == nil || args.DeviceName == nil {
		return nil, errors.New("missing required argument 'DeviceName'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SslStatus == nil {
		return nil, errors.New("missing required argument 'SslStatus'")
	}
	if args == nil {
		args = &StorageAccountCredentialArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:databoxedge/latest:StorageAccountCredential"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190301:StorageAccountCredential"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190801:StorageAccountCredential"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20200501preview:StorageAccountCredential"),
		},
	})
	opts = append(opts, aliases)
	var resource StorageAccountCredential
	err := ctx.RegisterResource("azure-nextgen:databoxedge/v20190701:StorageAccountCredential", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStorageAccountCredential gets an existing StorageAccountCredential resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStorageAccountCredential(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StorageAccountCredentialState, opts ...pulumi.ResourceOption) (*StorageAccountCredential, error) {
	var resource StorageAccountCredential
	err := ctx.ReadResource("azure-nextgen:databoxedge/v20190701:StorageAccountCredential", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageAccountCredential resources.
type storageAccountCredentialState struct {
	// Encrypted storage key.
	AccountKey *AsymmetricEncryptedSecretResponse `pulumi:"accountKey"`
	// Type of storage accessed on the storage account.
	AccountType *string `pulumi:"accountType"`
	// Alias for the storage account.
	Alias *string `pulumi:"alias"`
	// Blob end point for private clouds.
	BlobDomainName *string `pulumi:"blobDomainName"`
	// Connection string for the storage account. Use this string if username and account key are not specified.
	ConnectionString *string `pulumi:"connectionString"`
	// The object name.
	Name *string `pulumi:"name"`
	// Signifies whether SSL needs to be enabled or not.
	SslStatus *string `pulumi:"sslStatus"`
	// Id of the storage account.
	StorageAccountId *string `pulumi:"storageAccountId"`
	// The hierarchical type of the object.
	Type *string `pulumi:"type"`
	// Username for the storage account.
	UserName *string `pulumi:"userName"`
}

type StorageAccountCredentialState struct {
	// Encrypted storage key.
	AccountKey AsymmetricEncryptedSecretResponsePtrInput
	// Type of storage accessed on the storage account.
	AccountType pulumi.StringPtrInput
	// Alias for the storage account.
	Alias pulumi.StringPtrInput
	// Blob end point for private clouds.
	BlobDomainName pulumi.StringPtrInput
	// Connection string for the storage account. Use this string if username and account key are not specified.
	ConnectionString pulumi.StringPtrInput
	// The object name.
	Name pulumi.StringPtrInput
	// Signifies whether SSL needs to be enabled or not.
	SslStatus pulumi.StringPtrInput
	// Id of the storage account.
	StorageAccountId pulumi.StringPtrInput
	// The hierarchical type of the object.
	Type pulumi.StringPtrInput
	// Username for the storage account.
	UserName pulumi.StringPtrInput
}

func (StorageAccountCredentialState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageAccountCredentialState)(nil)).Elem()
}

type storageAccountCredentialArgs struct {
	// Encrypted storage key.
	AccountKey *AsymmetricEncryptedSecret `pulumi:"accountKey"`
	// Type of storage accessed on the storage account.
	AccountType string `pulumi:"accountType"`
	// Alias for the storage account.
	Alias string `pulumi:"alias"`
	// Blob end point for private clouds.
	BlobDomainName *string `pulumi:"blobDomainName"`
	// Connection string for the storage account. Use this string if username and account key are not specified.
	ConnectionString *string `pulumi:"connectionString"`
	// The device name.
	DeviceName string `pulumi:"deviceName"`
	// The storage account credential name.
	Name string `pulumi:"name"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Signifies whether SSL needs to be enabled or not.
	SslStatus string `pulumi:"sslStatus"`
	// Id of the storage account.
	StorageAccountId *string `pulumi:"storageAccountId"`
	// Username for the storage account.
	UserName *string `pulumi:"userName"`
}

// The set of arguments for constructing a StorageAccountCredential resource.
type StorageAccountCredentialArgs struct {
	// Encrypted storage key.
	AccountKey AsymmetricEncryptedSecretPtrInput
	// Type of storage accessed on the storage account.
	AccountType pulumi.StringInput
	// Alias for the storage account.
	Alias pulumi.StringInput
	// Blob end point for private clouds.
	BlobDomainName pulumi.StringPtrInput
	// Connection string for the storage account. Use this string if username and account key are not specified.
	ConnectionString pulumi.StringPtrInput
	// The device name.
	DeviceName pulumi.StringInput
	// The storage account credential name.
	Name pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// Signifies whether SSL needs to be enabled or not.
	SslStatus pulumi.StringInput
	// Id of the storage account.
	StorageAccountId pulumi.StringPtrInput
	// Username for the storage account.
	UserName pulumi.StringPtrInput
}

func (StorageAccountCredentialArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storageAccountCredentialArgs)(nil)).Elem()
}
