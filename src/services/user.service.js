import User from "../models/User.js";

const createService = (body) => User.create(body);

export default {
  createService,
};
