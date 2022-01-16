const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorsData = [];
  const actor = {
    email: '',  // dne
    title: body.actor.type,
    profilePics: '',  // dne
    username: body.actor.name,
  }
  actorsData.push(actor);
  return actorsData;
};

module.exports = { parseActors };