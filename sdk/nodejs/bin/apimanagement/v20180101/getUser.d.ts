import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
export interface GetUserArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    readonly uid: string;
}
/**
 * User details.
 */
export interface GetUserResult {
    /**
     * Email address.
     */
    readonly email?: string;
    /**
     * First name.
     */
    readonly firstName?: string;
    /**
     * Collection of groups user is part of.
     */
    readonly groups: outputs.apimanagement.v20180101.GroupContractPropertiesResponse[];
    /**
     * Collection of user identities.
     */
    readonly identities?: outputs.apimanagement.v20180101.UserIdentityContractResponse[];
    /**
     * Last name.
     */
    readonly lastName?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Optional note about a user set by the administrator.
     */
    readonly note?: string;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly registrationDate?: string;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    readonly state?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}