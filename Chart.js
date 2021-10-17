const d3 = window.d3;
export default class Chart {
	constructor( props ){
		this.id      = ( props.id || "D3_CHART" );
		this.margin  = {
			top    : ( props.topMargin    || 20 ),
			right  : ( props.rightMargin  || 20 ),
			bottom : ( props.bottomMargin || 20 ),
			left   : ( props.leftMargin   || 20 )
		}
		this.width = ( props.width || window.screen.availWidth )
			-this.margin.left
			-this.margin.right;
		this.height = ( props.height || window.screen.availHeight )
			-this.margin.top
			-this.margin.bottom
			-300;
		this.canvas = null;
		this.SVG = null;
		this.create = this.create.bind( this );
		this.destroy = this.destroy.bind( this );
	}
	create( canvasNode, data = [], otherProps = {} ){
		return new Promise( ( res, rej ) => {
			rej( "Children of Chart must have a create method" );
		} );
	}
	update( data = [] ){
		return new Promise( ( res, rej ) => {
			rej( "Children of Chart must have an update method" );
		} )
	}
	destroy(){
		return new Promise( ( res, rej ) => {
			d3.select( this.canvas )
			  .selectAll( "*" )
				.remove()
				.on( "end", res );
		});
	}
}
