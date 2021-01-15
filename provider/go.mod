module github.com/ryan4yin/pulumi-acme/provider

go 1.15

replace (
    github.com/Azure/go-autorest => github.com/Azure/go-autorest v12.4.3+incompatible
	github.com/terraform-providers/terraform-provider-acme v1.6.3 => github.com/vancluever/terraform-provider-acme v1.6.3

)

require (
	github.com/hashicorp/terraform-plugin-sdk/v2 v2.4.0
	github.com/pulumi/pulumi-terraform-bridge/v2 v2.11.0
	github.com/pulumi/pulumi/sdk/v2 v2.12.0
	github.com/terraform-providers/terraform-provider-acme v1.6.3
)
