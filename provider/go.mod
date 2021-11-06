module github.com/ryan4yin/pulumi-acme/provider

go 1.14

replace (
	github.com/hashicorp/terraform-plugin-sdk/v2 => github.com/pulumi/terraform-plugin-sdk/v2 v2.0.0-20201218231525-9cca98608a5e
	github.com/terraform-providers/terraform-provider-acme v1.6.3 => github.com/vancluever/terraform-provider-acme v1.6.3
)

require (
	github.com/pulumi/pulumi-terraform-bridge/v2 v2.23.0
	github.com/pulumi/pulumi/sdk/v2 v2.24.1
	github.com/rienafairefr/pulumi-acme/provider v0.0.0-20211106101329-97a34d9316c0
	github.com/terraform-providers/terraform-provider-acme v1.6.3
)
