const notFound = (eq, res, nex) => {
    return res.status(404).json({ message: 'location not found' });
};
module.exports = {
    notFound
}