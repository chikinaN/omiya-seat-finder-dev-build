import type { ScaleSize } from "~/types/floor";

export const FLOOR_WIDTH = 26100;
export const FLOOR_HEIGHT = 22800;

function getScale(scale: ScaleSize) {
	switch (scale) {
		case "small":
			return 0.05;
		case "medium":
			return 1.05;
		case "large":
			return 2;
		default:
			return 0.03;
	}
}

/*
 * Scaleの計算
 * 実際の寸法をpxに変換する関数(scaleの値によって変換率が変わる)
 * @param {number} value - 値
 * @param {ScaleSize} scale - スケール
 * @return {number} - スケール後の値
 */
export function calcScale(value: number, scale: ScaleSize) {
	return `${Math.floor(value * getScale(scale) * 100) / 100}px`;
}
