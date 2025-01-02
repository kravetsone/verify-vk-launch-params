# verify-vk-launch-params

[![npm](https://img.shields.io/npm/v/verify-vk-launch-params?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/verify-vk-launch-params)
[![npm downloads](https://img.shields.io/npm/dw/verify-vk-launch-params?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/verify-vk-launch-params)

# Usage

```ts
import { verifyAndParseLaunchParams } from "verify-vk-launch-params";

const launchParams =
    "?vk_user_id=4940751&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
const APP_SECRET_KEY = "wvl68m4dR1UpLrVRli";

const result = verifyAndParseLaunchParams(launchParams);

console.log(result ? "launch params is valid" : "launch params is invalid");
```
