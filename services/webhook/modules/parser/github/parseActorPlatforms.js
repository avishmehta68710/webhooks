const parseActorPlatforms = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorPlatformsData = [];
  const { id,
    // user_name = body.pusher.name,
    event_name = body.action,
    // user_email = body.pusher.email,
    avatar_url,
    login } = body.sender;
  const actorPlatform = {
    refId: body.sender.id,
    title: actors.length !== 0 ? actors[0].title : null,
    profilePics: body.sender.avatar_url,
    actorId: actors.length !== 0 ? actors[0].id : null,
    actorUsername: actors.length !== 0 ? actors[0].username : null,
    platformKey: key,
    actorPlatformKey: `${body.sender.login}_${key}`,
    data: {
      user_details: {
        id,
        // user_name,
        event_name,
        // user_email,
        avatar_url,
        login,
      },
      repository: { ...body.repository }
    }
  };
  actorPlatformsData.push(actorPlatform);
  return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
