const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { size } = require('lodash');
const events = require('../../utils/events')
const KEY = 'github';
const EVENTS = events.GITHUBEVENTS;

const commonFilter = (actionFn) => {
  return (req, receiver, actors, actorPlatforms) => {
    let body = req.body;
    const headers = req.rawHeaders;
    const events = headers.filter(event => EVENTS.includes(event));
    body = { ...body, event_type: events[events.length - 1] };
    if (size(events) === 0) {
      return [];
    }
    return actionFn({
      receiver,
      actors,
      actorPlatforms,
      key: KEY,
      body
    });
  };
};


module.exports = {
  KEY,
  EVENTS,
  parseEvents: commonFilter(parseEvents),
  parseActors: commonFilter(parseActors),
  parseActorPlatforms: commonFilter(parseActorPlatforms),
};