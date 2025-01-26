# WPZOOM Forms

A lightweight contact form plugin for WordPress that uses blocks.

## Development

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup

1. Clone this repository
2. Run `npm install` to install dependencies

### Build Commands

- `npm run start` - Start development mode for block editor assets
- `npm run build` - Build block editor assets for production
- `npm run build:frontend` - Build frontend assets (minified JS)
- `npm run watch:frontend` - Watch and build frontend assets
- `npm run build:all` - Build both block editor and frontend assets

### Plugin Structure

- `assets/` - Source files for frontend assets
  - `frontend/js/` - Frontend JavaScript files
  - `frontend/css/` - Frontend CSS files
- `src/` - Source files for block editor
- `dist/` - Compiled and minified assets
- `includes/` - PHP classes and functions
- `blocks/` - Block definitions and templates

### Performance Optimizations

The plugin is optimized to:
1. Load JavaScript files only on pages where forms are present
2. Load block editor dependencies only in the admin area
3. Load field-specific assets (like datepicker) only when those fields are used
4. Minify all frontend JavaScript files

### Settings

Important plugin settings that affect performance:
1. "Load plugin assets globally" - Only enable if using forms with page builders
2. "Load default styling for forms" - Can be disabled if your theme handles form styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 