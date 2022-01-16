const { EVENT_TYPES } = require('../../utils/constant');
function parseEvents({ receiver, actors, actorPlatforms, key, body }) {
  let message;
  let data;
  let eventType;
  const { ticket } = body;
  switch (body.event) {
    case 'ticket_solved':
      data = { ticket };
      eventType = EVENT_TYPES.SOLVED;
      message = `Ticket has been solved by ${body.ticket.assignee.name}`;
      break;
    default:
      message = 'New event';
  }
  const events = [];
  const event = {
    platformKey: key,
    eventType: eventType,
    data,
    receiverId: receiver.id,
    actorId: actors.length !== 0 ? actors[0].id : null,
    actorPlatformId: actorPlatforms[0].id,
    message,
  };

  events.push(event);
  return events;
}
module.exports = { parseEvents };