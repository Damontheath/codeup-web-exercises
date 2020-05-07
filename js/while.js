function displayDoubleTwo() {
    var output = "";
    var i = 2;
    while (i <= 65536) {
        output += i + "\n";
        i *= 2;
    }
    return output;
}

console.log(displayDoubleTwo());

function returnSOrEmpty(num) {
    return (num === 1) ? "" : "s";
}

function enoughConesToSell(orderAmt, inventoryAmt) {
    return inventoryAmt >= orderAmt;
}

function generateRandomInventory() {
    return Math.floor(Math.random() * 50) + 50;
}

function generateRandomOrder() {
    return Math.floor(Math.random() * 5) + 1;
}

function createTransactionMsg(conesWereSold, orderedCones, inventoryCones) {
    if (conesWereSold) {
        return  orderedCones + " cone" + returnSOrEmpty(orderedCones) +  " sold...\n";
    } else {
        return "Cannot sell you " + orderedCones + " cones. I only have " + inventoryCones + " left...\n";
    }
}

function sellCones() {
    var output = "";
    var allCones = generateRandomInventory();
    var orderedCones;
    do {
        orderedCones = generateRandomOrder();
        if (enoughConesToSell(orderedCones, allCones)) {
            allCones -= orderedCones;
            output += createTransactionMsg(true, orderedCones, allCones);
        } else {
            output += createTransactionMsg(false, orderedCones, allCones);
        }
    } while(allCones > 0);
    output += "Yay! I sold them all!";
    return output;
}

console.log(sellCones());