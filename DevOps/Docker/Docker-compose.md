### How to write docker compose file?
- first write the version ( the latest syntax version)
`version: "3.8"`
- then write `services` and under that we need to mention which containers we need to create
- If the container is going to build from a docker image then add the `build & context` syntax
- 