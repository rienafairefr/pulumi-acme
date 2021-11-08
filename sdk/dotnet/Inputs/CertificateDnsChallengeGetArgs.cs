// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Acme.Inputs
{

    public sealed class CertificateDnsChallengeGetArgs : Pulumi.ResourceArgs
    {
        [Input("config")]
        private InputMap<object>? _config;
        public InputMap<object> Config
        {
            get => _config ?? (_config = new InputMap<object>());
            set => _config = value;
        }

        [Input("provider", required: true)]
        public Input<string> Provider { get; set; } = null!;

        public CertificateDnsChallengeGetArgs()
        {
        }
    }
}
