import { Pluralize } from "../src/index";

// Regular S
const ship: Pluralize<"ship"> = "ships";
const cats: Pluralize<"cat"> = "cats";

// Consonant Y replace Y ies
const bounties: Pluralize<"bounty"> = "bounties";
const repositories: Pluralize<"repository"> = "repositories";
const puppies: Pluralize<"puppy"> = "puppies";

// Ends in s ss sh ch x or z should end in es
const trusses: Pluralize<"truss"> = "trussses";
const buses: Pluralize<"bus"> = "busses"; // TODO: This is exception should be buses and moved into the es rule
const blitzes: Pluralize<"blitz"> = "blitzzes"; // TODO: this is exception should be blitzes

// Non Plural
const sheep: Pluralize<"sheep"> = "sheep";

// S or Z should be doubled and es
const fezzes: Pluralize<"fez"> = "fezzes";

// On to A
const phenomena: Pluralize<"phenomenon"> = "phenomena";

// O to Oes
const volcanoes: Pluralize<"volacano"> = "volacanoes";
const potatoes: Pluralize<"potato"> = "potatoes";
const photos: Pluralize<"photo"> = "photos";

// F or Fe to ves
const wolves: Pluralize<"wolf"> = "wolves";
const loaves: Pluralize<"loaf"> = "loaves";
const knives: Pluralize<"knife"> = "knives";
const thieves: Pluralize<"thief"> = "thieves";
// Should fix the exceptions of above rule: roof,belief, chief, chef

// Vowel then Y should end in S
const rays: Pluralize<"ray"> = "rays";

// Us should end with i
const fungi: Pluralize<"fungus"> = "fungusses"; // TODO: exception this should be fungi

// Is should be replaced with Es
const analyses: Pluralize<"analysis"> = "analysisses"; // TODO: exception this should be analyses
