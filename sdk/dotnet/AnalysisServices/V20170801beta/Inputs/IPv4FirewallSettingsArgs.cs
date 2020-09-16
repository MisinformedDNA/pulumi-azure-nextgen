// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AnalysisServices.V20170801beta.Inputs
{

    /// <summary>
    /// An array of firewall rules.
    /// </summary>
    public sealed class IPv4FirewallSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The indicator of enabling PBI service.
        /// </summary>
        [Input("enablePowerBIService")]
        public Input<bool>? EnablePowerBIService { get; set; }

        [Input("firewallRules")]
        private InputList<Inputs.IPv4FirewallRuleArgs>? _firewallRules;

        /// <summary>
        /// An array of firewall rules.
        /// </summary>
        public InputList<Inputs.IPv4FirewallRuleArgs> FirewallRules
        {
            get => _firewallRules ?? (_firewallRules = new InputList<Inputs.IPv4FirewallRuleArgs>());
            set => _firewallRules = value;
        }

        public IPv4FirewallSettingsArgs()
        {
        }
    }
}