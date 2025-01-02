import { describe, expect, it } from "bun:test";
import {
	parseLaunchParams,
	verifyAndParseLaunchParams,
	verifyLaunchParams,
} from "../src/index.ts";

describe("test", () => {
	it("verifyLaunchParams - return true on valid", () => {
		const queryParams =
			"?vk_user_id=494075&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
		const clientSecret = "wvl68m4dR1UpLrVRli";

		const isValid = verifyLaunchParams(queryParams, clientSecret);

		expect(isValid).toBe(true);
	});

	it("verifyLaunchParams - return false on invalid", () => {
		const queryParams =
			"?vk_user_id=4940755&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
		const clientSecret = "wvl68m4dR1UpLrVRli";

		const isValid = verifyLaunchParams(queryParams, clientSecret);

		expect(isValid).toBe(false);
	});
});

describe("parseLaunchParams", () => {
	it("parseLaunchParams - return object", () => {
		const queryParams =
			"?vk_user_id=494075&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";

		const result = parseLaunchParams(queryParams);

		console.log(result);

		expect(typeof result).toBe("object");
	});
});

describe("verifyAndParseLaunchParams", () => {
	it("verifyAndParseLaunchParams - return object", () => {
		const launchParams =
			"?vk_user_id=494075&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";

		const result = verifyAndParseLaunchParams(
			launchParams,
			"wvl68m4dR1UpLrVRli",
		);

		expect(typeof result).toBe("object");
	});

	it("verifyAndParseLaunchParams - return false", () => {
		const launchParams =
			"?vk_user_id=4940751&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";

		const result = verifyAndParseLaunchParams(
			launchParams,
			"wvl68m4dR1UpLrVRli",
		);

		expect(result).toBe(false);
	});
});
