import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
		<path d="m13.86,7.39c-3.26,0-5.92,2.65-5.92,5.92v19.3h24.12V7.39H13.86Zm-3.92,23.22V13.31c0-2.16,1.76-3.92,3.92-3.92h6.61c-.93,1.04-1.49,2.41-1.49,3.92v17.3h-9.03Zm14.64,0h-3.61V13.31c0-2.16,1.76-3.92,3.92-3.92h1.18c-.05.06-.09.13-.14.19-.14.17-.27.34-.39.53-.07.1-.13.21-.19.32-.1.18-.2.37-.28.57-.05.11-.1.22-.14.34-.08.21-.13.43-.18.65-.02.1-.06.21-.07.31-.06.33-.09.66-.09,1v17.3Zm2,0V13.31c0-.2.02-.4.05-.6.22-1.38,1.17-2.57,2.51-3.07h0c.19-.07.39-.12.59-.16.05-.01.11-.02.16-.03.05,0,.11,0,.17-.01v21.18h-3.47Z"/>
	</svg>
)
registerBlockType( metadata.name, {
    attributes: {
        height: {
            type: 'string',
            default: '300px',
        },
    },
	edit: Edit,
	icon,
	save,
} );
