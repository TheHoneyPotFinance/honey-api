import {FACTORY_ADDRESS} from '../constants';

export const FACTORY = `
query honeyFactories {
	honeyFactories(where: { id: "${FACTORY_ADDRESS}" }) {
		id
		totalVolumeUSD
		totalLiquidityUSD
		txCount
	}
}`;

export const USER = `
query users($first: Int, $firstUser: String, $orderBy: String) {
  users(first: $first, where: { id_gt : $firstUser }, orderBy: $orderBy) {
    id
  }
}`;

export const DAILY_VOLUME = `
query pairDayDatas($days: Int, $pairAddress: String) {
  pairDayDatas(
    first: $days
    orderBy: date
    orderDirection: desc
    where: { pairAddress: $pairAddress }
  ) {
    dailyVolumeUSD
    reserveUSD
  }
}`;

export const SWAP = `
query swaps($first: Int, $skip: Int, $orderBy: String) {
	swaps(where: {}, first: $first, skip: $skip, orderBy: $orderBy) {
		amountUSD
	}
}`;
