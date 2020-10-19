import { Card, CardContent, Typography } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Message.css'
import moment from 'moment';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    
    return (
        <div ref={ref} className={`message_card ${isUser && 'message_user'}`}>
           
           <div className="message_userName">
            <p> {!isUser && `${message.username || 'Unknown User'}  `} </p>
            </div>

            <Card className={isUser? 'message_userCard' : 'message_guestCard' }>
                <CardContent>
                    <Typography className="mesage_text" color="inherit" variant="h5" component="h2">
                    {message.text}
                    </Typography>
                </CardContent>
            </Card>
          

            <div className="message_date">
                {!isUser && moment(message.timestamp.toDate()).format('MMMM Do YYYY, h:mm a')}
            </div>
                
            </div>
            
            

       
    )
});

export default Message;
