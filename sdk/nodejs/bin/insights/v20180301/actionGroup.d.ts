import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An action group resource.
 */
export declare class ActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing ActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActionGroup;
    /**
     * Returns true if the given object is an instance of ActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActionGroup;
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    readonly automationRunbookReceivers: pulumi.Output<outputs.insights.v20180301.AutomationRunbookReceiverResponse[] | undefined>;
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    readonly azureAppPushReceivers: pulumi.Output<outputs.insights.v20180301.AzureAppPushReceiverResponse[] | undefined>;
    /**
     * The list of azure function receivers that are part of this action group.
     */
    readonly azureFunctionReceivers: pulumi.Output<outputs.insights.v20180301.AzureFunctionReceiverResponse[] | undefined>;
    /**
     * The list of email receivers that are part of this action group.
     */
    readonly emailReceivers: pulumi.Output<outputs.insights.v20180301.EmailReceiverResponse[] | undefined>;
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: pulumi.Output<string>;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    readonly itsmReceivers: pulumi.Output<outputs.insights.v20180301.ItsmReceiverResponse[] | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    readonly logicAppReceivers: pulumi.Output<outputs.insights.v20180301.LogicAppReceiverResponse[] | undefined>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    readonly smsReceivers: pulumi.Output<outputs.insights.v20180301.SmsReceiverResponse[] | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The list of voice receivers that are part of this action group.
     */
    readonly voiceReceivers: pulumi.Output<outputs.insights.v20180301.VoiceReceiverResponse[] | undefined>;
    /**
     * The list of webhook receivers that are part of this action group.
     */
    readonly webhookReceivers: pulumi.Output<outputs.insights.v20180301.WebhookReceiverResponse[] | undefined>;
    /**
     * Create a ActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ActionGroup resource.
 */
export interface ActionGroupArgs {
    /**
     * The name of the action group.
     */
    readonly actionGroupName: pulumi.Input<string>;
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    readonly automationRunbookReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.AutomationRunbookReceiver>[]>;
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    readonly azureAppPushReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.AzureAppPushReceiver>[]>;
    /**
     * The list of azure function receivers that are part of this action group.
     */
    readonly azureFunctionReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.AzureFunctionReceiver>[]>;
    /**
     * The list of email receivers that are part of this action group.
     */
    readonly emailReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.EmailReceiver>[]>;
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: pulumi.Input<boolean>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: pulumi.Input<string>;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    readonly itsmReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.ItsmReceiver>[]>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    readonly logicAppReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.LogicAppReceiver>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    readonly smsReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.SmsReceiver>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The list of voice receivers that are part of this action group.
     */
    readonly voiceReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.VoiceReceiver>[]>;
    /**
     * The list of webhook receivers that are part of this action group.
     */
    readonly webhookReceivers?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.WebhookReceiver>[]>;
}