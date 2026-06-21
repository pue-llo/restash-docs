// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Support email shown in mailto links and the Contact page. Override at
// build time with PUBLIC_SUPPORT_EMAIL; the default lives in src/config/site.ts
// for runtime use, but Starlight's `head` tag wants the literal too.
const SUPPORT_EMAIL =
	process.env.PUBLIC_SUPPORT_EMAIL ?? 'progresswithpuello@gmail.com';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.cfacryptopro.com',
	integrations: [
		starlight({
			title: 'Restash docs',
			description:
				'Install, activate, and troubleshoot Restash — the stash + paste utility for macOS.',
			head: [
				{
					tag: 'meta',
					attrs: { name: 'support-email', content: SUPPORT_EMAIL },
				},
			],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Install Restash on macOS', slug: 'getting-started/install' },
						{
							label: 'Granting Accessibility permission',
							slug: 'getting-started/accessibility-permission',
						},
						{
							label: 'Activate your license',
							slug: 'getting-started/activate-your-license',
						},
					],
				},
				{
					label: 'Troubleshooting',
					items: [
						{
							label: '"Restash is damaged" / won\'t open',
							slug: 'troubleshooting/app-wont-open',
						},
						{
							label: 'Accessibility prompt didn\'t appear',
							slug: 'troubleshooting/accessibility-prompt',
						},
						{
							label: 'License key not accepted',
							slug: 'troubleshooting/license-key-not-accepted',
						},
						{
							label: 'Clean reinstall / update failed',
							slug: 'troubleshooting/update-or-reinstall',
						},
						{ label: 'Sending us your logs', slug: 'troubleshooting/logs' },
					],
				},
				{
					label: 'Billing & licenses',
					items: [
						{ label: 'Finding your license key', slug: 'billing/find-your-license' },
						{ label: 'Moving Restash to a new Mac', slug: 'billing/move-to-new-mac' },
						{ label: 'Refund policy', slug: 'billing/refund-policy' },
					],
				},
				{ label: 'Known issues', slug: 'known-issues' },
				{ label: 'Contact support', slug: 'contact' },
			],
		}),
	],
});
