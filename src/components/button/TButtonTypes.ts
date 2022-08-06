import type { ButtonProps } from 'ant-design-vue';
import type { ExtractPropTypes } from 'vue';

export const tButtonProps = () => ({
  /** demo */
  demo: {
    type: String,
  },
});

export type TButtonProps = ButtonProps & Partial<ExtractPropTypes<ReturnType<typeof tButtonProps>>>;

export default tButtonProps;
