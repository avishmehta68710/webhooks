const { parseEvents } = require('./parseEvents');
const { parseActors } = require('./parseActors');
const { parseActorPlatforms } = require('./parseActorPlatforms');
const { size } = require('lodash');
const events = require('../../utils/events')
const KEY = 'zendesk';
const EVENTS = events.ZENDESKEVENTS;

const commonFilter = (actionFn) => {
  return (req, receiver, actors, actorPlatforms) => {
    let body = req.body;
    const events = EVENTS.includes(req.body.event);
    body = { ...body, event_type: req.body.event };
    if (events === false) {
      console.log(true);
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