import { __ } from '@wordpress/i18n';
import { Modal, Button } from '@wordpress/components';

const PRO_URL = 'https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=builder-pro-field-upsell';

export default function ProModal({ fieldLabel, onClose }) {
	return (
		<Modal
			title={ __( 'Pro Feature', 'wpzoom-forms' ) }
			onRequestClose={ onClose }
			size="small"
		>
			<p>
				{ fieldLabel
					? __( 'The', 'wpzoom-forms' ) + ' ' + fieldLabel + ' ' + __( 'field is available in WPZOOM Forms Pro. Upgrade to unlock it along with more field types, advanced integrations, and priority support.', 'wpzoom-forms' )
					: __( 'This field is available in WPZOOM Forms Pro. Upgrade to unlock more field types, advanced integrations, and priority support.', 'wpzoom-forms' )
				}
			</p>
			<div className="wpzf-pro-modal__actions">
				<Button
					variant="primary"
					onClick={ () => window.open( PRO_URL, '_blank' ) }
				>
					{ __( 'Upgrade to Pro', 'wpzoom-forms' ) }
				</Button>
				<Button variant="tertiary" onClick={ onClose }>
					{ __( 'Maybe Later', 'wpzoom-forms' ) }
				</Button>
			</div>
		</Modal>
	);
}
