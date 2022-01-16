const parseActorPlatforms = ({ receiver, actors, actorPlatforms, key, body }) => {
  let actorPlatformsData = [];
  const {
    id,
    name,
    event_name = body.event_type,
    // user_email = body.user.email,  // dne
    // user_avatar = body.actor.links.avatar.href,  // dne
    // nickname  //dne 
  } = body.actor;
  const actorPlatform = {
    refId: body.actor.id,
    title: actors.length !== 0 ? actors[0].title : null,
    profilePics: '',
    actorId: actors.length !== 0 ? actors[0].id : null,
    actorUsername: actors.length !== 0 ? actors[0].username : null,
    platformKey: key,
    actorPlatformKey: `${body.actor.name}_${body.actor.id}_${key}`,
    data: {
      user_details: {
        id,
        name,
        event_name,
        // user_email,
        // user_avatar,
        // nickname
      },
      repository: { ...body.repository }
    }
  };
  actorPlatformsData.push(actorPlatform);
  return actorPlatformsData;
};

module.exports = { parseActorPlatforms };
