import { computed, signal } from "@preact/signals-react";

export const colors = ["#855CF8", "#E289F2", "#7879F1", "#B085FF"];

export const strategyNames = signal<string[]>([
  "Strategy 1",
  "Strategy 2",
  "Strategy 3",
  "Strategy 4",
]);

export const strategyMap = computed<Record<string, string>>(() => ({
  [strategyNames.value[0]]: colors[0],
  [strategyNames.value[1]]: colors[1],
  [strategyNames.value[2]]: colors[2],
  [strategyNames.value[3]]: colors[3],
}));

export const strategyColors = computed(() => {
  return Object.values(strategyMap.value);
});
