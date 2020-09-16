// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20150801Preview
{
    public partial class IntegrationAccount : Pulumi.CustomResource
    {
        /// <summary>
        /// The resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The sku.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.IntegrationAccountSkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// The resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string?> Type { get; private set; } = null!;


        /// <summary>
        /// Create a IntegrationAccount resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IntegrationAccount(string name, IntegrationAccountArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20150801preview:IntegrationAccount", name, args ?? new IntegrationAccountArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IntegrationAccount(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:logic/v20150801preview:IntegrationAccount", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:logic/latest:IntegrationAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20160601:IntegrationAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20180701preview:IntegrationAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:logic/v20190501:IntegrationAccount"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IntegrationAccount resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IntegrationAccount Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new IntegrationAccount(name, id, options);
        }
    }

    public sealed class IntegrationAccountArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource id.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public Input<string> IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The resource name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The sku.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.IntegrationAccountSkuArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The resource type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public IntegrationAccountArgs()
        {
        }
    }
}