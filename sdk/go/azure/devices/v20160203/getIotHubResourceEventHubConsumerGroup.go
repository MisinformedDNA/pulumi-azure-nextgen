// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160203

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIotHubResourceEventHubConsumerGroup(ctx *pulumi.Context, args *LookupIotHubResourceEventHubConsumerGroupArgs, opts ...pulumi.InvokeOption) (*LookupIotHubResourceEventHubConsumerGroupResult, error) {
	var rv LookupIotHubResourceEventHubConsumerGroupResult
	err := ctx.Invoke("azure-nextgen:devices/v20160203:getIotHubResourceEventHubConsumerGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIotHubResourceEventHubConsumerGroupArgs struct {
	// The name of the Event Hub-compatible endpoint in the IoT hub.
	EventHubEndpointName string `pulumi:"eventHubEndpointName"`
	// The name of the consumer group to retrieve.
	Name string `pulumi:"name"`
	// The name of the resource group that contains the IoT hub.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the IoT hub.
	ResourceName string `pulumi:"resourceName"`
}

// The properties of the EventHubConsumerGroupInfo object.
type LookupIotHubResourceEventHubConsumerGroupResult struct {
	// The Event Hub-compatible consumer group name.
	Name *string `pulumi:"name"`
	// The tags.
	Tags map[string]string `pulumi:"tags"`
}