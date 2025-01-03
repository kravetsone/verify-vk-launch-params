// Adapted from https://github.com/VKCOM/vk-bridge/blob/9646819f545f77bd6d72122368b69fe2d76fdf0e/packages/core/src/types/data.ts#L1045

export type LaunchParamsLanguages =
	| "ru"
	| "uk"
	| "ua"
	| "en"
	| "be"
	| "kz"
	| "pt"
	| "es";

export type LaunchParamsGroupRole =
	| "admin"
	| "editor"
	| "member"
	| "moder"
	| "none";

export type LaunchParamsPlatforms =
	| "desktop_web"
	| "desktop_web_messenger"
	| "desktop_app_messenger"
	| "mobile_web"
	| "mobile_android"
	| "mobile_android_messenger"
	| "mobile_iphone"
	| "mobile_iphone_messenger"
	| "mobile_ipad";

// TODO: Лучше свериться с https://dev.vk.com/ru/mini-apps/development/launch-params#%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8C%20%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2
export interface LaunchParams {
	vk_user_id: number;
	vk_app_id: number;
	// edited from  0 | 1
	vk_is_app_user: boolean;
	// edited from  0 | 1
	vk_are_notifications_enabled: boolean;
	vk_language: LaunchParamsLanguages;
	vk_ref: string;
	vk_access_token_settings: string;
	vk_group_id?: number;
	vk_viewer_group_role?: LaunchParamsGroupRole;
	vk_platform: LaunchParamsPlatforms;
	// edited from  0 | 1
	vk_is_favorite: boolean;
	vk_ts: number;
	sign: string;
}
