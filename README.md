# WPZOOM Forms

A simple, user-friendly contact form plugin for WordPress that uses Gutenberg blocks. Create beautiful, responsive forms in minutes with drag-and-drop interface.

[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/wpzoom-forms)](https://wordpress.org/plugins/wpzoom-forms/)
[![WordPress Plugin Rating](https://img.shields.io/wordpress/plugin/stars/wpzoom-forms)](https://wordpress.org/plugins/wpzoom-forms/)
[![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/wpzoom-forms)](https://wordpress.org/plugins/wpzoom-forms/)
[![License](https://img.shields.io/badge/license-GPL--2.0%2B-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

## Features

### Free Features
- **Drag-and-Drop Builder** - Build forms using Gutenberg's editor
- **Ready-to-Use Templates** - Contact, feedback, appointment forms
- **Advanced Spam Protection**:
  - Google reCAPTCHA (v2 and v3)
  - Akismet anti-spam
  - Cloudflare Turnstile
- **Email Notifications** - Instant alerts on submissions
- **Elementor Widget** - Works with Elementor page builder
- **Shortcode Support** - Embed forms anywhere
- **Date Picker Field** - For bookings and appointments
- **Multi Checkboxes** - Multiple selection options
- **Submission Management** - View and export submissions
- **Predefined Lists** - Countries and US states

### PRO Features
- Custom Email Notifications with visual editor
- AJAX Form Submissions (no page reload)
- File Upload Fields (PDF, images)
- Premium Support

### Included Templates
- Contact Form
- Advanced Form with Full Address
- Wedding Invitation
- Quote Request Form
- Feedback Form
- Appointment Form

## Installation

### From WordPress.org

1. Go to **Plugins > Add New** in your WordPress admin
2. Search for "WPZOOM Forms"
3. Click **Install Now** and then **Activate**

### Manual Installation

1. Download the plugin from [WordPress.org](https://wordpress.org/plugins/wpzoom-forms/)
2. Upload to `/wp-content/plugins/wpzoom-forms/`
3. Activate through the **Plugins** menu

### From GitHub

```bash
cd wp-content/plugins
git clone https://github.com/wpzoom/wpzoom-forms.git
```

## Usage

### Creating a Form

1. Go to **WPZOOM Forms** in your WordPress admin
2. Click **Add New** to create a form
3. Choose a template or start from scratch
4. Add fields using the block editor
5. Configure email settings
6. Publish your form

### Embedding Forms

#### Using Shortcode
Copy the shortcode from your form and paste anywhere:
```
[wpzoom_form id="123"]
```

#### Using Block
1. Edit any page or post
2. Add the **WPZOOM Form** block
3. Select your form from the dropdown

#### Using Elementor
1. Edit page with Elementor
2. Search for WPZOOM Forms widget
3. Drag and drop, then select your form

### Viewing Submissions

1. Go to **WPZOOM Forms > Submissions**
2. Filter by form if needed
3. Export submissions via **Tools > Export**

### Spam Protection Setup

#### Google reCAPTCHA
1. Go to **WPZOOM Forms > Settings**
2. Enter your reCAPTCHA site key and secret key
3. Choose v2 or v3

#### Cloudflare Turnstile
1. Go to **WPZOOM Forms > Settings**
2. Enter your Turnstile site key and secret key

#### Akismet
1. Install and activate the Akismet plugin
2. Connect with your API key
3. Protection is automatic

## Development

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup

```bash
# Clone the repository
git clone https://github.com/wpzoom/wpzoom-forms.git
cd wpzoom-forms

# Install dependencies
npm install
```

### Build Commands

```bash
# Start development mode for block editor
npm run start

# Build block editor assets for production
npm run build

# Build frontend assets (minified JS)
npm run build:frontend

# Watch and build frontend assets
npm run watch:frontend

# Build both block editor and frontend assets
npm run build:all
```

### Plugin Structure

```
wpzoom-forms/
├── assets/           # Source files for frontend
│   └── frontend/
│       ├── js/       # Frontend JavaScript
│       └── css/      # Frontend CSS
├── src/              # Block editor source files
├── dist/             # Compiled assets
├── includes/         # PHP classes and functions
└── blocks/           # Block definitions
```

### Performance Notes

The plugin is optimized to:
- Load JavaScript only on pages with forms
- Load block editor dependencies only in admin
- Load field-specific assets (datepicker) only when needed
- Minify all frontend JavaScript

### Settings

Important plugin settings that affect performance:
1. "Load plugin assets globally" - Only enable if using forms with page builders
2. "Load default styling for forms" - Can be disabled if your theme handles form styling

## Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Bugs

If you find an issue, let us know [here](https://github.com/wpzoom/wpzoom-forms/issues)!

## Support

This is a developer's portal for WPZOOM Forms and should _not_ be used for support. Please visit the [support page](https://wordpress.org/support/plugin/wpzoom-forms/) on WordPress.org if you need to submit a support request.

## License

This plugin is licensed under the [GPL v2 or later](https://www.gnu.org/licenses/gpl-2.0.html).

---

**Links:** [WordPress.org](https://wordpress.org/plugins/wpzoom-forms/) | [WPZOOM](https://www.wpzoom.com/) | [Documentation](https://www.wpzoom.com/documentation/wpzoom-forms/) | [GitHub](https://github.com/wpzoom/wpzoom-forms)
