import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
					<path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
					<rect x="5" y="13" width="4" height="2" rx="0.5" fill="currentColor"/>
					<rect x="11" y="13" width="3" height="2" rx="0.5" fill="currentColor"/>
				</svg> ),
		edit: Edit,
		save: Save
	}
);
