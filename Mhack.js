/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {
	var targetName = ns.args[0]
	const hostName = ns.getHostname()
	const maxThreads = ns.getServerMaxRam(hostName)
	const serverMoney = ns.getServerMoneyAvailable(targetName)
	const maxMoney = ns.getServerMaxMoney(targetName);
	const minSec = ns.getServerMinSecurityLevel(targetName);
	const sec = ns.getServerSecurityLevel(targetName);

	var hackthreads = `${Math.ceil(ns.hackAnalyzeThreads(targetName, serverMoney))}`
	ns.tprint('hack '+hackthreads)

	var growthreads = `${Math.ceil(ns.growthAnalyze(targetName, maxMoney / 1 ))}`
	ns.tprint('grow '+ growthreads)

	var weakenthreads = `${Math.ceil((sec - minSec) * 20)}`
	ns.tprint('weaken '+ weakenthreads)
	
	return
	ns.exec('MhackGrow.js', targetName, growthreads)
	ns.exec('MhackWeaken.js', targetName, weakenthreads)
	ns.exec('MhackHack.js', targetName, hackthreads)

}