import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="5" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
			<circle cx="5" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
			<circle cx="5" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
			<circle cx="5" cy="6" r="1" fill="currentColor"/>
			<path d="M21 5.25C21.414 5.25 21.75 5.586 21.75 6C21.75 6.414 21.414 6.75 21 6.75H11C10.586 6.75 10.25 6.414 10.25 6C10.25 5.586 10.586 5.25 11 5.25H21Z" fill="currentColor"/>
			<path d="M21 11.25C21.414 11.25 21.75 11.586 21.75 12C21.75 12.414 21.414 12.75 21 12.75H11C10.586 12.75 10.25 12.414 10.25 12C10.25 11.586 10.586 11.25 11 11.25H21Z" fill="currentColor"/>
			<path d="M21 17.25C21.414 17.25 21.75 17.586 21.75 18C21.75 18.414 21.414 18.75 21 18.75H11C10.586 18.75 10.25 18.414 10.25 18C10.25 17.586 10.586 17.25 11 17.25H21Z" fill="currentColor"/>
		</svg> ),
		edit: Edit,
		save: Save
	}
);
