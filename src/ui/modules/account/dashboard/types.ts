export interface Section {
  key: string;
  label: string;
  to: string;
  sections?: Section[];
}
