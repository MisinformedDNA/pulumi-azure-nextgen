// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.LabServices.Latest
{
    public static class GetGlobalUserOperationBatchStatus
    {
        public static Task<GetGlobalUserOperationBatchStatusResult> InvokeAsync(GetGlobalUserOperationBatchStatusArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetGlobalUserOperationBatchStatusResult>("azure-nextgen:labservices/latest:getGlobalUserOperationBatchStatus", args ?? new GetGlobalUserOperationBatchStatusArgs(), options.WithVersion());
    }


    public sealed class GetGlobalUserOperationBatchStatusArgs : Pulumi.InvokeArgs
    {
        [Input("urls", required: true)]
        private List<string>? _urls;

        /// <summary>
        /// The operation url of long running operation
        /// </summary>
        public List<string> Urls
        {
            get => _urls ?? (_urls = new List<string>());
            set => _urls = value;
        }

        /// <summary>
        /// The name of the user.
        /// </summary>
        [Input("userName", required: true)]
        public string UserName { get; set; } = null!;

        public GetGlobalUserOperationBatchStatusArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetGlobalUserOperationBatchStatusResult
    {
        /// <summary>
        /// Gets a collection of items that contain the operation url and status.
        /// </summary>
        public readonly ImmutableArray<Outputs.OperationBatchStatusResponseItemResponseResult> Items;

        [OutputConstructor]
        private GetGlobalUserOperationBatchStatusResult(ImmutableArray<Outputs.OperationBatchStatusResponseItemResponseResult> items)
        {
            Items = items;
        }
    }
}
