import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

export default {
  createService,
  findAllService,
};
