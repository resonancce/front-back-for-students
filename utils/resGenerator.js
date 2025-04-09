const resGenerator = (res, status, send) => res.status(status).send(send);

module.exports = resGenerator;
