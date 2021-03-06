// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview
{
    /// <summary>
    /// Represents a case in Azure Security Insights.
    /// </summary>
    public partial class Case : Pulumi.CustomResource
    {
        /// <summary>
        /// a sequential number
        /// </summary>
        [Output("caseNumber")]
        public Output<int> CaseNumber { get; private set; } = null!;

        /// <summary>
        /// The reason the case was closed
        /// </summary>
        [Output("closeReason")]
        public Output<string?> CloseReason { get; private set; } = null!;

        /// <summary>
        /// the case close reason details
        /// </summary>
        [Output("closedReasonText")]
        public Output<string?> ClosedReasonText { get; private set; } = null!;

        /// <summary>
        /// The time the case was created
        /// </summary>
        [Output("createdTimeUtc")]
        public Output<string> CreatedTimeUtc { get; private set; } = null!;

        /// <summary>
        /// The description of the case
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The end time of the case
        /// </summary>
        [Output("endTimeUtc")]
        public Output<string?> EndTimeUtc { get; private set; } = null!;

        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// List of labels relevant to this case
        /// </summary>
        [Output("labels")]
        public Output<ImmutableArray<string>> Labels { get; private set; } = null!;

        /// <summary>
        /// the last comment in the case
        /// </summary>
        [Output("lastComment")]
        public Output<string> LastComment { get; private set; } = null!;

        /// <summary>
        /// The last time the case was updated
        /// </summary>
        [Output("lastUpdatedTimeUtc")]
        public Output<string> LastUpdatedTimeUtc { get; private set; } = null!;

        /// <summary>
        /// Azure resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Describes a user that the case is assigned to
        /// </summary>
        [Output("owner")]
        public Output<Outputs.UserInfoResponse?> Owner { get; private set; } = null!;

        /// <summary>
        /// List of related alert identifiers
        /// </summary>
        [Output("relatedAlertIds")]
        public Output<ImmutableArray<string>> RelatedAlertIds { get; private set; } = null!;

        /// <summary>
        /// The severity of the case
        /// </summary>
        [Output("severity")]
        public Output<string> Severity { get; private set; } = null!;

        /// <summary>
        /// The start time of the case
        /// </summary>
        [Output("startTimeUtc")]
        public Output<string> StartTimeUtc { get; private set; } = null!;

        /// <summary>
        /// The status of the case
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// The tactics associated with case
        /// </summary>
        [Output("tactics")]
        public Output<ImmutableArray<string>> Tactics { get; private set; } = null!;

        /// <summary>
        /// The title of the case
        /// </summary>
        [Output("title")]
        public Output<string> Title { get; private set; } = null!;

        /// <summary>
        /// the number of total comments in the case
        /// </summary>
        [Output("totalComments")]
        public Output<int> TotalComments { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Case resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Case(string name, CaseArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:Case", name, args ?? new CaseArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Case(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:Case", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Case resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Case Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Case(name, id, options);
        }
    }

    public sealed class CaseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Case ID
        /// </summary>
        [Input("caseId", required: true)]
        public Input<string> CaseId { get; set; } = null!;

        /// <summary>
        /// The reason the case was closed
        /// </summary>
        [Input("closeReason")]
        public Input<string>? CloseReason { get; set; }

        /// <summary>
        /// the case close reason details
        /// </summary>
        [Input("closedReasonText")]
        public Input<string>? ClosedReasonText { get; set; }

        /// <summary>
        /// The description of the case
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The end time of the case
        /// </summary>
        [Input("endTimeUtc")]
        public Input<string>? EndTimeUtc { get; set; }

        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        [Input("labels")]
        private InputList<string>? _labels;

        /// <summary>
        /// List of labels relevant to this case
        /// </summary>
        public InputList<string> Labels
        {
            get => _labels ?? (_labels = new InputList<string>());
            set => _labels = value;
        }

        /// <summary>
        /// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
        /// </summary>
        [Input("operationalInsightsResourceProvider", required: true)]
        public Input<string> OperationalInsightsResourceProvider { get; set; } = null!;

        /// <summary>
        /// Describes a user that the case is assigned to
        /// </summary>
        [Input("owner")]
        public Input<Inputs.UserInfoArgs>? Owner { get; set; }

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The severity of the case
        /// </summary>
        [Input("severity", required: true)]
        public Input<string> Severity { get; set; } = null!;

        /// <summary>
        /// The start time of the case
        /// </summary>
        [Input("startTimeUtc", required: true)]
        public Input<string> StartTimeUtc { get; set; } = null!;

        /// <summary>
        /// The status of the case
        /// </summary>
        [Input("status", required: true)]
        public Input<string> Status { get; set; } = null!;

        /// <summary>
        /// The title of the case
        /// </summary>
        [Input("title", required: true)]
        public Input<string> Title { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public CaseArgs()
        {
        }
    }
}
