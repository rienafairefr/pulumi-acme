// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;

namespace Pulumi.Acme
{
    public static class Config
    {
        private static readonly Pulumi.Config __config = new Pulumi.Config("acme");
        public static string? ServerUrl { get; set; } = __config.Get("serverUrl") ?? Utilities.GetEnv("ACME_SERVER_URL");

    }
}
