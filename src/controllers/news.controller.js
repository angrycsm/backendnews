import newsService from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      return res
        .status(400)
        .send({ message: "Submit all fields for registration" });
    }

    await newsService.createService({
      title,
      text,
      banner,
      user: { _id: "" },
    });

    res.stauts(201).send({ message: "Post Created" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  const news = await newsService.findAllService();

  if (news.length === 0) {
    return res.status(400).send({ message: "Não há postagens" });
  }

  res.send(news);
};

export default { create, findAll };
