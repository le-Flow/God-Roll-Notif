// rollConditions.js

const godRollConditions = {
    "Aurora": ["ManaPool", "ManaRegeneration"],
    "Crimson": ["MagicFind", "Veteran"],
    "Terror": ["Lifeline", "ManaPool"],
    "MoltenBelt" : ["Lifeline", "ManaPool"],
    "MoltenBracelet": ["Lifeline", "ManaPool"],
    "MoltenCloak": ["Lifeline", "ManaPool"],
    "MoltenNecklace": ["ManaPool", "ManaRegeneration"],
};

const goodRollConditions = {
    "Aurora": [
        ["Breeze", "Veteran"],
        ["ManaPool", "Vitality"],
        ["ManaPool", "UndeadResistance"],
        ["ManaPool", "Vitality"],
        ["ManaPool", "Breeze"],
    ],
    "Crimson": [
        ["Vitality", "Veteran"],
        ["ManaPool", "Veteran"],
        ["MagicFind", "Vitality"],
    ],
    "Terror": [
        ["Dominance", "Vitality"],
        ["Dominance", "ManaPool"],
    ],
    "Hollow": [
        ["ManaPool", "ManaRegeneration"],
    ],
    "MoltenBelt": [
        ["Dominance", "Speed"],
        ["MagicFind", "Vitality"],
        ["MagicFind", "Veteran"],
    ],
    "MoltenBracelet": [
        ["MagicFind", "Vitality"],
        ["MagicFind", "Veteran"],
    ],
    "MoltenCloak": [
        ["ManaPool", "ManaRegeneration"],
        ["MagicFind", "Veteran"],
        ["Dominance", "ManaPool"],
        ["ManaRegeneration", "Veteran"],
        ["Breeze", "Veteran"],
        ["ManaPool", "Veteran"],
        ["MagicFind", "Vitality"],
        ["ManaPool", "Vitality"],
    ],
    "MoltenNecklace": [
        ["Dominance", "Speed"],
        ["Lifeline", "ManaPool"],
        ["Dominance", "ManaPool"],
        ["ManaRegeneration", "Veteran"],
        ["Breeze", "Veteran"],
        ["ManaPool", "Veteran"],
        ["ManaPool", "Vitality"],
        ["MagicFind", "Vitality"],
    ],
};

const goodAttributes = {
    "AttributeShard": ["ManaPool", "MagicFind", "Veteran", "BlazingFortune", "Dominance"],
};

// Export the conditions
module.exports = { godRollConditions, goodRollConditions, goodAttributes };
