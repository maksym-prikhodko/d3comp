import React from "react"
export default class D3Canvas extends React.Component {
	constructor( props ){
		super( props );
		this._props = { ...props };
		delete this._props.data;  
		delete this._props.chart; 
		this.id = ( props.id || Math.round( ( new Date() ).getTime() ) );
		this.data = ( props.data ? props.data : [] );
		this.chart = ( props.chart ? new props.chart( this._props ) : null );
	}
	componentDidMount(){
		if( this.chart === null )
			throw new Error( "No chart provided to the D3Canvas" );
		this.chart.create(
			this._rootNode,
			this.data,
			this._props 
		);
	}
	componentWillUnmount(){
		this.chart.destroy();
	}
	shouldComponentUpdate( newProps, newState ){
		if( this.data !== newProps.data ){
			this.data = newProps.data;
			this.chart.update( this.data ).catch( err => console.error( err ) );
		}
		return false; 
	}
	_setRef( componentNode ){
		this._rootNode = componentNode;
	}
	render(){
		return(
			<div id={this.id} className="d3-canvas" ref={this._setRef.bind( this )} />
		);
	}
}
