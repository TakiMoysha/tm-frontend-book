import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "storybook/actions";

import { SimpleVirtualScroll } from "@/components/SimpleVirtualScroll";
import { generateData } from "@/utils/DataGenerator";

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
  component: SimpleVirtualScroll,
  args: defaultArgs,
  loaders: [
    async () => ({
      mockItems: await (await fetch(URL)).json(),
      generatedItems: await generateData("simple", { count: 1_000 }),
    }),
  ],
} satisfies Meta<typeof SimpleVirtualScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args, { loaded: { mockItems, generatedItems } }) => ({
    components: { SimpleVirtualScroll },
    setup() {
      return { ...args, mocked: mockItems, generated: generatedItems };
    },
    template: `<SimpleVirtualScroll :fields="fields" :items="generated" :reverse="reverse" :loading="loading" />`,
  }),
};
