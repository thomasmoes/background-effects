import type { Meta, StoryObj } from "@storybook/nextjs";

import { TripCard, type TripCardProps } from "../app/playground/trip-card";

const meta = {
  title: "Packing/TripCard",
  component: TripCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Base pack v1 · Prototype",
    title: "Kungsleden South · 5 days",
    subtitle: "12–16 August · Abisko → Nikkaluokta · Solo",
    totalWeight: "7.4 kg",
    weightBreakdown: "Base 4.1 kg · Food 2.3 kg · Water 1.0 kg",
    dailyEffort: "18–22 km / day",
    elevation: "2,400 m total ↑ · 2,100 m ↓",
    foodDensity: "4.6 kcal / g",
    foodSummary: "3,200 kcal / day · 700 g food",
    density: "roomy",
    radius: "rounded",
  } satisfies TripCardProps,
  argTypes: {
    density: {
      control: { type: "radio" },
      options: ["roomy", "compact"],
    },
    radius: {
      control: { type: "radio" },
      options: ["rounded", "square"],
    },
  },
} satisfies Meta<typeof TripCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompactSharp: Story = {
  args: {
    density: "compact",
    radius: "square",
  },
};

