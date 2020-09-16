// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CustomerInsights.V20170426.Outputs
{

    [OutputType]
    public sealed class PropertyDefinitionResponse
    {
        /// <summary>
        /// Array value separator for properties with isArray set.
        /// </summary>
        public readonly string? ArrayValueSeparator;
        /// <summary>
        /// This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.DataSourcePrecedenceResponse> DataSourcePrecedenceRules;
        /// <summary>
        /// Describes valid values for an enum property.
        /// </summary>
        public readonly ImmutableArray<Outputs.ProfileEnumValidValuesFormatResponse> EnumValidValues;
        /// <summary>
        /// Name of the property.
        /// </summary>
        public readonly string FieldName;
        /// <summary>
        /// Type of the property.
        /// </summary>
        public readonly string FieldType;
        /// <summary>
        /// Indicates if the property is actually an array of the fieldType above on the data api.
        /// </summary>
        public readonly bool? IsArray;
        /// <summary>
        /// Whether property is available in graph or not.
        /// </summary>
        public readonly bool? IsAvailableInGraph;
        /// <summary>
        /// Indicates if the property is an enum.
        /// </summary>
        public readonly bool? IsEnum;
        /// <summary>
        /// Indicates if the property is an flag enum.
        /// </summary>
        public readonly bool? IsFlagEnum;
        /// <summary>
        /// Whether the property is an Image.
        /// </summary>
        public readonly bool? IsImage;
        /// <summary>
        /// Whether the property is a localized string.
        /// </summary>
        public readonly bool? IsLocalizedString;
        /// <summary>
        /// Whether the property is a name or a part of name.
        /// </summary>
        public readonly bool? IsName;
        /// <summary>
        /// Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field.
        /// </summary>
        public readonly bool? IsRequired;
        /// <summary>
        /// Max length of string. Used only if type is string.
        /// </summary>
        public readonly int? MaxLength;
        /// <summary>
        /// The ID associated with the property.
        /// </summary>
        public readonly string? PropertyId;
        /// <summary>
        /// URL encoded schema.org item prop link for the property.
        /// </summary>
        public readonly string? SchemaItemPropLink;

        [OutputConstructor]
        private PropertyDefinitionResponse(
            string? arrayValueSeparator,

            ImmutableArray<Outputs.DataSourcePrecedenceResponse> dataSourcePrecedenceRules,

            ImmutableArray<Outputs.ProfileEnumValidValuesFormatResponse> enumValidValues,

            string fieldName,

            string fieldType,

            bool? isArray,

            bool? isAvailableInGraph,

            bool? isEnum,

            bool? isFlagEnum,

            bool? isImage,

            bool? isLocalizedString,

            bool? isName,

            bool? isRequired,

            int? maxLength,

            string? propertyId,

            string? schemaItemPropLink)
        {
            ArrayValueSeparator = arrayValueSeparator;
            DataSourcePrecedenceRules = dataSourcePrecedenceRules;
            EnumValidValues = enumValidValues;
            FieldName = fieldName;
            FieldType = fieldType;
            IsArray = isArray;
            IsAvailableInGraph = isAvailableInGraph;
            IsEnum = isEnum;
            IsFlagEnum = isFlagEnum;
            IsImage = isImage;
            IsLocalizedString = isLocalizedString;
            IsName = isName;
            IsRequired = isRequired;
            MaxLength = maxLength;
            PropertyId = propertyId;
            SchemaItemPropLink = schemaItemPropLink;
        }
    }
}