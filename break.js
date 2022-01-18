/** @param {import("./Netscript").NS} ns**/
export async function main(ns) {
// nwaoidnawkudnwqaiun
	var servername = ns.args[0]

	if (ns.fileExists("BruteSSH.exe")) {
		ns.brutessh(servername)
		ns.tprint('brutessh success')
	}
	if (ns.fileExists("FTPCrack.exe")) {
		ns.ftpcrack(servername)
		ns.tprint('ftpcrack success')
	}
	if (ns.fileExists("relaySMTP.exe")) {
		ns.relaysmtp(servername)
		ns.tprint('relaysmtp success')
	}
	if (ns.fileExists("HTTPWorm.exe")) {
		ns.httpworm(servername)
		ns.tprint('httpworm success')
	}
	if (ns.fileExists("SQLInject.exe")) {
		ns.sqlinject(servername)
		ns.tprint('sqlinject success')
	}
	ns.nuke(servername)
	ns.tprint('nuke success')

	/*if (ns.getHackingLevel() > (ns.getServerRequiredHackingLevel(servername))){
		await ns.installBackdoor(servername)
		ns.tprint('backdoor success')
	}*/
}