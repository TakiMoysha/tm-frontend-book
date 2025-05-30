import type { Meta, StoryObj } from "@storybook/vue3";

import VScrollLayout from "./VScrollLayout.vue";

const meta = {
  title: "Example/VirtualScrollLayout",
  component: VScrollLayout,
  render: (args: any) => ({
    components: { VScrollLayout },
    setup() {
      return { args };
    },
    template: '<v-scroll-layout />',
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VScrollLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleVScroll: Story = {
  args: {},
}
export const DynamicHeightVScroll: Story = {
  args: {},
};
