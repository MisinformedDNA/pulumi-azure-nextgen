// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20161001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAccessControlRecord(ctx *pulumi.Context, args *LookupAccessControlRecordArgs, opts ...pulumi.InvokeOption) (*LookupAccessControlRecordResult, error) {
	var rv LookupAccessControlRecordResult
	err := ctx.Invoke("azure-nextgen:storsimple/v20161001:getAccessControlRecord", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAccessControlRecordArgs struct {
	// Name of access control record to be fetched.
	AccessControlRecordName string `pulumi:"accessControlRecordName"`
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The access control record
type LookupAccessControlRecordResult struct {
	// The Iscsi initiator name (IQN)
	InitiatorName string `pulumi:"initiatorName"`
	// The name.
	Name string `pulumi:"name"`
	// The type.
	Type string `pulumi:"type"`
}