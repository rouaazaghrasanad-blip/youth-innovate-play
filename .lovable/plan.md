# النشر المجاني: Lovable الآن + تجهيز Vercel

نعم، الموقع بيشتغل على Vercel المجاني (Hobby) بدون مشاكل: صفحة هبوط بدون قاعدة بيانات ولا وظائف سيرفر ثقيلة.

## الخطة

1. **نشر فوري من Lovable** — رابط مجاني `.lovable.app` خلال دقيقة، بدون أي إعداد ولا حساب GitHub.
2. **تجهيز المشروع لـ Vercel** — تعديل هدف البناء من Cloudflare إلى Vercel، وإضافة ملاحظات النشر في `README.md`.
3. **خطوات الربط** — أشرح لك كيف تربط الريبو من GitHub بـ Vercel (استيراد المشروع، بدون متغيرات بيئة لأنه ما في باكيند).

## التفاصيل التقنية

- `vite.config.ts`: تمرير خيار Nitro بهدف `vercel` بدل الافتراضي `cloudflare` عبر `defineConfig({ nitro: { preset: "vercel" } })`، مع إبقاء `tanstackStart.server.entry`.
- ما في حاجة لـ `vercel.json` ولا إعادة توجيه — التوجيه يُدار عبر مخرجات Nitro.
- أوامر Vercel: Build = `npm run build`، Output = تلقائي من preset.
- ما رح أمس أي كود واجهة أو محتوى (`src/lib/content.ts` كما هو).

## ملاحظة

Cloudflare و Vercel هدفان مختلفان في نفس الملف؛ إذا فعّلنا Vercel فالنشر من Lovable يبقى شغّال لكن الأفضل نثبّت خيار واحد للإنتاج. أقترح: ننشر على Lovable الآن، ونضيف إعداد Vercel كخيار جاهز تفعّله وقت تحتاجه.
