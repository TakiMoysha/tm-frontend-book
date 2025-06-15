import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "storybook/actions";

import { generateData } from "@/lib/DataGenerator";

import SimpleVScroll from "@/components/scrolls/SimpleVScroll.vue";
import DynamicRowHeightVScroll from "@/components/scrolls/DynamicRowHeightVScroll.vue";

const actions = {
  onToggleReverse: action("on-toggle-reverse"),
};

const defaultArgs = {
  items: [
    { id: "711e755f-cf2f-4720-9858-22bc3906af24", text: "Item 1" },
    { id: "57f988ed-936b-4ca3-a2e1-8a4f2954d29c", text: "Item 2" },
  ],
  fields: ["id", "name"],
  loading: false,
  reverse: false,
};

const getItems = async () => {
  // return fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json());
  return generateData("simple", { count: 1_000 });
};

const meta = {
  args: defaultArgs,
  // parameters: {
  //   layout: "fullscreen",
  // },
  decorators: [
    () => ({
      template: '<div class="max-h-30rem h-30rem overflow-auto"><story/></div>',
    }),
  ],
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
      return { ...args, mockItems: mockItems };
    },
    template: `<SimpleVScroll :fields="fields" :items="mockItems" :reverse="reverse" :loading="loading" />`,
  }),
};

export const DynamicRowHeightVirtualScroll: Story = {
  render: (args, { loaded: { mockItems } }) => ({
    components: { DynamicRowHeightVScroll },
    setup() {
      return { ...args, mocked: mockItems };
    },
    template: `<DynamicRowHeightVScroll :fields="fields" :items="mockItems" :reverse="reverse" :loading="loading" />`,
  }),
};
