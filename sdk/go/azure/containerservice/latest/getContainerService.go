// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupContainerService(ctx *pulumi.Context, args *LookupContainerServiceArgs, opts ...pulumi.InvokeOption) (*LookupContainerServiceResult, error) {
	var rv LookupContainerServiceResult
	err := ctx.Invoke("azure-nextgen:containerservice/latest:getContainerService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupContainerServiceArgs struct {
	// The name of the container service in the specified subscription and resource group.
	ContainerServiceName string `pulumi:"containerServiceName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Container service.
type LookupContainerServiceResult struct {
	// Properties of the agent pool.
	AgentPoolProfiles []ContainerServiceAgentPoolProfileResponse `pulumi:"agentPoolProfiles"`
	// Properties to configure a custom container service cluster.
	CustomProfile *ContainerServiceCustomProfileResponse `pulumi:"customProfile"`
	// Profile for diagnostics in the container service cluster.
	DiagnosticsProfile *ContainerServiceDiagnosticsProfileResponse `pulumi:"diagnosticsProfile"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile ContainerServiceLinuxProfileResponse `pulumi:"linuxProfile"`
	// Resource location
	Location string `pulumi:"location"`
	// Profile for the container service master.
	MasterProfile ContainerServiceMasterProfileResponse `pulumi:"masterProfile"`
	// Resource name
	Name string `pulumi:"name"`
	// Profile for the container service orchestrator.
	OrchestratorProfile ContainerServiceOrchestratorProfileResponse `pulumi:"orchestratorProfile"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs. Exact one of secret or keyVaultSecretRef need to be specified.
	ServicePrincipalProfile *ContainerServiceServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Profile for Windows VMs in the container service cluster.
	WindowsProfile *ContainerServiceWindowsProfileResponse `pulumi:"windowsProfile"`
}
