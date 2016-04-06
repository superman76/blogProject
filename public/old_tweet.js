var TwitterCard = React.createClass({
	getInitialState: function() {
		return {
			tweets: []
		}
	},
	loadTweetsFromServer: function() {
		 var self = this;
		 $.ajax({
		 	url: '/api/tweets/griz',
		 	method: 'GET'
		 }).done(function(data) {
		 	// console.log('data object in ajax success:', data);
		 	self.setState({tweets: data})
		 })
	},
	componentDidMount: function() {
		 this.loadTweetsFromServer()
	},

	render: function(){

		console.log(this.state.tweets)

		var twitterCards = this.state.tweets.map(function(tweet){
		return (
        <div className="media col-sm-3">
          <div className="media-left">
            <a href="#">
              <img className="img-circle" src={ tweet.user.profile_image_url } alt="..."/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ tweet.user.screen_name }</h4>
            <p>{ tweet.text }</p>
            <p>{ tweet.created_at }</p>
          </div>
        </div>
      )
    })
    return (
        <div>
          { twitterCards }
        </div>
      )
  }
});


React.render(<TwitterCard/>,
	document.getElementById('twitter-card'));