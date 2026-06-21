// Edit-once support address. Override at build time with PUBLIC_SUPPORT_EMAIL
// (e.g. `vercel env add PUBLIC_SUPPORT_EMAIL`, or a Cloudflare Pages build var).
// Used by `<MailLink />` and the Contact page, so swapping the address here
// updates every mailto link in the docs.
export const SUPPORT_EMAIL: string =
	import.meta.env.PUBLIC_SUPPORT_EMAIL ?? 'progresswithpuello@gmail.com';

export const SUPPORT_MAILTO: string = `mailto:${SUPPORT_EMAIL}`;
