// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupComponent(ctx *pulumi.Context, args *LookupComponentArgs, opts ...pulumi.InvokeOption) (*LookupComponentResult, error) {
	var rv LookupComponentResult
	err := ctx.Invoke("azure-nextgen:insights/latest:getComponent", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupComponentArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
}

// An Application Insights component definition.
type LookupComponentResult struct {
	// Application Insights Unique ID for your Application.
	AppId string `pulumi:"appId"`
	// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
	ApplicationId string `pulumi:"applicationId"`
	// Type of application being monitored.
	ApplicationType string `pulumi:"applicationType"`
	// Application Insights component connection string.
	ConnectionString string `pulumi:"connectionString"`
	// Creation Date for the Application Insights component, in ISO 8601 format.
	CreationDate string `pulumi:"creationDate"`
	// Disable IP masking.
	DisableIpMasking *bool `pulumi:"disableIpMasking"`
	// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
	FlowType *string `pulumi:"flowType"`
	// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
	HockeyAppId *string `pulumi:"hockeyAppId"`
	// Token used to authenticate communications with between Application Insights and HockeyApp.
	HockeyAppToken string `pulumi:"hockeyAppToken"`
	// Purge data immediately after 30 days.
	ImmediatePurgeDataOn30Days *bool `pulumi:"immediatePurgeDataOn30Days"`
	// Indicates the flow of the ingestion.
	IngestionMode *string `pulumi:"ingestionMode"`
	// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
	InstrumentationKey string `pulumi:"instrumentationKey"`
	// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
	Kind string `pulumi:"kind"`
	// Resource location
	Location string `pulumi:"location"`
	// Azure resource name
	Name string `pulumi:"name"`
	// List of linked private link scope resources.
	PrivateLinkScopedResources []PrivateLinkScopedResourceResponse `pulumi:"privateLinkScopedResources"`
	// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
	ProvisioningState string `pulumi:"provisioningState"`
	// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
	RequestSource *string `pulumi:"requestSource"`
	// Retention period in days.
	RetentionInDays *int `pulumi:"retentionInDays"`
	// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
	SamplingPercentage *float64 `pulumi:"samplingPercentage"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure Tenant Id.
	TenantId string `pulumi:"tenantId"`
	// Azure resource type
	Type string `pulumi:"type"`
}