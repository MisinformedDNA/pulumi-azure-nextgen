// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview
{
    public static class GetIntegrationRuntime
    {
        public static Task<GetIntegrationRuntimeResult> InvokeAsync(GetIntegrationRuntimeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIntegrationRuntimeResult>("azure-nextgen:synapse/v20190601preview:getIntegrationRuntime", args ?? new GetIntegrationRuntimeArgs(), options.WithVersion());
    }


    public sealed class GetIntegrationRuntimeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Integration runtime name
        /// </summary>
        [Input("integrationRuntimeName", required: true)]
        public string IntegrationRuntimeName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetIntegrationRuntimeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIntegrationRuntimeResult
    {
        /// <summary>
        /// Resource Etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Integration runtime properties.
        /// </summary>
        public readonly Union<Outputs.ManagedIntegrationRuntimeResponse, Outputs.SelfHostedIntegrationRuntimeResponse> Properties;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIntegrationRuntimeResult(
            string etag,

            string name,

            Union<Outputs.ManagedIntegrationRuntimeResponse, Outputs.SelfHostedIntegrationRuntimeResponse> properties,

            string type)
        {
            Etag = etag;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}