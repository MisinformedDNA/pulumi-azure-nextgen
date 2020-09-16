// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HanaOnAzure.V20200207Preview
{
    public static class GetProviderInstance
    {
        public static Task<GetProviderInstanceResult> InvokeAsync(GetProviderInstanceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetProviderInstanceResult>("azure-nextgen:hanaonazure/v20200207preview:getProviderInstance", args ?? new GetProviderInstanceArgs(), options.WithVersion());
    }


    public sealed class GetProviderInstanceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the provider instance.
        /// </summary>
        [Input("providerInstanceName", required: true)]
        public string ProviderInstanceName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the SAP monitor resource.
        /// </summary>
        [Input("sapMonitorName", required: true)]
        public string SapMonitorName { get; set; } = null!;

        public GetProviderInstanceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetProviderInstanceResult
    {
        /// <summary>
        /// A JSON string containing metadata of the provider instance.
        /// </summary>
        public readonly string? Metadata;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A JSON string containing the properties of the provider instance.
        /// </summary>
        public readonly string Properties;
        /// <summary>
        /// State of provisioning of the provider instance
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetProviderInstanceResult(
            string? metadata,

            string name,

            string properties,

            string provisioningState,

            string type)
        {
            Metadata = metadata;
            Name = name;
            Properties = properties;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}