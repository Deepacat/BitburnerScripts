/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {
	if(ns.getServerMoneyAvailable('home')>'200000'){
		ns.purchaseTor()
	}
}