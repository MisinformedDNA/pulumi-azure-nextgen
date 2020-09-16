// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
type User struct {
	pulumi.CustomResourceState

	// The password details.
	EncryptedPassword AsymmetricEncryptedSecretResponsePtrOutput `pulumi:"encryptedPassword"`
	// The object name.
	Name pulumi.StringOutput `pulumi:"name"`
	// List of shares that the user has rights on. This field should not be specified during user creation.
	ShareAccessRights ShareAccessRightResponseArrayOutput `pulumi:"shareAccessRights"`
	// The hierarchical type of the object.
	Type pulumi.StringOutput `pulumi:"type"`
	// Type of the user.
	UserType pulumi.StringOutput `pulumi:"userType"`
}

// NewUser registers a new resource with the given unique name, arguments, and options.
func NewUser(ctx *pulumi.Context,
	name string, args *UserArgs, opts ...pulumi.ResourceOption) (*User, error) {
	if args == nil || args.DeviceName == nil {
		return nil, errors.New("missing required argument 'DeviceName'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.UserType == nil {
		return nil, errors.New("missing required argument 'UserType'")
	}
	if args == nil {
		args = &UserArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:databoxedge/latest:User"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190301:User"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190701:User"),
		},
		{
			Type: pulumi.String("azure-nextgen:databoxedge/v20190801:User"),
		},
	})
	opts = append(opts, aliases)
	var resource User
	err := ctx.RegisterResource("azure-nextgen:databoxedge/v20200501preview:User", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetUser gets an existing User resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUser(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *UserState, opts ...pulumi.ResourceOption) (*User, error) {
	var resource User
	err := ctx.ReadResource("azure-nextgen:databoxedge/v20200501preview:User", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering User resources.
type userState struct {
	// The password details.
	EncryptedPassword *AsymmetricEncryptedSecretResponse `pulumi:"encryptedPassword"`
	// The object name.
	Name *string `pulumi:"name"`
	// List of shares that the user has rights on. This field should not be specified during user creation.
	ShareAccessRights []ShareAccessRightResponse `pulumi:"shareAccessRights"`
	// The hierarchical type of the object.
	Type *string `pulumi:"type"`
	// Type of the user.
	UserType *string `pulumi:"userType"`
}

type UserState struct {
	// The password details.
	EncryptedPassword AsymmetricEncryptedSecretResponsePtrInput
	// The object name.
	Name pulumi.StringPtrInput
	// List of shares that the user has rights on. This field should not be specified during user creation.
	ShareAccessRights ShareAccessRightResponseArrayInput
	// The hierarchical type of the object.
	Type pulumi.StringPtrInput
	// Type of the user.
	UserType pulumi.StringPtrInput
}

func (UserState) ElementType() reflect.Type {
	return reflect.TypeOf((*userState)(nil)).Elem()
}

type userArgs struct {
	// The device name.
	DeviceName string `pulumi:"deviceName"`
	// The password details.
	EncryptedPassword *AsymmetricEncryptedSecret `pulumi:"encryptedPassword"`
	// The user name.
	Name string `pulumi:"name"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Type of the user.
	UserType string `pulumi:"userType"`
}

// The set of arguments for constructing a User resource.
type UserArgs struct {
	// The device name.
	DeviceName pulumi.StringInput
	// The password details.
	EncryptedPassword AsymmetricEncryptedSecretPtrInput
	// The user name.
	Name pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// Type of the user.
	UserType pulumi.StringInput
}

func (UserArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*userArgs)(nil)).Elem()
}