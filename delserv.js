/** @param {NS} ns **/
export async function main(ns) {

	var servers = ns.getPurchasedServers();
	ns.tprint(ns.getPurchasedServers());
	
	for (let i = ns.args[0]; i < servers.length; i++) {
		ns.killall('pserv-' + i);
		ns.deleteServer("pserv-" + i);
	}
}