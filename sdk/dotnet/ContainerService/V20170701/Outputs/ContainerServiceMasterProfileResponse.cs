// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20170701.Outputs
{

    [OutputType]
    public sealed class ContainerServiceMasterProfileResponse
    {
        /// <summary>
        /// Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1.
        /// </summary>
        public readonly int? Count;
        /// <summary>
        /// DNS prefix to be used to create the FQDN for the master pool.
        /// </summary>
        public readonly string DnsPrefix;
        /// <summary>
        /// FirstConsecutiveStaticIP used to specify the first static ip of masters.
        /// </summary>
        public readonly string? FirstConsecutiveStaticIP;
        /// <summary>
        /// FQDN for the master pool.
        /// </summary>
        public readonly string Fqdn;
        /// <summary>
        /// OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        /// </summary>
        public readonly int? OsDiskSizeGB;
        /// <summary>
        /// Storage profile specifies what kind of storage used. Choose from StorageAccount and ManagedDisks. Leave it empty, we will choose for you based on the orchestrator choice.
        /// </summary>
        public readonly string? StorageProfile;
        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        public readonly string VmSize;
        /// <summary>
        /// VNet SubnetID specifies the VNet's subnet identifier.
        /// </summary>
        public readonly string? VnetSubnetID;

        [OutputConstructor]
        private ContainerServiceMasterProfileResponse(
            int? count,

            string dnsPrefix,

            string? firstConsecutiveStaticIP,

            string fqdn,

            int? osDiskSizeGB,

            string? storageProfile,

            string vmSize,

            string? vnetSubnetID)
        {
            Count = count;
            DnsPrefix = dnsPrefix;
            FirstConsecutiveStaticIP = firstConsecutiveStaticIP;
            Fqdn = fqdn;
            OsDiskSizeGB = osDiskSizeGB;
            StorageProfile = storageProfile;
            VmSize = vmSize;
            VnetSubnetID = vnetSubnetID;
        }
    }
}
