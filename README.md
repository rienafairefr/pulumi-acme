Pulumi Provider for ACME
======

![master branch status](https://github.com/rienafairefr/pulumi-acme/workflows/master/badge.svg)
[![PYPI Version](https://img.shields.io/pypi/v/pulumi_acme.svg)](https://pypi.org/project/pulumi_acme/)

A Pulumi provider for managing and generating certificates generated by an [ACME][about-acme]
CA, such as [Let's Encrypt][lets-encrypt].


[about-acme]: https://ietf-wg-acme.github.io/acme/draft-ietf-acme-acme.html
[lets-encrypt]: https://letsencrypt.org

## TODO

- [ ] fix the bug, build all the sdks.

## Installation

1. Resources plugin for Linux are available as tarballs in the [release](https://github.com/rienafairefr/pulumi-acme/releases) page.
1. Follow the installation instructions in release page to install the resource plugin and the python sdk.
1. for other languages, ​​please install sdk from source in the `sdk` folder.

## Build and Install the provider From Source

In order to properly build the sdks, the following tools are expected:
- `pulumictl` (See the project's README for installation instructions: https://github.com/pulumi/pulumictl)

to build all the sdks, you need install and set up all the 4 language sdks first: go/dotnet/python/nodejs.

then use the following command to build the resource plugin and all the sdks:

```shell
make build_sdks
```

### Install Resource Plugin 

first, build and install resource plugin:

```shell
make install_resource_plugin
```

**Note**: Installing package directly from the package registry like pypi/npm/nuget is not supported yet, you need to install package from source via `make`.


### Node.js (Java/TypeScript)

```shell
make install_nodejs_sdk
```

### Python

```shell
make install_python_sdk
```

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/rienafairefr/pulumi-acme/sdk/go/...


### .NET

To use from .NET, use the following command:

    $ make install_dotnet_sdk

## Configuration

The following configuration points are available for the `acme` provider:

- `acme:server_url` (No environment) - The URL to the ACME endpoint's directory.


## Examples

>to be done.

## Documentation

Please visit `dmacvicar/terraform-provider-libvirt`'s docs for details: https://registry.terraform.io/providers/vancluever/acme/latest/docs.


