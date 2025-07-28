export interface HeaderProps {
  /**
   * Link element that surrounds the logo. Use what's appropriate for your
   * router. Defaults to a generic HTML link element.
   */
  logoLinkElement?: string | object
  /**
   * Array of link elements that are not visible until they are focused. Used
   * for accessibility for keyboard users, to let them easily skip to main
   * content, navigation, etc.
   */
  skipLinks?: any[]
  /**
   * Header title text that appears to the right of the logo.
   */
  title?: string
  /**
   * Desired element that renders the `title` string. Defaults to `<span>`.
   */
  titleElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p"
}