import React, {Component} from 'react';
import Post from 'react-instagram-embed';
import './feed.scss'

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {
        fetch("http://remonteka.d/api/reviews")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div className='posts'>
                {this.state.items.map((item, i) => {
                    return <Post align='center'
                          url={ 'https://www.instagram.com/p/'+item.code }
                          protocol=''
                          containerTagName='div'
                          className='post'
                          key={item.code}
                    />
                    // return <section key={item.id} dangerouslySetInnerHTML={{__html: JSON.parse(item.value)}}/>;
                })}
            </div>
        );
    };
}


export default Feed;