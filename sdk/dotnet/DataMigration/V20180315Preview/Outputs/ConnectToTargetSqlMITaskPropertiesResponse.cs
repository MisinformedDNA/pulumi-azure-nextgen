// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180315Preview.Outputs
{

    [OutputType]
    public sealed class ConnectToTargetSqlMITaskPropertiesResponse
    {
        /// <summary>
        /// Array of errors. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.ODataErrorResponse> Errors;
        /// <summary>
        /// Task input
        /// </summary>
        public readonly Outputs.ConnectToTargetSqlMITaskInputResponse? Input;
        /// <summary>
        /// Task output. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.ConnectToTargetSqlMITaskOutputResponse> Output;
        /// <summary>
        /// The state of the task. This is ignored if submitted.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Task type.
        /// </summary>
        public readonly string TaskType;

        [OutputConstructor]
        private ConnectToTargetSqlMITaskPropertiesResponse(
            ImmutableArray<Outputs.ODataErrorResponse> errors,

            Outputs.ConnectToTargetSqlMITaskInputResponse? input,

            ImmutableArray<Outputs.ConnectToTargetSqlMITaskOutputResponse> output,

            string state,

            string taskType)
        {
            Errors = errors;
            Input = input;
            Output = output;
            State = state;
            TaskType = taskType;
        }
    }
}