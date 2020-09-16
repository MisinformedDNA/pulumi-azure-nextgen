// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getSystemTopicEventSubscription(args: GetSystemTopicEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicEventSubscriptionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventgrid/v20200401preview:getSystemTopicEventSubscription", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    readonly eventSubscriptionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the system topic.
     */
    readonly systemTopicName: string;
}

/**
 * Event Subscription
 */
export interface GetSystemTopicEventSubscriptionResult {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterDestination?: outputs.eventgrid.v20200401preview.StorageBlobDeadLetterDestinationResponse;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterWithResourceIdentity?: outputs.eventgrid.v20200401preview.DeadLetterWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deliveryWithResourceIdentity?: outputs.eventgrid.v20200401preview.DeliveryWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly destination?: outputs.eventgrid.v20200401preview.AzureFunctionEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.EventHubEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.HybridConnectionEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.ServiceBusQueueEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.ServiceBusTopicEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.StorageQueueEventSubscriptionDestinationResponse | outputs.eventgrid.v20200401preview.WebHookEventSubscriptionDestinationResponse;
    /**
     * The event delivery schema for the event subscription.
     */
    readonly eventDeliverySchema?: string;
    /**
     * Expiration time of the event subscription.
     */
    readonly expirationTimeUtc?: string;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filter?: outputs.eventgrid.v20200401preview.EventSubscriptionFilterResponse;
    /**
     * List of user defined labels.
     */
    readonly labels?: string[];
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the event subscription.
     */
    readonly provisioningState: string;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    readonly retryPolicy?: outputs.eventgrid.v20200401preview.RetryPolicyResponse;
    /**
     * Name of the topic of the event subscription.
     */
    readonly topic: string;
    /**
     * Type of the resource
     */
    readonly type: string;
}