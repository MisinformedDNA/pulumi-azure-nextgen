// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.Latest.Outputs
{

    [OutputType]
    public sealed class ManagerIntrinsicSettingsResponse
    {
        /// <summary>
        /// The type of StorSimple Manager.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ManagerIntrinsicSettingsResponse(string type)
        {
            Type = type;
        }
    }
}