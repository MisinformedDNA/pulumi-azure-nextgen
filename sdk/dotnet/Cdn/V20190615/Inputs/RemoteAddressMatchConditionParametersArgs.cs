// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20190615.Inputs
{

    /// <summary>
    /// Defines the parameters for RemoteAddress match conditions
    /// </summary>
    public sealed class RemoteAddressMatchConditionParametersArgs : Pulumi.ResourceArgs
    {
        [Input("matchValues", required: true)]
        private InputList<string>? _matchValues;

        /// <summary>
        /// Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
        /// </summary>
        public InputList<string> MatchValues
        {
            get => _matchValues ?? (_matchValues = new InputList<string>());
            set => _matchValues = value;
        }

        /// <summary>
        /// Describes if this is negate condition or not
        /// </summary>
        [Input("negateCondition")]
        public Input<bool>? NegateCondition { get; set; }

        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// Describes operator to be matched
        /// </summary>
        [Input("operator", required: true)]
        public Input<string> Operator { get; set; } = null!;

        [Input("transforms")]
        private InputList<string>? _transforms;

        /// <summary>
        /// List of transforms
        /// </summary>
        public InputList<string> Transforms
        {
            get => _transforms ?? (_transforms = new InputList<string>());
            set => _transforms = value;
        }

        public RemoteAddressMatchConditionParametersArgs()
        {
        }
    }
}