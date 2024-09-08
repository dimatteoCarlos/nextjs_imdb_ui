export interface movies {
  d?: (DEntity)[] | null;
  q: string;
  v: number;
}
export interface DEntity {
  i?: I | null;
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: number;
  s: string;
  y?: number | null;
  yr?: string | null;
}
export interface I {
  height: number;
  imageUrl: string;
  width: number;
}
