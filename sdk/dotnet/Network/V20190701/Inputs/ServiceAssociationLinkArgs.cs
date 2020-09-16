// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190701.Inputs
{

    /// <summary>
    /// ServiceAssociationLink resource.
    /// </summary>
    public sealed class ServiceAssociationLinkArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If true, the resource can be deleted.
        /// </summary>
        [Input("allowDelete")]
        public Input<bool>? AllowDelete { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Link to the external resource.
        /// </summary>
        [Input("link")]
        public Input<string>? Link { get; set; }

        /// <summary>
        /// Resource type of the linked resource.
        /// </summary>
        [Input("linkedResourceType")]
        public Input<string>? LinkedResourceType { get; set; }

        [Input("locations")]
        private InputList<string>? _locations;

        /// <summary>
        /// A list of locations.
        /// </summary>
        public InputList<string> Locations
        {
            get => _locations ?? (_locations = new InputList<string>());
            set => _locations = value;
        }

        /// <summary>
        /// Name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Resource type.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public ServiceAssociationLinkArgs()
        {
        }
    }
}