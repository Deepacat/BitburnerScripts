/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {
	var ram = ns.args[0]
	var i = 0
	ns.tprint(ns.args[0])

	// see if you're able to purchase a server
	while (i < ns.getPurchasedServerLimit()) {
		// sleep to prevent crash lol
		await ns.sleep(1)
		if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
			// purchase server and add 1 to server for next purchase with selected ram cost
			let servername = ns.purchaseServer("pserv-" + i, ram)
			// Check script ram and divide by it for threads
			let threads = ns.getServerMaxRam(servername) / ns.getScriptRam(ns.args[1]) 
			await ns.scp(ns.args[1], servername) // copy file to servers
			ns.exec(ns.args[1], servername, threads, ns.args[2]) // execute file on servers
			i++;
		}
	}
}