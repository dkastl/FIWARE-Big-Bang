# Node-RED

## Contents

<details>
<summary><strong>Details</strong></summary>

-   [Configuration parameters](#configuration-parameters)
-   [How to setup](#how-to-setup)
    -   [Single-instance](#single-instance)
    -   [Multi-instance](#multi-instance)
-   [Related information](#related-information)

</details>

## Configuration parameters

You can specify configurations by editing the `config.sh` file.

| Variable name                          | Description                                                           | Default value                      |
| -------------------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| NODE\_RED                              | A sub-domain name of Node-RED                                         | (empty)                            |
| NODE\_RED\_INSTANCE\_NUMBER            | Number of Node-RED instance. Must be between 1 and 20 when specified  | 1                                  |
| NODE\_RED\_INSTANCE\_USERNAME          | Username for Node-RED instance.                                       | node-red                           |
| NODE\_RED\_INSTANCE\_HTTP\_ROOT        | HTTP root for Node-RED instance. Must be a path starting with '/'     | / (single) or /node-red??? (multi) |
| NODE\_RED\_INSTANCE\_HTTP\_ADMIN\_ROOT | httpAdminRoot for Node-RED instance. Must be a path starting with '/' | / (single) or /node-red??? (multi) |
| NODE\_RED\_LOGGING\_LEVEL              | Logging level for Node-RED instance.                                  | info                               |
| NODE\_RED\_LOGGING\_METRICS            | Logging metrics for Node-RED instance.                                | (empty)                            |

## How to setup

### Single-instance

To set up Node-RED, configure an environment variable in config.sh. Set a sub-domain name
for Node-RED to `NODE_RED=` as shown:

```bash
NODE_RED=node-red
```

### Multi-instance

To set up multiple Node-RED instances, configure an environment variable in config.sh.
Set a sub-domain name for Node-RED to `NODE_RED=` and set number of instances to
`NODE_RED_INSTANCE_NUMBER=` as shown:

```bash
NODE_RED=node-red
NODE_RED_INSTANCE_NUMBER=5
```

After installation, the `node-red_users.txt` file has been created in a directory you ran the
`lets-fiware.sh` script. It has URL, username and password to access each Node-Red instance.

```text
https://node-red.example.com/node-red001        node-red001@example.com oS7O0tqhLPPFSflF
https://node-red.example.com/node-red002        node-red002@example.com hs7Nrt8PZLTsJlnS
https://node-red.example.com/node-red003        node-red003@example.com W1XEgeJjsXr0q5UI
https://node-red.example.com/node-red004        node-red004@example.com jdZV5SGXEZbtGjTP
https://node-red.example.com/node-red005        node-red005@example.com XgnFHj63gqxfqyE1
```

#### HTTP root value for Multi-instance

| NODE\_RED\_INSTANCE\_HTTP\_ROOT | HTTP root         | Example                   |
| ------------------------------- | ----------------- | ------------------------- |
| (empty)                         | /node-red???/     | /node-red???/worldmap     |
| /abc                            | /node-red???/abc/ | /node-red???/abc/worldmap |

## Related information

-   [FIWARE/node-red-contrib-FIWARE_official - GitHub](https://github.com/FIWARE/node-red-contrib-FIWARE_official)
-   [Node-RED - GitHub](https://github.com/node-red/node-red)
-   [Node-RED portal site](https://nodered.org/)
-   [nodered/node-red - Docker Hub](https://hub.docker.com/r/nodered/node-red)
