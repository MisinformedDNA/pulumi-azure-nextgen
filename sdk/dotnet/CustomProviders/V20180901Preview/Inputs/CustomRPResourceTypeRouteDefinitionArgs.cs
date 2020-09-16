// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CustomProviders.V20180901Preview.Inputs
{

    /// <summary>
    /// The route definition for a resource implemented by the custom resource provider.
    /// </summary>
    public sealed class CustomRPResourceTypeRouteDefinitionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
        /// </summary>
        [Input("endpoint", required: true)]
        public Input<string> Endpoint { get; set; } = null!;

        /// <summary>
        /// The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The routing types that are supported for resource requests.
        /// </summary>
        [Input("routingType")]
        public Input<string>? RoutingType { get; set; }

        public CustomRPResourceTypeRouteDefinitionArgs()
        {
        }
    }
}