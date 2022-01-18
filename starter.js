/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {
//testwahdu
    var scanlist = ns.scan("home") // Servers to be checked
    var scannedservs = ns.scan("home") // Servers that have been scanned

    var threads = (serv) => {return ns.getServerMaxRam(serv) / ns.getScriptRam('trhack.js')}

    while (scanlist.length > 0) { // While there is still servers in the list run 
        let arraydata = ns.scan(scanlist.shift()) // scan first in scan list 
        arraydata.shift() // remove first in queue
        scanlist = scanlist.concat(arraydata) // add scanned server to end of queue
        scannedservs = scannedservs.concat(arraydata) // add scanned servers to lists
    }
    // ns.tprint(scanlist)
    // ns.tprint(scannedservs)
    
    var priv = ns.getPurchasedServers()
    var usable = scannedservs.filter(s => ns.getServerMaxRam(s) > 0 && !priv.includes(s))
    var serv0 = usable.filter(s => ns.getServerNumPortsRequired(s) == 0)
    var serv1 = usable.filter(s => ns.getServerNumPortsRequired(s) == 1)
    var serv2 = usable.filter(s => ns.getServerNumPortsRequired(s) == 2)
    var serv3 = usable.filter(s => ns.getServerNumPortsRequired(s) == 3)
    var serv4 = usable.filter(s => ns.getServerNumPortsRequired(s) == 4)
    var serv5 = usable.filter(s => ns.getServerNumPortsRequired(s) == 5)

    ns.tprint(priv)
    ns.tprint(usable)
    ns.tprint(serv1)
    ns.tprint(serv2)
    ns.tprint(serv3)
    ns.tprint(serv4)
    ns.tprint(serv5)

    for (let i = 0; i < serv0.length; ++i) {
        let serv = serv0[i]
        

        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0])
    }

    while (!ns.fileExists("BruteSSH.exe")) {
        ns.tprint('BruteSSH.exe not found')
        await ns.sleep(60000)
    }

    for (let i = 0; i < serv1.length; ++i) {
        let serv = serv1[i]
        

        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.brutessh(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0])


    }

    while (!ns.fileExists("FTPCrack.exe")) {
        ns.tprint('FTPCrack.exe not found')
        await ns.sleep(60000)
    }


    for (let i = 0; i < serv2.length; ++i) {
        let serv = serv2[i]
        

        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.brutessh(serv)
        ns.ftpcrack(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0])

    }

    while (!ns.fileExists("relaySMTP.exe")) {
        ns.tprint('relaySMTP.exe not found')
        await ns.sleep(60000)
    }

    for (let i = 0; i < serv3.length; ++i) {
        let serv = serv3[i]
        


        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.brutessh(serv)
        ns.ftpcrack(serv)
        ns.relaysmtp(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0])
    }

    while (!ns.fileExists("HTTPWorm.exe")) {
        ns.tprint('HTTPWorm.exe not found')
        await ns.sleep(60000)
    }

    for (let i = 0; i < serv4.length; ++i) {
        let serv = serv4[i]
        


        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.brutessh(serv)
        ns.ftpcrack(serv)
        ns.relaysmtp(serv)
        ns.httpworm(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0]);
    }

    while (!ns.fileExists("SQLInject.exe")) {
        ns.tprint('SQLInject.exe not found')

        await ns.sleep(60000)
    }

    for (let i = 0; i < serv5.length; ++i) {
        let serv = serv5[i]
        


        await ns.scp("trhack.js", serv)
        ns.killall(serv)
        ns.brutessh(serv)
        ns.ftpcrack(serv)
        ns.relaysmtp(serv)
        ns.httpworm(serv)
        ns.sqlinject(serv)
        ns.nuke(serv)
        ns.exec("trhack.js", serv, threads(serv), ns.args[0])
    }
    ns.tprint('Successfully Completed (Probably)')
}