export interface ExtendedStyling {
  className?: string
}

export interface SelectOption<T extends string | number = string> {
  label: string
  value: T
}
