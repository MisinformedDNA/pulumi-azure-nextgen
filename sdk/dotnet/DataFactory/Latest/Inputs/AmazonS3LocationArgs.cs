// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Inputs
{

    /// <summary>
    /// The location of amazon S3 dataset.
    /// </summary>
    public sealed class AmazonS3LocationArgs : Pulumi.ResourceArgs
    {
        [Input("bucketName")]
        private InputMap<object>? _bucketName;

        /// <summary>
        /// Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
        /// </summary>
        public InputMap<object> BucketName
        {
            get => _bucketName ?? (_bucketName = new InputMap<object>());
            set => _bucketName = value;
        }

        [Input("fileName")]
        private InputMap<object>? _fileName;

        /// <summary>
        /// Specify the file name of dataset. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> FileName
        {
            get => _fileName ?? (_fileName = new InputMap<object>());
            set => _fileName = value;
        }

        [Input("folderPath")]
        private InputMap<object>? _folderPath;

        /// <summary>
        /// Specify the folder path of dataset. Type: string (or Expression with resultType string)
        /// </summary>
        public InputMap<object> FolderPath
        {
            get => _folderPath ?? (_folderPath = new InputMap<object>());
            set => _folderPath = value;
        }

        /// <summary>
        /// Type of dataset storage location.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("version")]
        private InputMap<object>? _version;

        /// <summary>
        /// Specify the version of amazon S3. Type: string (or Expression with resultType string).
        /// </summary>
        public InputMap<object> Version
        {
            get => _version ?? (_version = new InputMap<object>());
            set => _version = value;
        }

        public AmazonS3LocationArgs()
        {
        }
    }
}
