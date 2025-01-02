import crypto from "node:crypto";
import type { LaunchParams } from "./types.ts";

/**
 * Верифицирует параметры запуска.
 */
export function verifyLaunchParams(
	queryStringRaw: string,
	secretKey: string,
): boolean {
	const urlParams = new URLSearchParams(queryStringRaw);
	const sign = urlParams.get("sign");

	if (!sign || urlParams.size === 0) return false;

	urlParams.delete("sign");

	const queryString = Array.from(urlParams.entries())
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join("&");

	const paramsHash = crypto
		.createHmac("sha256", secretKey)
		.update(queryString)
		.digest()
		.toString("base64")
		// Why VK need this...
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=$/, "");

	return paramsHash === sign;
}

export function parseLaunchParams(queryStringRaw: string): LaunchParams {
	const urlParams = new URLSearchParams(queryStringRaw);

	return Object.fromEntries(urlParams.entries()) as unknown as LaunchParams;
}

export function verifyAndParseLaunchParams(
	queryStringRaw: string,
	secretKey: string,
): LaunchParams | false {
	// TODO: optimize by reusing parsed queryStringRaw data
	return verifyLaunchParams(queryStringRaw, secretKey)
		? parseLaunchParams(queryStringRaw)
		: false;
}
