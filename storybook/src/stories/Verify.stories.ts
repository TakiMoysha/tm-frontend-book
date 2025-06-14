import PrimeComponents from "@/components/verify/PrimeComponents.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Verify/PrimeComponents",
  component: PrimeComponents,
} satisfies Meta<typeof PrimeComponents>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================================
const Primary: Story = {};
