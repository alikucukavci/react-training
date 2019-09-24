import React from 'react'

    class LikeButton extends React.Component {
        state = {
            liked: false,
            num: 0
        };

        handleClick = () => {
            console.log("click");
            this.setState({
                liked: !this.state.liked,
                num: this.state.num + 1
            });
        };
    
    
        render() {
            console.log("state: ", this.state);
            // console.log("props: ", this.props);
            // this.props.name = "Alfonso"; ❌ props are immutable (read-only)

            let str = "";
            if (this.state.num === 0) {
                str = "Like";
                
            } else if (this.state.num !== 0) {
                str = "Likes";
            }

        

    
            // this.setState({ liked: !this.state.liked }); ❌ infinite loop
    
            return (
                <div >
                    <button style={
                        {
                            "background-color": `hsl(${this.state.num < 360 ? this.state.num*20: 0},50%,50%)`,
                            "border-width": "0px",
                            "padding": "20px"
                
                
                        }
        } onClick={this.handleClick}>{this.state.num}{str}</button>
                </div>
            )
        }
    }

export default LikeButton
