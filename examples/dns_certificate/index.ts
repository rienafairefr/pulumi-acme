import * as pulumi from "@pulumi/pulumi";
import * as acme from "@pulumi/acme";
import * as tls from "@pulumi/tls";

const config = new pulumi.Config("acme")
const projectConfig = new pulumi.Config("project")
const ovhConfig = new pulumi.Config("ovh")
const emailAddress = projectConfig.require("email")
const domain = projectConfig.require("domain")

const dnsConfig = {
    OVH_APPLICATION_KEY: ovhConfig.require("applicationKey"),
    OVH_APPLICATION_SECRET: ovhConfig.require("applicationSecret"),
    OVH_CONSUMER_KEY: ovhConfig.require("consumerKey"),
    OVH_ENDPOINT: ovhConfig.require("endpoint"),
    OVH_HTTP_TIMEOUT: "500"
}

const key = new tls.PrivateKey("my-private-key",{
  algorithm: "RSA",
}
)

export const registration = new acme.Registration(
    "registration", {
        accountKeyPem: key.publicKeyPem,
        emailAddress
    }
)

/*
new acme.Certificate(
    "certificate", {
        accountKeyPem: registration.accountKeyPem,
        commonName: `*.${domain}`,
        subjectAlternativeNames: [
            domain
        ],
        dnsChallenges: [
            {
                config: dnsConfig,
                provider: 'ovh'
            }
        ]
    }

)*/