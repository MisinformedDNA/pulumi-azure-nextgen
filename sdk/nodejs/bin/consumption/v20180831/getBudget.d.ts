import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBudget(args: GetBudgetArgs, opts?: pulumi.InvokeOptions): Promise<GetBudgetResult>;
export interface GetBudgetArgs {
    /**
     * Budget Name.
     */
    readonly budgetName: string;
}
/**
 * A budget resource.
 */
export interface GetBudgetResult {
    /**
     * The total amount of cost to track with the budget
     */
    readonly amount: number;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    readonly category: string;
    /**
     * The current amount of cost which is being tracked for a budget.
     */
    readonly currentSpend: outputs.consumption.v20180831.CurrentSpendResponse;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    readonly filters?: outputs.consumption.v20180831.FiltersResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications?: {
        [key: string]: outputs.consumption.v20180831.NotificationResponse;
    };
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: string;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: outputs.consumption.v20180831.BudgetTimePeriodResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}