// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationsManagement.V20151101Preview.Outputs
{

    [OutputType]
    public sealed class ManagementConfigurationPropertiesResponse
    {
        /// <summary>
        /// The applicationId of the appliance for this Management.
        /// </summary>
        public readonly string? ApplicationId;
        /// <summary>
        /// Parameters to run the ARM template
        /// </summary>
        public readonly ImmutableArray<Outputs.ArmTemplateParameterResponse> Parameters;
        /// <summary>
        /// The type of the parent resource.
        /// </summary>
        public readonly string ParentResourceType;
        /// <summary>
        /// The provisioning state for the ManagementConfiguration.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The Json object containing the ARM template to deploy
        /// </summary>
        public readonly ImmutableDictionary<string, object> Template;

        [OutputConstructor]
        private ManagementConfigurationPropertiesResponse(
            string? applicationId,

            ImmutableArray<Outputs.ArmTemplateParameterResponse> parameters,

            string parentResourceType,

            string provisioningState,

            ImmutableDictionary<string, object> template)
        {
            ApplicationId = applicationId;
            Parameters = parameters;
            ParentResourceType = parentResourceType;
            ProvisioningState = provisioningState;
            Template = template;
        }
    }
}