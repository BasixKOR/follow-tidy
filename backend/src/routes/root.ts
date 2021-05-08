import {FastifyPluginAsync} from 'fastify';

const root: FastifyPluginAsync = async (fastify, options): Promise<void> => {
	fastify.get('/', async (request, reply) => {
		return {root: true};
	});
};

export default root;