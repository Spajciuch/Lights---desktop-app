import * as http from "http"

export function light(name: string) {
    var options = {
        host: "192.168.0.100",
        port: 3000,
        path: "/"
    }

    options.path = `/${name.toLowerCase()}`

    const req = http.get(options)

    req.on("error", function(err) {
        console.log("[error] Lights server error")
        console.log(err.message)
    })
}