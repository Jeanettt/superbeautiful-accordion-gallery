import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";

import "./editor.scss";
export default function Edit(props) {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { height } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Height" initialOpen={true}>
					<UnitControl
						label="Height"
						value={height}
						onChange={(value) => setAttributes({ height: value })}
						units={[
							{ value: "px", label: "px" },
							{ value: "%", label: "%" },
							{ value: "vh", label: "vh" },
						]}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} style={{ height }}>
				<InnerBlocks
					allowedBlocks={["core/image"]}
					template={[["core/image"]]}
				/>
			</div>
		</>
	);
}
