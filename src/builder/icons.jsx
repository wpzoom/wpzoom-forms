/**
 * Tiny SVG icon set. Keeps everything inline so we don't ship a font.
 * Pass `name` matching the keys below; sizes default to 18.
 */
const paths = {
	text:       <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />,
	user:       <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5z" />,
	email:      <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v.4l8 4.6 8-4.6V8H4zm0 8h16v-5.3l-7.4 4.3a1 1 0 01-1.2 0L4 10.7V16z" />,
	phone:      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.45a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.25 1L6.6 10.8z" />,
	link:       <path d="M10.6 14.4l1.4-1.4-1.4-1.4-3 3a3 3 0 104.2 4.2l3-3-1.4-1.4-3 3a1 1 0 11-1.4-1.4l1.6-1.6zm2.8-4.8l-1.4 1.4 1.4 1.4 3-3a3 3 0 10-4.2-4.2l-3 3 1.4 1.4 3-3a1 1 0 111.4 1.4l-1.6 1.6z" />,
	number:     <path d="M5 4h2l-1 4h2l1-4h2l-1 4h3v2h-3.4l-.6 2.4H13v2H9l-.6 2.4h-2L7 14H4v-2h3.4L8 9.6H5v-2h3.4L9 4z" />,
	paragraph:  <path d="M5 4h14v2H5zM5 9h14v2H5zM5 14h10v2H5zM5 19h8v2H5z" />,
	select:     <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4zM18 14l3 3-3 3z" />,
	radio:      <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-15a5 5 0 100 10 5 5 0 000-10z" />,
	checkboxes: <path d="M4 4h16v16H4z M9 11l-3 3 1.4 1.4L9 13.8l4.6-4.6L12.2 7.8z" fillRule="evenodd" />,
	checkbox:   <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />,
	date:       <path d="M7 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-3V2h-2v2H9V2H7zm-3 8h16v10H4V10z" />,
	hidden:     <path d="M12 5c-7 0-10 7-10 7s3 7 10 7c2.4 0 4.4-.8 6-2l3 3 1.4-1.4L4 2.6 2.6 4l3 3C3.6 8.4 2 12 2 12zm0 2c1 0 1.9.2 2.7.5L13 9.2A4 4 0 008.8 13l-1.7-1.7C6.4 13.3 6 14 6 14s2 4 6 4c.5 0 1-.1 1.4-.2l2.1 2.1C14.3 20 13.2 20 12 20c-5 0-8-5-8-5s3-5 8-5z" />,
	upload:     <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5z" />,
	time:       <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />,
	gdpr:       <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />,
	heading:    <path d="M5 4v16h2v-7h10v7h2V4h-2v7H7V4H5z" />,
	divider:    <path d="M2 11h20v2H2z" />,
};
const colored = { divider: false };

export const Icon = ({ name, size = 18 }) => {
	const p = paths[ name ];
	if ( ! p ) return null;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{ p }</svg>
	);
};
