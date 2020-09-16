import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNetworkSecurityGroup(args: GetNetworkSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityGroupResult>;
export interface GetNetworkSecurityGroupArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the network security group.
     */
    readonly networkSecurityGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * NetworkSecurityGroup resource.
 */
export interface GetNetworkSecurityGroupResult {
    /**
     * The default security rules of network security group.
     */
    readonly defaultSecurityRules?: outputs.network.v20180201.SecurityRuleResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A collection of references to network interfaces.
     */
    readonly networkInterfaces: outputs.network.v20180201.NetworkInterfaceResponse[];
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The resource GUID property of the network security group resource.
     */
    readonly resourceGuid?: string;
    /**
     * A collection of security rules of the network security group.
     */
    readonly securityRules?: outputs.network.v20180201.SecurityRuleResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: outputs.network.v20180201.SubnetResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}