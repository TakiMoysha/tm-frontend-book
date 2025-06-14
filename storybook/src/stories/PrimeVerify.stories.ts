import PrimeButton from "@/components/verify/PrimeButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import type { ButtonProps } from "primevue";

const variants = {
  add: { label: "New", icon: "pi pi-plus" },
  none: { icon: "" },
};

const meta: Meta<ButtonProps & { action: keyof typeof variants }> = {
  title: "Verify/PrimeComponents",
  component: PrimeButton,
  tags: ["autodocs"],
  argTypes: {
    label: String,
    size: { control: "select", options: ["small", "medium", "large"] },
    action: { control: "select", options: Object.keys(variants) },
  },
  args: {
    label: "Button",
    action: "add",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================================
export const PrimeButtons: Story = {
  args: {
    label: "first",
    action: "add",
  }
};

export const PrimeButtonsSecond: Story = {
  args: {
    label: "second",
    action: "none"
  }
}
