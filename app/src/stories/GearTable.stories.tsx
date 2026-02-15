import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  GearTable,
  type GearItem,
  type GearTableProps,
} from "../app/playground/gear-table";

const sampleItems: GearItem[] = [
  {
    name: "Gossamer Gear Mariposa 60",
    category: "Backpack",
    weight: "1,150 g",
    qty: "1",
    badge: "Always on",
  },
  {
    name: "Palace 2P + pegs",
    category: "Shelter",
    weight: "980 g",
    qty: "1",
    badge: "Swap?",
  },
  {
    name: "Down quilt 20°",
    category: "Sleep",
    weight: "780 g",
    qty: "1",
    badge: "Comfort",
  },
  {
    name: "Powerbank 20,000 mAh",
    category: "Electronics",
    weight: "450 g",
    qty: "1",
    badge: "Heavy",
  },
];

const meta = {
  title: "Packing/GearTable",
  component: GearTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    items: sampleItems,
    density: "roomy",
    radius: "rounded",
  } satisfies GearTableProps,
  argTypes: {
    density: {
      control: { type: "radio" },
      options: ["roomy", "compact"],
    },
    radius: {
      control: { type: "radio" },
      options: ["rounded", "square"],
    },
    items: {
      control: false,
    },
  },
} satisfies Meta<typeof GearTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompactSharp: Story = {
  args: {
    density: "compact",
    radius: "square",
  },
};

