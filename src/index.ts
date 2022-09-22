type ConsonantLetters =
  | "b"
  | "c"
  | "d"
  | "f"
  | "g"
  | "h"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
type VowelLetters = "a" | "i" | "e" | "o" | "u";

type NonPlurlaized<Target extends string> = Target extends
  | "sheep"
  | "series"
  | "species"
  | "deer"
  ? Target
  : never;

type PluralizeEndingInOn<Target extends string> =
  Target extends `${infer Base extends string}on` ? `${Base}a` : never;

type PluralizeEndingInIs<Target extends string> =
  Target extends `${infer Base extends string}is` ? `${Base}es` : never;

type PluralizeEndingInUs<Target extends string> =
  Target extends `${infer Base extends string}us` ? `${Base}i` : never;

type PluralizeEndingInO<Target extends string> = Target extends `${string}o`
  ? Target extends "photo" | "piano" | "halo"
    ? `${Target}s`
    : `${Target}es`
  : never;

type PluralizeEndingInVowelY<Target extends string> =
  Target extends `${string}${VowelLetters}y` ? `${Target}s` : never;

type PluralizeEndingInConsonantY<Target extends string> =
  Target extends `${infer Base extends string}${infer Cons extends ConsonantLetters[number]}y`
    ? `${Base}${Cons}ies`
    : never;

type PluralizeEndingInFOrFe<Target extends string> =
  Target extends `${infer Base extends string}${"f" | "fe"}`
    ? `${Base}ves`
    : never;

type PluralizeEndingInS<Target extends string> =
  Target extends `${infer Base extends string}s` ? `${Base}sses` : never;
type PluralizeEndingInZ<Target extends string> =
  Target extends `${infer Base extends string}z` ? `${Base}zzes` : never;

type PluralizeShouldEndWithEs<Target extends string> =
  Target extends `${string}${"s" | "ss" | "sh" | "ch" | "x" | "z"}`
    ? `${Target}es`
    : never;

type PluralizeJustAddS<Target extends string> = Target extends string
  ? `${Target}s`
  : never;

export type Pluralize<Target extends string> =
  NonPlurlaized<Target> extends never
    ? PluralizeEndingInVowelY<Target> extends never
      ? PluralizeEndingInConsonantY<Target> extends never
        ? PluralizeEndingInOn<Target> extends never
          ? PluralizeEndingInIs<Target> extends never
            ? PluralizeEndingInUs<Target> extends never
              ? PluralizeShouldEndWithEs<Target> extends never
                ? PluralizeEndingInFOrFe<Target> extends never
                  ? PluralizeEndingInS<Target> extends never
                    ? PluralizeEndingInZ<Target> extends never
                      ? PluralizeEndingInO<Target> extends never
                        ? PluralizeJustAddS<Target> extends never
                          ? never
                          : PluralizeJustAddS<Target>
                        : PluralizeEndingInO<Target>
                      : PluralizeEndingInZ<Target>
                    : PluralizeEndingInS<Target>
                  : PluralizeEndingInFOrFe<Target>
                : PluralizeShouldEndWithEs<Target>
              : PluralizeEndingInUs<Target>
            : PluralizeEndingInIs<Target>
          : PluralizeEndingInOn<Target>
        : PluralizeEndingInConsonantY<Target>
      : PluralizeEndingInVowelY<Target>
    : NonPlurlaized<Target>;
