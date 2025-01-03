import { bench, run, summary } from "mitata";
import {
	parseLaunchParams,
	verifyAndParseLaunchParams,
	verifyLaunchParams,
} from "../src/index.ts";

const queryString =
	"user=%7B%22id%22%3A617580375%2C%22first_name%22%3A%22kravets%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22noname2544%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-431068947458840694&chat_type=private&auth_date=1723409203&hash=5854de54c66e52cba3e438dd61658406c9f0216d8c783f9e9af80f514692273b";

const secretToken = "wvl68m4dR1UpLrVRli";

summary(() => {
	bench("verifyAndParseLaunchParams", () => {
		verifyAndParseLaunchParams(queryString, secretToken);
	});

	bench("verifyLaunchParams", () => {
		verifyLaunchParams(queryString, secretToken);
	});
	bench("parseLaunchParams", () => {
		parseLaunchParams(queryString);
	});
});

await run();

// !NODE
// clk: ~3.92 GHz
// cpu: AMD Ryzen 7 7700 8-Core Processor
// runtime: node 22.10.0 (x64-win32)

// benchmark                   avg (min … max) p75   p99    (min … top 1%)
// ------------------------------------------- -------------------------------
// verifyAndParseLaunchParams     1.62 µs/iter   1.84 µs  █
//                         (1.41 µs … 2.46 µs)   2.45 µs ██▅▄▂▁▁▁▂▃▂▃▃▂▁▁▁▁▁▁▁
// verifyLaunchParams             1.61 µs/iter   1.83 µs ▃█
//                         (1.40 µs … 2.44 µs)   2.39 µs ██▆▃▃▃▁▁▁▄▃▄▃▃▂▂▁▁▁▁▂
// parseLaunchParams              2.55 µs/iter   2.78 µs ▃█
//                         (2.32 µs … 2.98 µs)   2.92 µs ███▄▆▅▂▁▂▁▁▁▂▄▄▆█▅▁▄▄

// summary
//   verifyLaunchParams
//    1.01x faster than verifyAndParseLaunchParams
//    1.59x faster than parseLaunchParams

// !BUN
// clk: ~3.48 GHz
// cpu: AMD Ryzen 7 7700 8-Core Processor
// runtime: bun 1.1.42 (x64-win32)

// benchmark                   avg (min … max) p75   p99    (min … top 1%)
// ------------------------------------------- -------------------------------
// verifyAndParseLaunchParams     2.46 µs/iter   2.47 µs  █
//                         (2.36 µs … 2.98 µs)   2.80 µs ▄█▇███▃▅▄▂▁▁▂▂▁▁▁▁▁▂▂
// verifyLaunchParams             2.43 µs/iter   2.45 µs    ▇ ▇█
//                         (2.35 µs … 2.60 µs)   2.59 µs ▄▄▅█▅██▅▄█▁▅▂▁▂▂▁▁▂▂▂
// parseLaunchParams              3.31 µs/iter   3.40 µs   █
//                         (3.12 µs … 3.79 µs)   3.64 µs ▃██▃██▁█▅▅▃█▃▃▅▃▁▁▁▃▅

// summary
//   verifyLaunchParams
//    1.01x faster than verifyAndParseLaunchParams
//    1.36x faster than parseLaunchParams
