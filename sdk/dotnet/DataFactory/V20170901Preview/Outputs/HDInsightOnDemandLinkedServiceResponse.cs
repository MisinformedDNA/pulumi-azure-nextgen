// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class HDInsightOnDemandLinkedServiceResponse
    {
        /// <summary>
        /// Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
        /// </summary>
        public readonly ImmutableArray<Outputs.LinkedServiceReferenceResponse> AdditionalLinkedServiceNames;
        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public readonly ImmutableArray<ImmutableDictionary<string, object>> Annotations;
        /// <summary>
        /// The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ClusterNamePrefix;
        /// <summary>
        /// The password to access the cluster.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? ClusterPassword;
        /// <summary>
        /// The resource group where the cluster belongs. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> ClusterResourceGroup;
        /// <summary>
        /// Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> ClusterSize;
        /// <summary>
        /// The password to SSH remotely connect cluster’s node (for Linux).
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? ClusterSshPassword;
        /// <summary>
        /// The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ClusterSshUserName;
        /// <summary>
        /// The cluster type. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ClusterType;
        /// <summary>
        /// The username to access the cluster. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ClusterUserName;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? CoreConfiguration;
        /// <summary>
        /// Specifies the size of the data node for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? DataNodeSize;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? EncryptedCredential;
        /// <summary>
        /// Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? HBaseConfiguration;
        /// <summary>
        /// The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse? HcatalogLinkedServiceName;
        /// <summary>
        /// Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? HdfsConfiguration;
        /// <summary>
        /// Specifies the size of the head node for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? HeadNodeSize;
        /// <summary>
        /// Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? HiveConfiguration;
        /// <summary>
        /// The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> HostSubscriptionId;
        /// <summary>
        /// Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse LinkedServiceName;
        /// <summary>
        /// Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? MapReduceConfiguration;
        /// <summary>
        /// Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? OozieConfiguration;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ServicePrincipalId;
        /// <summary>
        /// The key for the service principal id.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? ServicePrincipalKey;
        /// <summary>
        /// The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? SparkVersion;
        /// <summary>
        /// Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? StormConfiguration;
        /// <summary>
        /// The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> Tenant;
        /// <summary>
        /// The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> TimeToLive;
        /// <summary>
        /// Type of linked service.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
        /// </summary>
        public readonly ImmutableDictionary<string, object> Version;
        /// <summary>
        /// Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? YarnConfiguration;
        /// <summary>
        /// Specifies the size of the Zoo Keeper node for the HDInsight cluster.
        /// </summary>
        public readonly ImmutableDictionary<string, object>? ZookeeperNodeSize;

        [OutputConstructor]
        private HDInsightOnDemandLinkedServiceResponse(
            ImmutableArray<Outputs.LinkedServiceReferenceResponse> additionalLinkedServiceNames,

            ImmutableArray<ImmutableDictionary<string, object>> annotations,

            ImmutableDictionary<string, object>? clusterNamePrefix,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? clusterPassword,

            ImmutableDictionary<string, object> clusterResourceGroup,

            ImmutableDictionary<string, object> clusterSize,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? clusterSshPassword,

            ImmutableDictionary<string, object>? clusterSshUserName,

            ImmutableDictionary<string, object>? clusterType,

            ImmutableDictionary<string, object>? clusterUserName,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            ImmutableDictionary<string, object>? coreConfiguration,

            ImmutableDictionary<string, object>? dataNodeSize,

            string? description,

            ImmutableDictionary<string, object>? encryptedCredential,

            ImmutableDictionary<string, object>? hBaseConfiguration,

            Outputs.LinkedServiceReferenceResponse? hcatalogLinkedServiceName,

            ImmutableDictionary<string, object>? hdfsConfiguration,

            ImmutableDictionary<string, object>? headNodeSize,

            ImmutableDictionary<string, object>? hiveConfiguration,

            ImmutableDictionary<string, object> hostSubscriptionId,

            Outputs.LinkedServiceReferenceResponse linkedServiceName,

            ImmutableDictionary<string, object>? mapReduceConfiguration,

            ImmutableDictionary<string, object>? oozieConfiguration,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            ImmutableDictionary<string, object>? servicePrincipalId,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? servicePrincipalKey,

            ImmutableDictionary<string, object>? sparkVersion,

            ImmutableDictionary<string, object>? stormConfiguration,

            ImmutableDictionary<string, object> tenant,

            ImmutableDictionary<string, object> timeToLive,

            string type,

            ImmutableDictionary<string, object> version,

            ImmutableDictionary<string, object>? yarnConfiguration,

            ImmutableDictionary<string, object>? zookeeperNodeSize)
        {
            AdditionalLinkedServiceNames = additionalLinkedServiceNames;
            Annotations = annotations;
            ClusterNamePrefix = clusterNamePrefix;
            ClusterPassword = clusterPassword;
            ClusterResourceGroup = clusterResourceGroup;
            ClusterSize = clusterSize;
            ClusterSshPassword = clusterSshPassword;
            ClusterSshUserName = clusterSshUserName;
            ClusterType = clusterType;
            ClusterUserName = clusterUserName;
            ConnectVia = connectVia;
            CoreConfiguration = coreConfiguration;
            DataNodeSize = dataNodeSize;
            Description = description;
            EncryptedCredential = encryptedCredential;
            HBaseConfiguration = hBaseConfiguration;
            HcatalogLinkedServiceName = hcatalogLinkedServiceName;
            HdfsConfiguration = hdfsConfiguration;
            HeadNodeSize = headNodeSize;
            HiveConfiguration = hiveConfiguration;
            HostSubscriptionId = hostSubscriptionId;
            LinkedServiceName = linkedServiceName;
            MapReduceConfiguration = mapReduceConfiguration;
            OozieConfiguration = oozieConfiguration;
            Parameters = parameters;
            ServicePrincipalId = servicePrincipalId;
            ServicePrincipalKey = servicePrincipalKey;
            SparkVersion = sparkVersion;
            StormConfiguration = stormConfiguration;
            Tenant = tenant;
            TimeToLive = timeToLive;
            Type = type;
            Version = version;
            YarnConfiguration = yarnConfiguration;
            ZookeeperNodeSize = zookeeperNodeSize;
        }
    }
}
