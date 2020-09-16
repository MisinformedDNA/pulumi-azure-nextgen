// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDomainService(ctx *pulumi.Context, args *LookupDomainServiceArgs, opts ...pulumi.InvokeOption) (*LookupDomainServiceResult, error) {
	var rv LookupDomainServiceResult
	err := ctx.Invoke("azure-nextgen:aad/v20170601:getDomainService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDomainServiceArgs struct {
	// The name of the domain service.
	DomainServiceName string `pulumi:"domainServiceName"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Domain service.
type LookupDomainServiceResult struct {
	// List of Domain Controller IP Address
	DomainControllerIpAddress []string `pulumi:"domainControllerIpAddress"`
	// The name of the Azure domain that the user would like to deploy Domain Services to.
	DomainName *string `pulumi:"domainName"`
	// DomainSecurity Settings
	DomainSecuritySettings *DomainSecuritySettingsResponse `pulumi:"domainSecuritySettings"`
	// Resource etag
	Etag *string `pulumi:"etag"`
	// Enabled or Disabled flag to turn on Group-based filtered sync
	FilteredSync *string `pulumi:"filteredSync"`
	// List of Domain Health Alerts
	HealthAlerts []HealthAlertResponse `pulumi:"healthAlerts"`
	// Last domain evaluation run DateTime
	HealthLastEvaluated string `pulumi:"healthLastEvaluated"`
	// List of Domain Health Monitors
	HealthMonitors []HealthMonitorResponse `pulumi:"healthMonitors"`
	// Secure LDAP Settings
	LdapsSettings *LdapsSettingsResponse `pulumi:"ldapsSettings"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Notification Settings
	NotificationSettings *NotificationSettingsResponse `pulumi:"notificationSettings"`
	// the current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Status of Domain Service instance
	ServiceStatus string `pulumi:"serviceStatus"`
	// The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
	SubnetId *string `pulumi:"subnetId"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure Active Directory tenant id
	TenantId string `pulumi:"tenantId"`
	// Resource type
	Type string `pulumi:"type"`
	// Virtual network site id
	VnetSiteId string `pulumi:"vnetSiteId"`
}