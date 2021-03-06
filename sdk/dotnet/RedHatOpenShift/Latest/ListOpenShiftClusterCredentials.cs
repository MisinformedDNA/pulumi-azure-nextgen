// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RedHatOpenShift.Latest
{
    public static class ListOpenShiftClusterCredentials
    {
        public static Task<ListOpenShiftClusterCredentialsResult> InvokeAsync(ListOpenShiftClusterCredentialsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListOpenShiftClusterCredentialsResult>("azure-nextgen:redhatopenshift/latest:listOpenShiftClusterCredentials", args ?? new ListOpenShiftClusterCredentialsArgs(), options.WithVersion());
    }


    public sealed class ListOpenShiftClusterCredentialsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the OpenShift cluster resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public ListOpenShiftClusterCredentialsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListOpenShiftClusterCredentialsResult
    {
        /// <summary>
        /// The password for the kubeadmin user
        /// </summary>
        public readonly string? KubeadminPassword;
        /// <summary>
        /// The username for the kubeadmin user
        /// </summary>
        public readonly string? KubeadminUsername;

        [OutputConstructor]
        private ListOpenShiftClusterCredentialsResult(
            string? kubeadminPassword,

            string? kubeadminUsername)
        {
            KubeadminPassword = kubeadminPassword;
            KubeadminUsername = kubeadminUsername;
        }
    }
}
