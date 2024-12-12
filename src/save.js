import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export default function save(props) {
	const blockProps = useBlockProps.save();
	const { attributes } = props;
	const { height } = attributes;

	return (
		<div { ...blockProps } style={{ height }}>
			<InnerBlocks.Content />
		</div>
	);
}
