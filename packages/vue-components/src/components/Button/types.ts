export interface ButtonProps {
  /**
   * Defaults to `medium`. `small` is shorter vertically.
   */
  size?: "small" | "medium"
  /**
   * Defaults to `primary`.
   */
  variant?: "primary" | "secondary" | "tertiary" | "link"
  /**
   * For destructive/deletion actions.
   */
  danger?: boolean
  /**
   * If true, renders a square button intended for a single icon.
   */
  isIconButton?: boolean
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean
}