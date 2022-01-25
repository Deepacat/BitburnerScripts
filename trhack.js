/** @param {import("./Netscript").NS} ns*/
export async function main(ns) {
   //test

   // Defines the "target server", which is the server
   // that we're going to hack. In this case, it's "n00dles"
   const target = ns.args[0];

   const serverMoney = (ns.getServerMoneyAvailable(target))
   // ns.tprint('money ' + serverMoney)

   const serverMaxMoney = ns.getServerMaxMoney(target)
   // ns.tprint('max money ' + serverMaxMoney)

   // Defines how much money a server should have before we hack it
   // In this case, it is set to 75% of the server's max money
   var moneyThresh = serverMaxMoney * 0.85;
   // ns.tprint('tresh ' + moneyThresh)



   // Defines the maximum security level the target server can
   // have. If the target's security level is higher than this,    
   // we'll weaken it before doing anything else
   var securityThresh = ns.getServerMinSecurityLevel(target) + 15;

   // Infinite loop that continously hacks/grows/weakens the target server
   while (true) {
      if (ns.getServerSecurityLevel(target) > securityThresh) {
         // If the server's security level is above our threshold, weaken it
         await ns.weaken(target)

      } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
         // If the server's money is less than our threshold, grow it
         await ns.grow(target)

         // Defines how many threads to use to hack a certain amount 
         var hackthreads = `${Math.ceil(ns.hackAnalyzeThreads(target, serverMoney))}`
         //ns.tprint('hack ' + hackthreads)

      } else if (ns.getServerMaxRam / ns.getScriptRam > hackthreads) {
         await ns.hack(target, { threads: hackthreads / 100 })

      } else {
         await ns.hack(target)
      }
   }
}