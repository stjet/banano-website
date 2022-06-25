import { fixMediumLinks } from '$lib/ts/helpers/ghost/admin';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params, request }) => {
	try {
		const res = await fixMediumLinks();
		return {
			status: 200,
			body: { data: res }
		};
	} catch (error) {
		console.log(error);
		return {
			status: 404,
			body: { error: String(error) }
		};
	}
};
