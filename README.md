[![FIWARE Big BangBanner](https://raw.githubusercontent.com/lets-fiware/FIWARE-Big-Bang/gh-pages/images/FIWARE-Big-Bang-non-free.png)](https://www.letsfiware.jp/)
[![NGSI v2](https://img.shields.io/badge/NGSI-v2-5dc0cf.svg)](https://fiware-ges.github.io/orion/api/v2/stable/)
[![NGSI LD](https://img.shields.io/badge/NGSI-LD-d6604d.svg)](https://www.etsi.org/deliver/etsi_gs/CIM/001_099/009/01.05.01_60/gs_CIM009v010501p.pdf)

![FIWARE: Tools](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/deployment-tools.svg)
[![License: MIT](https://img.shields.io/github/license/lets-fiware/FIWARE-Big-Bang.svg)](https://opensource.org/licenses/MIT)
[![GitHub Discussions](https://img.shields.io/github/discussions/lets-fiware/FIWARE-Big-Bang)](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions)
<br/>
[![Lint](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/lint.yml/badge.svg)](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/lint.yml)
[![Tests](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-latest.yml/badge.svg)](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-latest.yml)
[![codecov](https://codecov.io/gh/lets-fiware/FIWARE-Big-Bang/branch/main/graph/badge.svg?token=OHFTT6TUIS)](https://codecov.io/gh/lets-fiware/FIWARE-Big-Bang)
<br/>
[![Ubuntu 20.04](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-20.04.yml/badge.svg)](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-20.04.yml)
[![Ubuntu 22.04](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-22.04.yml/badge.svg)](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-22.04.yml)
[![Ubuntu 24.04](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-24.04.yml/badge.svg)](https://github.com/lets-fiware/FIWARE-Big-Bang/actions/workflows/ubuntu-24.04.yml)
<br/>

The FIWARE Big Bang is a turnkey solution for setting up a FIWARE instance in the cloud.

| :books: [Documentation](https://fi-bb.letsfiware.jp/) | :dart: [Roadmap](./ROADMAP.md) |
|-------------------------------------------------------|--------------------------------|

このドキュメントは[日本語](./README.ja.md)でもご覧いただけます。

## What is FIWARE Big Bang?

> I am at all events convinced that He does not play dice.
>
> — Albert Einstein

The FIWARE Big Bang allows you to install FIWARE Generic enablers easily into your virtual machine in the cloud.
FI-BB stands for FIWARE Big Bang.

## Supported FIWARE GEs and third-party open source software

### Supported FIWARE GEs

-   Keyrock
-   Wilma
-   Orion
-   Orion-LD
-   Mintaka
-   Cygnus
-   Comet
-   Perseo
-   QuantumLeap
-   Draco
-   WireCloud
-   Ngsiproxy
-   IoT Agent for UltraLight (over HTTP and MQTT)
-   IoT Agent for JSON (over HTTP and MQTT)

### Supported third-party open source software

-   Node-RED
-   Grafana
-   Apache Zeppelin (Experimental support)
-   Mosquitto
-   Elasticsearch (as a database for persitenting context data)

## Requirements

-   A virtual machine with a public IP address (global IP address) or a virtual machine that can be accessed
    from the Internet via a network equipment
-   An own domain name
-   Ports exposed on the internet
    -   443 (HTTPS)
    -   80 (HTTP)
    -   1883 when enabling MQTT
    -   8883 when enabling MQTT TLS
-   Supported Linux distribution
    -   Ubuntu 24.04 LTS (Recommended Linux distribution)
    -   [Ubuntu 22.04 LTS](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/304)
    -   [Ubuntu 20.04 LTS](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/305)
    -   [CentOS Stream release 9](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/330)
    -   [CentOS Stream release 8](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/331)
    -   [Rocky Linux 9](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/306)
    -   [Rocky Linux 8](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/309)
    -   [AlmaLinux 9](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/307)
    -   [AlmaLinux 8](https://github.com/lets-fiware/FIWARE-Big-Bang/discussions/308)

## Prerequisite

Before running the setup script, you need to register sub-domain names of FIWARE GEs in DNS using A records
or CNAME records.

-   keyrock.example.com
-   orion.example.com

## Getting Started

Download a tar.gz file for the FIWARE Big Bang.

```bash
curl -sL https://github.com/lets-fiware/FIWARE-Big-Bang/releases/download/v0.39.0/FIWARE-Big-Bang-0.39.0.tar.gz | tar zxf -
```

Move to the `FIWARE-Big-Bang-0.39.0` directory.

```bash
cd FIWARE-Big-Bang-0.39.0/
```

Run the `lets-fiware.sh` script with your own domain name and a public IP address.

```bash
./lets-fiware.sh example.com XX.XX.XX.XX
```

See full documentation [here](https://fi-bb.letsfiware.jp/) for details.

## Why is it named FIWARE Big Bang?

The name of this product comes from the Big Bang theory of the universe. Because most FIWARE generic enablers in
the Core Context Management chapter have an astrology name and this product creates a FIWARE instance as your own
universe in which different FIWARE GEs run.

## Copyright and License

Copyright (c) 2021-2024 Kazuhito Suda<br>
Licensed under the [MIT License](./LICENSE).
