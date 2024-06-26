import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M54,56H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H54a2,2,0,0,1,2,2V54A2,2,0,0,1,54,56ZM4,52H52V4H4Z"/><path d="M25.5,41a2,2,0,0,1-1.41-.58L8.59,24.9a2,2,0,0,1,2.82-2.82L25.5,36.17,44.59,17.08a2,2,0,1,1,2.82,2.83L26.92,40.41A2,2,0,0,1,25.5,41Z"/><path d="M126,24H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"/><path d="M54,128H2a2,2,0,0,1-2-2V74a2,2,0,0,1,2-2H54a2,2,0,0,1,2,2v52A2,2,0,0,1,54,128ZM4,124H52V76H4Z"/><path d="M107,36H68a2,2,0,0,1,0-4h39a2,2,0,0,1,0,4Z"/><path d="M126,96H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"/><path d="M116,108H68a2,2,0,0,1,0-4h48a2,2,0,0,1,0,4Z"/></svg> ),
		edit: Edit,
		save: Save
	}
);