// Adapted from https://github.com/VKCOM/vk-bridge/blob/9646819f545f77bd6d72122368b69fe2d76fdf0e/packages/core/src/types/data.ts#L1045

type LaunchParamsLanguages =
	| "ru"
	| "uk"
	| "ua"
	| "en"
	| "be"
	| "kz"
	| "pt"
	| "es";

type LaunchParamsGroupRole = "admin" | "editor" | "member" | "moder" | "none";

type LaunchParamsPlatforms =
	| "desktop_web"
	| "desktop_web_messenger"
	| "desktop_app_messenger"
	| "mobile_web"
	| "mobile_android"
	| "mobile_android_messenger"
	| "mobile_iphone"
	| "mobile_iphone_messenger"
	| "mobile_ipad";

export interface LaunchParams {
	vk_user_id: number;
	vk_app_id: number;
	vk_is_app_user: 0 | 1;
	vk_are_notifications_enabled: 0 | 1;
	vk_language: LaunchParamsLanguages;
	vk_ref: string;
	vk_access_token_settings: string;
	vk_group_id?: number;
	vk_viewer_group_role?: LaunchParamsGroupRole;
	vk_platform: LaunchParamsPlatforms;
	vk_is_favorite: 0 | 1;
	vk_ts: number;
	sign: string;
}
