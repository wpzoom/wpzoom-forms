import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					<circle cx="7" cy="6" r="1.5" fill="currentColor"/>
					<circle cx="7" cy="12" r="1.5" fill="currentColor"/>
					<circle cx="7" cy="18" r="1.5" fill="currentColor"/>
				</svg> ),
		edit: Edit,
		save: Save
	}
);
