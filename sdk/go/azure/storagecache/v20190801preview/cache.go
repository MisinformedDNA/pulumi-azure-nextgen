// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A cache instance.  Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
type Cache struct {
	pulumi.CustomResourceState

	// The size of this cache's cache, in GB.
	CacheSizeGB pulumi.IntPtrOutput `pulumi:"cacheSizeGB"`
	// Health of the cache.
	Health CacheHealthResponseOutput `pulumi:"health"`
	// Region name string.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Array of IP addresses that can be used by clients mounting this Cache.
	MountAddresses pulumi.StringArrayOutput `pulumi:"mountAddresses"`
	// Name of cache.
	Name pulumi.StringOutput `pulumi:"name"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Sku for the cache.
	Sku CacheResponseSkuPtrOutput `pulumi:"sku"`
	// Subnet used for the cache.
	Subnet pulumi.StringPtrOutput `pulumi:"subnet"`
	// ARM tags as name/value pairs.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// Type for the cache; Microsoft.StorageCache/Cache
	Type pulumi.StringOutput `pulumi:"type"`
	// Upgrade status of the cache.
	UpgradeStatus CacheUpgradeStatusResponsePtrOutput `pulumi:"upgradeStatus"`
}

// NewCache registers a new resource with the given unique name, arguments, and options.
func NewCache(ctx *pulumi.Context,
	name string, args *CacheArgs, opts ...pulumi.ResourceOption) (*Cache, error) {
	if args == nil || args.CacheName == nil {
		return nil, errors.New("missing required argument 'CacheName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &CacheArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:storagecache/latest:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20191101:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:storagecache/v20200301:Cache"),
		},
	})
	opts = append(opts, aliases)
	var resource Cache
	err := ctx.RegisterResource("azure-nextgen:storagecache/v20190801preview:Cache", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCache gets an existing Cache resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCache(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CacheState, opts ...pulumi.ResourceOption) (*Cache, error) {
	var resource Cache
	err := ctx.ReadResource("azure-nextgen:storagecache/v20190801preview:Cache", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cache resources.
type cacheState struct {
	// The size of this cache's cache, in GB.
	CacheSizeGB *int `pulumi:"cacheSizeGB"`
	// Health of the cache.
	Health *CacheHealthResponse `pulumi:"health"`
	// Region name string.
	Location *string `pulumi:"location"`
	// Array of IP addresses that can be used by clients mounting this Cache.
	MountAddresses []string `pulumi:"mountAddresses"`
	// Name of cache.
	Name *string `pulumi:"name"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Sku for the cache.
	Sku *CacheResponseSku `pulumi:"sku"`
	// Subnet used for the cache.
	Subnet *string `pulumi:"subnet"`
	// ARM tags as name/value pairs.
	Tags map[string]interface{} `pulumi:"tags"`
	// Type for the cache; Microsoft.StorageCache/Cache
	Type *string `pulumi:"type"`
	// Upgrade status of the cache.
	UpgradeStatus *CacheUpgradeStatusResponse `pulumi:"upgradeStatus"`
}

type CacheState struct {
	// The size of this cache's cache, in GB.
	CacheSizeGB pulumi.IntPtrInput
	// Health of the cache.
	Health CacheHealthResponsePtrInput
	// Region name string.
	Location pulumi.StringPtrInput
	// Array of IP addresses that can be used by clients mounting this Cache.
	MountAddresses pulumi.StringArrayInput
	// Name of cache.
	Name pulumi.StringPtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// Sku for the cache.
	Sku CacheResponseSkuPtrInput
	// Subnet used for the cache.
	Subnet pulumi.StringPtrInput
	// ARM tags as name/value pairs.
	Tags pulumi.MapInput
	// Type for the cache; Microsoft.StorageCache/Cache
	Type pulumi.StringPtrInput
	// Upgrade status of the cache.
	UpgradeStatus CacheUpgradeStatusResponsePtrInput
}

func (CacheState) ElementType() reflect.Type {
	return reflect.TypeOf((*cacheState)(nil)).Elem()
}

type cacheArgs struct {
	// Name of cache.
	CacheName string `pulumi:"cacheName"`
	// The size of this cache's cache, in GB.
	CacheSizeGB *int `pulumi:"cacheSizeGB"`
	// Region name string.
	Location *string `pulumi:"location"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Target resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Sku for the cache.
	Sku *CacheSku `pulumi:"sku"`
	// Subnet used for the cache.
	Subnet *string `pulumi:"subnet"`
	// ARM tags as name/value pairs.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a Cache resource.
type CacheArgs struct {
	// Name of cache.
	CacheName pulumi.StringInput
	// The size of this cache's cache, in GB.
	CacheSizeGB pulumi.IntPtrInput
	// Region name string.
	Location pulumi.StringPtrInput
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState pulumi.StringPtrInput
	// Target resource group.
	ResourceGroupName pulumi.StringInput
	// Sku for the cache.
	Sku CacheSkuPtrInput
	// Subnet used for the cache.
	Subnet pulumi.StringPtrInput
	// ARM tags as name/value pairs.
	Tags pulumi.MapInput
}

func (CacheArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*cacheArgs)(nil)).Elem()
}
