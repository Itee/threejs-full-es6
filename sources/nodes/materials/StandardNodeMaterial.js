import { NodeMaterial } from '../NodeMaterial.js'
import { StandardNode } from './StandardNode.js'



var StandardNodeMaterial = function () {

	this.node = new StandardNode();

	NodeMaterial.call( this, this.node, this.node );

	this.type = "StandardNodeMaterial";

};

StandardNodeMaterial.prototype = Object.create( NodeMaterial.prototype );
StandardNodeMaterial.prototype.constructor = StandardNodeMaterial;

NodeMaterial.addShortcuts( StandardNodeMaterial.prototype, 'node',
	[ 'color', 'alpha', 'roughness', 'metalness', 'reflectivity', 'clearCoat', 'clearCoatRoughness', 'normal', 'normalScale', 'emissive', 'ambient', 'light', 'shadow', 'ao', 'environment', 'transform' ] );

export { StandardNodeMaterial }
