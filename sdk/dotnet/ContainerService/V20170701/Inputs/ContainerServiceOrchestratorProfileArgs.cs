// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20170701.Inputs
{

    /// <summary>
    /// Profile for the container service orchestrator.
    /// </summary>
    public sealed class ContainerServiceOrchestratorProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The orchestrator to use to manage container service cluster resources. Valid values are Kubernetes, Swarm, DCOS, DockerCE and Custom.
        /// </summary>
        [Input("orchestratorType", required: true)]
        public Input<string> OrchestratorType { get; set; } = null!;

        /// <summary>
        /// The version of the orchestrator to use. You can specify the major.minor.patch part of the actual version.For example, you can specify version as "1.6.11".
        /// </summary>
        [Input("orchestratorVersion")]
        public Input<string>? OrchestratorVersion { get; set; }

        public ContainerServiceOrchestratorProfileArgs()
        {
        }
    }
}
