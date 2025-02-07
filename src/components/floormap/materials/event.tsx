"use client";

import { useAtomValue } from "jotai";
import styled from "styled-components";
import { ScaleAtom } from "../util/atom";
import { calcScale } from "../util/floor";

function SmallCluster({ top, left }: { top: number, left: number }) {
	const DeskWidth = 600;
	const DeskHeight = 700;
	const ScaleSize = useAtomValue(ScaleAtom);
	const SmallCluster = styled.div<{ $top: number, $left: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		z-index: 10;
	`
	const LargeDesk = styled.div<{ $top: number, $left: number, $angle: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(DeskWidth, ScaleSize)};
		height: ${calcScale(DeskHeight, ScaleSize)};
		background-color: #FFF;
		border: #000 solid 1px;
		border-right: #000 solid 0.5px;
		z-index: 11;
		transform-origin: center right;
		transform: ${props => `rotate(-${props.$angle}deg)`};
		&::before {
			content: '';
			position: absolute;
			width: ${calcScale(100, ScaleSize)};
			height: ${calcScale(430, ScaleSize)};
			top: ${calcScale(350, ScaleSize)};
			left: ${calcScale(-120, ScaleSize)};
			transform: translate(0, -50%);
			transform-origin: top right;
			box-sizing: content-box;
			background-color: #000;
			border: #000 solid 0.5px;
			z-index: -10;
		}
		&::after {
			content: '';
			position: absolute;
			width: ${calcScale(50, ScaleSize)};
			height: ${calcScale(50, ScaleSize)};
			top: ${calcScale(350, ScaleSize)};
			left: ${calcScale(400, ScaleSize)};
			transform: translate(-50%, -50%);
			transform-origin: top right;
			box-sizing: content-box;
			background-color: #fff;
			border-radius: 50%;
			border: #000 solid 0.5px;
			z-index: 12;
		}
	`
	const AdditionalChair = styled.div<{ $top: number, $left: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(430, ScaleSize)};
		height: ${calcScale(300, ScaleSize)};
		background-color: #000;
		transform: translate(-50%, 0);
		z-index: 10;
	`

	return (
		<SmallCluster $top={top} $left={left} >
			<LargeDesk $top={0} $left={0} $angle={0} />
			<LargeDesk $top={0} $left={0} $angle={180} />
			<LargeDesk $top={DeskHeight} $left={0} $angle={0} />
			<LargeDesk $top={DeskHeight} $left={0} $angle={180} />
			<AdditionalChair $top={DeskHeight * 2 + 30} $left={300} />
			<AdditionalChair $top={DeskHeight * 2 + 30} $left={DeskWidth + 300} />
		</SmallCluster>
	);
}

type HexagonClusterProps = {
	top: number,
	left: number,
	angle?: number
}

function HexagonCluster({ top, left, angle }: HexagonClusterProps) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const HexagonCluster = styled.div<{ $top: number, $left: number }>`
		position: absolute;
		transform-origin: center;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(1500, ScaleSize)};
		height: ${calcScale(1500, ScaleSize)};
		transform: ${`rotate(-${angle}deg)`};
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	`
	const HexagonChair = styled.div<{ $top: number, $left: number, $angle: number }>`
		position: absolute;
		width: ${calcScale(100, ScaleSize)};
		height: ${calcScale(430, ScaleSize)};
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		transform: translate(0, -50%);
		transform-origin: top right;
		transform: translate(0, -50%) rotate(${props => props.$angle}deg);
		box-sizing: content-box;
		background-color: #000;
		border: #000 solid 0.5px;
		z-index: 10;
	`
	const TrapezoidDesk = styled.div<{ $top: number, $left: number, $angle: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(650, ScaleSize)};
		height: ${calcScale(1500, ScaleSize)};
		background-color: #000;
		z-index: 10;
		transform-origin: center right;
		transform: ${props => `rotate(-${props.$angle}deg)`};
		clip-path: polygon(
			0 20%,
			100% 0,
			100% 100%,
			0 80%
		);
		&::after {
			content: '';
			position: absolute;
			width: calc(${calcScale(650, ScaleSize)});
			height: calc(${calcScale(1500, ScaleSize)});
			background-color: #FFF;
			z-index: 11;
			clip-path: polygon(
				1px calc(20% + 1px),
				calc(100% - 0.5px) 1px,
				calc(100% - 0.5px) calc(100% - 1px),
				1px calc(80% - 1px)
			)
		}
    `
	return (
		<HexagonCluster $top={top} $left={left}>
			<HexagonChair $top={300} $left={390} $angle={65} />
			<TrapezoidDesk $top={0} $left={0} $angle={0} />
			<TrapezoidDesk $top={0} $left={0} $angle={180} />
			<HexagonChair $top={1200} $left={1100} $angle={180} />
			<HexagonChair $top={1460} $left={20} $angle={-65} />
		</HexagonCluster>
	)
}

function MercuryCluster({ top, left, angle }: { top: number, left: number, angle: number }) {
	const DeskWidth = 500;
	const DeskHeight = 650;
	const ScaleSize = useAtomValue(ScaleAtom);
	const MercuryCluster = styled.div<{ $top: number, $left: number, $angle: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(DeskWidth * 2, ScaleSize)};
		height: ${calcScale(DeskHeight * 3, ScaleSize)};
		transform-origin: top left;
		transform: ${`rotate(-${angle}deg)`};
		z-index: 10;
	`
	const SmallDesk = styled.div<{ $top: number, $left: number, $angle: number }>`
		position: absolute;
		top: ${props => calcScale(props.$top, ScaleSize)};
		left: ${props => calcScale(props.$left, ScaleSize)};
		width: ${calcScale(DeskWidth, ScaleSize)};
		height: ${calcScale(DeskHeight, ScaleSize)};
		background-color: #FFF;
		border: #000 solid 0.5px;
		z-index: 11;
		transform-origin: center right;
		transform: ${props => `rotate(-${props.$angle}deg)`};
		&::before {
			content: '';
			position: absolute;
			width: ${calcScale(100, ScaleSize)};
			height: ${calcScale(430, ScaleSize)};
			top: ${calcScale(DeskHeight / 2, ScaleSize)};
			left: ${calcScale(-120, ScaleSize)};
			transform: translate(0, -50%);
			transform-origin: top right;
			box-sizing: content-box;
			background-color: #000;
			border: #000 solid 0.5px;
			z-index: -10;
		}
	`
	return (
		<MercuryCluster $top={top} $left={left} $angle={angle} >
			<SmallDesk $top={0} $left={0} $angle={0} />
			<SmallDesk $top={0} $left={0} $angle={180} />
			<SmallDesk $top={DeskHeight} $left={0} $angle={0} />
			<SmallDesk $top={DeskHeight} $left={0} $angle={180} />
			<SmallDesk $top={DeskHeight * 2} $left={0} $angle={0} />
			<SmallDesk $top={DeskHeight * 2} $left={0} $angle={180} />
		</MercuryCluster>
	)
}


export { SmallCluster, HexagonCluster, MercuryCluster };
