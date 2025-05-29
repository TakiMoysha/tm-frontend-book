import type { Meta, StoryObj } from "@storybook/vue3";

import VScroll from "./VScroll.vue";

const meta = {
  title: "Example/VirtualScroll",
  component: VScroll,
  render: (args: any) => ({
    components: { VScroll },
    setup() {
      return { args };
    },
    // template: '<v-scroll :user="args.user" />',
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleVScroll: Story = {
  args: {},
}
export const DynamicHeightVScroll: Story = {
  args: {},
};
