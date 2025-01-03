# vk-launch-params

[![npm](https://img.shields.io/npm/v/vk-launch-params?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/vk-launch-params)
[![npm downloads](https://img.shields.io/npm/dw/vk-launch-params?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/vk-launch-params)

Более чистая и производительная имплементация [проверки подписи параметров запуска VK Mini App](https://dev.vk.com/ru/mini-apps/development/launch-params-sign) упакованная в библиотеку.
Включает в себя [параметры покрытые **TypeScript** типами](https://dev.vk.com/ru/mini-apps/development/launch-params#%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8C%20%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2) которые собираются из query-строки.

# Использование

```ts
import { verifyAndParseLaunchParams } from "vk-launch-params";

const launchParams =
    "?vk_user_id=4940751&vk_app_id=6736218&vk_is_app_user=1&vk_are_notifications_enabled=1&vk_language=ru&vk_access_token_settings=&vk_platform=android&sign=htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA";
const APP_SECRET_KEY = "wvl68m4dR1UpLrVRli";

const result = verifyAndParseLaunchParams(launchParams);

if (!result) {
    console.error("launch params is invalid");
} else console.log(result);
// {
//   vk_user_id: 494075,
//   vk_app_id: 6736218,
//   vk_is_app_user: true,
//   vk_are_notifications_enabled: true,
//   vk_language: "ru",
//   vk_access_token_settings: "",
//   vk_platform: "android",
//   sign: "htQFduJpLxz7ribXRZpDFUH-XEUhC9rBPTJkjUFEkRA",
//   vk_is_favorite: false,
// }
```
