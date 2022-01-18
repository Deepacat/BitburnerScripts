/* @param {import("./Netscript").NS} ns */
export async function main(ns) {
	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}) 

	var test = ns.getPurchasedServerCost(ns.args[0])
	ns.tprint (formatter.format(test))
	ns.tprint (formatter.format(test * 25))
}