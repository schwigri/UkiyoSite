import {
	TranslationString,
	enUsTranslations,
} from "../../constants/translation";
import { getTranslation, insertDynamicValues } from "../translation";
import { Locale } from "../../constants/localization";

describe("getTranslation()", () => {
	it("should return a translated string", () => {
		const result = getTranslation(TranslationString.Untitled, Locale.enUs);
		expect(result).toBe(enUsTranslations[TranslationString.Untitled]);
	});
});

describe("insertDynamicValues()", () => {
	it("should not alter strings without placeholders", () => {
		const result = insertDynamicValues("this is a test string");
		expect(result).toBe("this is a test string");
	});

	it("should replace placeholders with values", () => {
		const result = insertDynamicValues("hi, my name is {name}", {
			name: "jest",
		});
		expect(result).toBe("hi, my name is jest");
	});

	it("should thrown an error if there is missing values", () => {
		const test = () => {
			return insertDynamicValues("hi, my name is {name}", {
				lang: "English",
			});
		};
		expect(test).toThrow("missing value for name");
	});
});
