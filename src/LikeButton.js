'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            e.style.display = "none";
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Nouvelle notification sur le site de projet : APP2'
        );
    }
}

const domContainer = document.querySelector('#likeButtonContainer');
ReactDOM.render(e(LikeButton), domContainer);