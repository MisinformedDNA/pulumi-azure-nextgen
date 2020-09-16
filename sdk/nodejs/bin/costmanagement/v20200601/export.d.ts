import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An export resource.
 */
export declare class Export extends pulumi.CustomResource {
    /**
     * Get an existing Export resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Export;
    /**
     * Returns true if the given object is an instance of Export.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Export;
    /**
     * Has the definition for the export.
     */
    readonly definition: pulumi.Output<outputs.costmanagement.v20200601.ExportDefinitionResponse>;
    /**
     * Has delivery information for the export.
     */
    readonly deliveryInfo: pulumi.Output<outputs.costmanagement.v20200601.ExportDeliveryInfoResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * The format of the export being delivered. Currently only 'Csv' is supported.
     */
    readonly format: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * If the export has an active schedule, provides an estimate of the next execution time.
     */
    readonly nextRunTimeEstimate: pulumi.Output<string>;
    /**
     * If requested, has the most recent execution history for the export.
     */
    readonly runHistory: pulumi.Output<outputs.costmanagement.v20200601.ExportExecutionListResultResponse | undefined>;
    /**
     * Has schedule information for the export.
     */
    readonly schedule: pulumi.Output<outputs.costmanagement.v20200601.ExportScheduleResponse | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Export resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Export resource.
 */
export interface ExportArgs {
    /**
     * Has the definition for the export.
     */
    readonly definition: pulumi.Input<inputs.costmanagement.v20200601.ExportDefinition>;
    /**
     * Has delivery information for the export.
     */
    readonly deliveryInfo: pulumi.Input<inputs.costmanagement.v20200601.ExportDeliveryInfo>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Export Name.
     */
    readonly exportName: pulumi.Input<string>;
    /**
     * The format of the export being delivered. Currently only 'Csv' is supported.
     */
    readonly format?: pulumi.Input<string>;
    /**
     * Has schedule information for the export.
     */
    readonly schedule?: pulumi.Input<inputs.costmanagement.v20200601.ExportSchedule>;
    /**
     * The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
     */
    readonly scope: pulumi.Input<string>;
}