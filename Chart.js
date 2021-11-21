export default class Chart {
	constructor( props = {} ){
		if( !window.d3 )
			throw new Error( "D3 is not loaded" );
		if( !props.id )
			throw new Error( "id property is required" );
		this.id      = ( props.id || "D3_CHART" );
		this.margin  = {
			top    : ( props.topMargin    || 20 ),
			right  : ( props.rightMargin  || 20 ),
			bottom : ( props.bottomMargin || 20 ),
			left   : ( props.leftMargin   || 20 )
		}
		this.totalWidth  = ( props.width || window.screen.availWidth );
		this.totalHeight = ( props.height || window.screen.availHeight );
		this.width = ( props.width || window.screen.availWidth )
			-this.margin.left
			-this.margin.right;
		this.height = ( props.height || window.screen.availHeight )
			-this.margin.top
			-this.margin.bottom;
		this.create  = this.create.bind( this );
		this.destroy = this.destroy.bind( this );
	}
	async create( canvasNode, data = [], otherProps = {} ){
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
			window.d3.select( `#${this.id}` )
			  .selectAll( "*" )
				.remove()
				.on( "end", res );
		});
	}
}
export { Chart }
