const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorsData = [];
  const actor = {
    email: '',
    title: body.sender.type,
    profilePics: body.sender.avatar_url,
    username: body.sender.login,
  }
  actorsData.push(actor);
  return actorsData;
};

module.exports = { parseActors };