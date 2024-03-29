import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"><path d="M20,32.5c6.893,0,12.5-5.607,12.5-12.5S26.893,7.5,20,7.5S7.5,13.107,7.5,20S13.107,32.5,20,32.5z M20,12.5 c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,12.5,20,12.5z"/><path d="M20,25c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S17.243,25,20,25z"/><path d="M20,62.5c6.893,0,12.5-5.607,12.5-12.5S26.893,37.5,20,37.5S7.5,43.107,7.5,50S13.107,62.5,20,62.5z M20,42.5 c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,42.5,20,42.5z"/><path d="M20,92.5c6.893,0,12.5-5.607,12.5-12.5S26.893,67.5,20,67.5S7.5,73.107,7.5,80S13.107,92.5,20,92.5z M20,72.5 c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,72.5,20,72.5z"/><path d="M92.5,17.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,17.5,92.5,17.5z"/><path d="M92.5,47.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,47.5,92.5,47.5z"/><path d="M92.5,77.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,77.5,92.5,77.5z"/></svg> ),
		edit: Edit,
		save: Save
	}
);