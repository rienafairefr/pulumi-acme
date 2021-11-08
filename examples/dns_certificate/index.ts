import * as pulumi from "@pulumi/pulumi";
import * as acme from "@pulumi/acme";
import * as tls from "@pulumi/tls";

const config = new pulumi.Config("acme")
const ovhConfig = new pulumi.Config("ovh")
const emailAddress = config.require("email")
const domain = config.require("domain")

const dnsConfig = {
    OVH_APPLICATION_KEY: ovhConfig.require("application_key"),
    OVH_APPLICATION_SECRET: ovhConfig.require("application_secret"),
    OVH_CONSUMER_KEY: ovhConfig.require("consumer_key"),
    OVH_ENDPOINT: ovhConfig.require("endpoint"),
    OVH_HTTP_TIMEOUT: "500"
}

const key = new tls.PrivateKey("my-private-key",{
  algorithm: "ECDSA",
  ecdsaCurve: "P384"
}
)

const registration = new acme.Registration(
    "registration", {
        accountKeyPem: key.publicKeyPem,
        emailAddress
    }
)
new acme.Certificate(
    "certificate", {
        accountKeyPem: registration.accountKeyPem,
        commonName: ""
        dnsChallenges: [
            {
                config: dnsConfig,
                provider: 'ovh'
            }
        ]
    }

)