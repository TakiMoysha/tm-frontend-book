import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "storybook/actions";

import { generateData } from "@/lib/DataGenerator";

import SimpleVScroll from "@/components/scrolls/SimpleVScroll.vue";
import DynamicRowHeightVScroll from "@/components/scrolls/DynamicRowHeightVScroll.vue";

const actions = {
  onToggleReverse: action("on-toggle-reverse"),
};

const defaultArgs = {
  items: [],
  fields: ["id", "name"],
  loading: false,
  reverse: false,
};

const getItems = async () => {
  // return fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json());
  return await generateData("simple", { count: 10_000 });
};

const meta = {
  args: defaultArgs,
  loaders: [
    async () => ({
      mockItems: await getItems(),
    }),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================================
export const SimpleVirtualScroll: Story = {
  render: (args, { loaded: { mockItems } }) => ({
    components: { SimpleVScroll },
    setup() {
      return { ...args, items: mockItems };
    },
    template: `<SimpleVScroll v-bind:items="items" />`,
  }),
};

export const DynamicRowHeightVirtualScroll: Story = {
  render: (args, { loaded: { mockItems } }) => ({
    components: { DynamicRowHeightVScroll },
    setup() {
      return { ...args, items: mockItems };
    },
    template: `<DynamicRowHeightVScroll v-bind:items="args" />`,
  }),
};
