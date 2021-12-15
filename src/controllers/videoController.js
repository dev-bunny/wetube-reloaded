export const trending = (req, res) => res.send("Homepage Videos");
export const search = (req, res) => {
  res.send(`Search Video #${req.params.id}`);
};
export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => res.send(`Watch Video #${req.params.id}`);
export const edit = (req, res) => {
  return res.send(`Edit Video #${req.params.id}`);
};
export const deleteVideo = (req, res) => res.send("Delete Video");
