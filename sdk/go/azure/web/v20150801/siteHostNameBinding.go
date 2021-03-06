// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A host name binding object
type SiteHostNameBinding struct {
	pulumi.CustomResourceState

	// Azure resource name
	AzureResourceName pulumi.StringPtrOutput `pulumi:"azureResourceName"`
	// Azure resource type
	AzureResourceType pulumi.StringPtrOutput `pulumi:"azureResourceType"`
	// Custom DNS record type
	CustomHostNameDnsRecordType pulumi.StringPtrOutput `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI
	DomainId pulumi.StringPtrOutput `pulumi:"domainId"`
	// Host name type
	HostNameType pulumi.StringPtrOutput `pulumi:"hostNameType"`
	// Kind of resource
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource Name
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// Web app name
	SiteName pulumi.StringPtrOutput `pulumi:"siteName"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewSiteHostNameBinding registers a new resource with the given unique name, arguments, and options.
func NewSiteHostNameBinding(ctx *pulumi.Context,
	name string, args *SiteHostNameBindingArgs, opts ...pulumi.ResourceOption) (*SiteHostNameBinding, error) {
	if args == nil || args.HostName == nil {
		return nil, errors.New("missing required argument 'HostName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &SiteHostNameBindingArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:SiteHostNameBinding"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:SiteHostNameBinding"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:SiteHostNameBinding"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:SiteHostNameBinding"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:SiteHostNameBinding"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:SiteHostNameBinding"),
		},
	})
	opts = append(opts, aliases)
	var resource SiteHostNameBinding
	err := ctx.RegisterResource("azure-nextgen:web/v20150801:SiteHostNameBinding", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSiteHostNameBinding gets an existing SiteHostNameBinding resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSiteHostNameBinding(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SiteHostNameBindingState, opts ...pulumi.ResourceOption) (*SiteHostNameBinding, error) {
	var resource SiteHostNameBinding
	err := ctx.ReadResource("azure-nextgen:web/v20150801:SiteHostNameBinding", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SiteHostNameBinding resources.
type siteHostNameBindingState struct {
	// Azure resource name
	AzureResourceName *string `pulumi:"azureResourceName"`
	// Azure resource type
	AzureResourceType *string `pulumi:"azureResourceType"`
	// Custom DNS record type
	CustomHostNameDnsRecordType *string `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI
	DomainId *string `pulumi:"domainId"`
	// Host name type
	HostNameType *string `pulumi:"hostNameType"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// Web app name
	SiteName *string `pulumi:"siteName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type SiteHostNameBindingState struct {
	// Azure resource name
	AzureResourceName pulumi.StringPtrInput
	// Azure resource type
	AzureResourceType pulumi.StringPtrInput
	// Custom DNS record type
	CustomHostNameDnsRecordType pulumi.StringPtrInput
	// Fully qualified ARM domain resource URI
	DomainId pulumi.StringPtrInput
	// Host name type
	HostNameType pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// Web app name
	SiteName pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteHostNameBindingState) ElementType() reflect.Type {
	return reflect.TypeOf((*siteHostNameBindingState)(nil)).Elem()
}

type siteHostNameBindingArgs struct {
	// Azure resource name
	AzureResourceName *string `pulumi:"azureResourceName"`
	// Azure resource type
	AzureResourceType *string `pulumi:"azureResourceType"`
	// Custom DNS record type
	CustomHostNameDnsRecordType *string `pulumi:"customHostNameDnsRecordType"`
	// Fully qualified ARM domain resource URI
	DomainId *string `pulumi:"domainId"`
	// Name of host
	HostName string `pulumi:"hostName"`
	// Host name type
	HostNameType *string `pulumi:"hostNameType"`
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
	// Web app name
	SiteName *string `pulumi:"siteName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a SiteHostNameBinding resource.
type SiteHostNameBindingArgs struct {
	// Azure resource name
	AzureResourceName pulumi.StringPtrInput
	// Azure resource type
	AzureResourceType pulumi.StringPtrInput
	// Custom DNS record type
	CustomHostNameDnsRecordType pulumi.StringPtrInput
	// Fully qualified ARM domain resource URI
	DomainId pulumi.StringPtrInput
	// Name of host
	HostName pulumi.StringInput
	// Host name type
	HostNameType pulumi.StringPtrInput
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
	// Web app name
	SiteName pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteHostNameBindingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*siteHostNameBindingArgs)(nil)).Elem()
}
