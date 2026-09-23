import type { TranslationKeys } from "@/lib/translations";

export const STAGE_LABELS = ["BUILD", "ATTRACT", "CONVERT", "AUTOMATE", "INTELLIGENCE"] as const;
export const SCALE_LABEL = "SCALE";

export type Stage = {
  index: number;
  label: string;
  titleKey: keyof TranslationKeys;
  descKey: keyof TranslationKeys;
  side: "start" | "end";
};

export const STAGES: Stage[] = [
  {
    index: 0,
    label: STAGE_LABELS[0],
    titleKey: "services_stage1_title",
    descKey: "services_stage1_desc",
    side: "start",
  },
  {
    index: 1,
    label: STAGE_LABELS[1],
    titleKey: "services_stage2_title",
    descKey: "services_stage2_desc",
    side: "end",
  },
  {
    index: 2,
    label: STAGE_LABELS[2],
    titleKey: "services_stage3_title",
    descKey: "services_stage3_desc",
    side: "start",
  },
  {
    index: 3,
    label: STAGE_LABELS[3],
    titleKey: "services_stage4_title",
    descKey: "services_stage4_desc",
    side: "end",
  },
  {
    index: 4,
    label: STAGE_LABELS[4],
    titleKey: "services_stage5_title",
    descKey: "services_stage5_desc",
    side: "start",
  },
];

export const FLOW_LABELS: string[] = [...STAGE_LABELS, SCALE_LABEL];
