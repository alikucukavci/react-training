import React from 'react'
import img from "../assets/img/persons/maxence.png"
import imgGlass from "../assets/img/persons/maxence-glasses.png"


class ClickablePicture extends React.Component {
    state = {
            clicked: true,

        };

        handleClick = () => {
            console.log("click");
            this.setState({
                clicked: !this.state.clicked,
            });
        };
    
    
        render() {
            console.log("state: ", this.state);
            // console.log("props: ", this.props);
            // this.props.name = "Alfonso"; ❌ props are immutable (read-only)

            let str = "";
            if (this.state.clicked === true) {
                str = img;
                
            } else if (this.state.clicked === false) {
                str = imgGlass;
            }

        

    
            // this.setState({ liked: !this.state.liked }); ❌ infinite loop
    
            return (
                <div >
                    <img onClick={this.handleClick} src={str} alt="heeey"/>
                </div>
            )
        }
    }

export default ClickablePicture

