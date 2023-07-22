import { PROJECT_API_URL } from '@/constants/project';
import { axios } from '@/plugins/axios';

export default {
  async getMany(_) {
    return await axios.get(PROJECT_API_URL.GET_MANY());
  },
  async getOne(_, { id }) {
    return await axios.get(PROJECT_API_URL.GET_ONE(id));
  },
  async createOne(_, { body }) {
    return await axios.post(PROJECT_API_URL.CREATE_ONE(), body);
  },
  async updateOne(_, { body, id }) {
    return await axios.put(PROJECT_API_URL.UPDATE_ONE(id), body);
  },
  async deleteOne(_, { id }) {
    return await axios.delete(PROJECT_API_URL.DELETE_ONE(id));
  },
};
