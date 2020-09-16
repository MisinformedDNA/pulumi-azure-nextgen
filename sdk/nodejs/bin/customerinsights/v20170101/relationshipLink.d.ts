import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The relationship link resource format.
 */
export declare class RelationshipLink extends pulumi.CustomResource {
    /**
     * Get an existing RelationshipLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RelationshipLink;
    /**
     * Returns true if the given object is an instance of RelationshipLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RelationshipLink;
    /**
     * Localized descriptions for the Relationship Link.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display name for the Relationship Link.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The InteractionType associated with the Relationship Link.
     */
    readonly interactionType: pulumi.Output<string>;
    /**
     * The name of the Relationship Link.
     */
    readonly linkName: pulumi.Output<string>;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    readonly mappings: pulumi.Output<outputs.customerinsights.v20170101.RelationshipLinkFieldMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The property references for the Profile of the Relationship.
     */
    readonly profilePropertyReferences: pulumi.Output<outputs.customerinsights.v20170101.ParticipantPropertyReferenceResponse[]>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    readonly relatedProfilePropertyReferences: pulumi.Output<outputs.customerinsights.v20170101.ParticipantPropertyReferenceResponse[]>;
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: pulumi.Output<string>;
    /**
     * The Relationship associated with the Link.
     */
    readonly relationshipName: pulumi.Output<string>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RelationshipLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RelationshipLinkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RelationshipLink resource.
 */
export interface RelationshipLinkArgs {
    /**
     * Localized descriptions for the Relationship Link.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display name for the Relationship Link.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The InteractionType associated with the Relationship Link.
     */
    readonly interactionType: pulumi.Input<string>;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    readonly mappings?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.RelationshipLinkFieldMapping>[]>;
    /**
     * The property references for the Profile of the Relationship.
     */
    readonly profilePropertyReferences: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.ParticipantPropertyReference>[]>;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    readonly relatedProfilePropertyReferences: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.ParticipantPropertyReference>[]>;
    /**
     * The name of the relationship link.
     */
    readonly relationshipLinkName: pulumi.Input<string>;
    /**
     * The Relationship associated with the Link.
     */
    readonly relationshipName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}