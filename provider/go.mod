module github.com/ryan4yin/pulumi-acme/provider

go 1.14

replace github.com/terraform-providers/terraform-provider-acme v1.6.3 => github.com/vancluever/terraform-provider-acme v1.6.3

require (
	github.com/pulumi/pulumi-terraform-bridge/v2 v2.17.0
	github.com/pulumi/pulumi/sdk/v2 v2.17.2
	github.com/terraform-providers/terraform-provider-acme v1.6.3
)
