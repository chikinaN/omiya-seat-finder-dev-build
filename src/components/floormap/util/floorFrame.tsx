"use client";

import type { ReactNode } from 'react';
import styled from 'styled-components';
import type { ScaleSize } from '~/types/floor';
import { calcScale as calcScaleBase, FLOOR_HEIGHT, FLOOR_WIDTH } from './floor';

function FloorFrame({children}: {
  children: ReactNode
}) {
	const scale: ScaleSize = "default";
	const padding = 3000;
	const calcScale = (value: number) => calcScaleBase(value, scale);

	const Wrapper = styled.div`
		position: relative;
		width: ${calcScale(FLOOR_WIDTH + padding * 2)};
		height: ${calcScale(FLOOR_HEIGHT + padding * 2)};
		border: solid 1px #000;
		z-index: 1;
	`
	const FloorFrame = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		width: calc(${calcScale(FLOOR_WIDTH)});
		height: calc(${calcScale(FLOOR_HEIGHT)});
		transform: translate(-50%, -50%);
		background-color: #000;
		clip-path: polygon(
			0 ${calcScale(400)},
			${calcScale(400)} 0,
			${calcScale(FLOOR_WIDTH - 400)} 0,
			${calcScale(FLOOR_WIDTH)} ${calcScale(400)},
			${calcScale(FLOOR_WIDTH)} ${calcScale(FLOOR_HEIGHT)},
			0 ${calcScale(FLOOR_HEIGHT)}
		);
		z-index: 2;
		&::after {
			content: '';
			position: absolute;
			transform: translate(-50%, -50%);
			top: calc(50%);
			left: calc(50%);
			width: ${calcScale(FLOOR_WIDTH)};
			height: ${calcScale(FLOOR_HEIGHT)};
			background-color: #fff;
			clip-path: polygon(
				1px calc(${calcScale(400)}),
				calc(${calcScale(400)}) 1px,
				calc(${calcScale(FLOOR_WIDTH - 400)}) 1px,
				calc(${calcScale(FLOOR_WIDTH)} - 1px) calc(${calcScale(400)}),
				calc(${calcScale(FLOOR_WIDTH)} - 1px) calc(${calcScale(FLOOR_HEIGHT)} - 1px),
				1px calc(${calcScale(FLOOR_HEIGHT)} - 1px)
			);
			z-index: 3;
		}
	`
	return (
		<Wrapper>
			<FloorFrame>
				{children}
			</FloorFrame>
		</Wrapper>
	)
}

export default FloorFrame;
