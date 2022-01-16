const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorsData = [];
  const actor = {
    email: body.ticket.assignee.email,
    title: body.ticket.title || '',
    profilePics: '',
    username: body.ticket.assignee.name,
  }
  actorsData.push(actor);
  return actorsData;
};

module.exports = { parseActors };