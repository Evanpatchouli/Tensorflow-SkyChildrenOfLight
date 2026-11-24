const maps = ["晨岛", "云野", "雨林", "霞谷", "墓土", "禁阁"];

export function mapName(id: number) {
  return maps[id - 1] ?? "地图未记录";
}
