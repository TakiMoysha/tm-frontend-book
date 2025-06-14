import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "storybook/actions";
import { fn } from "storybook/test";

import { generateData } from "@/lib/DataGenerator";

import SimpleVScroll from "@/components/scrolls/SimpleVScroll.vue";
import DynamicRowHeightVScroll from "@/components/scrolls/DynamicRowHeightVScroll.vue";

const actions = {
  onToggleReverse: action("on-toggle-reverse"),
};

const defaultArgs = {
  items: [{ id: 1 }, { id: 2 }],
  fields: ["id", "name"],
  loading: false,
  reverse: false,
};

const URL = "https://jsonplaceholder.typicode.com/todos/";
const meta = {
  args: defaultArgs,
  // parameters: {
  //   layout: "fullscreen",
  // },
  loaders: [
    async () => ({
      mockItems: await (await fetch(URL)).json(),
      generatedItems: await generateData("simple", { count: 1_000 }),
    }),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================================
export const SimpleVirtualScroll: Story = {
  render: (args, { loaded: { mockItems, generatedItems } }) => ({
    components: { SimpleVScroll },
    setup() {
      return { ...args, mocked: mockItems, generated: generatedItems };
    },
    template: `<SimpleVScroll :fields="fields" :items="generated" :reverse="reverse" :loading="loading" />`,
  }),
};

export const DynamicRowHeightVirtualScroll: Story = {
  render: (args, { loaded: { mockItems, generatedItems } }) => ({
    components: { DynamicRowHeightVScroll },
    setup() {
      return { ...args, mocked: mockItems, generated: generatedItems };
    },
    template: `<DynamicRowHeightVScroll :fields="fields" :items="generated" :reverse="reverse" :loading="loading" />`,
  }),
};
