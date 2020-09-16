// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.Latest
{
    public static class GetCustomImage
    {
        public static Task<GetCustomImageResult> InvokeAsync(GetCustomImageArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCustomImageResult>("azure-nextgen:devtestlab/latest:getCustomImage", args ?? new GetCustomImageArgs(), options.WithVersion());
    }


    public sealed class GetCustomImageArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specify the $expand query. Example: 'properties($select=vm)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the custom image.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetCustomImageArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCustomImageResult
    {
        /// <summary>
        /// The author of the custom image.
        /// </summary>
        public readonly string? Author;
        /// <summary>
        /// The creation date of the custom image.
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// Storage information about the plan related to this custom image
        /// </summary>
        public readonly Outputs.CustomImagePropertiesFromPlanResponse? CustomImagePlan;
        /// <summary>
        /// Storage information about the data disks present in the custom image
        /// </summary>
        public readonly ImmutableArray<Outputs.DataDiskStorageTypeInfoResponse> DataDiskStorageInfo;
        /// <summary>
        /// The description of the custom image.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
        /// </summary>
        public readonly bool? IsPlanAuthorized;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The Managed Image Id backing the custom image.
        /// </summary>
        public readonly string? ManagedImageId;
        /// <summary>
        /// The Managed Snapshot Id backing the custom image.
        /// </summary>
        public readonly string? ManagedSnapshotId;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string UniqueIdentifier;
        /// <summary>
        /// The VHD from which the image is to be created.
        /// </summary>
        public readonly Outputs.CustomImagePropertiesCustomResponse? Vhd;
        /// <summary>
        /// The virtual machine from which the image is to be created.
        /// </summary>
        public readonly Outputs.CustomImagePropertiesFromVmResponse? Vm;

        [OutputConstructor]
        private GetCustomImageResult(
            string? author,

            string creationDate,

            Outputs.CustomImagePropertiesFromPlanResponse? customImagePlan,

            ImmutableArray<Outputs.DataDiskStorageTypeInfoResponse> dataDiskStorageInfo,

            string? description,

            bool? isPlanAuthorized,

            string? location,

            string? managedImageId,

            string? managedSnapshotId,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type,

            string uniqueIdentifier,

            Outputs.CustomImagePropertiesCustomResponse? vhd,

            Outputs.CustomImagePropertiesFromVmResponse? vm)
        {
            Author = author;
            CreationDate = creationDate;
            CustomImagePlan = customImagePlan;
            DataDiskStorageInfo = dataDiskStorageInfo;
            Description = description;
            IsPlanAuthorized = isPlanAuthorized;
            Location = location;
            ManagedImageId = managedImageId;
            ManagedSnapshotId = managedSnapshotId;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
            Vhd = vhd;
            Vm = vm;
        }
    }
}