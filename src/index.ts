import crypto from "node:crypto";
import type { LaunchParams } from "./types.ts";

const IS_BUN = typeof Bun !== "undefined";

// base64url
export const sha256Hash = IS_BUN
	? (hmacKey: string, input: string) =>
			new Bun.CryptoHasher("sha256", hmacKey).update(input).digest("base64url")
	: (hmacKey: string, input: string) =>
			crypto.createHmac("sha256", hmacKey).update(input).digest("base64url");

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

	return sha256Hash(secretKey, queryString) === sign;
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
