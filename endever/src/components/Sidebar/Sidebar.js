import React, { Component  } from 'react';
import '../../fonts/fonts.css';
import './Sidebar.css';

import MatchMini from '../MatchMini/MatchMini';
import MessageMini from '../MessageMini/MessageMini';

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            sidebarDisplay: 'matches'
        }
    }
    componentDidMount() {
        if(this.props.callback) this.props.callback();
    }

    populateUserMatches = () => {

        //foreach match in database
        //return <MatchMini name={name} photoURL={photoURL} />
        //start message view on click

    }

    setMatchesView = () => {
        this.setState( { sidebarDisplay: 'matches' } );

    }

    setMessagesView = () => {
        this.setState( { sidebarDisplay: 'messages' } );
    }

    render() {
       
        let url = 'https://picsum.photos/98/98';
        return (
            <div className="Sidebar">
                <div className="Sidebar__Profile">
                    <div>O</div>
                    <div>My Profile</div>
                </div>

                <div className="Sidebar__Views">

                { this.state.sidebarDisplay === 'matches' ?
                    <>
                        <div className="MatchesViewLink active" onClick={this.setMatchesView}>Matches</div>
                        <div className="MessagesViewLink"onClick={this.setMessagesView}>Messages</div>
                    </>
                :
                <>
                    <div className="MatchesViewLink" onClick={this.setMatchesView}>Matches</div>
                    <div className="MessagesViewLink active"onClick={this.setMessagesView}>Messages</div>
                </>
                }
                
                </div>


            {this.state.sidebarDisplay === 'matches' ? 

                    <div className="Sidebar__Matches__Container">
                    <div className="Sidebar__Matches__Container__Mini">
                        <MatchMini name="Daniel" photoURL={url} /> 
                        <MatchMini name="Galen" photoURL={url} /> 
                        <MatchMini name="Shimin" photoURL={url} /> 
                        <MatchMini name="Roger" photoURL={url} /> 
                        <MatchMini name="Noah" photoURL={url} /> 
                        </div>
                    </div>

            : 
                
                <div className="Sidebar__Message__Container">
                    {/* <h1>Messages View</h1> */}
                        <MessageMini name="Daniel" photoURL={url} /> 
                        <MessageMini name="Galen" photoURL={url} /> 
                        <MessageMini name="Shimin" photoURL={url} /> 
                        <MessageMini name="Roger" photoURL={url} /> 
                        <MessageMini name="Noah" photoURL={url} /> 



                </div>    
            
            
            }


            </div>

        );
    }
}



export default Sidebar;