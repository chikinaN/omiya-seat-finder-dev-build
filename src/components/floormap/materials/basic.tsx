"use client";

import styled from "styled-components";
import { calcScale } from "../util/floor";
import { useAtomValue } from "jotai/react";
import { ScaleAtom } from "../util/atom";

function Pillar({ top, left }: { top: number, left: number }) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const Pillar = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: ${calcScale(840, ScaleSize)};
		height: ${calcScale(900, ScaleSize)};
		background-color: #666;
		z-index: 10;
	`
	return (
		<Pillar />
	);
}

function RoomFlame({ top, left, width, height }: { top: number, left: number, width: number, height: number }) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const RoomFlame = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: ${calcScale(width, ScaleSize)};
		height: ${calcScale(height, ScaleSize)};
		border: solid 1px #000;
		/* box-sizing: content-box; */
		z-index: 10;
	`
	return (
		<RoomFlame />
	);
}

type LineProps = {
	top: number,
	left: number,
	height: number,
	angle?: number
}

function Line({ top, left, height, angle }: LineProps) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const Line = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: 1px;
		height: ${calcScale(height, ScaleSize)};
		background-color: #000;
		transform-origin: top left;
		transform: rotate(-${angle}deg);
		z-index: 10;
	`
	return (
		<Line />
	);
}

type ItemFrameProps = {
	top: number,
	left: number,
	width: number,
	height: number,
	angle?: number
}

function ItemFrame({ top, left, width, height, angle }: ItemFrameProps) {
	const ScaleSize = useAtomValue(ScaleAtom);
	const ItemFrame = styled.div`
		position: absolute;
		top: ${calcScale(top, ScaleSize)};
		left: ${calcScale(left, ScaleSize)};
		width: ${calcScale(width, ScaleSize)};
		height: ${calcScale(height, ScaleSize)};
		transform: rotate(${angle}deg);
		border: solid 1px #000;
		z-index: 10;
	`
	return (
		<ItemFrame />
	);
}

export { Pillar, RoomFlame, Line, ItemFrame };
