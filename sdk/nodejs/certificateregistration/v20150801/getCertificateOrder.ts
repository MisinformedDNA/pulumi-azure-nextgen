// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getCertificateOrder(args: GetCertificateOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateOrderResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:certificateregistration/v20150801:getCertificateOrder", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateOrderArgs {
    /**
     * Certificate name
     */
    readonly name: string;
    /**
     * Azure resource group name
     */
    readonly resourceGroupName: string;
}

/**
 * Certificate purchase order
 */
export interface GetCertificateOrderResult {
    /**
     * Auto renew
     */
    readonly autoRenew?: boolean;
    /**
     * State of the Key Vault secret
     */
    readonly certificates?: {[key: string]: outputs.certificateregistration.v20150801.CertificateOrderCertificateResponse};
    /**
     * Last CSR that was created for this order
     */
    readonly csr?: string;
    /**
     * Certificate distinguished name
     */
    readonly distinguishedName?: string;
    /**
     * Domain Verification Token
     */
    readonly domainVerificationToken?: string;
    /**
     * Certificate expiration time
     */
    readonly expirationTime?: string;
    /**
     * Intermediate certificate
     */
    readonly intermediate?: outputs.certificateregistration.v20150801.CertificateDetailsResponse;
    /**
     * Certificate Key Size
     */
    readonly keySize?: number;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Certificate last issuance time
     */
    readonly lastCertificateIssuanceTime?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Certificate product type
     */
    readonly productType?: string;
    /**
     * Status of certificate order
     */
    readonly provisioningState?: string;
    /**
     * Root certificate
     */
    readonly root?: outputs.certificateregistration.v20150801.CertificateDetailsResponse;
    /**
     * Current serial number of the certificate
     */
    readonly serialNumber?: string;
    /**
     * Signed certificate
     */
    readonly signedCertificate?: outputs.certificateregistration.v20150801.CertificateDetailsResponse;
    /**
     * Current order status
     */
    readonly status?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type?: string;
    /**
     * Duration in years (must be between 1 and 3)
     */
    readonly validityInYears?: number;
}
