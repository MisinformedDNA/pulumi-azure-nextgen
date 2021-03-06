// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListTopLevelDomainAgreements(ctx *pulumi.Context, args *ListTopLevelDomainAgreementsArgs, opts ...pulumi.InvokeOption) (*ListTopLevelDomainAgreementsResult, error) {
	var rv ListTopLevelDomainAgreementsResult
	err := ctx.Invoke("azure-nextgen:domainregistration/v20150801:listTopLevelDomainAgreements", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListTopLevelDomainAgreementsArgs struct {
	// If true then the list of agreements will include agreements for domain privacy as well.
	IncludePrivacy *bool `pulumi:"includePrivacy"`
	// Name of the top level domain
	Name string `pulumi:"name"`
}

// Collection of Tld Legal Agreements
type ListTopLevelDomainAgreementsResult struct {
	// Link to next page of resources
	NextLink *string `pulumi:"nextLink"`
	// Collection of resources
	Value []TldLegalAgreementResponse `pulumi:"value"`
}
