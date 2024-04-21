import { BASE_URL } from 'src/types/constants';
import { API_Response } from 'src/types/types';

export const fetcher = async ({
	page = 1,
	nameQuery = '',
}: {
	page?: number;
	nameQuery?: string;
}): Promise<API_Response | undefined> => {
	try {
		let url = `${BASE_URL}/people/`;
		if (page) url += `?page=${page}`;
		if (nameQuery) url += `&search=${encodeURIComponent(nameQuery)}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data: API_Response = await response.json();

		return data;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
	}

	return undefined; // Add a return statement to handle the case when an error occurs.
};
