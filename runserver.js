/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {

	var servers = ns.getPurchasedServers();
	var scriptname = ns.args[0];

	for (let i = 0; i < servers.length; i++) {
		var server = servers[i];

		var threads = ns.getServerMaxRam(server) / ns.getScriptRam(ns.args[0])

		ns.killall(server);
		await ns.scp(scriptname, server);
		ns.exec(scriptname, server, threads, ns.args[1]);

	}
}