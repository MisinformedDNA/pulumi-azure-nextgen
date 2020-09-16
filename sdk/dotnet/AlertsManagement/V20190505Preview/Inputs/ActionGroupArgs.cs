// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AlertsManagement.V20190505Preview.Inputs
{

    /// <summary>
    /// Action rule with action group configuration
    /// </summary>
    public sealed class ActionGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Action group to trigger if action rule matches
        /// </summary>
        [Input("actionGroupId", required: true)]
        public Input<string> ActionGroupId { get; set; } = null!;

        /// <summary>
        /// conditions on which alerts will be filtered
        /// </summary>
        [Input("conditions")]
        public Input<Inputs.ConditionsArgs>? Conditions { get; set; }

        /// <summary>
        /// Description of action rule
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// scope on which action rule will apply
        /// </summary>
        [Input("scope")]
        public Input<Inputs.ScopeArgs>? Scope { get; set; }

        /// <summary>
        /// Indicates if the given action rule is enabled or disabled
        /// </summary>
        [Input("status")]
        public Input<string>? Status { get; set; }

        /// <summary>
        /// Indicates type of action rule
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ActionGroupArgs()
        {
        }
    }
}