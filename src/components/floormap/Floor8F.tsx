import FloorFrame from "./util/floorFrame";
import { ItemFrame, Line, Pillar, RoomFlame } from "./materials/basic";
import { FLOOR_HEIGHT, FLOOR_WIDTH } from "./util/floor";
import { HexagonCluster, MercuryCluster, SmallCluster } from "./materials/event";
import { DrumDesk, FrontDesk } from "./materials/floor";

function Floor8() {
	return (
		<section>
			<FloorFrame>
				<Line top={400} left={400} height={FLOOR_HEIGHT - 400} />
				<Line top={400} left={400} height={FLOOR_WIDTH - 400 * 2} angle={90} />
				<Line top={400} left={FLOOR_WIDTH - 400} height={FLOOR_HEIGHT - 400} />
				<Pillar top={400} left={400} />
				<Pillar top={400} left={7500 + 400} />
				<Pillar top={400} left={7500 + 400 + 4750 + 4750} />
				<Pillar top={400} left={7500 + 400 + 4750 + 4750 + 7500} />
				<Pillar top={400 + 7300} left={400} />
				<Pillar top={400 + 7300} left={7500 + 400} />
				<Pillar top={400 + 7300} left={7500 + 400 + 4750 + 4750} />
				<Pillar top={400 + 7300} left={7500 + 400 + 4750 + 4750 + 7500} />
				<Pillar top={400 + 7300 + 7000} left={400} />
				<Pillar top={400 + 7300 + 7000} left={7500 + 400} />
				<Pillar top={400 + 7300 + 7000} left={7500 + 400 + 4750 + 4750} />
				<Pillar top={400 + 7300 + 7000} left={7500 + 400 + 4750 + 4750 + 7500} />
				<ItemFrame top={400 + 500} left={7500 + 400 - (600 + 1400)} width={1400} height={100} />
				<ItemFrame top={400} left={7500 + 400 + 840} width={(7500 + 400 + 4750 + 4750) - (7500 + 400 + 840)} height={600} />
				<ItemFrame top={400 + 600 + 100} left={(7500 + 400 + 840) + (((7500 + 400 + 4750 + 4750) - (7500 + 400 + 840)) / 2) - (1400 / 2)} width={1400} height={100} />
				<DrumDesk top={400 + 600 + 100} left={7500 + 400 + 840 + 100} />
				<ItemFrame top={400 + 500} left={7500 + 400 + 4750 + 4750 + 2000} width={1400} height={100} angle={30} />
				<ItemFrame top={400} left={7500 + 400 + 4750 + 4750 + 2000 + 900} width={FLOOR_WIDTH - (400 + 7500 + 400 + 4750 + 4750 + 2000 + 840 + 840)} height={450} />
				<ItemFrame top={400 + 900} left={FLOOR_WIDTH - (450 + 400)} width={450} height={2000} />
				<ItemFrame top={400 + 900 + 2000} left={FLOOR_WIDTH - (600 + 400)} width={600} height={1000} />
				<ItemFrame top={400 + 900 + 2000 + 1000} left={FLOOR_WIDTH - (600 + 400)} width={600} height={1000} />
				<ItemFrame top={400 + 900 + 2000 + 1000 + 1000} left={FLOOR_WIDTH - (450 + 400)} width={450} height={7300 - (2000 + 1000 + 1000 + 900)} />
				<ItemFrame top={400 + 7300 + 900 + 2300 - 400} left={7500 + 400 + 4750 + 4750 + 840} width={1300} height={400} />
				<ItemFrame top={400 + 7300 + 900 + 2300 - 400} left={7500 + 400 + 4750 + 4750 + 840 + 1300} width={FLOOR_WIDTH - (7500 + 400 + 4750 + 4750 + 840 + 1300 + 400)} height={400} />
				<SmallCluster top={400 + 3700} left={400 + 900} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<HexagonCluster top={400 + 2500} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} angle={90} />

				<SmallCluster top={400 + 3700 + 1800 + 200} left={400 + 900} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400} />
				<HexagonCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<HexagonCluster top={400 + 3700 + 1200} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} angle={90} />

				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400} />
				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				<SmallCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 600} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} angle={90} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} />
				
				<HexagonCluster top={400 + 3700 + 1200 + 2400 + 2400} left={400 + 900 + 1200} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400 + 2400} left={400 + 900 + 1200 + 2400} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400} angle={60} />
				<HexagonCluster top={400 + 3700 + 1200 + 2400 + 2400} left={400 + 900 + 2400 + 2400 + 2400 + 2400 + 2400 + 2400} angle={60} />
				{/* マーキュリー */}
				<RoomFlame top={400 + 7300 + 900 + 2300} left={7500 + 400 + 4750 + 4750 + 840} width={FLOOR_WIDTH - (7500 + 400 + 4750 + 4750 + 840 + 400)} height={FLOOR_HEIGHT - (400 + 7300 + 900 + 2300)} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500 + 1950 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500 + 1950 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500 + 1950 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500 + 1950 + 500} angle={90} />
				<MercuryCluster top={400 + 7300 + 900 + 2300 + 1200 + 600 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000 + 1200 + 1000} left={7500 + 400 + 4750 + 4750 + 840 + 400 + 500 + 1950 + 500} angle={90} />
				{/* 職員室 */}
				<RoomFlame top={400 + 7300 + 7000} left={400 + 840 + 1150} width={7500 + 400 + 840 - (400 + 840 + 1150)} height={5100 + 800} />
				<ItemFrame top={400 + 7300 + 7000 - 800} left={400 + 840 + 1150 + 200} width={1800} height={800} />
				<ItemFrame top={400 + 7300 + 7000 - 350} left={400 + 840 + 1150 + (7500 + 400 + 840 - (400 + 840 + 1150)) / 2} width={1200} height={350} />
				<ItemFrame top={400 + 7300 + 7000} left={7500 + 400 + 840 + 700 + 300} width={1150 - 300} height={5100} />
				<FrontDesk top={400 + 7300 + 7000} left={7500 + 400 + 840 + 700} />
			</FloorFrame>
		</section>
	);
}

export default Floor8;
