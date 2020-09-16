// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20150801Preview.Outputs
{

    [OutputType]
    public sealed class EdifactAgreementContentResponse
    {
        /// <summary>
        /// The EDIFACT one-way receive agreement.
        /// </summary>
        public readonly Outputs.EdifactOneWayAgreementResponse? ReceiveAgreement;
        /// <summary>
        /// The EDIFACT one-way send agreement.
        /// </summary>
        public readonly Outputs.EdifactOneWayAgreementResponse? SendAgreement;

        [OutputConstructor]
        private EdifactAgreementContentResponse(
            Outputs.EdifactOneWayAgreementResponse? receiveAgreement,

            Outputs.EdifactOneWayAgreementResponse? sendAgreement)
        {
            ReceiveAgreement = receiveAgreement;
            SendAgreement = sendAgreement;
        }
    }
}