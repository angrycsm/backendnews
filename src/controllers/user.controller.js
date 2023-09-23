const soma = (req, res) => {
    const soma = 100 + 1;

    res.send({ soma: soma })
}

export default { soma }