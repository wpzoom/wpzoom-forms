import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Flex, FlexBlock, FlexItem, IconButton, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function SortableItem( props ) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable( { id: props.id } );

	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
	};

	return (
		<Flex ref={ setNodeRef } style={ style } { ...attributes } { ...listeners }>
			<FlexBlock>
				<TextControl
					value={ props.value }
					onChange={ value => console.dir( props.value, props.id ) }
				/>
			</FlexBlock>

			{ props.amount > 1 && <FlexItem>
				<IconButton
					icon="move"
					label={ __( 'Re-arrange Item', 'zoom-forms' ) }
					onClick={ () => console.dir( props.id ) }
				/>

				<IconButton
					icon="no-alt"
					label={ __( 'Delete Item', 'zoom-forms' ) }
					onClick={ () => console.dir( props.id ) }
				/>
			</FlexItem> }
		</Flex>
	);
}