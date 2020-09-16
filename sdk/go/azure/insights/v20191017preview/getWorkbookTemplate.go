// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191017preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWorkbookTemplate(ctx *pulumi.Context, args *LookupWorkbookTemplateArgs, opts ...pulumi.InvokeOption) (*LookupWorkbookTemplateResult, error) {
	var rv LookupWorkbookTemplateResult
	err := ctx.Invoke("azure-nextgen:insights/v20191017preview:getWorkbookTemplate", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWorkbookTemplateArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
}

// An Application Insights workbook template definition.
type LookupWorkbookTemplateResult struct {
	// Information about the author of the workbook template.
	Author *string `pulumi:"author"`
	// Workbook galleries supported by the template.
	Galleries []WorkbookTemplateGalleryResponse `pulumi:"galleries"`
	// Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
	Localized map[string][]WorkbookTemplateLocalizedGalleryResponse `pulumi:"localized"`
	// Resource location
	Location string `pulumi:"location"`
	// Azure resource name.
	Name string `pulumi:"name"`
	// Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
	Priority *int `pulumi:"priority"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Valid JSON object containing workbook template payload.
	TemplateData map[string]interface{} `pulumi:"templateData"`
	// Azure resource type
	Type string `pulumi:"type"`
}