// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.V20180101.Inputs
{

    /// <summary>
    /// DataBox Disk Job Details.
    /// </summary>
    public sealed class DataBoxDiskJobDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Contact details for notification and shipping.
        /// </summary>
        [Input("contactDetails", required: true)]
        public Input<Inputs.ContactDetailsArgs> ContactDetails { get; set; } = null!;

        [Input("destinationAccountDetails", required: true)]
        private InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>>? _destinationAccountDetails;

        /// <summary>
        /// Destination account details.
        /// </summary>
        public InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>> DestinationAccountDetails
        {
            get => _destinationAccountDetails ?? (_destinationAccountDetails = new InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>>());
            set => _destinationAccountDetails = value;
        }

        /// <summary>
        /// The expected size of the data, which needs to be transferred in this job, in terabytes.
        /// </summary>
        [Input("expectedDataSizeInTeraBytes")]
        public Input<int>? ExpectedDataSizeInTeraBytes { get; set; }

        /// <summary>
        /// Indicates the type of job details.
        /// </summary>
        [Input("jobDetailsType", required: true)]
        public Input<string> JobDetailsType { get; set; } = null!;

        /// <summary>
        /// User entered passkey for DataBox Disk job.
        /// </summary>
        [Input("passkey")]
        public Input<string>? Passkey { get; set; }

        /// <summary>
        /// Preferences for the order.
        /// </summary>
        [Input("preferences")]
        public Input<Inputs.PreferencesArgs>? Preferences { get; set; }

        [Input("preferredDisks")]
        private InputMap<int>? _preferredDisks;

        /// <summary>
        /// User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.
        /// </summary>
        public InputMap<int> PreferredDisks
        {
            get => _preferredDisks ?? (_preferredDisks = new InputMap<int>());
            set => _preferredDisks = value;
        }

        /// <summary>
        /// Shipping address of the customer.
        /// </summary>
        [Input("shippingAddress", required: true)]
        public Input<Inputs.ShippingAddressArgs> ShippingAddress { get; set; } = null!;

        public DataBoxDiskJobDetailsArgs()
        {
        }
    }
}