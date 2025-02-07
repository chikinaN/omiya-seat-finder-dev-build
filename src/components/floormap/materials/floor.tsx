"use client";

import { useAtomValue } from "jotai";
import styled from "styled-components";
import { ScaleAtom } from "../util/atom";
import { calcScale } from "../util/floor";


function DrumDesk({ top, left }: { top: number, left: number }) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const DrumDesk = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: ${calcScale(700, ScaleSize)};
		height: ${calcScale(700, ScaleSize)};
		border-radius: 50%;
		border: solid 1px #000;
		z-index: 10;
	`
	return (
		<DrumDesk />
	);
}

function FrontDesk({ top, left }: { top: number, left: number }) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const FrontDesk = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: ${calcScale(1150, ScaleSize)};
		height: ${calcScale(5100, ScaleSize)};
		background-color: #000;
		z-index: 10;
		clip-path: polygon(
			0 0,
			100% 0,
			100% 100%,
			0 100%,
			0 calc(100% - ${calcScale(400, ScaleSize)}),
			${calcScale(700, ScaleSize)} calc(100% - ${calcScale(400, ScaleSize)}),
			${calcScale(700, ScaleSize)} ${calcScale(400, ScaleSize)},
			0 ${calcScale(400, ScaleSize)}
		);
		&::after {
			content: "";
			position: absolute;
			width: calc(${calcScale(1150, ScaleSize)});
			height: calc(${calcScale(5100, ScaleSize)});
			background-color: #FFF;
			z-index: 11;
			clip-path: polygon(
				1px 1px,
				calc(100% - 1px) 1px,
				calc(100% - 1px) calc(100% - 1px),
				1px calc(100% - 1px),
				1px calc(100% - (${calcScale(400, ScaleSize)} - 1px)),
				calc(${calcScale(700, ScaleSize)} + 1px) calc(100% - (${calcScale(400, ScaleSize)} - 1px)),
				calc(${calcScale(700, ScaleSize)} + 1px) calc(${calcScale(400, ScaleSize)} - 1px),
				1px calc(${calcScale(400, ScaleSize)} - 1px)
			);
		}
	`
	return (
		<FrontDesk />
	);
}

export { DrumDesk, FrontDesk };
