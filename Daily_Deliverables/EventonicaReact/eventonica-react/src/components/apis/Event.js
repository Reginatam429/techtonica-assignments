import React, { Component } from 'react';

const Event = (props) => {
    const { event } = props;

  return (
    <div className="col-md-6">
        <div className="card.mb-4.shadow-sm">
            <div className="card-body">
               <h5>{event.name}</h5> 
               <p className="card-text">
                 <strong>Date: {event.dates.start.dateTime}</strong>
               </p>

               <p className="card-text">
                 <strong>Location: {event._embedded.venues[0].name}</strong>
               </p>
               <img src={event.images[2].url} />
            </div>
        </div>
    </div>
  )
}

export default Event;