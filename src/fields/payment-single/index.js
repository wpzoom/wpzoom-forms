import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
					<path d="M12 10v4M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
				</svg> ),
		edit: Edit,
		save: Save
	}
);
