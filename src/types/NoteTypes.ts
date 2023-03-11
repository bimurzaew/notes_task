export interface Note {
  id: number;
  title: string;
  description: string;
  date: string;
}

export enum EnumInputKeys {
  title = "title",
  description = "description",
}
