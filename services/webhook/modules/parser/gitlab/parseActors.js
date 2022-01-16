const parseActors = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorsData = [];
  const actor = {
    email: body.user_email === '' ? '' : body.user_email ? body.user_email : body.user.email,
    title: body.user_title || '',
    profilePics: body.user_avatar || body.user.avatar_url,
    username: body.user_username || body.user.username
  }
  actorsData.push(actor);
  return actorsData;
};

module.exports = { parseActors };