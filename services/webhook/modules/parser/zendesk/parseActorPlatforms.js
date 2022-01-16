const parseActorPlatforms = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorPlatformsData = [];
  const {
    name,
    event_name = body.event,
    email,
    // user_avatar = body.user.avatar_url,
    // user_username = body.user.username 
  } = body.ticket;
  const actorPlatform = {
    refId: body.ticket.id,
    title: actors.length !== 0 ? actors[0].title : null,
    profilePics: '',
    actorId: actors.length !== 0 ? actors[0].id : null,
    actorUsername: actors.length !== 0 ? actors[0].username : null,
    platformKey: key,
    actorPlatformKey: `${body.ticket.assignee.email}_${key}`,
    data: {
      user_details: {
        // user_id,
        name,
        event_name,
        email,
        // user_avatar,
        // user_username
      },
      repository: { ...body.repository }
    }
  };
  actorPlatformsData.push(actorPlatform);
  return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
