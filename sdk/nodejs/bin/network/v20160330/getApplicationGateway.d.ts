import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplicationGateway(args: GetApplicationGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayResult>;
export interface GetApplicationGatewayArgs {
    /**
     * The name of the application gateway.
     */
    readonly applicationGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * ApplicationGateways resource
 */
export interface GetApplicationGatewayResult {
    /**
     * Gets or sets backend address pool of application gateway resource
     */
    readonly backendAddressPools?: outputs.network.v20160330.ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Gets or sets backend http settings of application gateway resource
     */
    readonly backendHttpSettingsCollection?: outputs.network.v20160330.ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Gets or sets frontend IP addresses of application gateway resource
     */
    readonly frontendIPConfigurations?: outputs.network.v20160330.ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Gets or sets frontend ports of application gateway resource
     */
    readonly frontendPorts?: outputs.network.v20160330.ApplicationGatewayFrontendPortResponse[];
    /**
     * Gets or sets subnets of application gateway resource
     */
    readonly gatewayIPConfigurations?: outputs.network.v20160330.ApplicationGatewayIPConfigurationResponse[];
    /**
     * Gets or sets HTTP listeners of application gateway resource
     */
    readonly httpListeners?: outputs.network.v20160330.ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets operational state of application gateway resource
     */
    readonly operationalState: string;
    /**
     * Gets or sets probes of application gateway resource
     */
    readonly probes?: outputs.network.v20160330.ApplicationGatewayProbeResponse[];
    /**
     * Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets request routing rules of application gateway resource
     */
    readonly requestRoutingRules?: outputs.network.v20160330.ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * Gets or sets resource GUID property of the ApplicationGateway resource
     */
    readonly resourceGuid?: string;
    /**
     * Gets or sets sku of application gateway resource
     */
    readonly sku?: outputs.network.v20160330.ApplicationGatewaySkuResponse;
    /**
     * Gets or sets ssl certificates of application gateway resource
     */
    readonly sslCertificates?: outputs.network.v20160330.ApplicationGatewaySslCertificateResponse[];
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
     * Gets or sets URL path map of application gateway resource
     */
    readonly urlPathMaps?: outputs.network.v20160330.ApplicationGatewayUrlPathMapResponse[];
}