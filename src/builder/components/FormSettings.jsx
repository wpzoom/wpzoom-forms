import { __ } from '@wordpress/i18n';
import {
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

export default function FormSettings({ settings, onChange }) {
	return (
		<div className="wpzf-inspector">
			<div className="wpzf-inspector__header">
				<h3>{ __( 'Form Settings', 'wpzoom-forms' ) }</h3>
			</div>
			<div className="wpzf-inspector__body">
				<TextControl
					label={ __( 'Submit Button Text', 'wpzoom-forms' ) }
					value={ settings.submitLabel || '' }
					onChange={ ( v ) => onChange( { submitLabel: v } ) }
				/>

				<ToggleGroupControl
					label={ __( 'Submit Button Alignment', 'wpzoom-forms' ) }
					value={ settings.submitAlign }
					onChange={ ( v ) => onChange( { submitAlign: v } ) }
					isBlock
					__nextHasNoMarginBottom={ false }
				>
					{ [ 'left', 'center', 'right', 'full' ].map( ( v ) => (
						<ToggleGroupControlOption key={ v } value={ v } label={ v.charAt( 0 ).toUpperCase() + v.slice( 1 ) } />
					) ) }
				</ToggleGroupControl>

				<ToggleGroupControl
					label={ __( 'Labels Position', 'wpzoom-forms' ) }
					value={ settings.labelsPosition }
					onChange={ ( v ) => onChange( { labelsPosition: v } ) }
					isBlock
					__nextHasNoMarginBottom={ false }
				>
					{ [ 'top', 'left', 'hidden' ].map( ( v ) => (
						<ToggleGroupControlOption key={ v } value={ v } label={ v.charAt( 0 ).toUpperCase() + v.slice( 1 ) } />
					) ) }
				</ToggleGroupControl>

				<ToggleGroupControl
					label={ __( 'Form Style', 'wpzoom-forms' ) }
					value={ settings.theme }
					onChange={ ( v ) => onChange( { theme: v } ) }
					isBlock
					__nextHasNoMarginBottom={ false }
				>
					{ [ 'default', 'minimal', 'modern' ].map( ( v ) => (
						<ToggleGroupControlOption key={ v } value={ v } label={ v.charAt( 0 ).toUpperCase() + v.slice( 1 ) } />
					) ) }
				</ToggleGroupControl>

				<ToggleControl
					label={ __( 'Show required-field asterisk (*)', 'wpzoom-forms' ) }
					checked={ !! settings.showRequiredMark }
					onChange={ ( v ) => onChange( { showRequiredMark: v } ) }
				/>

				<ToggleControl
					label={ __( 'Enable spam honeypot field', 'wpzoom-forms' ) }
					checked={ !! settings.honeypot }
					onChange={ ( v ) => onChange( { honeypot: v } ) }
				/>
			</div>
		</div>
	);
}
