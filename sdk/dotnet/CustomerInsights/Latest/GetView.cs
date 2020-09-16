// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CustomerInsights.Latest
{
    public static class GetView
    {
        public static Task<GetViewResult> InvokeAsync(GetViewArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetViewResult>("azure-nextgen:customerinsights/latest:getView", args ?? new GetViewArgs(), options.WithVersion());
    }


    public sealed class GetViewArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the hub.
        /// </summary>
        [Input("hubName", required: true)]
        public string HubName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The user ID. Use * to retrieve hub level view.
        /// </summary>
        [Input("userId", required: true)]
        public string UserId { get; set; } = null!;

        /// <summary>
        /// The name of the view.
        /// </summary>
        [Input("viewName", required: true)]
        public string ViewName { get; set; } = null!;

        public GetViewArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetViewResult
    {
        /// <summary>
        /// Date time when view was last modified.
        /// </summary>
        public readonly string Changed;
        /// <summary>
        /// Date time when view was created.
        /// </summary>
        public readonly string Created;
        /// <summary>
        /// View definition.
        /// </summary>
        public readonly string Definition;
        /// <summary>
        /// Localized display name for the view.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? DisplayName;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// the hub name.
        /// </summary>
        public readonly string TenantId;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// the user ID.
        /// </summary>
        public readonly string? UserId;
        /// <summary>
        /// Name of the view.
        /// </summary>
        public readonly string ViewName;

        [OutputConstructor]
        private GetViewResult(
            string changed,

            string created,

            string definition,

            ImmutableDictionary<string, string>? displayName,

            string name,

            string tenantId,

            string type,

            string? userId,

            string viewName)
        {
            Changed = changed;
            Created = created;
            Definition = definition;
            DisplayName = displayName;
            Name = name;
            TenantId = tenantId;
            Type = type;
            UserId = userId;
            ViewName = viewName;
        }
    }
}