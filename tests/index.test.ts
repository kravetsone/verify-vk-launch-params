import { describe, expect, it } from "bun:test";
import { verifyLaunchParams } from "../src/index.ts";

describe("test", () => {
	it("test", () => {
		expect(1).toBe(1);
	});

	it("validate it", () => {
		const queryParams =
			"?vk_user_id=494075&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
		const clientSecret = "wvl68m4dR1UpLrVRli";

		const isValid = verifyLaunchParams(queryParams, clientSecret);

		expect(isValid).toBe(true);
	});

	it("validates", () => {
		const queryParams =
			"?vk_user_id=4940755&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
		const clientSecret = "wvl68m4dR1UpLrVRli";

		const isValid = verifyLaunchParams(queryParams, clientSecret);

		expect(isValid).toBe(true);
	});
});
