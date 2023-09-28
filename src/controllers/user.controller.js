import userService from "../services/user.service.js";

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created",
    user: {
      id: user._id,
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
  });
};

export default { create };
