// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191231

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupOriginGroup(ctx *pulumi.Context, args *LookupOriginGroupArgs, opts ...pulumi.InvokeOption) (*LookupOriginGroupResult, error) {
	var rv LookupOriginGroupResult
	err := ctx.Invoke("azure-nextgen:cdn/v20191231:getOriginGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupOriginGroupArgs struct {
	// Name of the endpoint under the profile which is unique globally.
	EndpointName string `pulumi:"endpointName"`
	// Name of the origin group which is unique within the endpoint.
	OriginGroupName string `pulumi:"originGroupName"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
type LookupOriginGroupResult struct {
	// Health probe settings to the origin that is used to determine the health of the origin.
	HealthProbeSettings *HealthProbeParametersResponse `pulumi:"healthProbeSettings"`
	// Resource name.
	Name string `pulumi:"name"`
	// The source of the content being delivered via CDN within given origin group.
	Origins []ResourceReferenceResponse `pulumi:"origins"`
	// Provisioning status of the origin group.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource status of the origin group.
	ResourceState string `pulumi:"resourceState"`
	// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
	ResponseBasedOriginErrorDetectionSettings *ResponseBasedOriginErrorDetectionParametersResponse `pulumi:"responseBasedOriginErrorDetectionSettings"`
	// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
	TrafficRestorationTimeToHealedOrNewEndpointsInMinutes *int `pulumi:"trafficRestorationTimeToHealedOrNewEndpointsInMinutes"`
	// Resource type.
	Type string `pulumi:"type"`
}