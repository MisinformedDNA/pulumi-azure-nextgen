// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180201

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A web app, a mobile app backend, or an API app.
type WebApp struct {
	pulumi.CustomResourceState

	// Management information availability state for the app.
	AvailabilityState pulumi.StringOutput `pulumi:"availabilityState"`
	// <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
	ClientAffinityEnabled pulumi.BoolPtrOutput `pulumi:"clientAffinityEnabled"`
	// <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
	ClientCertEnabled pulumi.BoolPtrOutput `pulumi:"clientCertEnabled"`
	// client certificate authentication comma-separated exclusion paths
	ClientCertExclusionPaths pulumi.StringPtrOutput `pulumi:"clientCertExclusionPaths"`
	// If specified during app creation, the app is cloned from a source app.
	CloningInfo CloningInfoResponsePtrOutput `pulumi:"cloningInfo"`
	// Size of the function container.
	ContainerSize pulumi.IntPtrOutput `pulumi:"containerSize"`
	// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
	DailyMemoryTimeQuota pulumi.IntPtrOutput `pulumi:"dailyMemoryTimeQuota"`
	// Default hostname of the app. Read-only.
	DefaultHostName pulumi.StringOutput `pulumi:"defaultHostName"`
	// <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
	// the app is not served on those hostnames.
	EnabledHostNames pulumi.StringArrayOutput `pulumi:"enabledHostNames"`
	// GeoDistributions for this site
	GeoDistributions GeoDistributionResponseArrayOutput `pulumi:"geoDistributions"`
	// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
	HostNameSslStates HostNameSslStateResponseArrayOutput `pulumi:"hostNameSslStates"`
	// Hostnames associated with the app.
	HostNames pulumi.StringArrayOutput `pulumi:"hostNames"`
	// <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
	//  If <code>true</code>, the app is only accessible via API management process.
	HostNamesDisabled pulumi.BoolPtrOutput `pulumi:"hostNamesDisabled"`
	// App Service Environment to use for the app.
	HostingEnvironmentProfile HostingEnvironmentProfileResponsePtrOutput `pulumi:"hostingEnvironmentProfile"`
	// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
	// http requests
	HttpsOnly pulumi.BoolPtrOutput `pulumi:"httpsOnly"`
	// Hyper-V sandbox.
	HyperV pulumi.BoolPtrOutput `pulumi:"hyperV"`
	// Managed service identity.
	Identity ManagedServiceIdentityResponsePtrOutput `pulumi:"identity"`
	// Specifies an operation id if this site has a pending operation.
	InProgressOperationId pulumi.StringOutput `pulumi:"inProgressOperationId"`
	// <code>true</code> if the app is a default container; otherwise, <code>false</code>.
	IsDefaultContainer pulumi.BoolOutput `pulumi:"isDefaultContainer"`
	// Obsolete: Hyper-V sandbox.
	IsXenon pulumi.BoolPtrOutput `pulumi:"isXenon"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Last time the app was modified, in UTC. Read-only.
	LastModifiedTimeUtc pulumi.StringOutput `pulumi:"lastModifiedTimeUtc"`
	// Resource Location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Maximum number of workers.
	// This only applies to Functions container.
	MaxNumberOfWorkers pulumi.IntOutput `pulumi:"maxNumberOfWorkers"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
	OutboundIpAddresses pulumi.StringOutput `pulumi:"outboundIpAddresses"`
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
	PossibleOutboundIpAddresses pulumi.StringOutput `pulumi:"possibleOutboundIpAddresses"`
	// Site redundancy mode
	RedundancyMode pulumi.StringPtrOutput `pulumi:"redundancyMode"`
	// Name of the repository site.
	RepositorySiteName pulumi.StringOutput `pulumi:"repositorySiteName"`
	// <code>true</code> if reserved; otherwise, <code>false</code>.
	Reserved pulumi.BoolPtrOutput `pulumi:"reserved"`
	// Name of the resource group the app belongs to. Read-only.
	ResourceGroup pulumi.StringOutput `pulumi:"resourceGroup"`
	// <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
	ScmSiteAlsoStopped pulumi.BoolPtrOutput `pulumi:"scmSiteAlsoStopped"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrOutput `pulumi:"serverFarmId"`
	// Configuration of the app.
	SiteConfig SiteConfigResponsePtrOutput `pulumi:"siteConfig"`
	// Status of the last deployment slot swap operation.
	SlotSwapStatus SlotSwapStatusResponseOutput `pulumi:"slotSwapStatus"`
	// Current state of the app.
	State pulumi.StringOutput `pulumi:"state"`
	// App suspended till in case memory-time quota is exceeded.
	SuspendedTill pulumi.StringOutput `pulumi:"suspendedTill"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Specifies which deployment slot this app will swap into. Read-only.
	TargetSwapSlot pulumi.StringOutput `pulumi:"targetSwapSlot"`
	// Azure Traffic Manager hostnames associated with the app. Read-only.
	TrafficManagerHostNames pulumi.StringArrayOutput `pulumi:"trafficManagerHostNames"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// State indicating whether the app has exceeded its quota usage. Read-only.
	UsageState pulumi.StringOutput `pulumi:"usageState"`
}

// NewWebApp registers a new resource with the given unique name, arguments, and options.
func NewWebApp(ctx *pulumi.Context,
	name string, args *WebAppArgs, opts ...pulumi.ResourceOption) (*WebApp, error) {
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
		args = &WebAppArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebApp"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:WebApp"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebApp"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebApp"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebApp"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebApp"),
		},
	})
	opts = append(opts, aliases)
	var resource WebApp
	err := ctx.RegisterResource("azure-nextgen:web/v20180201:WebApp", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebApp gets an existing WebApp resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebApp(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppState, opts ...pulumi.ResourceOption) (*WebApp, error) {
	var resource WebApp
	err := ctx.ReadResource("azure-nextgen:web/v20180201:WebApp", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebApp resources.
type webAppState struct {
	// Management information availability state for the app.
	AvailabilityState *string `pulumi:"availabilityState"`
	// <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
	ClientCertEnabled *bool `pulumi:"clientCertEnabled"`
	// client certificate authentication comma-separated exclusion paths
	ClientCertExclusionPaths *string `pulumi:"clientCertExclusionPaths"`
	// If specified during app creation, the app is cloned from a source app.
	CloningInfo *CloningInfoResponse `pulumi:"cloningInfo"`
	// Size of the function container.
	ContainerSize *int `pulumi:"containerSize"`
	// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
	DailyMemoryTimeQuota *int `pulumi:"dailyMemoryTimeQuota"`
	// Default hostname of the app. Read-only.
	DefaultHostName *string `pulumi:"defaultHostName"`
	// <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
	Enabled *bool `pulumi:"enabled"`
	// Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
	// the app is not served on those hostnames.
	EnabledHostNames []string `pulumi:"enabledHostNames"`
	// GeoDistributions for this site
	GeoDistributions []GeoDistributionResponse `pulumi:"geoDistributions"`
	// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
	HostNameSslStates []HostNameSslStateResponse `pulumi:"hostNameSslStates"`
	// Hostnames associated with the app.
	HostNames []string `pulumi:"hostNames"`
	// <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
	//  If <code>true</code>, the app is only accessible via API management process.
	HostNamesDisabled *bool `pulumi:"hostNamesDisabled"`
	// App Service Environment to use for the app.
	HostingEnvironmentProfile *HostingEnvironmentProfileResponse `pulumi:"hostingEnvironmentProfile"`
	// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
	// http requests
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// Hyper-V sandbox.
	HyperV *bool `pulumi:"hyperV"`
	// Managed service identity.
	Identity *ManagedServiceIdentityResponse `pulumi:"identity"`
	// Specifies an operation id if this site has a pending operation.
	InProgressOperationId *string `pulumi:"inProgressOperationId"`
	// <code>true</code> if the app is a default container; otherwise, <code>false</code>.
	IsDefaultContainer *bool `pulumi:"isDefaultContainer"`
	// Obsolete: Hyper-V sandbox.
	IsXenon *bool `pulumi:"isXenon"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Last time the app was modified, in UTC. Read-only.
	LastModifiedTimeUtc *string `pulumi:"lastModifiedTimeUtc"`
	// Resource Location.
	Location *string `pulumi:"location"`
	// Maximum number of workers.
	// This only applies to Functions container.
	MaxNumberOfWorkers *int `pulumi:"maxNumberOfWorkers"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
	OutboundIpAddresses *string `pulumi:"outboundIpAddresses"`
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
	PossibleOutboundIpAddresses *string `pulumi:"possibleOutboundIpAddresses"`
	// Site redundancy mode
	RedundancyMode *string `pulumi:"redundancyMode"`
	// Name of the repository site.
	RepositorySiteName *string `pulumi:"repositorySiteName"`
	// <code>true</code> if reserved; otherwise, <code>false</code>.
	Reserved *bool `pulumi:"reserved"`
	// Name of the resource group the app belongs to. Read-only.
	ResourceGroup *string `pulumi:"resourceGroup"`
	// <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
	ScmSiteAlsoStopped *bool `pulumi:"scmSiteAlsoStopped"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId *string `pulumi:"serverFarmId"`
	// Configuration of the app.
	SiteConfig *SiteConfigResponse `pulumi:"siteConfig"`
	// Status of the last deployment slot swap operation.
	SlotSwapStatus *SlotSwapStatusResponse `pulumi:"slotSwapStatus"`
	// Current state of the app.
	State *string `pulumi:"state"`
	// App suspended till in case memory-time quota is exceeded.
	SuspendedTill *string `pulumi:"suspendedTill"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Specifies which deployment slot this app will swap into. Read-only.
	TargetSwapSlot *string `pulumi:"targetSwapSlot"`
	// Azure Traffic Manager hostnames associated with the app. Read-only.
	TrafficManagerHostNames []string `pulumi:"trafficManagerHostNames"`
	// Resource type.
	Type *string `pulumi:"type"`
	// State indicating whether the app has exceeded its quota usage. Read-only.
	UsageState *string `pulumi:"usageState"`
}

type WebAppState struct {
	// Management information availability state for the app.
	AvailabilityState pulumi.StringPtrInput
	// <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
	ClientAffinityEnabled pulumi.BoolPtrInput
	// <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
	ClientCertEnabled pulumi.BoolPtrInput
	// client certificate authentication comma-separated exclusion paths
	ClientCertExclusionPaths pulumi.StringPtrInput
	// If specified during app creation, the app is cloned from a source app.
	CloningInfo CloningInfoResponsePtrInput
	// Size of the function container.
	ContainerSize pulumi.IntPtrInput
	// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
	DailyMemoryTimeQuota pulumi.IntPtrInput
	// Default hostname of the app. Read-only.
	DefaultHostName pulumi.StringPtrInput
	// <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
	Enabled pulumi.BoolPtrInput
	// Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
	// the app is not served on those hostnames.
	EnabledHostNames pulumi.StringArrayInput
	// GeoDistributions for this site
	GeoDistributions GeoDistributionResponseArrayInput
	// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
	HostNameSslStates HostNameSslStateResponseArrayInput
	// Hostnames associated with the app.
	HostNames pulumi.StringArrayInput
	// <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
	//  If <code>true</code>, the app is only accessible via API management process.
	HostNamesDisabled pulumi.BoolPtrInput
	// App Service Environment to use for the app.
	HostingEnvironmentProfile HostingEnvironmentProfileResponsePtrInput
	// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
	// http requests
	HttpsOnly pulumi.BoolPtrInput
	// Hyper-V sandbox.
	HyperV pulumi.BoolPtrInput
	// Managed service identity.
	Identity ManagedServiceIdentityResponsePtrInput
	// Specifies an operation id if this site has a pending operation.
	InProgressOperationId pulumi.StringPtrInput
	// <code>true</code> if the app is a default container; otherwise, <code>false</code>.
	IsDefaultContainer pulumi.BoolPtrInput
	// Obsolete: Hyper-V sandbox.
	IsXenon pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Last time the app was modified, in UTC. Read-only.
	LastModifiedTimeUtc pulumi.StringPtrInput
	// Resource Location.
	Location pulumi.StringPtrInput
	// Maximum number of workers.
	// This only applies to Functions container.
	MaxNumberOfWorkers pulumi.IntPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
	OutboundIpAddresses pulumi.StringPtrInput
	// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
	PossibleOutboundIpAddresses pulumi.StringPtrInput
	// Site redundancy mode
	RedundancyMode pulumi.StringPtrInput
	// Name of the repository site.
	RepositorySiteName pulumi.StringPtrInput
	// <code>true</code> if reserved; otherwise, <code>false</code>.
	Reserved pulumi.BoolPtrInput
	// Name of the resource group the app belongs to. Read-only.
	ResourceGroup pulumi.StringPtrInput
	// <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
	ScmSiteAlsoStopped pulumi.BoolPtrInput
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrInput
	// Configuration of the app.
	SiteConfig SiteConfigResponsePtrInput
	// Status of the last deployment slot swap operation.
	SlotSwapStatus SlotSwapStatusResponsePtrInput
	// Current state of the app.
	State pulumi.StringPtrInput
	// App suspended till in case memory-time quota is exceeded.
	SuspendedTill pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Specifies which deployment slot this app will swap into. Read-only.
	TargetSwapSlot pulumi.StringPtrInput
	// Azure Traffic Manager hostnames associated with the app. Read-only.
	TrafficManagerHostNames pulumi.StringArrayInput
	// Resource type.
	Type pulumi.StringPtrInput
	// State indicating whether the app has exceeded its quota usage. Read-only.
	UsageState pulumi.StringPtrInput
}

func (WebAppState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppState)(nil)).Elem()
}

type webAppArgs struct {
	// <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
	ClientCertEnabled *bool `pulumi:"clientCertEnabled"`
	// client certificate authentication comma-separated exclusion paths
	ClientCertExclusionPaths *string `pulumi:"clientCertExclusionPaths"`
	// If specified during app creation, the app is cloned from a source app.
	CloningInfo *CloningInfo `pulumi:"cloningInfo"`
	// Size of the function container.
	ContainerSize *int `pulumi:"containerSize"`
	// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
	DailyMemoryTimeQuota *int `pulumi:"dailyMemoryTimeQuota"`
	// <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
	Enabled *bool `pulumi:"enabled"`
	// GeoDistributions for this site
	GeoDistributions []GeoDistribution `pulumi:"geoDistributions"`
	// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
	HostNameSslStates []HostNameSslState `pulumi:"hostNameSslStates"`
	// <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
	//  If <code>true</code>, the app is only accessible via API management process.
	HostNamesDisabled *bool `pulumi:"hostNamesDisabled"`
	// App Service Environment to use for the app.
	HostingEnvironmentProfile *HostingEnvironmentProfile `pulumi:"hostingEnvironmentProfile"`
	// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
	// http requests
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// Hyper-V sandbox.
	HyperV *bool `pulumi:"hyperV"`
	// Managed service identity.
	Identity *ManagedServiceIdentity `pulumi:"identity"`
	// Obsolete: Hyper-V sandbox.
	IsXenon *bool `pulumi:"isXenon"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Location.
	Location string `pulumi:"location"`
	// Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
	Name string `pulumi:"name"`
	// Site redundancy mode
	RedundancyMode *string `pulumi:"redundancyMode"`
	// <code>true</code> if reserved; otherwise, <code>false</code>.
	Reserved *bool `pulumi:"reserved"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
	ScmSiteAlsoStopped *bool `pulumi:"scmSiteAlsoStopped"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId *string `pulumi:"serverFarmId"`
	// Configuration of the app.
	SiteConfig *SiteConfig `pulumi:"siteConfig"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a WebApp resource.
type WebAppArgs struct {
	// <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
	ClientAffinityEnabled pulumi.BoolPtrInput
	// <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
	ClientCertEnabled pulumi.BoolPtrInput
	// client certificate authentication comma-separated exclusion paths
	ClientCertExclusionPaths pulumi.StringPtrInput
	// If specified during app creation, the app is cloned from a source app.
	CloningInfo CloningInfoPtrInput
	// Size of the function container.
	ContainerSize pulumi.IntPtrInput
	// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
	DailyMemoryTimeQuota pulumi.IntPtrInput
	// <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
	Enabled pulumi.BoolPtrInput
	// GeoDistributions for this site
	GeoDistributions GeoDistributionArrayInput
	// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
	HostNameSslStates HostNameSslStateArrayInput
	// <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
	//  If <code>true</code>, the app is only accessible via API management process.
	HostNamesDisabled pulumi.BoolPtrInput
	// App Service Environment to use for the app.
	HostingEnvironmentProfile HostingEnvironmentProfilePtrInput
	// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
	// http requests
	HttpsOnly pulumi.BoolPtrInput
	// Hyper-V sandbox.
	HyperV pulumi.BoolPtrInput
	// Managed service identity.
	Identity ManagedServiceIdentityPtrInput
	// Obsolete: Hyper-V sandbox.
	IsXenon pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Location.
	Location pulumi.StringInput
	// Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
	Name pulumi.StringInput
	// Site redundancy mode
	RedundancyMode pulumi.StringPtrInput
	// <code>true</code> if reserved; otherwise, <code>false</code>.
	Reserved pulumi.BoolPtrInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
	ScmSiteAlsoStopped pulumi.BoolPtrInput
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrInput
	// Configuration of the app.
	SiteConfig SiteConfigPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (WebAppArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppArgs)(nil)).Elem()
}