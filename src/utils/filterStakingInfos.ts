import { StakingInfo } from '../state/stake/hooks'

export default function filterStakingInfos(stakingInfos: StakingInfo[]): StakingInfo[] {
  return stakingInfos
    .filter(s => s.active)
    .sort((a, b) => {
      if (a.apr === undefined || b.apr === undefined) {
        return 0
      }
      return b.apr.greaterThan(a.apr) ? 1 : -1
    })
}
