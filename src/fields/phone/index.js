import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"><path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/><path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/><path d="M51.061 59.577q.168.672.168 1.68 0 .966-.168 1.68h-10.08q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q-.168-.714-.168-1.680-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.680-1.008.168-1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.1681.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0.966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h3.36Zm17.804-11.76q0 .966-.1681.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0.966-.168 1.68h6.3q.168.672.168 1.68 0 .966-.168 1.68h-11.76q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.680-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.680-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.88q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.680-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0.966-.168 1.68.168.672.168 1.68Zm16.797 0q0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0.966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h-8.4q-.168-.714-.168-1.680-1.008.168-1.68h-1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68h5.04q-.168-.714-.168-1.680-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-4.2q-.168-.714-.168-1.68 0-1.008.168-1.68h4.2q-.168-.714-.168-1.680-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.04q.168.672.168 1.68 0 .966-.168 1.68h-3.36q-.168-.714-.168-1.680-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.680 .966-.168 1.68.168.672.168 1.68Z"/></svg> ),
		edit: Edit,
		save: Save
	}
);