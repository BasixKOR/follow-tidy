import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from 'utils/sample-data';

const handler = (_request: NextApiRequest, response: NextApiResponse) => {
	try {
		if (!Array.isArray(sampleUserData)) {
			throw new TypeError('Cannot find user data');
		}

		response.status(200).json(sampleUserData);
	} catch (error: unknown) {
		if (error instanceof Error)
			response.status(500).json({ statusCode: 500, message: error.message });
		else response.status(500).end();
	}
};

export default handler;
