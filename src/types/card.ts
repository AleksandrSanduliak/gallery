export interface ICard {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

export interface IResponse {
  response: ICard[];
  totalCount: number;
}
