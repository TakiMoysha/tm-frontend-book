import type { Meta, StoryObj } from "@storybook/vue3";

import { SimpleVirtualScroll } from "@/components/SimpleVirtualScroll";

const meta = {
  title: "Example/SimpleVirtualScroll",
  component: SimpleVirtualScroll,
  render: (args: any) => ({
    components: { SimpleVirtualScroll },
    setup() {
      return { args };
    },
    template: "<v-scroll-layout />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleVirtualScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCase: Story = {
  args: {},
};
