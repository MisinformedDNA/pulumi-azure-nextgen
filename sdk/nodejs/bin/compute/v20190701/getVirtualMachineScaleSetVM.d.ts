import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualMachineScaleSetVM(args: GetVirtualMachineScaleSetVMArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetVMResult>;
export interface GetVirtualMachineScaleSetVMArgs {
    /**
     * The expand expression to apply on the operation.
     */
    readonly expand?: string;
    /**
     * The instance ID of the virtual machine.
     */
    readonly instanceId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VM scale set.
     */
    readonly vmScaleSetName: string;
}
/**
 * Describes a virtual machine scale set virtual machine.
 */
export interface GetVirtualMachineScaleSetVMResult {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    readonly additionalCapabilities?: outputs.compute.v20190701.AdditionalCapabilitiesResponse;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
     */
    readonly availabilitySet?: outputs.compute.v20190701.SubResourceResponse;
    /**
     * Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    readonly diagnosticsProfile?: outputs.compute.v20190701.DiagnosticsProfileResponse;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    readonly hardwareProfile?: outputs.compute.v20190701.HardwareProfileResponse;
    /**
     * The virtual machine instance ID.
     */
    readonly instanceId: string;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: outputs.compute.v20190701.VirtualMachineScaleSetVMInstanceViewResponse;
    /**
     * Specifies whether the latest model has been applied to the virtual machine.
     */
    readonly latestModelApplied: boolean;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    readonly licenseType?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
     */
    readonly modelDefinitionApplied: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    readonly networkProfile?: outputs.compute.v20190701.NetworkProfileResponse;
    /**
     * Specifies the network profile configuration of the virtual machine.
     */
    readonly networkProfileConfiguration?: outputs.compute.v20190701.VirtualMachineScaleSetVMNetworkProfileConfigurationResponse;
    /**
     * Specifies the operating system settings for the virtual machine.
     */
    readonly osProfile?: outputs.compute.v20190701.OSProfileResponse;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan?: outputs.compute.v20190701.PlanResponse;
    /**
     * Specifies the protection policy of the virtual machine.
     */
    readonly protectionPolicy?: outputs.compute.v20190701.VirtualMachineScaleSetVMProtectionPolicyResponse;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The virtual machine child extension resources.
     */
    readonly resources: outputs.compute.v20190701.VirtualMachineExtensionResponse[];
    /**
     * The virtual machine SKU.
     */
    readonly sku: outputs.compute.v20190701.SkuResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    readonly storageProfile?: outputs.compute.v20190701.StorageProfileResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Azure VM unique ID.
     */
    readonly vmId: string;
    /**
     * The virtual machine zones.
     */
    readonly zones: string[];
}