import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getP2sVpnServerConfiguration(args: GetP2sVpnServerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnServerConfigurationResult>;
export interface GetP2sVpnServerConfigurationArgs {
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigurationName: string;
    /**
     * The resource group name of the P2SVpnServerConfiguration.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VirtualWan.
     */
    readonly virtualWanName: string;
}
/**
 * P2SVpnServerConfiguration Resource.
 */
export interface GetP2sVpnServerConfigurationResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Parent VirtualWan resource name.
     */
    readonly name?: string;
    readonly p2SVpnGateways: outputs.network.v20180801.SubResourceResponse[];
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusClientRootCertificates?: outputs.network.v20180801.P2SVpnServerConfigRadiusClientRootCertificateResponse[];
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusServerRootCertificates?: outputs.network.v20180801.P2SVpnServerConfigRadiusServerRootCertificateResponse[];
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRevokedCertificates?: outputs.network.v20180801.P2SVpnServerConfigVpnClientRevokedCertificateResponse[];
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRootCertificates?: outputs.network.v20180801.P2SVpnServerConfigVpnClientRootCertificateResponse[];
    /**
     * The provisioning state of the P2SVpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress?: string;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret?: string;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies?: outputs.network.v20180801.IpsecPolicyResponse[];
    /**
     * vpnProtocols for the P2SVpnServerConfiguration.
     */
    readonly vpnProtocols?: string[];
}