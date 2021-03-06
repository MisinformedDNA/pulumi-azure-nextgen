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
    /// Represents a case relation
    /// </summary>
    public partial class CaseRelation : Pulumi.CustomResource
    {
        /// <summary>
        /// The case related bookmark id
        /// </summary>
        [Output("bookmarkId")]
        public Output<string> BookmarkId { get; private set; } = null!;

        /// <summary>
        /// The case related bookmark name
        /// </summary>
        [Output("bookmarkName")]
        public Output<string?> BookmarkName { get; private set; } = null!;

        /// <summary>
        /// The case identifier
        /// </summary>
        [Output("caseIdentifier")]
        public Output<string> CaseIdentifier { get; private set; } = null!;

        /// <summary>
        /// ETag for relation
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// The type of relation node
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Azure resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Name of relation
        /// </summary>
        [Output("relationName")]
        public Output<string> RelationName { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a CaseRelation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public CaseRelation(string name, CaseRelationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:CaseRelation", name, args ?? new CaseRelationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private CaseRelation(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:securityinsights/v20190101preview:CaseRelation", name, null, MakeResourceOptions(options, id))
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
        /// Get an existing CaseRelation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static CaseRelation Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new CaseRelation(name, id, options);
        }
    }

    public sealed class CaseRelationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Case ID
        /// </summary>
        [Input("caseId", required: true)]
        public Input<string> CaseId { get; set; } = null!;

        /// <summary>
        /// ETag for relation
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
        /// </summary>
        [Input("operationalInsightsResourceProvider", required: true)]
        public Input<string> OperationalInsightsResourceProvider { get; set; } = null!;

        /// <summary>
        /// Name of relation
        /// </summary>
        [Input("relationName", required: true)]
        public Input<string> RelationName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Relation source node
        /// </summary>
        [Input("sourceRelationNode")]
        public Input<Inputs.RelationNodeArgs>? SourceRelationNode { get; set; }

        /// <summary>
        /// Relation target node
        /// </summary>
        [Input("targetRelationNode")]
        public Input<Inputs.RelationNodeArgs>? TargetRelationNode { get; set; }

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public CaseRelationArgs()
        {
        }
    }
}
