import * as pulumi from "@pulumi/pulumi";
export declare function getHybridConnection(args: GetHybridConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionResult>;
export interface GetHybridConnectionArgs {
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: string;
    /**
     * The Namespace Name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of HybridConnection Resource.
 */
export interface GetHybridConnectionResult {
    /**
     * The time the HybridConnection was created.
     */
    readonly createdAt: string;
    /**
     * The number of listeners for this HybridConnection. min : 1 and max:25 supported
     */
    readonly listenerCount: number;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * true if client authorization is needed for this HybridConnection; otherwise, false.
     */
    readonly requiresClientAuthorization?: boolean;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}