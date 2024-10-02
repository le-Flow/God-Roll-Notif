
const ChestInventory = Java.type("net.minecraft.client.gui.inventory.GuiChest");
const { godRollConditions, goodRollConditions , goodAttributes } = require('./rollConditions');
let toggle = true;
let shouldRender = false;
let isGoodRoll = false;
let isGodRoll = false;
let isGoodAttribute = false;
let playSound = true;

//Todo: Check for Island
//Todo: Toggle On/Off
//Todo: Add custom rolls
register("guiClosed", () => {
    shouldRender = false;
    isGodRoll = false;
    isGoodRoll = false;
    isGoodAttribute = false;
    playSound = true;
});


register("guiOpened", (event) => {
    if (event.gui instanceof ChestInventory && toggle == true) {
        setTimeout(() => {
            let itemName = Player.getContainer().getStackInSlot(11).getLore();
            if (itemName && itemName.length > 0) {
                let combinedItemName = itemName.join(' ');
                let cleanedItemName = combinedItemName.replace(/[^a-zA-Z]/g, '');
                
                const allConditionsMet = (conditions) => {
                    return conditions.every(cond => cleanedItemName.includes(cond));
                };
            
                // Check for God Rolls
                for (let keyword in godRollConditions) {
                    if (cleanedItemName.includes(keyword)) {
                        if (allConditionsMet(godRollConditions[keyword])) {
                            shouldRender = true;
                            isGodRoll = true;
                            ChatLib.chat("God Roll");
                            break; // Exit loop once a match is found
                        }
                    }
                }
            
                // Check for Good Rolls
                for (let keyword in goodRollConditions) {
                    if (cleanedItemName.includes(keyword)) {
                        for (let conditionSet of goodRollConditions[keyword]) {
                            if (allConditionsMet(conditionSet)) {
                                shouldRender = true;
                                isGoodRoll = true;
                                ChatLib.chat("Good Roll");
                                break; // Exit loop once a match is found
                            }
                        }
                    }
                }

                if (cleanedItemName.includes("AttributeShard")) {
                    for (let attribute of goodAttributes["AttributeShard"]) {
                        if (cleanedItemName.includes(attribute)) {
                            shouldRender = true;
                            isGoodAttribute = true;
                            ChatLib.chat("Good Attribute");
                            break;
                        }
                    }
                }
            }
        }, 100); // GUI open happens before item Load
    }
});


register('renderOverlay', () => {
    if (!shouldRender) return;
    if (isGodRoll) {
        if (playSound == true) {
            loopSound()
            playSound = false;
        }
        Client.showTitle("§6God Roll                      ", "", 0, 30, 5);
    }
    if (isGoodRoll) {
        if (playSound == true) {
            loopSound()
            playSound = false;
        }
        Client.showTitle("§6Good Roll                        ", "", 0, 30, 5);
    }
    if (isGoodAttribute) {
        if (playSound == true) {
            loopSound();
            playSound = false;
        }
        Client.showTitle("§6Good Attribute                               ", "", 0, 30, 5);
    }
});

function loopSound() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            World.playSound("note.pling", 1, 1.782);
        }, i * 150); // 500 milliseconds delay between each sound
    }
}

/*
register("Toggle", () => {
    if (Player.getChatMessage().includes("/kn off")) {
        toggle = false;
        ChatLib.chat("Notification Toggled Off");
    }
    if (Player.getChatMessage().includes("/kn on")) {
        toggle = true;
        ChatLib.chat("Notification Toggled On");
    }
});
*/