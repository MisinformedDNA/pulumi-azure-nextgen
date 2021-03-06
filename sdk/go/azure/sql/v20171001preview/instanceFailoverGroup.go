// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171001preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An instance failover group.
type InstanceFailoverGroup struct {
	pulumi.CustomResourceState

	// List of managed instance pairs in the failover group.
	ManagedInstancePairs ManagedInstancePairInfoResponseArrayOutput `pulumi:"managedInstancePairs"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Partner region information for the failover group.
	PartnerRegions PartnerRegionInfoResponseArrayOutput `pulumi:"partnerRegions"`
	// Read-only endpoint of the failover group instance.
	ReadOnlyEndpoint InstanceFailoverGroupReadOnlyEndpointResponsePtrOutput `pulumi:"readOnlyEndpoint"`
	// Read-write endpoint of the failover group instance.
	ReadWriteEndpoint InstanceFailoverGroupReadWriteEndpointResponseOutput `pulumi:"readWriteEndpoint"`
	// Local replication role of the failover group instance.
	ReplicationRole pulumi.StringOutput `pulumi:"replicationRole"`
	// Replication state of the failover group instance.
	ReplicationState pulumi.StringOutput `pulumi:"replicationState"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewInstanceFailoverGroup registers a new resource with the given unique name, arguments, and options.
func NewInstanceFailoverGroup(ctx *pulumi.Context,
	name string, args *InstanceFailoverGroupArgs, opts ...pulumi.ResourceOption) (*InstanceFailoverGroup, error) {
	if args == nil || args.FailoverGroupName == nil {
		return nil, errors.New("missing required argument 'FailoverGroupName'")
	}
	if args == nil || args.LocationName == nil {
		return nil, errors.New("missing required argument 'LocationName'")
	}
	if args == nil || args.ManagedInstancePairs == nil {
		return nil, errors.New("missing required argument 'ManagedInstancePairs'")
	}
	if args == nil || args.PartnerRegions == nil {
		return nil, errors.New("missing required argument 'PartnerRegions'")
	}
	if args == nil || args.ReadWriteEndpoint == nil {
		return nil, errors.New("missing required argument 'ReadWriteEndpoint'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &InstanceFailoverGroupArgs{}
	}
	var resource InstanceFailoverGroup
	err := ctx.RegisterResource("azure-nextgen:sql/v20171001preview:InstanceFailoverGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetInstanceFailoverGroup gets an existing InstanceFailoverGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInstanceFailoverGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *InstanceFailoverGroupState, opts ...pulumi.ResourceOption) (*InstanceFailoverGroup, error) {
	var resource InstanceFailoverGroup
	err := ctx.ReadResource("azure-nextgen:sql/v20171001preview:InstanceFailoverGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering InstanceFailoverGroup resources.
type instanceFailoverGroupState struct {
	// List of managed instance pairs in the failover group.
	ManagedInstancePairs []ManagedInstancePairInfoResponse `pulumi:"managedInstancePairs"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Partner region information for the failover group.
	PartnerRegions []PartnerRegionInfoResponse `pulumi:"partnerRegions"`
	// Read-only endpoint of the failover group instance.
	ReadOnlyEndpoint *InstanceFailoverGroupReadOnlyEndpointResponse `pulumi:"readOnlyEndpoint"`
	// Read-write endpoint of the failover group instance.
	ReadWriteEndpoint *InstanceFailoverGroupReadWriteEndpointResponse `pulumi:"readWriteEndpoint"`
	// Local replication role of the failover group instance.
	ReplicationRole *string `pulumi:"replicationRole"`
	// Replication state of the failover group instance.
	ReplicationState *string `pulumi:"replicationState"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type InstanceFailoverGroupState struct {
	// List of managed instance pairs in the failover group.
	ManagedInstancePairs ManagedInstancePairInfoResponseArrayInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Partner region information for the failover group.
	PartnerRegions PartnerRegionInfoResponseArrayInput
	// Read-only endpoint of the failover group instance.
	ReadOnlyEndpoint InstanceFailoverGroupReadOnlyEndpointResponsePtrInput
	// Read-write endpoint of the failover group instance.
	ReadWriteEndpoint InstanceFailoverGroupReadWriteEndpointResponsePtrInput
	// Local replication role of the failover group instance.
	ReplicationRole pulumi.StringPtrInput
	// Replication state of the failover group instance.
	ReplicationState pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (InstanceFailoverGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*instanceFailoverGroupState)(nil)).Elem()
}

type instanceFailoverGroupArgs struct {
	// The name of the failover group.
	FailoverGroupName string `pulumi:"failoverGroupName"`
	// The name of the region where the resource is located.
	LocationName string `pulumi:"locationName"`
	// List of managed instance pairs in the failover group.
	ManagedInstancePairs []ManagedInstancePairInfo `pulumi:"managedInstancePairs"`
	// Partner region information for the failover group.
	PartnerRegions []PartnerRegionInfo `pulumi:"partnerRegions"`
	// Read-only endpoint of the failover group instance.
	ReadOnlyEndpoint *InstanceFailoverGroupReadOnlyEndpoint `pulumi:"readOnlyEndpoint"`
	// Read-write endpoint of the failover group instance.
	ReadWriteEndpoint InstanceFailoverGroupReadWriteEndpoint `pulumi:"readWriteEndpoint"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a InstanceFailoverGroup resource.
type InstanceFailoverGroupArgs struct {
	// The name of the failover group.
	FailoverGroupName pulumi.StringInput
	// The name of the region where the resource is located.
	LocationName pulumi.StringInput
	// List of managed instance pairs in the failover group.
	ManagedInstancePairs ManagedInstancePairInfoArrayInput
	// Partner region information for the failover group.
	PartnerRegions PartnerRegionInfoArrayInput
	// Read-only endpoint of the failover group instance.
	ReadOnlyEndpoint InstanceFailoverGroupReadOnlyEndpointPtrInput
	// Read-write endpoint of the failover group instance.
	ReadWriteEndpoint InstanceFailoverGroupReadWriteEndpointInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
}

func (InstanceFailoverGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*instanceFailoverGroupArgs)(nil)).Elem()
}
