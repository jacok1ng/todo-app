export interface ExtendedStyling {
  className?: string
}

export interface SelectOption<T extends string | number = string> {
  label: string
  value: T
}

export enum Priority {
  Low = 'low',
  Normal = 'normal',
  High = 'high',
}
