// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20200601Preview.Inputs
{

    /// <summary>
    /// Cosmos DB SQL userDefinedFunction resource object
    /// </summary>
    public sealed class SqlUserDefinedFunctionResourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Body of the User Defined Function
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        /// <summary>
        /// Name of the Cosmos DB SQL userDefinedFunction
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        public SqlUserDefinedFunctionResourceArgs()
        {
        }
    }
}