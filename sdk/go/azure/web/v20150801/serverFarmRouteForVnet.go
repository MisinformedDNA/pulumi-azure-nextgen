// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// VnetRoute contract used to pass routing information for a vnet.
type ServerFarmRouteForVnet struct {
	pulumi.CustomResourceState

	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrOutput `pulumi:"endAddress"`
	// Kind of resource
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource Name
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The type of route this is:
	//             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
	//             INHERITED - Routes inherited from the real Virtual Network routes
	//             STATIC - Static route set on the web app only
	//
	//             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
	//             with new INHERITED routes.
	RouteType pulumi.StringPtrOutput `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrOutput `pulumi:"startAddress"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewServerFarmRouteForVnet registers a new resource with the given unique name, arguments, and options.
func NewServerFarmRouteForVnet(ctx *pulumi.Context,
	name string, args *ServerFarmRouteForVnetArgs, opts ...pulumi.ResourceOption) (*ServerFarmRouteForVnet, error) {
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.RouteName == nil {
		return nil, errors.New("missing required argument 'RouteName'")
	}
	if args == nil || args.VnetName == nil {
		return nil, errors.New("missing required argument 'VnetName'")
	}
	if args == nil {
		args = &ServerFarmRouteForVnetArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:ServerFarmRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160901:ServerFarmRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:ServerFarmRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:ServerFarmRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:ServerFarmRouteForVnet"),
		},
	})
	opts = append(opts, aliases)
	var resource ServerFarmRouteForVnet
	err := ctx.RegisterResource("azure-nextgen:web/v20150801:ServerFarmRouteForVnet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServerFarmRouteForVnet gets an existing ServerFarmRouteForVnet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServerFarmRouteForVnet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerFarmRouteForVnetState, opts ...pulumi.ResourceOption) (*ServerFarmRouteForVnet, error) {
	var resource ServerFarmRouteForVnet
	err := ctx.ReadResource("azure-nextgen:web/v20150801:ServerFarmRouteForVnet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServerFarmRouteForVnet resources.
type serverFarmRouteForVnetState struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress *string `pulumi:"endAddress"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// The type of route this is:
	//             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
	//             INHERITED - Routes inherited from the real Virtual Network routes
	//             STATIC - Static route set on the web app only
	//
	//             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
	//             with new INHERITED routes.
	RouteType *string `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress *string `pulumi:"startAddress"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ServerFarmRouteForVnetState struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// The type of route this is:
	//             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
	//             INHERITED - Routes inherited from the real Virtual Network routes
	//             STATIC - Static route set on the web app only
	//
	//             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
	//             with new INHERITED routes.
	RouteType pulumi.StringPtrInput
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ServerFarmRouteForVnetState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverFarmRouteForVnetState)(nil)).Elem()
}

type serverFarmRouteForVnetArgs struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress *string `pulumi:"endAddress"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string `pulumi:"location"`
	// Resource Name
	Name string `pulumi:"name"`
	// Name of resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the virtual network route
	RouteName string `pulumi:"routeName"`
	// The type of route this is:
	//             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
	//             INHERITED - Routes inherited from the real Virtual Network routes
	//             STATIC - Static route set on the web app only
	//
	//             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
	//             with new INHERITED routes.
	RouteType *string `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress *string `pulumi:"startAddress"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Name of virtual network
	VnetName string `pulumi:"vnetName"`
}

// The set of arguments for constructing a ServerFarmRouteForVnet resource.
type ServerFarmRouteForVnetArgs struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrInput
	// Resource Id
	Id pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringInput
	// Resource Name
	Name pulumi.StringInput
	// Name of resource group
	ResourceGroupName pulumi.StringInput
	// Name of the virtual network route
	RouteName pulumi.StringInput
	// The type of route this is:
	//             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
	//             INHERITED - Routes inherited from the real Virtual Network routes
	//             STATIC - Static route set on the web app only
	//
	//             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
	//             with new INHERITED routes.
	RouteType pulumi.StringPtrInput
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Name of virtual network
	VnetName pulumi.StringInput
}

func (ServerFarmRouteForVnetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverFarmRouteForVnetArgs)(nil)).Elem()
}