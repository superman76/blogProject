var TwitterCard = React.createClass ({
	render: function() {
		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-header">
						<img src={this.props.profile_img} className="img-thumbnail" />
						<p classname="text-center">{this.props.screen_name}</p>
					</div>
					<div className="panel-body">
						<h3 className="text-center"> {this.props.text} </h3>
					</div>
					<div className="panel-footer">	
						{this.props.created_at}
					</div>
				</div>
			</div>
			)
	}
})