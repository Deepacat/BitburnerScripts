/** @param {import("./Netscript").NS} ns **/
export async function main(ns) {
    var i = 0
    ns.killall(ns.args[0])
    ns.deleteServer(ns.args[0])
}